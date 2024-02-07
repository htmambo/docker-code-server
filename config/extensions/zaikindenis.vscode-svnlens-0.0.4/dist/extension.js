(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",i="minute",s="hour",a="day",o="week",u="month",c="quarter",d="year",f="date",h="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},v=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},p={s:v,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+v(n,2,"0")+":"+v(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,u),s=r-i<0,a=e.clone().add(n+(s?-1:1),u);return+(-(n+(r-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:o,d:a,D:f,h:s,m:i,s:n,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",M={};M[g]=m;var D=function(t){return t instanceof Y},w=function t(e,r,n){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),r&&(M[s]=r,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!n&&i&&(g=i),i||!n&&g},y=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new Y(r)},S=p;S.l=w,S.i=D,S.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var Y=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var r=y(t);return this.startOf(e)<=r&&r<=this.endOf(e)},v.isAfter=function(t,e){return y(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<y(t)},v.$g=function(t,e,r){return S.u(t)?this[e]:this.set(r,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var r=this,c=!!S.u(e)||e,h=S.p(t),l=function(t,e){var n=S.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return c?n:n.endOf(a)},$=function(t,e){return S.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,v=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case d:return c?l(1,0):l(31,11);case u:return c?l(1,v):l(0,v+1);case o:var M=this.$locale().weekStart||0,D=(m<M?m+7:m)-M;return l(c?p-D:p+(6-D),v);case a:case f:return $(g+"Hours",0);case s:return $(g+"Minutes",1);case i:return $(g+"Seconds",2);case n:return $(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var o,c=S.p(t),h="set"+(this.$u?"UTC":""),l=(o={},o[a]=h+"Date",o[f]=h+"Date",o[u]=h+"Month",o[d]=h+"FullYear",o[s]=h+"Hours",o[i]=h+"Minutes",o[n]=h+"Seconds",o[r]=h+"Milliseconds",o)[c],$=c===a?this.$D+(e-this.$W):e;if(c===u||c===d){var m=this.clone().set(f,1);m.$d[l]($),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,c){var f,h=this;r=Number(r);var l=S.p(c),$=function(t){var e=y(h);return S.w(e.date(e.date()+Math.round(t*r)),h)};if(l===u)return this.set(u,this.$M+r);if(l===d)return this.set(d,this.$y+r);if(l===a)return $(1);if(l===o)return $(7);var m=(f={},f[i]=t,f[s]=e,f[n]=1e3,f)[l]||1,v=this.$d.getTime()+r*m;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,d=r.meridiem,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},m=d||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return f(r.monthsShort,o,c,3);case"MMMM":return f(c,o);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(r.weekdaysMin,e.$W,u,2);case"ddd":return f(r.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var l,$=this,m=S.p(f),v=y(r),p=(v.utcOffset()-this.utcOffset())*t,g=this-v,M=function(){return S.m($,v)};switch(m){case d:l=M()/12;break;case u:l=M();break;case c:l=M()/3;break;case o:l=(g-p)/6048e5;break;case a:l=(g-p)/864e5;break;case s:l=g/e;break;case i:l=g/t;break;case n:l=g/1e3;break;default:l=g}return h?l:S.a(l)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=w(t,e,!0);return n&&(r.$L=n),r},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),x=Y.prototype;return y.prototype=x,[["$ms",r],["$s",n],["$m",i],["$H",s],["$W",a],["$M",u],["$y",d],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,Y,y),t.$i=!0),y},y.locale=w,y.isDayjs=D,y.unix=function(t){return y(1e3*t)},y.en=M[g],y.Ls=M,y.p={},y}()},176:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,r,n){var i=r.prototype,s=i.format;n.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var r=this.$locale().formats,n=function(e,r){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var s=i&&i.toUpperCase();return n||r[i]||t[i]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))}(e,void 0===r?{}:r);return s.call(this,n)}}}()},496:t=>{"use strict";t.exports=require("vscode")},81:t=>{"use strict";t.exports=require("child_process")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,r),s.exports}var n={};(()=>{"use strict";var t=n;Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const e=r(81),i=r(496),s=r(484),a=r(176);s.extend(a);const o=i.window.createTextEditorDecorationType({});let u,c,d,f,h="";const l=t=>{let r=[];if(h!==t.fsPath)try{const n=i.workspace.getWorkspaceFolder(t)?.uri.fsPath||".";h=t.fsPath,r=(0,e.execSync)("svn blame -v "+i.workspace.asRelativePath(t,!1),{cwd:n}).toString().split("\n")}catch(t){}return r.map((t=>(t=>{const e=RegExp(/ *(\d+) +([\.\w]+) +(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4} \(.*\d\)) +(.*)/g),r=t.matchAll(e).next().value;if(r){const t=r[1],e=r[2],n=s(r[3]).format(c);return d.replace(/(\$\{\s*author\s*\})/,e).replace(/(\$\{\s*date\s*\})/,n).replace(/(\$\{\s*revision\s*\})/,t)}return"未提交的更改"})(t)))},$=()=>{u=i.workspace.getConfiguration().get("svnlens.currentLine.enabled"),c=i.workspace.getConfiguration().get("svnlens.currentLine.dateFormat")??"ll",d=i.workspace.getConfiguration().get("svnlens.currentLine.format")??"${author}, ${date} • ⧟r${revision}",f=i.workspace.getConfiguration().get("svnlens.currentLine.updateTimout")??1e3};t.activate=function(t){let e=[];$();const r=i.commands.registerCommand("svnlens.updateBlame",(async()=>{i.window.activeTextEditor&&(e=l(i.window.activeTextEditor.document.uri))}));let n;t.subscriptions.push(r),i.workspace.onDidChangeConfiguration((t=>{$()})),i.window.onDidChangeActiveTextEditor((t=>{t&&(e=l(t.document.uri))})),i.workspace.onDidChangeTextDocument((t=>{clearTimeout(n),n=setTimeout((()=>{h="",e=l(t.document.uri)}),f)})),i.window.onDidChangeTextEditorSelection((t=>{if(u){if(t.textEditor.document.isDirty)return void t.textEditor.setDecorations(o,[]);const r=new i.ThemeColor("svnlens.blameForegroundColor"),n=t.textEditor.document.uri;0===e.length&&(e=l(n)),t.textEditor.setDecorations(o,t?.selections.map((t=>{const n=t.active.line;return{renderOptions:{after:{contentText:e[n],margin:"2rem"},light:{after:{color:r}},dark:{after:{color:r}}},range:new i.Range(new i.Position(n,1024),new i.Position(n,1024))}})))}}))},t.deactivate=function(){}})(),module.exports=n})();
