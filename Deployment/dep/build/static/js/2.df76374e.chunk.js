webpackJsonp([2],{195:function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function i(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=r(0),s=r.n(a),c=r(8),p=r(206),u=r(13),d=r(56),l=r(12),f=r(55),b=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),A=function(e){function n(){return t(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,e),b(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=s.a.createElement(f.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return s.a.createElement(p.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),s.a.createElement("div",null,e)}}]),n}(a.Component),m=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},x=function(e){return{onFetchOrders:function(n,r){return e(l.d(n,r))}}};n.default=Object(c.b)(m,x)(Object(d.a)(A,u.a))},206:function(e,n,r){"use strict";var t=r(0),o=r.n(t),i=r(207),a=r.n(i),s=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:a.a.Order},o.a.createElement("p",null,"Ingredients: ",t),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};n.a=s},207:function(e,n,r){var t=r(208);"string"===typeof t&&(t=[[e.i,t,""]]);var o={};o.transform=void 0;r(193)(t,o);t.locals&&(e.exports=t.locals)},208:function(e,n,r){n=e.exports=r(192)(!0),n.push([e.i,".Order__Order__4yi4Z{width:80%;border:1px solid #eee;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box}","",{version:3,sources:["/home/govindsingh/deployment/deployment--01-finished/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACI,UAAW,AACX,sBAAuB,AACvB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAClC",file:"Order.css",sourcesContent:[".Order {\n    width: 80%;\n    border: 1px solid #eee;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    padding: 10px;\n    margin: 10px auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}"],sourceRoot:""}]),n.locals={Order:"Order__Order__4yi4Z"}}});
//# sourceMappingURL=2.df76374e.chunk.js.map