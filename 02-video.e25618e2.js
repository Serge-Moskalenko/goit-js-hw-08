!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=l||d||Function("return this")(),s=Object.prototype.toString,y=Math.max,p=Math.min,v=function(){return m.Date.now()};function g(e,t,n){var i,r,u,a,c,f,l=0,d=!1,m=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function S(e){return l=e,c=setTimeout(O,t),d?g(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-l>=u}function O(){var e=v();if(T(e))return j(e);c=setTimeout(O,function(e){var n=t-(e-f);return m?p(n,u-(e-l)):n}(e))}function j(e){return c=void 0,s&&i?g(e):(i=r=void 0,a)}function w(){var e=v(),n=T(e);if(i=arguments,r=this,f=e,n){if(void 0===c)return S(f);if(m)return c=setTimeout(O,t),g(f)}return void 0===c&&(c=setTimeout(O,t)),a}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(m="maxWait"in n)?y(h(n.maxWait)||0,t):u,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=f=r=c=void 0},w.flush=function(){return void 0===c?a:j(v())},w}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||c.test(t)?f(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var S=document.querySelector("#vimeo-player"),T=document.querySelector("iframe"),O=new Vimeo.Player(S),j=new Vimeo.Player(T);O.on("timeupdate",e(t)((function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e.seconds}))}),1e3)),O.getVideoTitle().then((function(e){localStorage.setItem("videoplayer-current-name",'"name":'.concat(e))})),j.on("timeupdate",e(t)((function(e){localStorage.setItem("videoplayer-current-time_2",JSON.stringify({time:e.seconds}))}),1e3)),j.getVideoTitle().then((function(e){localStorage.setItem("videoplayer-current-name_2",'"name_2":'.concat(e))})),O.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).time).then((function(e){})).catch((function(e){e.name})),j.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time_2")).time).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.e25618e2.js.map