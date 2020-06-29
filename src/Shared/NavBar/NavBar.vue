<template>
   <div>
      <nav class="indigo nav-height">
         <div class="nav-wrapper">
            <div class="container">
               <div class="row">
                  <app-navi-btns :btns="btnsLeft" class="col l5"/>
                  <app-side-nav-trigger class="col s1 m1 hide-on-large-only"/>
                  <app-logo :source="source" class="col l2 s9 m10"/>
                  <app-navi-btns :btns="btnsRight" class="col l5 right"/>
               </div>
            </div>
         </div>
      </nav>
      <app-side-nav :tabs="sideTabs"/>
   </div>
</template>

<script>
   import NaviBtns from "./Elements/NaviBtns";
   import Logo from "./Elements/Logo";
   import SideNavTrigger from "./Elements/SideNavTrigger";
   import SideNav from "./Elements/SideNav";

   export default {
      name: "NavBar",
      components: {
         appNaviBtns: NaviBtns,
         appLogo: Logo,
         appSideNavTrigger: SideNavTrigger,
         appSideNav: SideNav
      },
      data() {
         return {
            btnsLeft: [
               {id: 'HomeDesk', name: 'STRONA GŁÓWNA', icon: 'credit_card', cls: 'material-icons left'},
               {id: 'PacketsDesk', name: 'PAKIETY', icon: 'border_all', cls: 'material-icons right'}
            ],
            btnsRight: [
               {id: 'PromoDeks', name: 'PROMOCJE', icon: 'attach_money', cls: 'material-icons left'},
               {id: 'ContactDesk', name: 'KONTAKT', icon: 'call', cls: 'material-icons right'}
            ],
            sideTabs: [
               {id: 'HomeMobile', name: 'STRONA GŁÓWNA', icon: 'credit_card', url: ''},
               {id: 'PacketsMobile', name: 'PAKIETY', icon: 'border_all', url: ''},
               {id: 'PromoMobile', name: 'PROMOCJE', icon: 'attach_money', url: ''},
               {id: 'ContactMobile', name: 'KONTAKT', icon: 'call', url: ''}
            ],
            source: require('./../../assets/logo.svg')
         }
      }
   }
</script>

<style scoped>
   .nav-height {
      height: 100px;
   }
</style>
