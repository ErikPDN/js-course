(()=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(e)}function e(o,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,r(n.key),n)}}function t(o,t,r){return t&&e(o.prototype,t),r&&e(o,r),Object.defineProperty(o,"prototype",{writable:!1}),o}function r(e){var t=function(e){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}var n=t((function o(e,t){!function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.name=e,this.age=t}));console.log("My name is Erik Neves"),console.log("I am 20 years old"),console.log(5);var i=new n("Gabriel",20);console.log(i)})();
//# sourceMappingURL=bundle.js.map