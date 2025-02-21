chrome.runtime.onInstalled.addListener(() => {
    console.log("Burp Proxy Extension Installed");
    
    let config = {
      mode: "fixed_servers",
      rules: {
        singleProxy: {
          scheme: "http",
          host: "127.0.0.1",
          port: 8080
        },
        bypassList: ["127.0.0.1"]
      }
    };
  
    chrome.proxy.settings.set(
      { value: config, scope: "regular" },
      () => console.log("Proxy set to Burp")
    );
  });
  