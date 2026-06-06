(function () {
  function formatDateTime(value) {
    try {
      return new Date(value).toLocaleString("en-IN", {
        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", hour12: true
      });
    } catch (_) {
      return value;
    }
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function trendBadge(trend) {
    if (trend === "rising") return '<span class="hub-feed-badge trend-up">↑ Hot</span>';
    if (trend === "falling") return '<span class="hub-feed-badge trend-down">↓ Cool</span>';
    if (trend === "stable") return '<span class="hub-feed-badge trend-stable">→ Stable</span>';
    return "";
  }

  function isToday(value) {
    try {
      var d = new Date(value);
      var n = new Date();
      return d.getFullYear() === n.getFullYear() && d.getMonth() === n.getMonth() && d.getDate() === n.getDate();
    } catch (_) { return false; }
  }

  function renderFeed(el, items, tab) {
    if (!el) return;
    if (!items.length) {
      el.innerHTML = '<p class="hub-feed-empty">No items yet.</p>';
      return;
    }
    el.innerHTML = items.slice(0, 3).map(function (item, i) {
      const when = formatDateTime(item.publishedAt || item.date);
      const today = isToday(item.publishedAt || item.date);
      const todayTag = today && i === 0 ? '<span class="hub-feed-today">NEW</span>' : '';
      return (
        '<a class="hub-feed-item' + (today && i === 0 ? ' hub-feed-item--hot' : '') + '" href="/learn/hub.html#' + escapeHtml(item.id) + '">' +
          todayTag +
          '<span class="hub-feed-title">' + escapeHtml(item.title) + '</span>' +
          '<span class="hub-feed-meta">' + trendBadge(item.trend) +
            '<time>' + when + '</time>' +
            (item.proof ? '<span class="hub-feed-proof">✓ Verified</span>' : '') +
          '</span>' +
        '</a>'
      );
    }).join("");
  }

  function sortItems(items) {
    return (items || []).slice().sort(function (a, b) {
      return new Date(b.publishedAt || b.date) - new Date(a.publishedAt || a.date);
    });
  }

  const feeds = [
    { url: "/content/news.json", el: "hub-feed-news", tab: "news" },
    { url: "/content/learning.json", el: "hub-feed-learning", tab: "learning" },
    { url: "/content/analytics.json", el: "hub-feed-analytics", tab: "analytics" },
    { url: "/content/web-ideas.json", el: "hub-feed-ideas", tab: "ideas" }
  ];

  Promise.all(feeds.map(function (f) {
    return fetch(f.url + "?t=" + Date.now())
      .then(function (r) { return r.json(); })
      .then(function (data) {
        renderFeed(document.getElementById(f.el), sortItems(data.items), f.tab);
        if (data.meta && data.meta.updatedAt) {
          const stamp = document.getElementById("hub-feed-updated");
          if (stamp && !stamp.dataset.set) {
            stamp.textContent = "Updated " + formatDateTime(data.meta.updatedAt);
            stamp.dataset.set = "1";
          }
        }
      })
      .catch(function () {
        const el = document.getElementById(f.el);
        if (el) el.innerHTML = '<p class="hub-feed-empty">Feed offline — open full hub</p>';
      });
  }));
})();
