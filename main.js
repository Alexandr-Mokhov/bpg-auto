(()=>{"use strict";function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,c=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.querySelector(".body"),r=n.querySelector(".header"),i=r.querySelector(".header__logo-container"),o=r.querySelector(".header__address-container"),c=n.querySelector(".navigation"),s=c.querySelector(".navigation__button-menu"),a=c.querySelector(".navigation__container"),l=c.querySelector(".navigation__overlay"),u=c.querySelector(".navigation__links"),_=c.querySelectorAll(".navigation__link"),d=(n.querySelector(".services__grid"),n.querySelector(".button-up")),v=n.getElementsByTagName("section"),p=n.querySelector(".footer__copywriting_date"),y=0,f=n.querySelector(".work"),g=f.querySelectorAll(".work-list__item"),m=f.querySelector(".work-list"),S=f.querySelector(".work-button_prev"),L=f.querySelector(".work-button_next"),k=n.querySelector(".contacts"),q=k.querySelector(".contacts__connection_ivan"),b=k.querySelector(".contacts__connection_dmitriy"),w=k.querySelector(".contacts__connection_alexei"),h=n.querySelector(".popup"),E=h.querySelector(".popup__close"),x=h.querySelector(".popup__container"),C=h.querySelector(".popup__image"),A=h.querySelector(".prices"),T=A.querySelector(".prices__work_engine"),X=A.querySelector(".prices__work_chassis"),j=A.querySelector(".prices__work_transmission"),I=A.querySelector(".prices__work_to"),B=A.querySelector(".prices__work_diagnostics"),H=n.querySelector(".services"),M=H.querySelector(".services__item_engine"),O=H.querySelector(".services__item_chassis"),W=H.querySelector(".services__item_transmission"),Y=H.querySelector(".services__item_to"),D=H.querySelector(".services__item_diagnostics"),F=n.querySelector(".list");function N(t){if(t.target.classList.contains("work-list__layout")){h.classList.add("popup_opened");var n=t.target.nextElementSibling.src,r=t.target.nextElementSibling.nextElementSibling.textContent,i=t.target.nextElementSibling.nextElementSibling.nextElementSibling.children;C.setAttribute("src",n),C.setAttribute("alt",r),C.classList.add("popup__image_visible"),function(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;x.insertAdjacentHTML("beforeend",'<p class="popup__title">'.concat(i.textContent,"</p>"))}}catch(e){r.e(e)}finally{r.f()}}(i)}else t.currentTarget.classList.contains("services__item")&&(h.classList.add("popup_opened"),t.currentTarget===M?T.classList.add("prices__work_visible"):t.currentTarget===O?X.classList.add("prices__work_visible"):t.currentTarget===W?j.classList.add("prices__work_visible"):t.currentTarget===Y?I.classList.add("prices__work_visible"):B.classList.add("prices__work_visible"))}function U(e){var t=window.innerWidth;e<0?e=g.length-1:e>=g.length&&(e=0),y=e,t>1160?m.style.transform="translateX(-".concat(330*y,"px"):t>1010?m.style.transform="translateX(-".concat(280*y,"px"):t>760?m.style.transform="translateX(-".concat(220*y,"px"):t>510?m.style.transform="translateX(-".concat(170*y,"px"):t<510&&(m.style.transform="translateX(-".concat(220*y,"px"))}function $(){U(y+1)}function z(){s.classList.toggle("navigation__button-menu_close"),a.classList.toggle("navigation__container_is-hidden"),l.classList.toggle("navigation__overlay_is-hidden")}function G(){_.forEach((function(e){return e.classList.remove("navigation__link_active")}))}setInterval($,3e3),p.textContent+=(new Date).getFullYear(),s.addEventListener("click",z),l.addEventListener("click",z),u.addEventListener("click",(function(e){e.target.classList.contains("navigation__link")&&(G(),e.target.classList.add("navigation__link_active")),window.innerWidth<850&&z()})),i.addEventListener("click",G),o.addEventListener("click",G),d.addEventListener("click",(function(){G()})),window.addEventListener("scroll",function(e,t){var n,r=arguments,i=this;return function(){clearTimeout(n),n=setTimeout((function(){return e.apply(i,r)}),t)}}((function(){var e=window.scrollY;e<window.innerHeight-78?d.classList.add("button-up_is-hidden"):d.classList.remove("button-up_is-hidden"),function(e){var t=function(t){(function(e,t){return e>v[t].offsetTop-200&&e<v[t].clientHeight+v[t].offsetTop-200})(e,t)&&_.forEach((function(n){n.attributes.href.value.replace("#","")===v[t].id?(G(),n.classList.add("navigation__link_active")):e<650&&G()}))};for(var n in v)t(n)}(e)}),100)),S.addEventListener("click",(function(){U(y-1)})),L.addEventListener("click",$),k.addEventListener("click",(function(e){e.target===q?"Показать телефон"===q.textContent?q.textContent="8 (951) 814-96-59":q.textContent="Показать телефон":e.target===b?"Показать телефон"===b.textContent?b.textContent="8 (982) 114-11-94":b.textContent="Показать телефон":e.target===w&&("Показать телефон"===w.textContent?w.textContent="8 (982) 367-86-99":w.textContent="Показать телефон")})),f.addEventListener("click",N),h.addEventListener("click",(function(t){if(t.target===E||t.target===h){if(C.classList.contains("popup__image_visible"))!function(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;)n.value.remove()}catch(e){r.e(e)}finally{r.f()}}(h.querySelectorAll(".popup__title")),C.classList.remove("popup__image_visible");else{var n,r=e(h.querySelectorAll(".prices__work"));try{for(r.s();!(n=r.n()).done;)n.value.classList.remove("prices__work_visible")}catch(e){r.e(e)}finally{r.f()}}h.classList.remove("popup_opened")}})),M.addEventListener("click",N),O.addEventListener("click",N),W.addEventListener("click",N),Y.addEventListener("click",N),D.addEventListener("click",N),F.addEventListener("click",(function(e){if(e.target.classList.contains("list__item-layout")){var t=e.target.parentElement.lastElementChild,n=e.target.firstElementChild;t.classList.toggle("list__item-description_visible"),t.classList.contains("list__item-description_visible")?(n.textContent="Скрыть",window.scrollBy(0,200)):(n.textContent="Подробнее",window.scrollBy(0,-200))}}))})();
//# sourceMappingURL=main.js.map