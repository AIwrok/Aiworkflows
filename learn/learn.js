async function loadLearnData(file) {
  const res = await fetch(file + (file.includes("?") ? "&" : "?") + "t=" + Date.now());
  if (!res.ok) throw new Error("Could not load " + file);
  return res.json();
}

function formatDate(value) {
  try {
    return new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch (_) {
    return value;
  }
}

function formatDateTime(value) {
  try {
    return new Date(value).toLocaleString("en-IN", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit", hour12: true
    });
  } catch (_) {
    return value;
  }
}

function isToday(value) {
  try {
    const d = new Date(value);
    const n = new Date();
    return d.getFullYear() === n.getFullYear() &&
      d.getMonth() === n.getMonth() &&
      d.getDate() === n.getDate();
  } catch (_) {
    return false;
  }
}

function trendLabel(trend) {
  if (trend === "rising") return { text: "Trending up", cls: "trend-up" };
  if (trend === "falling") return { text: "Cooling down", cls: "trend-down" };
  if (trend === "stable") return { text: "Stable niche", cls: "trend-stable" };
  return null;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProof(item) {
  if (!item.proof && !item.sourceUrl) return "";
  const proof = item.proof ? '<span class="proof-text">' + escapeHtml(item.proof) + "</span>" : "";
  const link = item.sourceUrl
    ? '<a class="proof-link" href="' + escapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener">Source: ' + escapeHtml(item.source || "Verify") + " ↗</a>"
    : "";
  return '<div class="learn-proof">' + proof + link + "</div>";
}

function renderSteps(item) {
  if (!Array.isArray(item.steps) || !item.steps.length) return "";
  return (
    '<ol class="learn-steps">' +
    item.steps.map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; }).join("") +
    "</ol>"
  );
}

function renderCards(items, gridEl, options) {
  options = options || {};
  if (!items.length) {
    gridEl.innerHTML = '<p class="learn-empty">New content coming soon. Check back shortly.</p>';
    return;
  }

  gridEl.innerHTML = items.map(function (item, index) {
    const tags = options.tagKey ? item[options.tagKey] : item.tags || item.topics || [];
    const feedType = options.feedType || "news";
    const today = isToday(item.publishedAt || item.date);
    const todayBadge = today ? '<span class="today-badge">Today</span>' : "";
    const featured = today && index === 0 ? " learn-card--featured learn-card--" + feedType : " learn-card--" + feedType;
    const tagHtml = [item.category || item.type || item.ideaType, item.level, item.format, item.difficulty, item.trend && trendLabel(item.trend)?.text]
      .filter(Boolean)
      .concat(Array.isArray(tags) ? tags.slice(0, 2) : [])
      .filter(function (v, i, a) { return v && a.indexOf(v) === i; })
      .map(function (t) { return "<span>" + escapeHtml(t) + "</span>"; })
      .join("");

    const trend = trendLabel(item.trend);
    const trendBadge = trend ? '<span class="trend-badge ' + trend.cls + '">' + trend.text + "</span>" : "";
    const signal = item.signal ? '<span class="signal-pill">' + escapeHtml(item.signal) + "</span>" : "";
    const when = item.publishedAt ? formatDateTime(item.publishedAt) : formatDate(item.date);
    const buildTime = item.buildTime ? '<span class="build-time">' + escapeHtml(item.buildTime) + " build</span>" : "";

    return (
      '<article class="learn-card' + featured + '" id="' + escapeHtml(item.id) + '">' +
        '<div class="learn-card-accent" aria-hidden="true"></div>' +
        '<div class="learn-card-top">' +
          '<div class="learn-meta">' + todayBadge + tagHtml + trendBadge + signal + "</div>" +
          '<time class="learn-time" datetime="' + escapeHtml(item.publishedAt || item.date) + '">' + when + "</time>" +
        "</div>" +
        "<h2>" + escapeHtml(item.title) + "</h2>" +
        '<p class="learn-summary">' + escapeHtml(item.summary) + '</p>' +
        buildTime +
        (item.readMinutes ? '<p class="learn-read">' + item.readMinutes + " min read</p>" : "") +
        renderProof(item) +
        '<button class="read-btn" type="button" data-toggle="' + escapeHtml(item.id) + '">Read more →</button>' +
        '<div class="learn-detail">' + renderSteps(item) + "<p>" + escapeHtml(item.body || "") + "</p></div>" +
      "</article>"
    );
  }).join("");

  gridEl.querySelectorAll("[data-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".learn-card");
      const open = card.classList.toggle("open");
      btn.textContent = open ? "Show less ↑" : "Read more →";
      if (open) window.trackMarketingEvent?.("read_content", { content_id: btn.dataset.toggle });
    });
  });

  const hash = location.hash.replace("#", "");
  if (hash) {
    const target = document.getElementById(hash);
    if (target) {
      target.classList.add("open");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      const btn = target.querySelector("[data-toggle]");
      if (btn) btn.textContent = "Show less ↑";
    }
  }
}

