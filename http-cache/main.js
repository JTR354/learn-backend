void (function () {
  window.addEventListener("load", () => {
    if ("serviceWorker" in window.navigator) {
      const sw = window.navigator.serviceWorker;
      sw.register("/service-worker.js")
        .then((reg) => {
          console.log(reg);
          if (reg.installing) {
            console.log("sw注册中。。。");
          }
          if (reg.waiting) {
            console.log("sw注册le");
          }
          if (reg.active) {
            console.log("sw激活了");
          }
        })
        .catch((e) => {
          console.log(e, "注册失败");
        });
    } else {
      console.log("不支持 service worker");
    }
  });
})();
