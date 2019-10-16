var s = document.createElement("script");
s.src = chrome.extension.getURL("select.js");
(document.head || document.documentElement).appendChild(s);
s.parentNode.removeChild(s);

window.addEventListener(
    "message",
    function receive(event){
        if(event.data.keyword){
            const str = event.data.keyword;
            this.console.log("msg");
        }
    }
)