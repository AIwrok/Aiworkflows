(function () {
  var cfg = window.AI_WORKFLOWS_MARKETING || {};
  var hasGtm = Boolean(cfg.GTM_CONTAINER_ID);
  var hasGa4 = Boolean(cfg.GA4_MEASUREMENT_ID) && !hasGtm;
  var hasPixel = Boolean(cfg.META_PIXEL_ID);
  var hasClarity = Boolean(cfg.CLARITY_PROJECT_ID);
  var hasAdsense = Boolean(cfg.ADSENSE_CLIENT_ID && cfg.ADSENSE_SLOT_ID);

  function loadScript(src, async) {
    var s = document.createElement("script");
    s.src = src;
    if (async !== false) s.async = true;
    document.head.appendChild(s);
  }

  if (hasGtm) {
    loadScript("https://www.googletagmanager.com/gtm.js?id=" + cfg.GTM_CONTAINER_ID);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  }

  if (hasGa4) {
    loadScript("https://www.googletagmanager.com/gtag/js?id=" + cfg.GA4_MEASUREMENT_ID);
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", cfg.GA4_MEASUREMENT_ID, { send_page_view: true });
  }

  if (hasPixel) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", cfg.META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  if (hasClarity) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", cfg.CLARITY_PROJECT_ID);
  }

  if (hasAdsense) {
    loadScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + cfg.ADSENSE_CLIENT_ID, true);
    var slot = document.getElementById("adsense-footer");
    if (slot) {
      slot.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="' + cfg.ADSENSE_CLIENT_ID + '" data-ad-slot="' + cfg.ADSENSE_SLOT_ID + '" data-ad-format="auto" data-full-width-responsive="true"></ins>';
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      slot.hidden = false;
    }
  }

  window.trackMarketingEvent = function (name, params) {
    params = params || {};
    if (window.gtag) window.gtag("event", name, params);
    if (window.fbq) window.fbq("trackCustom", name, params);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params));
  };

  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-track]");
    if (!el) return;
    window.trackMarketingEvent(el.dataset.track, {
      label: el.dataset.trackLabel || el.textContent.trim().slice(0, 80),
      location: el.dataset.trackLocation || ""
    });
  });
})();
