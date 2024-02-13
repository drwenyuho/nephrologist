"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[648],{5944:(e,t,r)=>{r.d(t,{A:()=>u});var s=r(1504),a=r(8264);const n=["zero","one","two","few","many","other"];function c(e){return n.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.c)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}},7420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var s=r(1504),a=r(8264),n=r(9024),c=r(6952),l=r(867),o=r(4357),u=r(5944),h=r(7125),i=r(5592),m=r(3664),d=r(6280);const p=function(){const e=(0,m.c)(),t=(0,i.Uz)(),r=(0,i.IT)(),{siteConfig:{baseUrl:s}}=(0,a.c)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l&&Array.isArray(d.ms)&&d.ms.some((e=>"string"==typeof e?e===l:e.path===l))?l:"",searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var g=r(4352),x=r(9880),f=r(2791),y=r(4436),S=r(2164),j=r(3265),C=r(2852);const I={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var v=r(9132),w=r(7624);function R(){const{siteConfig:{baseUrl:e},i18n:{currentLocale:t}}=(0,a.c)(),{selectMessage:r}=(0,u.A)(),{searchValue:n,searchContext:l,searchVersion:i,updateSearchPath:m,updateSearchContext:f}=p(),[y,S]=(0,s.useState)(n),[C,R]=(0,s.useState)(),[b,A]=(0,s.useState)(),_=`${e}${i}`,F=(0,s.useMemo)((()=>y?(0,o.G)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,o.G)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,s.useEffect)((()=>{m(y),C&&(y?C(y,(e=>{A(e)})):A(void 0))}),[y,C]);const $=(0,s.useCallback)((e=>{S(e.target.value)}),[]);return(0,s.useEffect)((()=>{n&&n!==y&&S(n)}),[n]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=!Array.isArray(d.ms)||l||d.o3?await(0,g.i)(_,l):{wrappedIndexes:[],zhDictionary:[]};R((()=>(0,x.r)(e,t,100)))}()}),[l,_]),(0,w.jsxs)(s.Fragment,{children:[(0,w.jsxs)(c.c,{children:[(0,w.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,w.jsx)("title",{children:F})]}),(0,w.jsxs)("div",{className:"container margin-vert--lg",children:[(0,w.jsx)("h1",{children:F}),(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:(0,h.c)("col",{[I.searchQueryColumn]:Array.isArray(d.ms),"col--9":Array.isArray(d.ms),"col--12":!Array.isArray(d.ms)}),children:(0,w.jsx)("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:$,value:y,autoComplete:"off",autoFocus:!0})}),Array.isArray(d.ms)?(0,w.jsx)("div",{className:(0,h.c)("col","col--3","padding-left--none",I.searchContextColumn),children:(0,w.jsxs)("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:l,onChange:e=>f(e.target.value),children:[d.o3&&(0,w.jsx)("option",{value:"",children:(0,o.G)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"})}),d.ms.map((e=>{const{label:r,path:s}=(0,v.e)(e,t);return(0,w.jsx)("option",{value:s,children:r},s)}))]})}):null]}),!C&&y&&(0,w.jsx)("div",{children:(0,w.jsx)(j.c,{})}),b&&(b.length>0?(0,w.jsx)("p",{children:r(b.length,(0,o.G)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:b.length}))}):(0,w.jsx)("p",{children:(0,o.G)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,w.jsx)("section",{children:b&&b.map((e=>(0,w.jsx)(P,{searchResult:e},e.document.i)))})]})]})}function P(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(d.Wm&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,w.jsxs)("article",{className:I.searchResultItem,children:[(0,w.jsx)("h2",{children:(0,w.jsx)(l.c,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.s)(h,a):(0,y.K)(h,(0,S.A)(n,"t"),a,100)}})}),u.length>0&&(0,w.jsx)("p",{className:I.searchResultItemPath,children:(0,C._)(u)}),o&&(0,w.jsx)("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.K)(t.t,(0,S.A)(n,"t"),a,100)}})]})}const b=function(){return(0,w.jsx)(n.c,{children:(0,w.jsx)(R,{})})}}}]);