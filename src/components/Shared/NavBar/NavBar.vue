<template>
   <div>
      <div class="navbar-fixed">
         <transition
                 @before-enter="beforeEnter"
                 @enter="enter"
                 @after-enter="afterEnter"
                 @enter-cancelled="enterCanceled"

                 @before-leave="beforeLeave"
                 @leave="leave"
                 @after-leave="afterLeave"
                 @leave-cancelled="leaveCanceled"
                 :css="false"
                 mode="out-in"
                 appear
         >
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
         </transition>
      </div>
      <app-side-nav :tabs="sideTabs" name="Foto4FunBox"/>
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
               {id: 'HomeDesk', name: 'STRONA GŁÓWNA', icon: 'credit_card', cls: 'material-icons left', url: '/'},
               {id: 'PacketsDesk', name: 'PAKIETY', icon: 'border_all', cls: 'material-icons right', url: '/Packets'}
            ],
            btnsRight: [
               {id: 'PromoDeks', name: 'PROMOCJE', icon: 'attach_money', cls: 'material-icons left', url: ''},
               {id: 'ContactDesk', name: 'KONTAKT', icon: 'call', cls: 'material-icons right', url: ''}
            ],
            sideTabs: [
               {id: 'HomeMobile', name: 'STRONA GŁÓWNA', icon: 'credit_card', url: ''},
               {id: 'PacketsMobile', name: 'PAKIETY', icon: 'border_all', url: ''},
               {id: 'PromoMobile', name: 'PROMOCJE', icon: 'attach_money', url: ''},
               {id: 'ContactMobile', name: 'KONTAKT', icon: 'call', url: ''}
            ],
            source: require('../../../assets/logo.svg'),
            elementWidth: 100,
         }
      },
      methods: {
         beforeEnter(el) {
            this.elementWidth = 0;
            el.style.opacity = this.elementWidth + '%';
            el.style.transform = 'translateY( 4rem )';

         },
         enter(el, done) {
            let round = 1;
            let trenslate = -4;
            const interval = setInterval(() => {
               el.style.opacity = (this.elementWidth + round * 10) + '%';
               trenslate += 0.4;
               el.style.transform = 'translateY(' + trenslate + 'rem )';

               round++;
               if (round > 10) {
                  clearInterval(interval);
                  done();
               }
               el.css("transform", "");
            }, 20);
         },
      }

   }
</script>

<style scoped>
   .nav-height {
      height: 100px;
   }

   .navbar {
   }
</style>
