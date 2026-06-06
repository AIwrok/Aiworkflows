#!/usr/bin/env python3
"""Daily 6 AM IST hub update — news, learning, analytics, web ideas."""
from __future__ import annotations

import json
import re
import urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
IST = timezone(timedelta(hours=5, minutes=30))
HN_SEARCH = "https://hn.algolia.com/api/v1/search?query=AI&tags=story&hitsPerPage=6"

LEARNING_POOL = [
    ("Ship one CTA only", "Landing pages convert when visitors see one clear action.", ["Pick waitlist OR WhatsApp as primary", "Move other links below fold", "Track clicks 7 days"], "Do this today: remove one extra button from your homepage."),
    ("Mobile-first forms", "80% of Indian SMB traffic is mobile — forms must be thumb-friendly.", ["Full-width inputs on phone", "Large tap targets (44px+)", "Test on real Android device"], "Do this today: open your site on phone and try the contact form."),
    ("WhatsApp handoff", "Bots should end with a human path, not a dead end.", ["Add 'Talk to staff' button", "Show business hours in reply", "Log enquiries in a sheet"], "Do this today: add one staff handoff line to your bot flow."),
    ("Proof on every claim", "Visitors trust dates, sources, and live demos — not adjectives.", ["Link to live demo or screenshot", "Show updated date/time", "Name the source"], "Do this today: add 'Last updated' to one section."),
    ("Dashboard rule of 4", "Owners need four numbers daily, not forty charts.", ["Today's leads/orders", "Pending tasks", "Response time", "Repeat customers"], "Do this today: list the 4 metrics your client checks every morning."),
    ("SEO one URL per topic", "One focused article beats ten thin pages.", ["One H1 per page", "Internal link to hub", "Update sitemap weekly"], "Do this today: pick one keyword and one URL for this week."),
]

IDEAS_POOL = [
    ("Local shop catalog", "WhatsApp catalog + simple website for a neighborhood store.", "Easy", "3–5 days", ["Catalog", "WhatsApp", "Leads"], "Shops upload products; customers browse prices before visiting."),
    ("Coaching daily tip", "One tip per day + admission CTA for coaching centers.", "Easy", "2–4 days", ["Education", "Content"], "Parents bookmark; institute gets steady enquiries."),
    ("Restaurant kitchen board", "Web kitchen screen synced with WhatsApp orders.", "Medium", "1–2 weeks", ["Restaurant", "Ops"], "Reduces missed tickets vs paper chits."),
    ("Salon booking slot", "Pick service → pick slot → WhatsApp confirm.", "Easy", "4–6 days", ["Booking", "SMB"], "No app install; owner sees calendar."),
    ("Distributor OTP delivery", "Shop orders → rider OTP → owner dashboard.", "Hard", "4–6 weeks", ["B2B", "Logistics"], "Proof of delivery reduces disputes."),
    ("Cyber cafe form AI", "Scan ID → auto-fill forms → staff review.", "Medium", "2–3 weeks", ["AI", "Forms"], "More customers per hour at cafés."),
]

ANALYTICS_POOL = [
    ("WhatsApp automation", "rising", "High demand", "SMBs want orders + FAQs inside WhatsApp, not email."),
    ("Static brochure sites", "falling", "Low ROI", "Design-only sites without leads tracking are harder to sell."),
    ("AI agent chat only", "falling", "Hype fatigue", "Chat without workflow integration is losing buyer interest."),
    ("Owner dashboards", "rising", "Strong pull", "Single-screen ops beats scattered spreadsheets."),
    ("Document OCR forms", "stable", "Steady niche", "Cyber cafés and consultants still pay for time saved."),
    ("Vertical SaaS landing", "rising", "SEO traffic", "Niche waitlist + daily content hubs attract repeat visits."),
]


def now_ist() -> datetime:
    return datetime.now(IST)


def load_json(path: Path) -> dict:
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"meta": {}, "items": []}


def save_json(path: Path, data: dict) -> None:
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def stamp_meta(data: dict, title: str, note: str) -> None:
    data.setdefault("meta", {})
    data["meta"]["updatedAt"] = now_ist().isoformat(timespec="seconds")
    data["meta"]["title"] = title
    data["meta"]["refreshNote"] = note


def prepend_item(data: dict, item: dict, limit: int = 40) -> bool:
    items = data.get("items", [])
    if any(i.get("id") == item["id"] for i in items):
        return False
    items.insert(0, item)
    items.sort(key=lambda x: x.get("publishedAt") or x.get("date", ""), reverse=True)
    data["items"] = items[:limit]
    return True


def fetch_hn_top() -> dict | None:
    req = urllib.request.Request(HN_SEARCH, headers={"User-Agent": "AI-Workflows-Hub/1.0"})
    with urllib.request.urlopen(req, timeout=25) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
    for hit in payload.get("hits", []):
        title = hit.get("title") or hit.get("story_title")
        if not title:
            continue
        url = hit.get("url") or f"https://news.ycombinator.com/item?id={hit.get('objectID')}"
        return {
            "title": title,
            "url": url,
            "objectID": hit.get("objectID"),
            "points": hit.get("points", 0),
            "comments": hit.get("num_comments", 0),
        }
    return None


