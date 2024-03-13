if (!self.define) {
  let e,
    s = {};
  const n = (n, r) => (
    (n = new URL(n + ".js", r).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, i) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[o]) return;
    let t = {};
    const l = (e) => n(e, o),
      f = { module: { uri: o }, exports: t, require: l };
    s[o] = Promise.all(r.map((e) => f[e] || l(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-6567b62a"], function (e) {
  "use strict";
  e.setCacheNameDetails({ prefix: "gram" }),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.precacheAndRoute(
      [
        { url: "/css/app.a715927f.css", revision: null },
        { url: "/index.html", revision: "2f1b4de4bb4bac9a78ed87dbb8bffffe" },
        { url: "/js/app.eb0f4b56.js", revision: null },
        { url: "/js/chunk-vendors.98cfb654.js", revision: null },
        { url: "/manifest.json", revision: "727919f77b1373e798918db44407ebc0" },
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
