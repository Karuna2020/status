(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{253:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c}));const r=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let n;t&&(n=e.reduce((e,n)=>(e[n]=t(`statuses.${n}`),e),{}));return{keys:e,i18nKeys:n,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},c=(t,e)=>{const n=r(t);return{title:n.i18nKeys[e],icon:n.icons[e]}}},254:function(t,e,n){"use strict";var r=n(64);n.n(r).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},255:function(t,e,n){"use strict";var r=n(64);n.n(r).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},256:function(t,e,n){"use strict";var r=n(64);n.n(r).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},257:function(t,e,n){"use strict";var r=n(64);n.n(r).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},258:function(t,e,n){"use strict";var r=n(64);n.n(r).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},259:function(t,e,n){"use strict";n(65),n(38),n(71);var r={props:{date:{type:String,required:!0},includeUTC:{type:Boolean,default:!0},format:{default:"short",validator:function(t){return["short","long","month"].includes(t)}}},computed:{label:function(){var t=this.$t.bind(this),e=this.$statusfy.dates.parse(this.date),n=this.includeUTC?t("dates.formats.".concat(this.format)):t("dates.formats.".concat(this.format)).replace(" UTC","");return this.$statusfy.dates.format(e,n,this.$i18n.locale)}}},c=n(8),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])}),[],!1,null,null,null);e.a=component.exports},260:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(path,t={}){const e=Object.keys(t);let n,r=`${this.basePath}${path}`;if(this.isStatic)n=e.map(e=>`${e}-${t[e]}`).join("."),r="/static/content"+r,r+=n?`.${n}`:"",r+=`.${this.lang}.json`;else{const n=e.map(e=>`${e}=${t[e]}`).join("&");r+=n?`?${n}`:""}return r}async getSystems(){return await this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return await this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return await this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return await this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return await this.axios.$get(this.buildUrl("/incidents/timeline"))}async getScheduled(){return await this.axios.$get(this.buildUrl("/scheduled"))}}},261:function(t,e,n){"use strict";n(28),n(35),n(22),n(65),n(262),n(69),n(70),n(37),n(25);var r=n(31),c=n(259),l=n(253),o=(n(254),n(255),n(256),n(257),n(258),n(64));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n.n(o).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var h={components:{NiceDate:c.a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},scheduled:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return[0,3,4].includes(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(l.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({value:this.incident.resolved},Object(l.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var n=this.$refs.content.querySelectorAll(".update-block"),r=this.$refs.content.querySelectorAll("a.external"),c=this.$refs["external-link-icon"].$el;n.forEach((function(n,i){var r=n.querySelectorAll(".update-block-date")[0],c=t.$statusfy.dates.parse(r.innerHTML);r.innerHTML=t.$statusfy.dates.format(c,e("dates.formats.long"),t.$i18n.locale)})),r.forEach((function(t,i){t.appendChild(c)}))}},methods:{getScheduledEndDate:function(){return this.$statusfy.dates.parse(this.incident.scheduled).add(this.incident.duration,"m").toISOString()}}},f=n(8),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incident",class:t.incident.severity+(t.resolved.value?" resolved":" unresolved")+(t.incident.scheduled?" scheduled":"")},[n("div",{staticClass:"incident-header",class:"level-"+t.level},[t.incident.scheduled?n("div",{staticClass:"incident-title"},[[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])]],2):n("div",{staticClass:"incident-title"},[n("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?n("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[n("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),n("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,(function(e){return n("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])})),0)]),t._v(" "),n("div",{staticClass:"incident-subtitle"},[t.incident.scheduled?t._e():n("div",{staticClass:"status"},[n("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),t.incident.scheduled?n("div",[n("nice-date",{attrs:{date:t.incident.scheduled,"include-u-t-c":!1,format:"long"}}),t._v("\n       - \n      "),n("nice-date",{attrs:{date:t.getScheduledEndDate(),"include-u-t-c":!1,format:"long"}}),t._v("\n      (UTC)\n    ")],1):n("div",[n("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),n("div",{staticClass:"incident-body"},[t.summary?n("div",[t.incident.description?n("div",[t._v("\n        "+t._s(t.incident.description)+"\n      ")]):t._e()]):n("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),n("div",{staticClass:"hidden"},[n("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])}),[],!1,null,null,null);e.a=component.exports},262:function(t,e,n){"use strict";var r=n(10),c=n(6),l=n(94),o=n(21),d=n(13),h=n(30),f=n(178),v=n(66),m=n(7),y=n(95),_=n(67).f,w=n(34).f,$=n(15).f,C=n(263).trim,x=c.Number,O=x.prototype,j="Number"==h(y(O)),I=function(t){var e,n,r,c,l,o,d,code,h=v(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=C(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+h}for(o=(l=h.slice(2)).length,d=0;d<o;d++)if((code=l.charCodeAt(d))<48||code>c)return NaN;return parseInt(l,r)}return+h};if(l("Number",!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(j?m((function(){O.valueOf.call(n)})):"Number"!=h(n))?f(new x(I(e)),n,S):I(e)},k=r?_(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)d(x,N=k[E])&&!d(S,N)&&$(S,N,w(x,N));S.prototype=O,O.constructor=S,o(c,"Number",S)}},263:function(t,e,n){var r=n(20),c="["+n(264)+"]",l=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},264:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},282:function(t,e,n){"use strict";n.r(e);n(28),n(68),n(49),n(24);var r=n(4),c=n(260),l=n(261),o=n(253),d={components:{Incident:l.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.params,l=new c.a(n.$axios,n.i18n.locale),e.next=4,l.getIncident(r.id);case 4:return o=e.sent,e.abrupt("return",{incident:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.$t.bind(this),e=this.incident.description;if(!e){var n=this.incident.resolved?t("incidents.resolved"):t("incidents.unresolved"),r=Object(o.a)(t,this.incident.severity).title;e="[".concat(n,"] ").concat(t("incidents.incident")," #").concat(this.incident.id,": ").concat(this.incident.title," - ").concat(r)}return{title:"".concat(t("incidents.incident"),": ").concat(this.incident.title),meta:[{hid:"description",name:"description",content:e}]}},validate:function(t){var e=t.params;return/^[a-z0-9]+$/i.test(e.id)}},h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-center"},[n("h1",{staticClass:"font-medium mb-5"},[t._v("\n      "+t._s(t.incident.title)+"\n    ")])]),t._v(" "),n("incident",{key:t.incident.id,attrs:{incident:t.incident,level:0}}),t._v(" "),n("div",{staticClass:"flex flex-col sm:flex-row items-center justify-between sm:pt-2 pt-4"},[n("div",{staticClass:"text-center"},[n("nuxt-link",{staticClass:"btn mb-4",attrs:{to:t.localePath("history")}},[t._v("\n        "+t._s(t.$t("incidents.incidents-history"))+"\n      ")])],1),t._v(" "),n("div",{staticClass:"text-center"},[n("nuxt-link",{staticClass:"btn mb-4",attrs:{to:t.localePath("index")}},[t._v("\n        "+t._s(t.$t("incidents.current-status"))+"\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);