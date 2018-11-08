(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./components/ColorBand/ColorBand.css":function(e,t,n){},"./components/ColorBand/ColorBand.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/docz/dist/index.m.js"),i=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},l=function(){return i()+i()};n("./components/ColorBand/ColorBand.css");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e)))._pattern_id="checkerboard-pattern-".concat(l()),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.size,n=e.fill;return o.a.createElement("svg",{className:"uix-colorband uix-colorband--checkerboard"},o.a.createElement("defs",null,o.a.createElement("pattern",{id:this._pattern_id,x:"0",y:"0",width:t,height:t,patternUnits:"userSpaceOnUse"},o.a.createElement("g",{fill:n},o.a.createElement("rect",{x:"0",y:"0",width:t,height:t,fill:"#fff"}),o.a.createElement("rect",{x:"0",y:"0",width:t/2,height:t/2}),o.a.createElement("rect",{x:t/2,y:t/2,width:t/2,height:t/2})))),o.a.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"url(#".concat(this._pattern_id,")")}))}}])&&s(n.prototype,r),a&&s(n,a),t}();m.defaultProps={size:10,fill:"#ccc"};var h=m;function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}m.__docgenInfo={description:"",methods:[],displayName:"CheckerboardBand",props:{size:{defaultValue:{value:"10",computed:!1},type:{name:"number"},required:!1,description:"The size, in pixels, for the checkerboard squares."},fill:{defaultValue:{value:"'#ccc'",computed:!1},type:{name:"string"},required:!1,description:"The fill color for the darker squares."}}};t.default=function(e){var t=e.components;y(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(c.PropsTable,{of:h}))}}}]);