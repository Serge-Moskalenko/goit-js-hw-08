var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(t,e,n){var o,i,r,u,f,a,c=0,v=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function j(t){return c=t,f=setTimeout(h,e),v?g(t):u}function T(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=r}function h(){var t=d();if(T(t))return w(t);f=setTimeout(h,function(t){var n=e-(t-a);return y?s(n,r-(t-c)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=d(),n=T(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return j(a);if(y)return f=setTimeout(h,e),g(a)}return void 0===f&&(f=setTimeout(h,e)),u}return e=b(e)||0,p(n)&&(v=!!n.leading,r=(y="maxWait"in n)?l(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(p(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=p(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var f=o.test(t);return f||i.test(t)?r(t.slice(2),f?2:8):n.test(t)?NaN:+t}const y=document.querySelector(".feedback-form"),m={};y.addEventListener("input",(function(t){m[t.target.name]=t.target.value,console.log(m)})),y.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.73606066.js.map
