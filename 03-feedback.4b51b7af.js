!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var i,o,f,u,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,a=setTimeout(O,t),d?p(e):u}function E(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=f}function O(){var e=g();if(E(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-l);return s?b(n,f-(e-c)):n}(e))}function S(e){return a=void 0,v&&i?p(e):(i=o=void 0,u)}function T(){var e=g(),n=E(e);if(i=arguments,o=this,l=e,n){if(void 0===a)return j(l);if(s)return a=setTimeout(O,t),p(l)}return void 0===a&&(a=setTimeout(O,t)),u}return t=h(t)||0,y(n)&&(d=!!n.leading,f=(s="maxWait"in n)?m(h(n.maxWait)||0,t):f,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=o=a=void 0},T.flush=function(){return void 0===a?u:S(g())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||a.test(t)?l(t.slice(2),r?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var j,E=document.querySelector(".feedback-form"),O={};E.addEventListener("input",e(t)((function(e){O[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),E.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j=JSON.parse(localStorage.getItem("feedback-form-state")),console.log(j),j&&(E.firstElementChild.firstElementChild.value=j.email,E.firstElementChild.nextElementSibling.firstElementChild.value=j.message)}();
//# sourceMappingURL=03-feedback.4b51b7af.js.map