function renderHubPanel(items, el, limit) {
  if (!el) return;
  limit = limit || 3;
  if (!items.length) {
    el.innerHTML = '<p class="hub-feed-empty">Loading daily feed…</p>';
    return;
  }
  el.innerHTML = items.slice(0, limit).map(function (item) {
    const when = item.publishedAt ? formatDateTime(item.publishedAt) : formatDate(item.date);
    const trend = trendLabel(item.trend);
    const badge = trend ? '<span class="hub-feed-badge ' + trend.cls + '">' + trend.text + "</span>" : "";
    return (
      '<a class="hub-feed-item" href="/learn/hub.html#' + escapeHtml(item.id) + '">' +
        '<span class="hub-feed-title">' + escapeHtml(item.title) + "</span>" +
        '<span class="hub-feed-meta">' + badge + "<time>" + when + "</time></span>" +
      "</a>"
    );
  }).join("");
}

function initHubTabs() {
  const tabs = document.querySelectorAll("[data-hub-tab]");
  const panels = document.querySelectorAll("[data-hub-panel]");
  if (!tabs.length) return;

  function activate(id) {
    tabs.forEach(function (t) {
      t.classList.toggle("active", t.dataset.hubTab === id);
      t.setAttribute("aria-selected", t.dataset.hubTab === id ? "true" : "false");
    });
    panels.forEach(function (p) {
      p.classList.toggle("active", p.dataset.hubPanel === id);
    });
    history.replaceState(null, "", "#" + id);
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { activate(tab.dataset.hubTab); });
  });

  const hash = location.hash.replace("#", "");
  const valid = ["news", "learning", "analytics", "ideas"];
  let tab = "news";
  if (valid.includes(hash)) {
    tab = hash;
  } else if (hash) {
    document.querySelectorAll("[data-hub-panel]").forEach(function (panel) {
      if (panel.querySelector("#" + CSS.escape(hash))) tab = panel.dataset.hubPanel;
    });
  }
  activate(tab);
}

async function loadHubPage() {
  const feeds = {
    news: { file: "/content/news.json", grid: "news-grid", tagKey: "tags" },
    learning: { file: "/content/learning.json", grid: "learning-grid", tagKey: "topics" },
    analytics: { file: "/content/analytics.json", grid: "analytics-grid", tagKey: "tags" },
    ideas: { file: "/content/web-ideas.json", grid: "ideas-grid", tagKey: "tags" }
  };

  const updatedEl = document.getElementById("hub-last-updated");
  let latest = null;

  await Promise.all(Object.keys(feeds).map(async function (key) {
    const cfg = feeds[key];
    const grid = document.getElementById(cfg.grid);
    if (!grid) return;
    try {
      const data = await loadLearnData(cfg.file);
      const items = (data.items || []).slice().sort(function (a, b) {
        return new Date(b.publishedAt || b.date) - new Date(a.publishedAt || a.date);
      });
      if (data.meta?.updatedAt) {
        const t = new Date(data.meta.updatedAt);
        if (!latest || t > latest) latest = t;
      }
      renderCards(items, grid, { tagKey: cfg.tagKey, feedType: key });
      const metaEl = document.querySelector('[data-hub-meta="' + key + '"]');
      if (metaEl && data.meta?.refreshNote) metaEl.textContent = data.meta.refreshNote;
    } catch (_) {
      grid.innerHTML = '<p class="learn-empty">Could not load feed. Retry shortly.</p>';
    }
  }));

  if (updatedEl && latest) {
    updatedEl.textContent = "Updated " + formatDateTime(latest.toISOString()) + " · Next drop 6 AM IST";
  }
  initHubTabs();
}

if (document.body.dataset.hubPage === "true") {
  loadHubPage();
}
