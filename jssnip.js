(function () {
  const TWILIO_E164 = "+15558645135"; // Twilio WhatsApp number
  const PREFILL_BASE = "Hi 👋"; // Visible user-facing prefill

  // Generate short token: EA-XXXXX
  function genToken() {
    const rand = Math.floor(Math.random() * 0xfffff)
      .toString(16)
      .toUpperCase()
      .padStart(5, "0");
    return "EA-" + rand;
  }

  // Detect UTMs / organic / direct
  function detectSource() {
    const u = new URL(location.href);
    const utm = {
      utm_source: u.searchParams.get("utm_source") || "",
      utm_medium: u.searchParams.get("utm_medium") || "",
      utm_campaign: u.searchParams.get("utm_campaign") || "",
      gclid: u.searchParams.get("gclid") || "",
    };
    if (utm.utm_source || utm.utm_medium || utm.utm_campaign || utm.gclid) {
      return { ...utm, landing: location.href };
    }
    const ref = document.referrer || "";
    const searchRe = /(google|bing|yahoo|duckduckgo|ecosia|baidu|yandex)\./i;
    if (searchRe.test(ref)) {
      const source = (ref.match(searchRe) || [])[1] || "google";
      return {
        utm_source: source.toLowerCase(),
        utm_medium: "organic",
        utm_campaign: "seo",
        gclid: "",
        landing: location.href,
      };
    }
    return {
      utm_source: "direct",
      utm_medium: "whatsapp",
      utm_campaign: "organic_whatsapp",
      gclid: "",
      landing: location.href,
    };
  }

  function rewriteOne(a, token) {
    try {
      const href = a.getAttribute("href") || "";
      if (!/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return;
      const u = new URL(href, location.origin);
      if (/wa\.me/i.test(u.href))
        u.pathname = "/" + TWILIO_E164.replace("+", "");
      else if (/api\.whatsapp\.com/i.test(u.href))
        u.searchParams.set("phone", TWILIO_E164.replace("+", ""));
      // Prefill: "Hi 👋 [Do not Delete] Request code: EA-XXXXX"
      const prefill = `${PREFILL_BASE} [Do not Delete] Request code: ${token}`;
      u.searchParams.set("text", prefill);
      a.setAttribute("href", u.toString());
    } catch (e) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    const token = genToken();
    const ctx = detectSource();
    // Store UTMs under token in WP
    fetch("/wp-json/my/v1/sid-store", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sid: token, ...ctx }),
    }).catch(() => {});
    document
      .querySelectorAll(
        'a[href*="wa.me"],a[href*="api.whatsapp.com"],a[href^="whatsapp://"]'
      )
      .forEach((a) => rewriteOne(a, token));
  });
})();
