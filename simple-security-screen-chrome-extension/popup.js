let toggleButton = document.getElementById('toggleSimpleSecurityScreen');

/*
  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
  */

  toggleButton.onclick = function(element) {

      //let color = element.target.value;


      //overlay.style.backgroundColor = "rgba(0, 0, 0, 0.90)";\

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'var extant = document.getElementById("simple-security-screen-chrome-extension");\
            if(extant != null){\
            document.body.removeChild(extant);}else{\
            let overlay = document.createElement("div");\
            overlay.setAttribute("id", "simple-security-screen-chrome-extension");\
            overlay.style.pointerEvents = "none";\
            overlay.style.width = "100vw";\
            overlay.style.height = "100vh";\
            chrome.storage.sync.get("blockPercentage", function(data){overlay.style.backgroundColor = "rgba(0,0,0,"+data.blockPercentage+")";});\
            overlay.style.zIndex = "2000";\
            overlay.style.position = "fixed";\
            overlay.style.top = "0";\
            document.body.appendChild(overlay);}'});
      });
    };
