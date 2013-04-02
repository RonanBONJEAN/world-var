(function() {
    var ifrm = document.createElement("iframe"),
        rest = {},
        cnt = 0,
        debug = window.console?console.log:alert;
    ifrm.setAttribute("style","display:none");
    document.body.appendChild(ifrm);
    var ifrw = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document);
    for(var prop in window) {
        if(typeof(ifrw[prop]) === "undefined") {
           rest[prop] = window[prop];
           cnt++;
        }
    }
    ifrm.parentNode.removeChild(ifrm);
    debug("Found " + cnt + " custom object(s)");
    debug(rest);
})();