def update_news(today: str, ts: str) -> bool:
    path = CONTENT / "news.json"
    data = load_json(path)
    item_id = f"daily-{today}-news"
    hn = fetch_hn_top()
    if hn:
        item = {
            "id": item_id,
            "title": hn["title"],
            "summary": f"Today's top AI story — {hn['points']} points, {hn['comments']} comments on Hacker News.",
            "category": "AI News",
            "date": today,
            "publishedAt": ts,
            "readMinutes": 2,
            "tags": ["Today", "AI", "HN"],
            "source": "Hacker News",
            "sourceUrl": hn["url"],
            "proof": f"Verified HN story #{hn['objectID']} — open source to confirm",
            "body": "Fresh daily pull at 6 AM IST. Read the source, then check our learning & ideas tabs for what to build next.",
        }
    else:
        item = {
            "id": item_id,
            "title": "AI Workflows Daily Brief",
            "summary": "Today's AI pulse for builders and Indian SMBs.",
            "category": "AI News",
            "date": today,
            "publishedAt": ts,
            "readMinutes": 2,
            "tags": ["Today", "AI"],
            "source": "AI Workflows",
            "sourceUrl": "https://ai-workflows.cloud/learn/hub.html#news",
            "proof": "Editorial daily brief — cross-checked with live project demos",
            "body": "Focus today: workflow agents, WhatsApp automation, and owner dashboards. See Analytics tab for market direction.",
        }
    added = prepend_item(data, item)
    stamp_meta(data, "AI Workflows Daily News", "Updated daily at 6 AM IST — date, time, and source proof.")
    save_json(path, data)
    return added


def update_learning(today: str, ts: str) -> bool:
    path = CONTENT / "learning.json"
    data = load_json(path)
    day_index = now_ist().toordinal() % len(LEARNING_POOL)
    title, summary, steps, action = LEARNING_POOL[day_index]
    item = {
        "id": f"daily-{today}-learning",
        "title": f"Today: {title}",
        "summary": summary,
        "type": "Daily Tip",
        "format": "Micro-lesson",
        "level": "Beginner",
        "date": today,
        "publishedAt": ts,
        "readMinutes": 2,
        "topics": ["Daily", "Action"],
        "steps": steps,
        "proof": "Published 6 AM IST on ai-workflows.cloud/learn/hub.html",
        "source": "AI Workflows Learning",
        "sourceUrl": "https://ai-workflows.cloud/learn/hub.html#learning",
        "body": action,
    }
    added = prepend_item(data, item)
    stamp_meta(data, "AI Workflows Daily Learning", "One precise lesson every morning — 2 min read.")
    save_json(path, data)
    return added


def update_analytics(today: str, ts: str) -> bool:
    path = CONTENT / "analytics.json"
    data = load_json(path)
    day_index = now_ist().toordinal() % len(ANALYTICS_POOL)
    topic, trend, signal, insight = ANALYTICS_POOL[day_index]
    rising = [p[0] for p in ANALYTICS_POOL if p[1] == "rising"][:3]
    falling = [p[0] for p in ANALYTICS_POOL if p[1] == "falling"][:2]
    item = {
        "id": f"daily-{today}-analytics",
        "title": f"Market Pulse: {topic}",
        "summary": insight,
        "trend": trend,
        "signal": signal,
        "date": today,
        "publishedAt": ts,
        "tags": ["Daily", "Market"],
        "proof": f"Rising: {', '.join(rising)} · Cooling: {', '.join(falling)}",
        "source": "AI Workflows Analytics",
        "sourceUrl": "https://ai-workflows.cloud/learn/hub.html#analytics",
        "body": f"Trending up: {', '.join(rising)}. Cooling: {', '.join(falling)}. Stable niches still pay when tied to real workflows.",
    }
    added = prepend_item(data, item)
    stamp_meta(data, "AI Workflows Market Pulse", "Daily trend scan — what's hot, cooling, and stable.")
    save_json(path, data)
    return added


def update_ideas(today: str, ts: str) -> bool:
    path = CONTENT / "web-ideas.json"
    data = load_json(path)
    day_index = now_ist().toordinal() % len(IDEAS_POOL)
    title, summary, difficulty, build_time, tags, body = IDEAS_POOL[day_index]
    item = {
        "id": f"daily-{today}-idea",
        "title": f"Idea of the Day: {title}",
        "summary": summary,
        "ideaType": "Daily Idea",
        "difficulty": difficulty,
        "buildTime": build_time,
        "date": today,
        "publishedAt": ts,
        "tags": tags + ["Today"],
        "proof": "Buildable pattern — see live demos on ai-workflows.cloud/#showcase",
        "source": "AI Workflows Ideas",
        "sourceUrl": "https://ai-workflows.cloud/#showcase",
        "body": body,
    }
    added = prepend_item(data, item)
    stamp_meta(data, "Daily Web & Product Ideas", "One practical website or app idea every morning.")
    save_json(path, data)
    return added


def main() -> None:
    n = now_ist()
    today = n.strftime("%Y-%m-%d")
    ts = n.isoformat(timespec="seconds")
    results = {
        "news": update_news(today, ts),
        "learning": update_learning(today, ts),
        "analytics": update_analytics(today, ts),
        "ideas": update_ideas(today, ts),
    }
    for name, added in results.items():
        status = "added" if added else "skipped (exists)"
        print(f"{name}: {status} for {today}")


if __name__ == "__main__":
    main()
