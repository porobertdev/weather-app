(()=>{"use strict";var e,n,t,r,o={849:(e,n,t)=>{t.d(n,{A:()=>i});const r="f6290776b549486b90b60043240905",o="https://api.weatherapi.com/v1/",a={1:{name:"Good",color:"light-green"},2:{name:"Moderate",color:"green"},3:{name:"Unhealthy for sensitive group",color:"light-yellow"},4:{name:"Unhealthy",color:"yellow"},5:{name:"Very Unhealthy",color:"orange"},6:{name:"Hazardous",color:"red"}};async function i(e){const n=await async function(e){try{return(await fetch(`${o}${e}&key=${r}`)).json()}catch(e){console.log("Error occured:",e)}}(`current.json?q=${e}&aqi=yes`);return n.error?n:function(e){const n=e.location,t=e.current;return{location:{city:n.name,country:n.country},air_quality:(r=t.air_quality["us-epa-index"],a[r]),humidity:`${t.humidity}`,temp:t.temp_c,feelslike:t.feelslike_c,wind_speed:t.wind_kph,wind_direction:t.wind_dir,wind_deg:t.wind_degree,icon:{text:t.condition.text,url:`https://${t.condition.icon.split("//")[1]}`}};var r}(n)}},654:(e,n,t)=>{t.d(n,{w:()=>r.A});var r=t(849)},46:(e,n,t)=>{t.d(n,{v:()=>q,V:()=>T});const r=new Map;function o(e){if(r.has(e))return r.get(e);const n=e.length;let t=0,o=0,a=0;const i=[];for(let r=0;r<n;r+=1){const n=e[r],s=e[r+1],c=e[r-1];"{"===n&&"{"===s&&"\\"!==c?(a+=1,1===a&&(o=r),r+=1):"}"===n&&"}"===s&&"\\"!==c&&a&&(a-=1,0===a&&(o>t&&(i.push(Object.freeze({type:"string",start:t,end:o,value:e.slice(t,o)})),t=o),i.push(Object.freeze({type:"part",start:o,end:r+2,value:e.slice(t+2,r).trim()})),r+=1,t=r+1))}return t<n&&i.push(Object.freeze({type:"string",start:t,end:n,value:e.slice(t,n)})),r.set(e,Object.freeze(i)),r.get(e)}const a=new WeakMap,i=new WeakMap;class s{constructor(e,n){this.expression=n,a.set(this,e),e.updateParent("")}get attributeName(){return a.get(this).attr.name}get attributeNamespace(){return a.get(this).attr.namespaceURI}get value(){return i.get(this)}set value(e){i.set(this,e||""),a.get(this).updateParent(e)}get element(){return a.get(this).element}get booleanValue(){return a.get(this).booleanValue}set booleanValue(e){a.get(this).booleanValue=e}}class c{constructor(e,n){this.element=e,this.attr=n,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(e){if(1!==this.partList.length)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=e?"":null}append(e){this.partList.push(e)}updateParent(e){if(1===this.partList.length&&null===e)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{const e=this.partList.map((e=>"string"==typeof e?e:e.value)).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,e)}}}const l=new WeakMap;class u{constructor(e,n){this.expression=n,l.set(this,[e]),e.textContent=""}get value(){return l.get(this).map((e=>e.textContent)).join("")}set value(e){this.replace(e)}get previousSibling(){return l.get(this)[0].previousSibling}get nextSibling(){return l.get(this)[l.get(this).length-1].nextSibling}replace(...e){const n=e.map((e=>"string"==typeof e?new Text(e):e));n.length||n.push(new Text("")),l.get(this)[0].before(...n);for(const e of l.get(this))e.remove();l.set(this,n)}}function p(e){return{processCallback(n,t,r){var o;if("object"==typeof r&&r)for(const n of t)if(n.expression in r){const t=null!==(o=r[n.expression])&&void 0!==o?o:"";e(n,t)}}}}function A(e,n){e.value=n instanceof Element?n:String(n)}function d(e,n){return"boolean"==typeof n&&e instanceof s&&"boolean"==typeof e.element[e.attributeName]&&(e.booleanValue=n,!0)}const h=p(A);p(((e,n)=>{d(e,n)||A(e,n)}));const g=new WeakMap,f=new WeakMap;class m extends(globalThis.DocumentFragment||EventTarget){constructor(e,n,t=h){var r,a;super(),Object.getPrototypeOf(this)!==m.prototype&&Object.setPrototypeOf(this,m.prototype),this.appendChild(e.content.cloneNode(!0)),f.set(this,Array.from(function*(e){const n=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null);let t;for(;t=n.nextNode();)if(t instanceof Element&&t.hasAttributes())for(let e=0;e<t.attributes.length;e+=1){const n=t.attributes.item(e);if(n&&n.value.includes("{{")){const e=new c(t,n);for(const t of o(n.value))if("string"===t.type)e.append(t.value);else{const n=new s(e,t.value);e.append(n),yield n}}}else if(t instanceof Text&&t.textContent&&t.textContent.includes("{{")){const e=o(t.textContent);for(let n=0;n<e.length;n+=1){const r=e[n];r.end<t.textContent.length&&t.splitText(r.end),"part"===r.type&&(yield new u(t,r.value));break}}}(this))),g.set(this,t),null===(a=(r=g.get(this)).createCallback)||void 0===a||a.call(r,this,f.get(this),n),g.get(this).processCallback(this,f.get(this),n)}update(e){g.get(this).processCallback(this,f.get(this),e)}}const v=new WeakMap,C=new WeakMap,y=new WeakMap;class B{constructor(e,n,t){this.strings=e,this.values=n,this.processor=t}static setCSPTrustedTypesPolicy(e){B.cspTrustedTypesPolicy=e}get template(){var e,n;if(v.has(this.strings))return v.get(this.strings);{const t=document.createElement("template"),r=this.strings.length-1,o=this.strings.reduce(((e,n,t)=>e+n+(t<r?`{{ ${t} }}`:"")),""),a=null!==(n=null===(e=B.cspTrustedTypesPolicy)||void 0===e?void 0:e.createHTML(o))&&void 0!==n?n:o;return t.innerHTML=a,v.set(this.strings,t),t}}renderInto(e){const n=this.template;if(C.get(e)!==n){C.set(e,n);const t=new m(n,this.values,this.processor);return y.set(e,t),void(e instanceof u?e.replace(...t.children):e.appendChild(t))}y.get(e).update(this.values)}}B.cspTrustedTypesPolicy=null;const w=new WeakSet;function b(e){return(...n)=>{const t=e(...n);return w.add(t),t}}const _=new WeakMap;class I{constructor(e,n){this.element=e,this.type=n,this.element.addEventListener(this.type,this),_.get(this.element).set(this.type,this)}set(e){"function"==typeof e?this.handleEvent=e.bind(this.element):"object"==typeof e&&"function"==typeof e.handleEvent?this.handleEvent=e.handleEvent.bind(e):(this.element.removeEventListener(this.type,this),_.get(this.element).delete(this.type))}static for(e){_.has(e.element)||_.set(e.element,new Map);const n=e.attributeName.slice(2),t=_.get(e.element);return t.has(n)?t.get(n):new I(e.element,n)}}function k(e,n){(function(e,n){return t=n,!!w.has(t)&&(n(e),!0);var t})(e,n)||d(e,n)||function(e,n){return!!(e instanceof s&&e.attributeName.startsWith("on"))&&(I.for(e).set(n),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),!0)}(e,n)||function(e,n){return n instanceof B&&e instanceof u&&(n.renderInto(e),!0)}(e,n)||function(e,n){return n instanceof DocumentFragment&&e instanceof u&&(n.childNodes.length&&e.replace(...n.childNodes),!0)}(e,n)||function(e,n){if(!function(e){return"object"==typeof e&&Symbol.iterator in e}(n))return!1;if(e instanceof u){const t=[];for(const e of n)if(e instanceof B){const n=document.createDocumentFragment();e.renderInto(n),t.push(...n.childNodes)}else e instanceof DocumentFragment?t.push(...e.childNodes):t.push(String(e));return t.length&&e.replace(...t),!0}return e.value=Array.from(n).join(" "),!0}(e,n)||A(e,n)}const x=p(k);function E(e,...n){return new B(e,n,x)}const S=new WeakMap;function T(e){var n,t;console.log("🚀 ~ display ~ data:",e),n=E`
            <div class="weather">
                <div class="weather__search">
                    <input
                        class="weather__input"
                        type="text"
                        id="search"
                        placeholder="Type a city, country or coordinates"
                        autofocus
                    />
                    <img
                        class="weather__gps"
                        src="./assets/location.svg"
                        alt=""
                    />
                </div>

                ${e.error?E`
                          <p class="weather__error">${e.error.message}</p>
                      `:E` <div class="weather__info">
                          <div class="weather__info_main">
                              <img
                                  class="condition-icon"
                                  src="${e.icon.url}"
                              />
                              <div class="location">
                                  <p class="location__name">
                                      ${e.location.city},
                                      ${e.location.country}
                                  </p>
                                  <p class="location__temp">
                                      ${e.temp}&deg; C
                                  </p>
                              </div>
                          </div>

                          <div class="weather__info_details">
                              <p class="real-feel">
                                  <span class="bold">Real Feel</span>:
                                  ${e.feelslike}&deg;
                              </p>
                              <p class="air-quality">
                                  <span class="bold">Air Quality</span>:
                                  ${e.air_quality.name}
                                  <span
                                      class="air-quality__circle ${e.air_quality.color}"
                                  ></span>
                              </p>
                              <p class="wind">
                                  <span class="bold">Wind</span>:
                                  ${e.wind_speed} km/h ${e.wind_direction}
                                  <img
                                      class="wind__direction"
                                      src="./assets/arrow.svg"
                                      style="transform: rotate(${e.wind_deg}deg)"
                                  />
                              </p>
                              <p class="humidity">
                                  <span class="bold">Humidity</span>:
                                  ${e.humidity}%
                              </p>
                          </div>
                      </div>`}
            </div>
        `,t=document.body,n.renderInto(t)}b(((...e)=>n=>{S.has(n)||S.set(n,{i:e.length});const t=S.get(n);for(let r=0;r<e.length;r+=1)e[r]instanceof Promise?Promise.resolve(e[r]).then((e=>{r<t.i&&(t.i=r,k(n,e))})):r<=t.i&&(t.i=r,k(n,e[r]))})),b((e=>n=>{var t,r;if(!(n instanceof u))return;const o=document.createElement("template"),a=null!==(r=null===(t=B.cspTrustedTypesPolicy)||void 0===t?void 0:t.createHTML(e))&&void 0!==r?r:e;o.innerHTML=a;const i=document.importNode(o.content,!0);n.replace(...i.childNodes)}));var j=t(849);async function M(e){"Enter"==e.key&&""!=e.target.value&&(T(await(0,j.A)(e.target.value)),e.target.value="")}function N(e){navigator.geolocation.getCurrentPosition((async e=>{T(await(0,j.A)(`${e.coords.latitude},${e.coords.longitude}`))}),(e=>{alert(e.message)}))}function q(){document.querySelector(".weather__input").addEventListener("keydown",M),document.querySelector(".weather__gps").addEventListener("click",N)}},409:(e,n,t)=>{t.a(e,(async(e,n)=>{try{var r=t(654),o=t(46);t(535);const e=await r.w("auto:ip");o.V(e),o.v(),n()}catch(e){n(e)}}),1)},790:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(354),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"p {\n    margin: 0;\n}\n\ninput {\n    appearance: none;\n    border: none;\n    outline: none;\n}\n","",{version:3,sources:["webpack://./src/css/reset.css"],names:[],mappings:"AAAA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB",sourcesContent:["p {\n    margin: 0;\n}\n\ninput {\n    appearance: none;\n    border: none;\n    outline: none;\n}\n"],sourceRoot:""}]);const s=i},16:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),s=t(790),c=i()(o());c.i(s.A),c.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap);"]),c.push([e.id,":root {\n    /* colors */\n    --clr-bkg: #508284;\n    --clr-input: #d9d9d9;\n    --clr-text: white;\n    --clr-error: #fde74c;\n    --clr-svg-hover: invert(51%) sepia(78%) saturate(2081%) hue-rotate(158deg)\n        brightness(90%) contrast(101%);\n\n    /* air quality */\n    --clr-green: rgb(65, 192, 65);\n    --clr-light-green: rgb(117, 237, 117);\n    --clr-yellow: yellow;\n    --clr-light-yellow: rgba(199, 199, 22, 0.675);\n    --clr-orange: orange;\n    --clr-red: rgb(235, 50, 50);\n\n    /* font-family */\n    --ff-main: 'Inter', sans-serif;\n\n    /* font-sizes */\n    --fs-location: 1.3rem;\n    --fs-temp: 2.8rem;\n    --fs-error: 2.5rem;\n\n    /* font-weights */\n    --fw-details-values: 300;\n    --fw-details: 500;\n    --fw-error: 700;\n}\n\nbody {\n    background-color: var(--clr-bkg);\n    color: var(--clr-text);\n    font-family: var(--ff-main);\n}\n\n.weather {\n    width: 30%;\n    margin: 0 auto;\n\n    .weather__search {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n\n        .weather__input {\n            background-color: var(--clr-input);\n            padding: 1rem;\n            border-radius: 12px;\n            margin-bottom: 2.5rem;\n        }\n    }\n\n    .weather__gps {\n        width: 1.5rem;\n        position: absolute;\n        right: 4%;\n        top: 15%;\n\n        &:hover {\n            filter: var(--clr-svg-hover);\n        }\n    }\n\n    .weather__info {\n        display: flex;\n        flex-direction: column;\n\n        .weather__info_main {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .location__name {\n                font-size: var(--fs-location);\n            }\n\n            .location__temp {\n                font-size: var(--fs-temp);\n            }\n\n            .condition-icon {\n                width: 40%;\n            }\n        }\n\n        .weather__info_details {\n            margin: 0 auto;\n\n            font-weight: var(--fw-details-values);\n\n            span.bold {\n                font-weight: var(--fw-details);\n            }\n\n            p {\n                width: max-content;\n                margin: 0.5rem;\n            }\n\n            .air-quality__circle {\n                display: inline-block;\n                width: 0.7rem;\n                height: 0.7rem;\n                border-radius: 100%;\n\n                &.green {\n                    color: red;\n                    background-color: var(--clr-green);\n                }\n                &.light-green {\n                    background-color: var(--clr-light-green);\n                }\n                &.yellow {\n                    background-color: var(--clr-yellow);\n                }\n                &.light-yellow {\n                    background-color: var(--clr-light-yellow);\n                }\n                &.orange {\n                    background-color: var(--clr-orange);\n                }\n                &.red {\n                    background-color: var(--clr-red);\n                }\n            }\n\n            .wind {\n                img {\n                    width: 0.7rem;\n                    height: 0.7rem;\n                }\n            }\n        }\n    }\n\n    .weather__error {\n        color: var(--clr-error);\n        font-weight: var(--fw-error);\n        text-align: center;\n        font-size: var(--fs-error);\n    }\n}\n","",{version:3,sources:["webpack://./src/css/style.css"],names:[],mappings:"AAGA;IACI,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,oBAAoB;IACpB;sCACkC;;IAElC,gBAAgB;IAChB,6BAA6B;IAC7B,qCAAqC;IACrC,oBAAoB;IACpB,6CAA6C;IAC7C,oBAAoB;IACpB,2BAA2B;;IAE3B,gBAAgB;IAChB,8BAA8B;;IAE9B,eAAe;IACf,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;;IAElB,iBAAiB;IACjB,wBAAwB;IACxB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,cAAc;;IAEd;QACI,aAAa;QACb,sBAAsB;QACtB,kBAAkB;;QAElB;YACI,kCAAkC;YAClC,aAAa;YACb,mBAAmB;YACnB,qBAAqB;QACzB;IACJ;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,SAAS;QACT,QAAQ;;QAER;YACI,4BAA4B;QAChC;IACJ;;IAEA;QACI,aAAa;QACb,sBAAsB;;QAEtB;YACI,aAAa;YACb,uBAAuB;YACvB,mBAAmB;;YAEnB;gBACI,6BAA6B;YACjC;;YAEA;gBACI,yBAAyB;YAC7B;;YAEA;gBACI,UAAU;YACd;QACJ;;QAEA;YACI,cAAc;;YAEd,qCAAqC;;YAErC;gBACI,8BAA8B;YAClC;;YAEA;gBACI,kBAAkB;gBAClB,cAAc;YAClB;;YAEA;gBACI,qBAAqB;gBACrB,aAAa;gBACb,cAAc;gBACd,mBAAmB;;gBAEnB;oBACI,UAAU;oBACV,kCAAkC;gBACtC;gBACA;oBACI,wCAAwC;gBAC5C;gBACA;oBACI,mCAAmC;gBACvC;gBACA;oBACI,yCAAyC;gBAC7C;gBACA;oBACI,mCAAmC;gBACvC;gBACA;oBACI,gCAAgC;gBACpC;YACJ;;YAEA;gBACI;oBACI,aAAa;oBACb,cAAc;gBAClB;YACJ;QACJ;IACJ;;IAEA;QACI,uBAAuB;QACvB,4BAA4B;QAC5B,kBAAkB;QAClB,0BAA0B;IAC9B;AACJ",sourcesContent:["@import url('./reset.css');\n@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap);\n\n:root {\n    /* colors */\n    --clr-bkg: #508284;\n    --clr-input: #d9d9d9;\n    --clr-text: white;\n    --clr-error: #fde74c;\n    --clr-svg-hover: invert(51%) sepia(78%) saturate(2081%) hue-rotate(158deg)\n        brightness(90%) contrast(101%);\n\n    /* air quality */\n    --clr-green: rgb(65, 192, 65);\n    --clr-light-green: rgb(117, 237, 117);\n    --clr-yellow: yellow;\n    --clr-light-yellow: rgba(199, 199, 22, 0.675);\n    --clr-orange: orange;\n    --clr-red: rgb(235, 50, 50);\n\n    /* font-family */\n    --ff-main: 'Inter', sans-serif;\n\n    /* font-sizes */\n    --fs-location: 1.3rem;\n    --fs-temp: 2.8rem;\n    --fs-error: 2.5rem;\n\n    /* font-weights */\n    --fw-details-values: 300;\n    --fw-details: 500;\n    --fw-error: 700;\n}\n\nbody {\n    background-color: var(--clr-bkg);\n    color: var(--clr-text);\n    font-family: var(--ff-main);\n}\n\n.weather {\n    width: 30%;\n    margin: 0 auto;\n\n    .weather__search {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n\n        .weather__input {\n            background-color: var(--clr-input);\n            padding: 1rem;\n            border-radius: 12px;\n            margin-bottom: 2.5rem;\n        }\n    }\n\n    .weather__gps {\n        width: 1.5rem;\n        position: absolute;\n        right: 4%;\n        top: 15%;\n\n        &:hover {\n            filter: var(--clr-svg-hover);\n        }\n    }\n\n    .weather__info {\n        display: flex;\n        flex-direction: column;\n\n        .weather__info_main {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .location__name {\n                font-size: var(--fs-location);\n            }\n\n            .location__temp {\n                font-size: var(--fs-temp);\n            }\n\n            .condition-icon {\n                width: 40%;\n            }\n        }\n\n        .weather__info_details {\n            margin: 0 auto;\n\n            font-weight: var(--fw-details-values);\n\n            span.bold {\n                font-weight: var(--fw-details);\n            }\n\n            p {\n                width: max-content;\n                margin: 0.5rem;\n            }\n\n            .air-quality__circle {\n                display: inline-block;\n                width: 0.7rem;\n                height: 0.7rem;\n                border-radius: 100%;\n\n                &.green {\n                    color: red;\n                    background-color: var(--clr-green);\n                }\n                &.light-green {\n                    background-color: var(--clr-light-green);\n                }\n                &.yellow {\n                    background-color: var(--clr-yellow);\n                }\n                &.light-yellow {\n                    background-color: var(--clr-light-yellow);\n                }\n                &.orange {\n                    background-color: var(--clr-orange);\n                }\n                &.red {\n                    background-color: var(--clr-red);\n                }\n            }\n\n            .wind {\n                img {\n                    width: 0.7rem;\n                    height: 0.7rem;\n                }\n            }\n        }\n    }\n\n    .weather__error {\n        color: var(--clr-error);\n        font-weight: var(--fw-error);\n        text-align: center;\n        font-size: var(--fs-error);\n    }\n}\n"],sourceRoot:""}]);const l=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},354:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},535:(e,n,t)=>{var r=t(72),o=t.n(r),a=t(825),i=t.n(a),s=t(659),c=t.n(s),l=t(56),u=t.n(l),p=t(540),A=t.n(p),d=t(113),h=t.n(d),g=t(16),f={};f.styleTagTransform=h(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=A(),o()(g.A,f),g.A&&g.A.locals&&g.A.locals},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var A=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==A)n[A].references++,n[A].updater(d);else{var h=o(d,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var s;i&&((s=[]).d=-1);var c,l,u,p=new Set,A=o.exports,d=new Promise(((e,n)=>{u=n,l=e}));d[n]=A,d[e]=e=>(s&&e(s),p.forEach(e),d.catch((e=>{}))),o.exports=d,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[n]=e,r(a)}),(e=>{i[t]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[n]=o,s})))(o);var i=()=>c.map((e=>{if(e[t])throw e[t];return e[n]})),l=new Promise((n=>{(a=()=>n(i)).r=0;var t=e=>e!==s&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((n=>n[e](t)))}));return a.r?l:i()}),(e=>(e?u(d[t]=e):l(A),r(s)))),s&&s.d<0&&(s.d=0)},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i.nc=void 0,i(409)})();
//# sourceMappingURL=bundle.js.map