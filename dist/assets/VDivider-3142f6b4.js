import{e as s,Q as u,J as C,ao as n,ap as g,p as m,L as h,g as x,M as f,D as k,j as i,E as b}from"./index-02284f15.js";import{m as y}from"./tag-6e4787c1.js";import{u as S}from"./VImg-4e99075a.js";function c(e){return C(()=>{const o=[],t={};if(e.value.background)if(n(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text){const r=g(t.backgroundColor);t.color=r,t.caretColor=r}}else o.push(`bg-${e.value.background}`);return e.value.text&&(n(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):o.push(`text-${e.value.text}`)),{colorClasses:o,colorStyles:t}})}function V(e,o){const t=s(()=>({text:u(e)?e.value:o?e[o]:null})),{colorClasses:r,colorStyles:a}=c(t);return{textColorClasses:r,textColorStyles:a}}function B(e,o){const t=s(()=>({background:u(e)?e.value:o?e[o]:null})),{colorClasses:r,colorStyles:a}=c(t);return{backgroundColorClasses:r,backgroundColorStyles:a}}const D=m({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...y(),...h()},"VDivider"),N=x()({name:"VDivider",props:D(),setup(e,o){let{attrs:t}=o;const{themeClasses:r}=f(e),{textColorClasses:a,textColorStyles:d}=V(k(e,"color")),v=s(()=>{const l={};return e.length&&(l[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),l});return S(()=>b("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},r.value,a.value,e.class],style:[v.value,d.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{N as V,c as a,B as b,V as u};
