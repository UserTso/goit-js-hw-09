!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",(function(a){e.disabled=!0,n.disabled=!1,o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(t){n.disabled=!0,e.disabled=!1,clearInterval(o)}));var o=null}();
//# sourceMappingURL=01-color-switcher.29dede2b.js.map