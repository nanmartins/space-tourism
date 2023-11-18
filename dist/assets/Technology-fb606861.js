import{al as V,r,l as w,a8 as C,w as m,e as I,a9 as B,aa as N,ab as T,E as a,ad as t,am as p,ac as s,an as S,S as W,aj as A,ak as P}from"./index-02284f15.js";import{_ as z}from"./tag-6e4787c1.js";import{V as M,a as i}from"./VRow-88cbd0af.js";const j="/assets/launch-vehicle-7165cee7.jpg",b="/assets/launch-vehicle-landscape-37b2246f.jpg",O="/assets/space-capsule-c67ebf87.jpg",R="/assets/space-capsule-landscape-2e8d59ba.jpg",q="/assets/spaceport-8f5c81cf.jpg",U="/assets/spaceport-landscape-c4258e76.jpg";const k=o=>(A("data-v-8cd15f34"),o=o(),P(),o),X={class:"technology-view"},D=k(()=>s("div",{class:"tech-device-title"},[s("h2",{class:"tech-left-device-name font-barlow-c text-uppercase"},[s("span",{class:"font-barlow-c pr-2"},"03"),p(" Space launch 101")])],-1)),F=k(()=>s("h3",{class:"tech-left-terminology font-barlow-c"},"the terminology...",-1)),G={class:"tech-left-techname font-bellefair text-uppercase"},H={class:"tech-left-techdesc font-barlow"},J=["src"],K={__name:"Technology",setup(o){const h=V(),n=r(window.innerWidth),u=()=>{n.value=window.innerWidth,l()};w(()=>{u(),window.addEventListener("resize",u),l()}),C(()=>{window.removeEventListener("resize",u)}),m(n,()=>{l()});const d=r({name:"Launch vehicle",images:{portrait:"./assets/technology/image-launch-vehicle-portrait.jpg",landscape:"./assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"}),x={"Launch-vehicle":j,Spaceport:q,"Space-capsule":O},E={"Launch-vehicle":b,Spaceport:U,"Space-capsule":R},g=n.value<1280?r(b):r(j),l=()=>{const e=h.path.split("/"),c=e[e.length-1];n.value<1280?g.value=E[c]:g.value=x[c]};m(()=>h.path,l,{immediate:!0});const v=()=>{const e=_(y.value);d.value=L.technology.find(c=>c.name===e)},_=e=>e?e.replace(/-/g," "):"",y=I(()=>_(h.params.name));m(()=>y.value,v),w(v);const L={technology:[{name:"Launch vehicle",images:{portrait:"./assets/technology/image-launch-vehicle-portrait.jpg",landscape:"./assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"Spaceport",images:{portrait:"./assets/technology/image-spaceport-portrait.jpg",landscape:"./assets/technology/image-spaceport-landscape.jpg"},description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{name:"Space capsule",images:{portrait:"./assets/technology/image-space-capsule-portrait.jpg",landscape:"./assets/technology/image-space-capsule-landscape.jpg"},description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}]};return(e,c)=>{const f=B("router-link");return N(),T("div",X,[D,a(M,{class:"tech-main-div"},{default:t(()=>[a(i,{cols:"12",lg:"6",xl:"5",class:"tech-left-techinfo-div"},{default:t(()=>[a(i,{cols:"auto",class:"tech-nav-links d-flex font-bellefair"},{default:t(()=>[a(f,{to:"/technology/Launch-vehicle",class:"nav-links d-flex justify-center align-center"},{default:t(()=>[p("1")]),_:1}),a(f,{to:"/technology/Spaceport",class:"nav-links d-flex justify-center align-center"},{default:t(()=>[p("2")]),_:1}),a(f,{to:"/technology/Space-capsule",class:"nav-links d-flex justify-center align-center"},{default:t(()=>[p("3")]),_:1})]),_:1}),a(i,{cols:"auto",class:"tech-left-techinfo"},{default:t(()=>[F,s("h1",G,S(d.value.name),1),s("p",H,S(d.value.description),1)]),_:1})]),_:1}),a(i,{cols:"12",lg:"4",xl:"5",class:"tech-rigth-img-container"},{default:t(()=>[s("img",{src:W(g),class:"tech-right-img",alt:""},null,8,J)]),_:1})]),_:1})])}}},$=z(K,[["__scopeId","data-v-8cd15f34"]]);export{$ as default};
