#!/usr/bin/env python3
"""Render the public FAQ and internal bilingual copy from one reviewed source."""
from pathlib import Path
import html
import json
import re

ROOT = Path(__file__).resolve().parent.parent
data = json.loads((ROOT / 'faq/content.json').read_text())
site = (ROOT / 'index.html').read_text()
e = lambda value: html.escape(value, quote=True)
header = re.search(r'<header class="mast">.*?</header>', site, re.S).group()
footer = re.search(r'</main>(<footer>.*?</footer>)', site, re.S).group(1)
header = header.replace('href="#', 'href="/#').replace('href="/faq/"', 'href="/faq/" aria-current="page" class="active"')
footer = footer.replace('href="#', 'href="/#')
nav, sections, schema, copy = [], [], [], ['# SCULP Studio — FAQ & Bridal Guide V1.0\n', 'English is the public website language. 中文用于内部审核。\n', '''## Page copy / 页面文案

- The Bridal Guide / 新娘妆发指南
- Every detail, beautifully considered. / 每一处细节，都经过悉心考量。
- A thoughtful guide to your bridal beauty experience, from your first enquiry to the final touch. / 从初次咨询到最后的妆发细节，为您的新娘造型体验提供周到指引。
- Find an answer / 查找答案
- Questions, answered. / 常见问题解答
- Mobile stages: Enquiry / Trial / Preparation / Wedding day — 手机阶段：咨询 / 试妆 / 婚前准备 / 婚礼当天
- What would you like to know? / 您想了解什么？
- Search booking, trials, travel… / 搜索预订、试妆、上门服务等问题……
- 20 questions, thoughtfully answered. / 20 个常见问题，为您细致解答。
- Clear / 清除
- Something more personal? / 有更具体的问题？
- We're here to help / 联系我们，获得帮助
- Let's find your answer. / 帮您找到答案。
- No questions match your search. Try “trial”, “travel” or “booking”, or ask our team. / 未找到匹配的问题。试试搜索 trial、travel 或 booking，或直接联系团队。
- Show all questions / 显示全部问题
- From the first conversation to the final touch. Find your place, and see what comes next. / 从初次交流到最后的妆发细节。找到您当前的阶段，了解下一步安排。
- Your day is uniquely yours. / 您的婚礼，独一无二。
- Let's create an experience that feels entirely your own. / 让我们一起打造真正属于您的体验。
- ENQUIRE WITH SCULP / 咨询 SCULP

''']
for n, cat in enumerate(data['categories'], 1):
    nav.append(f'<a href="#{cat["id"]}" data-category="{cat["id"]}"{chr(32)+"aria-current=\"location\"" if n == 1 else ""}><span>{e(cat["short"])}</span><span class="category-count" aria-label="4 questions">04</span></a>')
    rows = []
    copy.append(f'## {cat["en"]} / {cat["zh"]}\n')
    for q in cat['questions']:
        link = f'<a class="text-link" href="{e(q["link"])}" data-enquiry="answer">{e(q["link_label"])}</a>' if 'link' in q else ''
        answer_tools = f'<div class="answer-tools">{link}</div>' if link else ''
        rows.append(f'''<details id="{q['id']}" class="faq-item"><summary><h3>{e(q['q'])}</h3><span class="disclosure" aria-hidden="true"></span></summary><div class="answer"><p>{e(q['a'])}</p>{answer_tools}</div></details>''')
        schema.append({'@type':'Question', 'name':q['q'], 'acceptedAnswer':{'@type':'Answer', 'text':q['a']}})
        copy.extend([f'### {q["q"]}\n', q['a']+'\n', f'**{q["q_zh"]}**\n', q['a_zh']+'\n', f'Anchor: `/faq/#{q["id"]}`\n'])
    sections.append(f'<section class="faq-category" id="{cat["id"]}" aria-labelledby="heading-{cat["id"]}"><h2 id="heading-{cat["id"]}">{e(cat["en"])}</h2>{"".join(rows)}</section>')
