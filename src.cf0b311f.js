parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/image-4.jpg":[["image-4.03899ec6.jpg","BwT1"],"BwT1"],"./../images/icons/mail.png":[["mail.d3e44376.png","mNFM"],"mNFM"],"./../images/icons/firefox.png":[["firefox.df1065a7.png","qCu9"],"qCu9"],"./../images/icons/settings.png":[["settings.24cf1389.png","ef2D"],"ef2D"],"./../images/icons/telegram.png":[["telegram.514cf47f.png","EQ7l"],"EQ7l"],"./../images/icons/command.png":[["command.48ee552a.png","xz3x"],"xz3x"],"./../images/icons/basket.png":[["basket.95a7cdb2.png","cEEM"],"cEEM"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e={ScreenSaverWindow:document.querySelector(".window"),imageList:document.querySelector(".image-list"),listElements:document.querySelectorAll(".image-list-item"),body:document.body,settingsButton:document.querySelector(".settings"),timePlaceholder:document.querySelector(".time-placeholder"),searhButton:document.querySelector(".search-button")};function t(t){const r=t.target.nodeName;if(e.listElements.forEach(e=>{e.classList.remove("current")}),"IMG"===r&&(t.target.parentNode.classList.add("current"),e.body.style.backgroundImage=`url(${t.target.src})`),"LI"===r){t.target.classList.add("current");const r=t.target.children[0].src;e.body.style.backgroundImage=`url(${r})`}}function r(){e.ScreenSaverWindow.classList.toggle("visually-hidden")}function n(){const t=new Date,r=t.getMonth(),a=t.getDay(),o=t.getDate(),i=t.getHours(),l=t.getMinutes(),d=t.getSeconds(),g=c(i),m=c(l),y=c(d),S=s(a),h=u(r);e.timePlaceholder.innerHTML=`${S} ${o} ${h} ${g}:${m}:${y}`;setTimeout(n,1e3)}function c(e){return e<10?"0"+e:e}function s(e){switch(e){case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";case 7:return"Sun"}}function u(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec"}}e.imageList.addEventListener("click",t),e.settingsButton.addEventListener("click",r),e.searhButton.addEventListener("click",e=>e.preventDefault()),n();
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/ASD-team-entrance-test/src.cf0b311f.js.map