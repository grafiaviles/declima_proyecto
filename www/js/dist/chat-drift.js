!function(){var t;if(!(t=window.driftt=window.drift=window.driftt||[]).init)t.invoked?window.console&&console.error&&console.error("Drift snippet included twice."):(t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(n){return function(){var e;return(e=Array.prototype.slice.call(arguments)).unshift(n),t.push(e),t}},t.methods.forEach(function(n){t[n]=t.factory(n)}),t.load=function(t){var n,e,o;o=3e5*Math.ceil(new Date/3e5),(e=document.createElement("script")).type="text/javascript",e.async=!0,e.crossorigin="anonymous",e.src="https://js.driftt.com/include/"+o+"/"+t+".js",(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,n)})}(),drift.SNIPPET_VERSION="0.3.1",drift.load("s77yaaivk5pw"),function(){function t(t,n){for(var e=document.querySelectorAll(t),o=0;o<e.length;o++)n(e[o],o)}function n(t,n){return n.preventDefault(),t.sidebar.open(),!1}!function(t){"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&t()})}(function(){drift.on("ready",function(e){var o=n.bind(this,e);t(".drift-open-chat",function(t){t.addEventListener("click",o)})})})}();