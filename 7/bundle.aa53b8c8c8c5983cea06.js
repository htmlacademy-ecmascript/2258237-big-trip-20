(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,s,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);i&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+v(i,2,"0")+":"+v(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),r=n-s<0,o=e.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:s,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=m;var b=function(t){return t instanceof S},g=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var r=e.toLowerCase();$[r]&&(s=r),n&&($[r]=n,s=r);var o=e.split("-");if(!s&&o.length>1)return t(o[0])}else{var a=e.name;$[a]=e,s=a}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},w=_;w.l=g,w.i=b,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=g(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,f=w.p(t),p=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(o)},h=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(f){case u:return c?p(1,0):p(31,11);case l:return c?p(1,v):p(0,v+1);case a:var $=this.$locale().weekStart||0,b=(m<$?m+7:m)-$;return p(c?_-b:_+(6-b),v);case o:case d:return h(y+"Hours",0);case r:return h(y+"Minutes",1);case s:return h(y+"Seconds",2);case i:return h(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),f="set"+(this.$u?"UTC":""),p=(a={},a[o]=f+"Date",a[d]=f+"Date",a[l]=f+"Month",a[u]=f+"FullYear",a[r]=f+"Hours",a[s]=f+"Minutes",a[i]=f+"Seconds",a[n]=f+"Milliseconds",a)[c],h=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[p](h),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,f=this;n=Number(n);var p=w.p(c),h=function(t){var e=M(f);return w.w(e.date(e.date()+Math.round(t*n)),f)};if(p===l)return this.set(l,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===o)return h(1);if(p===a)return h(7);var m=(d={},d[s]=t,d[r]=e,d[i]=1e3,d)[p]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=function(t,n,s,r){return t&&(t[n]||t(e,i))||s[n].slice(0,r)},d=function(t){return w.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:u(n.monthsShort,a,c,3),MMMM:u(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:w.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:s};return i.replace(h,(function(t,e){return e||m[t]||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,f){var p,h=w.p(d),m=M(n),v=(m.utcOffset()-this.utcOffset())*t,_=this-m,y=w.m(this,m);return y=(p={},p[u]=y/12,p[l]=y,p[c]=y/3,p[a]=(_-v)/6048e5,p[o]=(_-v)/864e5,p[r]=_/e,p[s]=_/t,p[i]=_/1e3,p)[h]||_,f?y:w.a(y)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=S.prototype;return M.prototype=D,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,S,M),t.$i=!0),M},M.locale=g,M.isDayjs=b,M.unix=function(t){return M(1e3*t)},M.en=$[y],M.Ls=$,M.p={},M}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,i=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:s,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof y},f=function(t,e,n){return new y(t,n,e.$l)},p=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},_=function(t,e){return t?h(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},y=function(){function h(t,e,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return f(t*u[p(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){i.$d[p(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var s=t.match(c);if(s){var r=s.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=h.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/s),t%=s,this.$d.minutes=m(t/i),t%=i,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=_(this.$d.years,"Y"),e=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=_(n,"D"),s=_(this.$d.hours,"H"),r=_(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=_(o,"S"),l=t.negative||e.negative||i.negative||s.negative||r.negative||a.negative,c=s.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+i.format+c+s.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(i[t])}))},v.as=function(t){return this.$ms/u[p(t)]},v.get=function(t){var e=this.$ms,n=p(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],0===e?0:e},v.add=function(t,e,n){var i;return i=e?t*u[p(e)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return f(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},h}();return function(n,i,s){t=s,e=s().$utils(),s.duration=function(t,e){var n=s.locale();return f(t,{$l:n},e)},s.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},i.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},607:function(t){t.exports=function(){"use strict";return function(t,e,n){e.prototype.isBetween=function(t,e,i,s){var r=n(t),o=n(e),a="("===(s=s||"()")[0],l=")"===s[1];return(a?this.isAfter(r,i):!this.isBefore(r,i))&&(l?this.isBefore(o,i):!this.isAfter(o,i))||(a?this.isBefore(r,i):!this.isAfter(r,i))&&(l?this.isAfter(o,i):!this.isBefore(o,i))}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var f=n(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=s(p,i);i.byIndex=a,e.splice(a,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function s(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,s){var r=i(t=t||[],s=s||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=i(t,s),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={id:i,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t={BEFOREBEGIN:"beforebegin",AFTERBEGIN:"afterbegin",BEFOREEND:"beforeend",AFTEREND:"afterend"};function e(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.BEFOREEND;if(!(e instanceof $))throw new Error("Can render only components");if(null===n)throw new Error("Container element doesn't exist");n.insertAdjacentElement(i,e.element)}function i(t,e){if(!(t instanceof $&&e instanceof $))throw new Error("Can replace only components");const n=t.element,i=e.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}var s=n(379),r=n.n(s),o=n(795),a=n.n(o),l=n(569),c=n.n(l),u=n(565),d=n.n(u),f=n(216),p=n.n(f),h=n(589),m=n.n(h),v=n(10),_={};_.styleTagTransform=m(),_.setAttributes=d(),_.insert=c().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=p(),r()(v.Z,_),v.Z&&v.Z.locals&&v.Z.locals;const y="shake";class ${#t=null;constructor(){if(new.target===$)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),t?.()}),600)}}const b={TAXI:"taxi",BUS:"bus",TRAIN:"train",SHIP:"ship",DRIVE:"drive",FLIGHT:"flight",CHECK_IN:"check-in",SIGHTSEEING:"sightseeing",RESTAURANT:"restaurant"};var g=n(484),M=n.n(g),w=n(646),S=n.n(w);M().extend(S());const D=36e5,E=(t,e)=>t?M()(t).format(e):"",A=(t,e)=>{for(let n=0;n<t.length;n++)if(t[n].type===e)return t[n].offers};class k extends ${#e=null;#n=null;#i=null;#s=null;#r=null;constructor(t){let{point:e,offers:n,destinations:i,onSubmitForm:s,onCloseForm:r}=t;super(),this.#e=e,this.#n=n,this.#i=i,this.#s=s,this.#r=r,this.element.querySelector(".event__save-btn").addEventListener("submit",this.#o),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(t,e,n){const{basePrice:i,dateFrom:s,dateTo:r,destination:o,type:a,offers:l}=t;return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${a}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${u=b,`\n    ${Object.values(u).map((t=>{return`<div class="event__type-item">\n        <input id="event-type-${t}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${t}">\n        <label class="event__type-label  event__type-label--${t}" for="event-type-${t}-1">${e=t,e[0].toUpperCase()+e.slice(1)}</label>\n      </div>`;var e})).join("")}\n  `}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${a}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${n.find((t=>t.id===o)).name}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${c=n,`${c.map((t=>`<option value="${t.name}"></option>`)).join("")}`}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${E(s,"DD/MM/YY HH:mm")}">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${E(r,"DD/MM/YY HH:mm")}">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      ${function(t,e,n,i,s){return`\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n        <div class="event__available-offers">\n          ${function(t,e,n){return`\n    ${t.find((t=>t.type===e)).offers.map((t=>`\n      <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t.id}-1" type="checkbox"      name="event-offer-${t.id}" ${function(t,e){return e.find((e=>e===t))?"checked":""}(t.id,n)}>\n      <label class="event__offer-label" for="event-offer-${t.id}-1">\n        <span class="event__offer-title">${t.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${t.price}</span>\n      </label>\n    </div>`)).join("")}\n  `}(t,e,n)}\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">\n        ${i.find((t=>t.id===s)).description}\n        </p>\n\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            ${r=i.find((t=>t.id===s)).pictures,r.map((t=>`<img class="event__photo" src="${t.src}" alt="${t.alt}">`)).join("")}\n          </div>\n        </div>\n      </section>\n    </section>\n  `;var r}(e,a,l,n,o)}\n    </form>\n  </li>`;var c,u}(this.#e,this.#n,this.#i)}#o=t=>{t.preventDefault(),this.#s()};#a=t=>{t.preventDefault(),this.#r()}}const C=[{type:"taxi",offers:[{id:1,title:"Доп. место",price:60},{id:2,title:"Детское кресло",price:120}]},{type:"flight",offers:[{id:1,title:"Бизнесс класс",price:560}]},{type:"drive",offers:[{id:1,title:"Дозаправка",price:230},{id:2,title:"Дорогой бензин",price:120},{id:3,title:"Зимняя резина",price:120}]},{type:"bus",offers:[{id:1,title:"Место для багажа",price:30},{id:2,title:"Радио на всю дорогу",price:170},{id:3,title:"Ремни безопасности",price:45}]},{type:"ship",offers:[{id:1,title:"Просторная каюта",price:850},{id:2,title:"Ужин на палубе",price:145},{id:3,title:"Рыбалка в море",price:560}]},{type:"train",offers:[{id:1,title:"Питание",price:80},{id:2,title:"Постельное белье",price:25},{id:3,title:"Интернет на время поездки",price:60}]}];class T extends ${#e=null;#i=null;#l=null;constructor(t){let{point:e,destinations:n,onEditClick:i}=t;super(),this.#e=e,this.#i=n,this.#l=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#c)}get template(){return function(t,e){const{dateFrom:n,dateTo:i,basePrice:s,destination:r,isFavorite:o,type:a,offers:l}=t,c=E(n,"MMMM DD"),u=E(n,"HH:mm"),d=E(i,"HH:mm"),f=o?"event__favorite-btn--active":"",p=A(C,a);return`<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="${n}">${c}</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">${a} ${e.find((t=>t.id===r)).name}</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="${n}">${u}</time>\n          &mdash;\n          <time class="event__end-time" datetime="${i}">${d}</time>\n        </p>\n        <p class="event__duration">${((t,e)=>{const n=M()(e).diff(M()(t));let i=0;switch(!0){case n>=864e5:i=M().duration(n).format("DD[D] HH[H] mm[M]");break;case n>=D:i=M().duration(n).format("HH[H] mm[M]");break;case n<D:i=M().duration(n).format("mm[M]")}return i})(n,i)}</p>\n      </div>\n      <p class="event__price">\n        &euro;&nbsp;<span class="event__price-value">${s}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        ${h=p,m=l,m.map((t=>{const e=h.find((e=>e.id===t));return`\n        <li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n        </li>\n      `})).join("")}\n      </ul>\n      <button class="event__favorite-btn  ${f}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`;var h,m}(this.#e,this.#i)}#c=t=>{t.preventDefault(),this.#l()}}class x extends ${get template(){return'<ul class="trip-events__list">\n    </ul>'}}class F extends ${get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}class H extends ${get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n      <div class="trip-info__main">\n      </div>\n    </section>\n  '}}class P extends ${#u=null;constructor(t){super(),this.#u=t}get template(){return`\n    <h1 class="trip-info__title">${t=this.#u,1===t.length?t[0]:`${t[0]} &mdash; ${t[1]} &mdash; ${t[2]}`}</h1>\n  `;var t}}class I extends ${#d=null;constructor(t){super(),this.#d=t}get template(){return`\n    <p class="trip-info__dates">${(t=this.#d)[0]}&nbsp;&mdash;&nbsp;${t[1]}</p>\n  `;var t}}class O extends ${#f=null;constructor(t){super(),this.#f=t}get template(){return`\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">${this.#f}</span>\n    </p>\n  `}}let L=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");const Y=[{id:L(),basePrice:1100,dateFrom:"2023-06-13T22:15",dateTo:"2023-06-14T23:35",destination:"2",isFavorite:!0,offers:[1,2],type:"taxi"},{id:L(),basePrice:800,dateFrom:"2020-08-11T9:15",dateTo:"2020-08-16T13:35",destination:"1",isFavorite:!1,offers:[3],type:"drive"},{id:L(),basePrice:5355,dateFrom:"2019-03-15T12:15",dateTo:"2019-03-16T02:35",destination:"2",isFavorite:!1,offers:[1],type:"flight"},{id:L(),basePrice:1300,dateFrom:"2020-05-15T10:15",dateTo:"2020-05-16T12:35",destination:"3",isFavorite:!0,offers:[],type:"flight"},{id:L(),basePrice:25,dateFrom:"2019-05-15T10:15",dateTo:"2019-05-15T10:47",destination:"2",isFavorite:!1,offers:[1,2,3],type:"bus"},{id:L(),basePrice:190,dateFrom:"2019-05-13T10:55",dateTo:"2019-05-15T10:17",destination:"4",isFavorite:!0,offers:[2,3],type:"ship"},{id:L(),basePrice:90,dateFrom:"2019-06-13T11:34",dateTo:"2019-06-13T13:41",destination:"2",isFavorite:!0,offers:[2],type:"train"}],B=[{id:"1",description:"Москва – столица Российской Федерации, город федерального значения. Крупнейший по численности населения город России и её субъект – 12 111 194 человек (2014)",name:"Moscow",pictures:[{src:"https://loremflickr.com/248/152?random=10",description:"Фото города 1"},{src:"https://loremflickr.com/248/152?random=11",description:"Фото города 2"},{src:"https://loremflickr.com/248/152?random=12",description:"Фото города 3"},{src:"https://loremflickr.com/248/152?random=13",description:"Фото города 4"}]},{id:"2",description:"Анапа – черноморский российский курорт, расположенный в юго-западной части Краснодарского края, на стыке предгорий Кавказа и степей Таманского полуострова",name:"Anapa",pictures:[{src:"https://loremflickr.com/248/152?random=20",description:"Фото города 1"},{src:"https://loremflickr.com/248/152?random=21",description:"Фото города 2"},{src:"https://loremflickr.com/248/152?random=22",description:"Фото города 3"}]},{id:"3",description:"Расположен в устье реки Мзымты по обеим её берегам и простирается на 17 км по Черноморскому побережью",name:"Adler",pictures:[{src:"https://loremflickr.com/248/152?random=30",description:"Фото города 1"},{src:"https://loremflickr.com/248/152?random=31",description:"Фото города 2"},{src:"https://loremflickr.com/248/152?random=32",description:"Фото города 3"}]},{id:"4",description:"город уникальный для русской истории, неуловимый и непостижимый. Более двух веков он был блистательной столицей великой Российской империи и сейчас сохраняет статус культурного и духовного центра страны. Санкт-Петербург был основан по приказу российского императора Петра I 16 мая 1703 года.",name:"Saint Petersburg",pictures:[{src:"https://loremflickr.com/248/152?random=40",description:"Фото города 1"},{src:"https://loremflickr.com/248/152?random=41",description:"Фото города 2"},{src:"https://loremflickr.com/248/152?random=42",description:"Фото города 3"},{src:"https://loremflickr.com/248/152?random=43",description:"Фото города 4"}]}];var N=n(607),j=n.n(N);M().extend(j());const R={everything:t=>t,future:t=>t.filter((t=>{return(e=t.dateFrom)&&M()(e).isAfter(M()(),"D");var e})),present:t=>t.filter((t=>{return e=t.dateFrom,n=t.dateTo,M()().isBetween(M()(e),M()(n));var e,n})),past:t=>t.filter((t=>{return(e=t.dateFrom)&&M()(e).isBefore(M()(),"D");var e}))},q=document.querySelector(".page-header"),U=document.querySelector(".page-main"),W=document.querySelector(".trip-main"),Z=q.querySelector(".trip-controls__filters"),z=U.querySelector(".trip-events"),J=new class{#p=function(){return Y}();#n=function(){return C}();#i=function(){return B}();get points(){return this.#p}get offers(){return this.#n}get destinations(){return this.#i}},X=new class{#h=null;#m=null;#v=new H;#_=null;#n=null;#i=null;constructor(t){let{tripInfoContainer:e,pointsModel:n}=t;this.#h=e,this.#m=n}init(){this.#_=[...this.#m.points],this.#n=[...this.#m.offers],this.#i=[...this.#m.destinations],this.#y()}#$(t,n){const i=function(t){const e=new Set(t),n=Array.from(e);return 1===n.length?t[0]:n.length>3?[t[0],["..."],t[t.length-1]]:[t[0],t.find((e=>e!==t[0]&&e!==t[t.length-1])),t[t.length-1]]}(function(t,e){return function(t){return t.sort(((t,e)=>M()(t.dateFrom)>M()(e.dateFrom)?1:-1))}(t).map((t=>t.destination)).map((t=>e.find((e=>e.id===t)).name))}(t,n));e(new P(i),this.#v.element.querySelector(".trip-info__main"))}#b(t){const n=function(t){return t.length>0?[E(t[0].dateFrom,"MMMM DD"),E(t[t.length-1].dateTo,"MMMM DD")]:""}(t);e(new I(n),this.#v.element.querySelector(".trip-info__main"))}#g(t,n){const i=function(t,e){if(t.length<1)return"";const n=t.map((t=>t.basePrice)).reduce(((t,e)=>t+e)),i=t.map((t=>A(e,t.type)));let s=0;for(let e=0;e<t.length;e++)t[e].offers.map((t=>i[e].find((e=>e.id===t)))).forEach((t=>s+=t.price));return n+s}(t,n);e(new O(i),this.#v.element)}#y(){e(this.#v,this.#h,t.AFTERBEGIN),this.#$(this.#_,this.#i),this.#b(this.#_),this.#g(this.#_,this.#n)}}({tripInfoContainer:W,pointsModel:J}),G=new class{#M=null;#m=null;#w=new x;#S=new F;#_=null;#n=null;#i=null;constructor(t){let{listContainer:e,pointsModel:n}=t;this.#M=e,this.#m=n}init(){this.#_=[...this.#m.points],this.#n=[...this.#m.offers],this.#i=[...this.#m.destinations],this.#D()}#E(t){const n=t=>{"Escape"===t.key&&(t.preventDefault(),o(),document.removeEventListener("keydown",n))},s=new T({point:t,destinations:this.#i,onEditClick:()=>{i(r,s),document.addEventListener("keydown",n)}}),r=new k({point:t,offers:this.#n,destinations:this.#i,onSubmitForm:()=>{o(),document.removeEventListener("keydown",n)},onCloseForm:()=>{o(),document.removeEventListener("keydown",n)}});function o(){i(s,r)}e(s,this.#w.element)}#A(){e(this.#S,this.#M)}#D(){e(this.#w,this.#M);for(let t=0;t<this.#_.length;t++)this.#E(this.#_[t]);0===this.#_.length&&this.#A()}}({listContainer:z,pointsModel:J}),V=(K=J.points,Object.entries(R).map((t=>{let[e,n]=t;return{type:e,isEnable:n(K).length>0}})));var K;e(new class extends ${#k=null;constructor(t){let{filters:e}=t;super(),this.#k=e}get template(){return`\n    <form class="trip-filters" action="#" method="get">\n      ${this.#k.map((t=>function(t){let{type:e,isEnable:n}=t;return`\n    <div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}" ${i=n,i?"":"disabled"}>\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n    </div>\n  `;var i}(t))).join("")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>`}}({filters:V}),Z),e(new class extends ${get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}},z),X.init(),G.init()})()})();
//# sourceMappingURL=bundle.aa53b8c8c8c5983cea06.js.map