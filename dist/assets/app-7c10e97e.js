import{aq as e}from"./index-02284f15.js";const n=e("app",{state:()=>({drawer:!1,isScreenSmall:window.innerWidth<=650,isTabletScreen:window.innerWidth<=1279}),actions:{toggleDrawer(){this.drawer=!this.drawer},updateScreenWidth(){this.isScreenSmall=window.innerWidth<=650,this.isTabletScreen=window.innerWidth<=1279},onMounted(){window.addEventListener("resize",this.updateScreenWidth)},onUnmounted(){window.removeEventListener("resize",this.updateScreenWidth)}}});export{n as u};
