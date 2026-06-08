---
title: "AI Weekly: BSNL × Starlink, PewDiePie's Odysseus & 27 Industry Updates"
description: "A curated breakdown of the biggest AI and tech moves this week — from India's satellite internet push to Microsoft's 7 new models, Anthropic's $65B raise, and free local AI tools."
date: "2026-06-07"
category: "AI News"
tags: ["AI news", "Starlink", "BSNL", "Microsoft", "Anthropic", "local AI", "weekly roundup"]
author: "AI Workflows"
videoUrl: "https://www.youtube.com/watch?v=LQxCpAF4UEY"
---

> **Source video:** [The Indian Government Just Teamed Up With Elon Musk To Bring Internet From Space (+24 AI Updates)](https://www.youtube.com/watch?v=LQxCpAF4UEY) by Vaibhav Sisinty — summarized and expanded for developers and agencies building with AI.

## Headline Story: BSNL × Starlink

India's state-run telecom operator **BSNL** is in early talks with **Starlink** to explore satellite backhaul and enterprise connectivity. No deal is signed yet — Starlink still needs full security clearance — but the strategic fit is clear:

- **Rural connectivity:** ~30,000 remote villages lack proper 4G/5G. Fiber to towers in the Himalayas, Northeast, and islands can take years; satellite backhaul could connect towers in weeks.
- **Enterprise services:** BSNL's managed networks, data centers, and voice services could be strengthened by Starlink's low-orbit satellite network.
- **Distribution:** Starlink lacks a large retail/enterprise footprint in India; BSNL's nationwide dealer network could accelerate go-to-market once approvals land.

**What it means for builders:** Reliable rural internet unlocks WhatsApp automation, cloud POS, and AI agents for businesses that were previously offline — exactly the verticals we automate at AI Workflows.

---

## 27 Updates That Matter

### Local & Private AI

| Update | What happened | Why it matters |
|--------|---------------|----------------|
| **PewDiePie — Odysseus** | Free open-source AI workspace; 50K+ GitHub stars in days | Scans your hardware, runs models locally, deep research agent, zero cloud data leakage |
| **Google Gemma 4 12B** | Runs on 16 GB RAM laptops, multimodal (image/audio/video) | Free on Hugging Face — no internet required for inference |
| **Perplexity Hybrid Inference** | Splits work between local + cloud models | Sensitive files stay on device; heavy reasoning goes to frontier models |
| **NVIDIA RTX Spark** | Superchip for thin Windows laptops; 128 GB shared memory | Microsoft Surface Laptop Ultra built around it — Windows competing with MacBook for AI dev |
| **Hermes Agent — Tool Search** | Loads only the tool needed (41% → 3% context usage) | Long-running agents without context bloat |
| **Hermes Desktop App** | Dedicated desktop UI for agent chats, skills, artifacts | Cleaner than keeping a browser tab open 24/7 |

### Big Tech & Models

| Update | What happened | Why it matters |
|--------|---------------|----------------|
| **Anthropic $65B raise** | Valuation ~$965B; 5 years since founding | Fastest path to $1T if it continues — Meta took 9 years |
| **Microsoft 7 MAI models** | MAI Thinking, Code, Image 2.5, Transcribe, Voice + Maya 200 chip | Fully licensed training data; less OpenAI dependency |
| **NVIDIA Cosmos 3** | Open omni model for physical AI (robots, simulations) | Super + Nano variants on Hugging Face |
| **Google Magenta RealTime 2** | Free, open-source music generation on laptop | Type beats/instruments live — democratizes music production |
| **OpenAI Codex Sites & Plugins** | Build microsites, dashboards, portals from prompts; 6 role plugins | 20% of Codex users are non-developers — no-code app building accelerates |
| **ChatGPT Memory Upgrade** | Review/steer memory summaries; auto-updates stale context ("dreaming") | Better long-term personalization without manual cleanup |
| **ChatGPT Send Email** | Draft and send via linked Gmail without leaving chat | Workflow compression for everyday tasks |
| **Claude Cowork 2× limits** | Doubled 5-hour usage until July 5 | Bigger delegated tasks in one session — limited time |

### Creative & Media AI

| Update | What happened | Why it matters |
|--------|---------------|----------------|
| **Grok Imagine 1.5** | Cinematic video from start frame + motion prompt; up to 720p | Stage, animate, link shots with consistent look |
| **ElevenLabs Dubbing v2** | Preserves tone, pace, emotion across 90+ languages | Democratizes dubbing that once cost hundreds per minute |
| **ElevenLabs Music v2** | Music generation across 11 Music, API, and Creative | Games, ads, branded content from one model family |
| **HeyGen frame.md** | Open-source video layout spec from design.md | Brand motion rules for AI-directed video (16:9, timing, silence) |

### Agents & Automation

| Update | What happened | Why it matters |
|--------|---------------|----------------|
| **Microsoft Scout Autopilot** | Monitors inbox, Teams, calendar; pre-reads before meetings | First "autopilot" agent category inside M365 |
| **OpenClaw + Microsoft MXC** | Viral open-source agent sandboxed for enterprise | Companies can deploy autonomous agents with bounded access |
| **Perplexity Search as Code** | Agent writes a program to run all searches at once | Beats latency, dedupes results, halves cost vs sequential search |
| **Ollie AI Family Assistant** | WhatsApp/email/calendar agents for household tasks | Reminders, fridge recipes, flight rescheduling — family ops automation |
| **Gopuff × Grok "Go"** | Voice shopping assistant in delivery app | Learns preferences, auto-reorders, handles complex cart requests |
| **Cursor Auto-review** | Allowlisted calls run instantly; risky ones sandboxed | Agents work longer with fewer approval prompts |
| **Microsoft Project Solara** | Agent-first devices (badge, alarm-clock form factors) | Multimodal glance + voice — reimagining the computer beyond screens |

### Product & Platform

| Update | What happened | Why it matters |
|--------|---------------|----------------|
| **Microsoft 365 Copilot redesign** | Clean homepage, visualize tag, 50%+ faster load | Usage up 27–43% across Word/Excel/PPT/Outlook at launch |
| **Odysseus tutorial** | Install via Google Antigravity with zero code | Free local models via Cookbook hardware scan |

---

## Deep Dive: Odysseus (PewDiePie's Free AI Workspace)

The standout tool this week is **Odysseus** — not a new foundation model, but a local-first wrapper that:

1. **Scans your machine** and recommends which open-source models your GPU/RAM can run
2. **Runs entirely on-device** — prompts never leave your computer
3. **Deep Research** loops through dozens of web sources and outputs a visual HTML report
4. **Cookbook** picks optimal free models (Qwen, Gemma) so you pay $0/month vs ChatGPT/Claude subscriptions

For agencies, this is a signal: clients increasingly want **private, self-hosted AI** — the same direction behind our n8n + Supabase + local model stacks.

---

## Deep Dive: Perplexity's Two Big Moves

**Hybrid Agentic Inference** keeps acquisition models, whiteboard photos, and call transcripts on your Windows laptop. A local agent redacts PII before anything hits the cloud. You get frontier-model reasoning without uploading raw deal files.

**Search as Code** replaces the slow "search → wait → read → search again" loop. The model writes a mini program that runs parallel searches, dedupes, filters, and ranks — then writes the answer. Perplexity claims near-half cost vs competitors on research benchmarks.

---

## What We're Watching at AI Workflows

These updates reinforce three bets we're already building on:

1. **Messaging-first automation** — Ollie and Gopuff Go prove WhatsApp/chat-native agents are going mainstream. Our [WhatsApp Restaurant Automation](/#portfolio) is ahead of this curve.
2. **Local + hybrid AI** — Gemma 4, Odysseus, and Perplexity hybrid inference validate our self-hosted and privacy-first client work.
3. **Agent platforms, not just chatbots** — Microsoft Scout, OpenClaw MXC, and Cursor auto-review show enterprises need sandboxed, long-running agents — exactly what we engineer with n8n and custom pipelines.

---

## Timestamps (from source video)

- 01:19 — PewDiePie Releases Odysseus AI
- 02:22 — ChatGPT Memory Upgrades
- 03:11 — Anthropic $65 Billion Funding
- 03:34 — BSNL + Starlink Partnership
- 05:15 — Grok Imagine 1.5 Preview
- 05:56 — Claude Cowork 2× Limits
- 06:13 — NVIDIA Cosmos 3 Physical AI
- 07:29 — Seven New Microsoft MAI Models
- 08:55 — Send Emails from ChatGPT
- 09:14 — NVIDIA RTX Spark Superchip
- 10:15 — ElevenLabs Dubbing v2 Alpha
- 11:24 — Ollie AI Family Assistant
- 11:59 — Gopuff × Grok "Go"
- 13:30 — Google Magenta RealTime 2
- 14:18 — Microsoft Scout Autopilot Agent
- 14:58 — OpenClaw + Microsoft MXC
- 15:47 — OpenAI Codex Sites & Plugins
- 17:14 — HeyGen frame.md Video Layouts
- 17:59 — ElevenLabs Music v2 Out Now
- 18:36 — Perplexity Hybrid Inference
- 20:06 — Perplexity Search as Code
- 21:33 — Google Gemma 4 12B Model
- 22:12 — Microsoft 365 Copilot Redesign
- 23:42 — Cursor Auto-review Run Mode
- 24:36 — Hermes Agent Tool Search Update
- 25:33 — Hermes Desktop App Launch
- 26:16 — Microsoft Project Solara Preview
- 27:14 — Odysseus Installation Tutorial

---

*Curated for AI Workflows readers. Original breakdown by [Vaibhav Sisinty](https://www.youtube.com/@vaibhavsisinty). Explore our [AI Tool Hub](/tools) or [contact us](mailto:ashokkumar1112.ch@gmail.com) for automation projects.*
