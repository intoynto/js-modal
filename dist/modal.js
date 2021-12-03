!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("modal",["react","react-dom"],t):"object"==typeof exports?exports.modal=t(require("react"),require("react-dom")):e.modal=t(e.react,e["react-dom"])}(self,(function(e,t){return(()=>{"use strict";var n={187:(e,t,n)=>{function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(971);function o(){var e=document.body.querySelectorAll("."+a.modalOverlayClassName);if(e.length>0){for(var t=0;t<e.length-1;t++)e[t].classList.remove("active");e[e.length-1].classList.add("active")}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.divOverlay_=null,this.divModal_=null,this.zIndex=0,this.uid="",this.createElements()}var t,n,r;return t=e,(n=[{key:"createElements",value:function(){this.divModal_||this.divOverlay_||((0,a.zIndexNext)(),this.zIndex=(0,a.zIndexGet)(),(0,a.zIndexNext)(),this.divOverlay_=document.createElement("div"),this.divOverlay_.className=a.modalOverlayClassName,this.divOverlay_.style.zIndex=this.zIndex.toString(),this.divModal_=document.createElement("div"),this.divModal_.className=a.modalWindowClassName,this.divModal_.style.zIndex=(this.zIndex+1).toString(),document.body.appendChild(this.divOverlay_),document.body.appendChild(this.divModal_))}},{key:"openRegiter",value:function(){this.divOverlay_&&this.divOverlay_.classList.add("open"),this.divModal_&&this.divModal_.classList.add("open")}},{key:"openUnRegister",value:function(){this.divModal_&&this.divModal_.classList.remove("open"),this.divOverlay_&&this.divOverlay_.classList.remove("open")}},{key:"getDivOverlay",value:function(){return this.divOverlay_}},{key:"getDivContent",value:function(){return this.divModal_}},{key:"open",value:function(){this.openRegiter(),(0,a.openBodyCheckRegister)(),o()}},{key:"close",value:function(){this.openUnRegister(),(0,a.openBodyCheckRegister)(),o()}},{key:"destroy",value:function(){var e,t;this.openUnRegister(),(0,a.openBodyCheckRegister)(),this.divModal_&&(null===(e=this.divModal_.parentNode)||void 0===e||e.removeChild(this.divModal_)),this.divOverlay_&&(null===(t=this.divOverlay_.parentNode)||void 0===t||t.removeChild(this.divOverlay_)),o()}}])&&i(t.prototype,n),r&&i(t,r),e}();t.default=r},50:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AlertExclam=t.AlertError=t.AlertWarn=t.Alert=void 0;var o=a(n(187));function r(e){return null==e?"":e.toString()}function l(e){var t=[];if(e&&"object"===i(e))for(var n in e)if(e.hasOwnProperty(n)){var a=e[n];"string"==typeof a&&t.push(a)}return t}function s(e){var t=[];if(e&&"object"===i(e))for(var n in e)if(e.hasOwnProperty(n)){var a=e[n];"function"==typeof a&&t.push(a)}return t}function d(e){var t=r((e=e||{}).title),n=r(e.message);e.buttons||(e.buttons=[]),e.buttons.length<1&&e.buttons.push({label:"OK"});var i=document.createElement("div"),a=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),d=document.createElement("div");i.className="modalAlert",a.className="wrap",l.className="windowTitle",s.className="windowContent",d.className="windowAction",l.innerHTML=t,s.innerHTML=n;for(var v=new o.default({}),u=function(t,n,i){var a=document.createElement("button");a.innerHTML=t,a.className=r(n),a.addEventListener("click",(function(){v.destroy();var t=e.buttons&&Array.isArray(e.buttons)&&e.buttons[i]&&e.buttons[i].callback;t&&"function"==typeof t&&t()})),d.appendChild(a)},c=0;c<e.buttons.length;c++)u(e.buttons[c].label,e.buttons[c].className,c);i.appendChild(a),a.appendChild(l),a.appendChild(s),a.appendChild(d);var h=v.getDivContent();return h&&h.appendChild(i),v}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=l(t);if(!(i.length<1)){var a=s(t),o=i[0]||"",d=i[1]||"",v=r(i[2]),u=r(i[3]),c=a[0],h=a[1],p=[],f=function(e,t,n){r(e).length<1||p.push({label:e,callback:t,className:n})};if(v.length>0&&u.length>0)f(v,a[0],"btn btn-primary"),f(u,a[1],"btn btn-danger");else{var m=v.length>0?v:u,y=c&&"function"==typeof c?c:h;f(m,y,"btn btn-primary")}return{title:o,message:d,buttons:p}}}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=v.apply(null,t);if(i)return d(i)}function c(e){if(e){var t=e.getDivContent();if(t){var n=t.getElementsByTagName("button");n&&(n=n.length>0?n[0]:n)&&n.focus()}}}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!(t.length<1)){var a=t[0];return"object"===i(a)?d(a):u.apply(null,t)}}t.Alert=function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=h.apply(null,n))&&setTimeout((function(){e.open(),c(e)}),10)},t.AlertWarn=function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=h.apply(null,n))&&(e.getDivContent().classList.add("warning"),setTimeout((function(){e.open(),c(e)}),10))},t.AlertError=function(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];(e=h.apply(null,n))&&(e.getDivContent().classList.add("error"),setTimeout((function(){e.open(),c(e)}),10))},t.AlertExclam=function(){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];if(!(n.length<1)){var o=n[0];if("object"!==i(o)&&(o=v.apply(null,n)),"object"===i(o)){o.message||(o.message="");var r='<div style="display:flex; gap:2rem;">';r+='<div style="display:flex; align-items:start; justify-items:center"><svg stroke="#B91C1C" fill="#B91C1C" stroke-width="0" viewBox="0 0 16 16" width="1em" height="1em" style="width:48px; height:auto; margin:0 auto;">',r+='<path fill-rule="evenodd" clip-rule="evendodd" d="M7.938 2.016a.146.146 0 00-.054.057L1.027 13.74a.176.176 0 00-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 00.066-.017.163.163 0 00.055-.06.176.176 0 00-.003-.183L8.12 2.073a.146.146 0 00-.054-.057A.13.13 0 008.002 2a.13.13 0 00-.064.016zm1.044-.45a1.13 1.13 0 00-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>',r+='<path d="M7.002 12a1 1 0 112 0 1 1 0 01-2 0zM7.1 5.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 5.995z"></path>',r+="</svg></div>",r+="<div>"+o.message+"</div>",r+="</div>",o.message=r,(e=d(o))&&setTimeout((function(){e.open(),c(e)}),10)}}}},976:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingOverlay=t.AlertExclam=t.AlertWarn=t.AlertError=t.Alert=t.modal=void 0;var a=i(n(156)),o=i(n(111)),r=i(n(187)),l=n(50);Object.defineProperty(t,"Alert",{enumerable:!0,get:function(){return l.Alert}}),Object.defineProperty(t,"AlertError",{enumerable:!0,get:function(){return l.AlertError}}),Object.defineProperty(t,"AlertExclam",{enumerable:!0,get:function(){return l.AlertExclam}}),Object.defineProperty(t,"AlertWarn",{enumerable:!0,get:function(){return l.AlertWarn}});var s=n(729);Object.defineProperty(t,"LoadingOverlay",{enumerable:!0,get:function(){return s.LoadingOverlay}}),t.modal=function(e){if(e.component){var t=new r.default({}),n=t.getDivContent();if(n){n.classList.add("modalOverlayForm");var i=e.component;o.default.render(a.default.createElement(i,Object.assign({},e.props,{onClose:function(i){i&&i.preventDefault();var a=e.props||{};if(a&&a.onClose&&"function"==typeof a.onClose)try{a.onClose()}catch(e){}o.default.unmountComponentAtNode(n),t.destroy()}})),n,(function(){t.open()}))}}}},729:(e,t,n)=>{function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingOverlay=t.overlayLoadingClass=void 0;var a=n(971),o=0;function r(){var e=++o;this.div_=document.createElement("div"),this.div_.id=t.overlayLoadingClass+e,this.div_.className=t.overlayLoadingClass,this.wrapper_=document.createElement("div"),this.wrapper_.className="wrapper",this.image_=document.createElement("div"),this.image_.className="image",function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:50)||50,n='<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="0 0 '+t+" "+t+'">\n                <path fill="'+((arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#007BFF")||"#007BFF")+'" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">\n                    <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite" />\n                </path>\n               svg>';e.innerHTML=n}(this.image_),this.wrapper_.appendChild(this.image_),this.div_.appendChild(this.wrapper_),document.body.appendChild(this.div_)}t.overlayLoadingClass="loadingContainer";var l={clickClose:!0,text:"Loading,.."},s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._ops=Object.assign(Object.assign({},l),t),this.applyText=this.applyText.bind(this),this.divClicked=this.divClicked.bind(this),(0,a.zIndexNext)(),this.zIndex=(0,a.zIndexGet)()}var t,n,o;return t=e,(n=[{key:"divClicked",value:function(e){if(e&&e.preventDefault(),"function"==typeof this._ops.onClick)try{this._ops.onClick(e)}catch(e){}var t=!0;void 0!==this._ops.clickClose&&(t=this._ops.clickClose),t&&(this.close(),this.destroy())}},{key:"applyText",value:function(){var e,t;if(this.div_){var n,i=null==(n=this._ops.text)?"":n.toString();i.length>0?(this.text_||(this.text_=document.createElement("div"),null===(e=this.wrapper_)||void 0===e||e.appendChild(this.text_)),this.text_.className="text",this.text_.innerHTML=i):this.text_&&(null===(t=this.text_.parentNode)||void 0===t||t.removeChild(this.text_),this.text_=void 0)}}},{key:"open",value:function(){this.div_||(r.call(this),this.div_&&this.div_.addEventListener("click",this.divClicked)),this.div_&&(this.applyText(),this.div_.classList.add("open"),this.div_.style.zIndex=this.zIndex.toString())}},{key:"close",value:function(){this.div_&&(this.div_.classList.remove("open"),this.div_.style.zIndex="")}},{key:"setText",value:function(e){this._ops.text=e,this.applyText()}},{key:"destroy",value:function(){var e,t,n,i;this.text_&&(null===(e=this.text_.parentNode)||void 0===e||e.removeChild(this.text_),this.text_=void 0),this.image_&&(null===(t=this.image_.parentNode)||void 0===t||t.removeChild(this.image_),this.image_=void 0),this.wrapper_&&(null===(n=this.wrapper_.parentNode)||void 0===n||n.removeChild(this.wrapper_),this.wrapper_=void 0),this.div_&&(null===(i=this.div_.parentNode)||void 0===i||i.removeChild(this.div_),this.div_=void 0)}}])&&i(t.prototype,n),o&&i(t,o),e}();t.LoadingOverlay=s},971:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.openBodyCheckRegister=t.hasClass=t.modalBodyClassName=t.modalWindowClassName=t.modalOverlayClassName=t.zIndexGet=t.zIndexPrev=t.zIndexNext=void 0;var n=9999;t.zIndexNext=function(){n++},t.zIndexPrev=function(){n--},t.zIndexGet=function(){return n},t.modalOverlayClassName="modalOverlay",t.modalWindowClassName="modalContainer",t.modalBodyClassName="modalEnabled",t.hasClass=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},t.openBodyCheckRegister=function(){document.querySelectorAll(".".concat(t.modalOverlayClassName,".open")).length>0?document.body.classList.add(t.modalBodyClassName):document.body.classList.remove(t.modalBodyClassName)}},156:t=>{t.exports=e},111:e=>{e.exports=t}},i={};var a=function e(t){var a=i[t];if(void 0!==a)return a.exports;var o=i[t]={exports:{}};return n[t].call(o.exports,o,o.exports,e),o.exports}(976);return a})()}));
//# sourceMappingURL=modal.js.map