/***
 * Google analitics code
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-111494883-1");

/**
 * GA Tags
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "AW-674024255");

/**
 *
 * Facebook pixel code
 */
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js"
);
fbq("init", "274954466399831");
fbq("track", "PageView");

/**
 *
 * Google Remarketing
 */
//  Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup

var google_conversion_id = 823787860;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;

/**
 *
 * Hotjar
 */
/* (function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
  h._hjSettings = { hjid: 750498, hjsv: 6 };
  a = o.getElementsByTagName("head")[0];
  r = o.createElement("script");
  r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="); */
