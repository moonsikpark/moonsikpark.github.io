var _paq = window._paq || [];
_paq.push(["setRequestMethod", "POST"]);
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "moonsikpark.github.io"]);
_paq.push([
  "setDomains",
  ["moonsikpark.github.io"],
]);
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
_paq.push(["enableHeartBeatTimer"]);
if (document.referrer) {
  _paq.push(["setReferrerUrl", document.referrer]);
}
(function () {
  var u = "//pms.catholic.ac.kr/stats/";
  _paq.push(["setRequestMethod", "POST"]);
  _paq.push(["setTrackerUrl", u + "js/"]);
  _paq.push(["setSiteId", "1"]);

  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.type = "text/javascript";
  g.async = true;
  g.defer = true;
  g.src = u + "js/";
  s.parentNode.insertBefore(g, s);
})();