journey_nav, panels = [], []
copy.append('## The Bridal Journey / 新娘体验旅程\n')
for n, stage in enumerate(data['journey']):
    short_name = ['Enquiry', 'Trial', 'Preparation', 'Wedding day'][n]
    journey_nav.append(f'<button type="button" id="stage-{stage["id"]}" data-stage="{n}" aria-label="{e(stage["name"])}" aria-controls="panel-{stage["id"]}"><span class="stage-node" aria-hidden="true">0{n+1}</span><span class="stage-label-desktop">{e(stage["name"])}</span><span class="stage-label-mobile" aria-hidden="true">{e(short_name)}</span></button>')
    panels.append(f'<section class="journey-panel" id="panel-{stage["id"]}" aria-labelledby="stage-{stage["id"]}"><div class="journey-copy"><h3>{e(stage["title"])}</h3><p>{e(stage["copy"])}</p><a class="text-link" href="#{stage["related"]}">{e(stage["link_label"])}</a></div><ul>{"".join("<li>"+e(item)+"</li>" for item in stage["items"])}</ul></section>')
    copy.extend([f'### {stage["name"]} / {stage["name_zh"]}\n', stage['title']+'\n', stage['copy']+'\n', stage['title_zh']+'\n', stage['copy_zh']+'\n'])
    copy.extend(f'- {en} / {zh}' for en, zh in zip(stage['items'], stage['items_zh']))
    copy.append('\n')
page = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bridal Makeup FAQ | Wedding Beauty Guide | SCULP Studio</title>
<meta name="description" content="Explore SCULP Studio's bridal beauty guide: booking, artists, wedding makeup and hair, trials, preparation and your wedding-day experience in Toronto.">
<meta name="theme-color" content="#f3eee6"><meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="https://sculpstudio.ca/faq/">
<meta property="og:type" content="website"><meta property="og:title" content="The Bridal Guide | SCULP Studio">
<meta property="og:description" content="A thoughtful guide to your bridal beauty experience, from your first enquiry to the final touch.">
<meta property="og:url" content="https://sculpstudio.ca/faq/">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/faq/faq.css?v=20261021-3"><script src="/faq/faq.js?v=20261021-3" defer></script>
<script type="application/ld+json">{json.dumps({'@context':'https://schema.org','@type':'FAQPage','mainEntity':schema},ensure_ascii=False).replace('</','<\\/')}</script>
</head><body><div id="sculp-site"><a class="skip-link" href="#guide">Skip to bridal guide</a>
{header}
<main id="guide">
<section class="guide-hero shell" aria-labelledby="guide-title"><div class="guide-intro"><p class="guide-name">The Bridal Guide</p><h1 id="guide-title">Every detail,<br><em>beautifully considered.</em></h1></div><div class="guide-introduction"><p class="guide-description">A thoughtful guide to your bridal beauty experience, from your first enquiry to the final touch.</p><a class="text-link faq-jump" href="#faq-answers">Find an answer<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></a></div></section>
<section id="bridal-journey" class="journey" aria-labelledby="journey-title"><div class="shell"><div class="journey-heading"><h2 id="journey-title">The Bridal Journey</h2><p>From the first conversation to the final touch.<br>Find your place, and see what comes next.</p></div><div class="journey-nav" aria-label="The bridal journey stages"><div class="journey-track" aria-hidden="true"><span></span></div>{''.join(journey_nav)}</div><div class="journey-panels">{''.join(panels)}</div></div></section>
<section id="faq-answers" class="faq-section" aria-labelledby="questions-title" tabindex="-1"><div class="faq-heading shell"><h2 id="questions-title">Questions, answered.</h2><div class="search-area" hidden><label for="faq-search">What would you like to know?</label><div class="search-field"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input type="search" id="faq-search" placeholder="Search booking, trials, travel…" autocomplete="off" maxlength="160" aria-describedby="search-status"><button type="button" id="clear-search" aria-label="Clear search" hidden>Clear</button></div><p id="search-status" class="search-status" role="status" aria-live="polite" aria-atomic="true">20 questions, thoughtfully answered.</p></div></div>
<div class="guide-body shell"><aside class="guide-sidebar"><nav class="category-nav" aria-label="FAQ categories">{''.join(nav)}</nav><div class="sidebar-note"><p>Something more personal?</p><a class="text-link" href="/#book" data-enquiry="sidebar">We're here to help</a></div></aside><div class="faq-content"><div id="no-results" class="no-results" hidden><h2>Let's find your answer.</h2><p>No questions match your search. Try “trial”, “travel” or “booking”, or ask our team.</p><button class="text-link" type="button" id="reset-search">Show all questions</button><a class="text-link" href="/#book" data-enquiry="no-results">Enquire with SCULP</a></div>{''.join(sections)}</div></div></section>
<section class="closing"><div class="shell"><h2>Your day is<br><em>uniquely yours.</em></h2><div><p>Let's create an experience that feels entirely your own.</p><a class="button" href="/#book" data-enquiry="closing">ENQUIRE WITH SCULP</a></div></div></section>
</main>{footer}</div></body></html>'''
(ROOT / 'faq/index.html').write_text(page)
(ROOT / 'docs/FAQ-BILINGUAL-2026-10-21.md').write_text('\n'.join(copy))
print('Rendered /faq/: 5 categories, 20 bilingual questions, 4 journey stages.')
