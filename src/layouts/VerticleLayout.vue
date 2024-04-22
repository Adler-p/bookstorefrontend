<template>
  <div>
    <Loader />
    <Customizer @onLogo="changeLogo" @toggle="sidebarMini" @animationChange="routerAnimationChange" />
    <div class="wrapper">
      <!-- Sidebar  -->
      <Sidebar :items="verticalMenu" :logo="logo" :onlyLogo="onlyLogo" :onlyLogoText="onlyLogoText" @toggle="sidebarMini" :toggleButton="toggleSideIcon" :sidebarGroupTitle="sidebarGroupTitle" />
      <!-- TOP Nav Bar -->
      <DefaultNavBar title="Dashboard" :homeURL="{ name: 'shop.home' }" :sidebarGroupTitle="sidebarGroupTitle" @toggle="sidebarMini" :logo="logo">
        <template slot="responsiveRight">
         <ul class="navbar-nav ml-auto navbar-list">
                        <li class="nav-item nav-icon search-content">
                           <a href="#" class="search-toggle iq-waves-effect text-gray rounded">
                              <i class="ri-search-line"></i>
                           </a>
                           <form action="#" class="search-box p-0">
                              <input type="text" class="text search-input" placeholder="Type here to search...">
                              <a class="search-link" href="#"><i class="ri-search-line"></i></a>
                           </form>
                        </li>
                        <li class="nav-item nav-icon">
                           <a href="#" class="search-toggle iq-waves-effect text-gray rounded">
                           <i class="ri-notification-2-line"></i>
                           <span class="bg-primary dots"></span>
                           </a>
                           <div class="iq-sub-dropdown">
                              <div class="iq-card shadow-none m-0">
                                 <div class="iq-card-body p-0">
                                    <div class="bg-primary p-3">
                                       <h5 class="mb-0 text-white">All Notifications<small class="badge  badge-light float-right pt-1">4</small></h5>
                                    </div>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/01.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Emma Watson Barry</h6>
                                             <small class="float-right font-size-12">Just Now</small>
                                             <p class="mb-0">95 MB</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/02.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">New customer is join</h6>
                                             <small class="float-right font-size-12">5 days ago</small>
                                             <p class="mb-0">Cyst Barry</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/03.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Two customer is left</h6>
                                             <small class="float-right font-size-12">2 days ago</small>
                                             <p class="mb-0">Cyst Barry</p>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card" >
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/04.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">New Mail from Fenny</h6>
                                             <small class="float-right font-size-12">3 days ago</small>
                                             <p class="mb-0">Cyst Barry</p>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li class="nav-item nav-icon dropdown">
                           <a href="#" class="search-toggle iq-waves-effect text-gray rounded">
                           <i class="ri-mail-line" aria-hidden="true"></i>
                           <span class="bg-primary count-mail"></span>
                           </a>
                           <div class="iq-sub-dropdown">
                              <div class="iq-card shadow-none m-0">
                                 <div class="iq-card-body p-0 ">
                                    <div class="bg-primary p-3">
                                       <h5 class="mb-0 text-white">All Messages<small class="badge  badge-light float-right pt-1">5</small></h5>
                                    </div>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/01.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Barry Emma Watson</h6>
                                             <small class="float-left font-size-12">13 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/02.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Lorem Ipsum Watson</h6>
                                             <small class="float-left font-size-12">20 Apr</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/03.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Why do we use it?</h6>
                                             <small class="float-left font-size-12">30 Jun</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/04.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Variations Passages</h6>
                                             <small class="float-left font-size-12">12 Sep</small>
                                          </div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="avatar-40 rounded" src="../assets/images/user/05.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Lorem Ipsum generators</h6>
                                             <small class="float-left font-size-12">5 Dec</small>
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li class="nav-item nav-icon dropdown">
                           <a href="#" class="search-toggle iq-waves-effect text-gray rounded">
                           <i class="ri-shopping-cart-2-line"></i>
                           <span class="badge badge-danger count-cart rounded-circle">4</span>
                           </a>
                           <div class="iq-sub-dropdown">
                              <div class="iq-card shadow-none m-0">
                                 <div class="iq-card-body p-0 toggle-cart-info">
                                    <div class="bg-primary p-3">
                                       <h5 class="mb-0 text-white">All Carts<small class="badge  badge-light float-right pt-1">4</small></h5>
                                    </div>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="rounded" src="../assets/images/cart/01.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Night People book</h6>
                                             <p class="mb-0">$32</p>
                                          </div>
                                          <div class="float-right font-size-24 text-danger"><i class="ri-close-fill"></i></div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="rounded" src="../assets/images/cart/02.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">The Sin Eater Book</h6>
                                             <p class="mb-0">$40</p>
                                          </div>
                                          <div class="float-right font-size-24 text-danger"><i class="ri-close-fill"></i></div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="rounded" src="../assets/images/cart/03.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">the Orange Tree</h6>
                                             <p class="mb-0">$30</p>
                                          </div>
                                          <div class="float-right font-size-24 text-danger"><i class="ri-close-fill"></i></div>
                                       </div>
                                    </a>
                                    <a href="#" class="iq-sub-card">
                                       <div class="media align-items-center">
                                          <div class="">
                                             <img class="rounded" src="../assets/images/cart/04.jpg" alt="">
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Harsh Reality book</h6>
                                             <p class="mb-0">$25</p>
                                          </div>
                                          <div class="float-right font-size-24 text-danger"><i class="ri-close-fill"></i></div>
                                       </div>
                                    </a>
                                    <div class="d-flex align-items-center text-center p-3">
                                       <a class="btn btn-primary mr-2 iq-sign-btn text-white" href="#" role="button">View Cart</a>
                                       <a class="btn btn-primary iq-sign-btn text-white" href="#" role="button">Shop now</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                        <li class="line-height pt-3">
                           <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                              <img src="../assets/images/user/1.jpg" class="img-fluid rounded-circle mr-3" alt="user">
                              <div class="caption">
                                 <h6 class="mb-1 line-height">Barry Tech</h6>
                                 <p class="mb-0 text-primary">$20.32</p>
                              </div>
                           </a>
                           <div class="iq-sub-dropdown iq-user-dropdown">
                              <div class="iq-card shadow-none m-0">
                                 <div class="iq-card-body p-0 ">
                                    <div class="bg-primary p-3">
                                       <h5 class="mb-0 text-white line-height">Hello Barry Tech</h5>
                                       <span class="text-white font-size-12">Available</span>
                                    </div>
                                    <router-link to="/user/profile" class="iq-sub-card iq-bg-primary-hover">
                                       <div class="media align-items-center">
                                          <div class="rounded iq-card-icon iq-bg-primary">
                                             <i class="ri-file-user-line"></i>
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">My Profile</h6>
                                             <p class="mb-0 font-size-12">View personal profile details.</p>
                                          </div>
                                       </div>
                                    </router-link>
                                    <router-link to="/user/profile-edit" class="iq-sub-card iq-bg-primary-hover">
                                       <div class="media align-items-center">
                                          <div class="rounded iq-card-icon iq-bg-primary">
                                             <i class="ri-profile-line"></i>
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Edit Profile</h6>
                                             <p class="mb-0 font-size-12">Modify your personal details.</p>
                                          </div>
                                       </div>
                                    </router-link>
                                    <router-link to="/account-setting" class="iq-sub-card iq-bg-primary-hover">
                                       <div class="media align-items-center">
                                          <div class="rounded iq-card-icon iq-bg-primary">
                                             <i class="ri-account-box-line"></i>
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Account settings</h6>
                                             <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                          </div>
                                       </div>
                                    </router-link>
                                    <router-link to="/privacy-setting" class="iq-sub-card iq-bg-primary-hover">
                                       <div class="media align-items-center">
                                          <div class="rounded iq-card-icon iq-bg-primary">
                                             <i class="ri-lock-line"></i>
                                          </div>
                                          <div class="media-body ml-3">
                                             <h6 class="mb-0 ">Privacy Settings</h6>
                                             <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                                          </div>
                                       </div>
                                    </router-link>
                                    <div class="d-inline-block w-100 text-center p-3">
                                       <router-link class="bg-primary iq-sign-btn" to="/auth/sign-in1" role="button">Sign out<i class="ri-login-box-line ml-2"></i></router-link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </li>
                     </ul>
        </template>
      </DefaultNavBar>
      <!-- TOP Nav Bar END -->
      <div id="content-page" class="content-page">
        <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
                    :leave-active-class="`animated ${animated.exit}`">
          <router-view/>
        </transition>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
<script>
import { core } from '../config/pluginInit'
import { Users } from '../StaticData/api/chat'
import { mapActions, mapGetters } from 'vuex'
import Loader from '../components/core/loader/Loader'
import Sidebar from '../components/core/sidebars/Sidebar'
import DefaultNavBar from '../components/core/navbars/DefaultNavBar'
import SideBarItems from '../StaticData/json/SideBar'
import profile from '../assets/images/user/1.jpg'
import darkLoader from '../assets/images/darkMode/dark-logo.png'
import Customizer from './Components/Customizer'
import WhiteLogo from '../assets/images/logo.png'
import LayoutFooter from './Components/LayoutFooter'
export default {
  name: 'VerticleLayout',
  components: {
    LayoutFooter,
    Customizer,
    Loader,
    Sidebar,
    DefaultNavBar
  },
  mounted () {
    if (this.$route.name === undefined) {
      this.$router.push({ name: 'shop.home' })
    }
    this.layoutSetting(this.$route.name)
  },
  computed: {
    ...mapGetters({
      selectedLang: 'Setting/langState',
      langsOptions: 'Setting/langOptionState',
      darkMode: 'Setting/darkModeState',
      colors: 'Setting/colorState'
    }),
    toggleSideIcon () {
      let show = true
      switch (this.$route.name) {
        case 'dashboard.home-1':
        case 'dashboard.home-3':
        case 'dashboard.home-4':
        case 'dashboard.home-5':
        case 'dashboard.home-6':
          show = false
          break
      }
      return show
    }
  },
  watch: {
    '$route': function (to, from) {
      this.layoutSetting(to.name)
    }
  },
  // sidebarTicket
  data () {
    return {
      animated: { enter: 'fadeIn', exit: 'fadeOut' },
      verticalMenu: SideBarItems,
      userProfile: profile,
      onlyLogo: false,
      onlyLogoText: false,
      sidebarGroupTitle: true,
      logo: WhiteLogo,
      usersList: Users,
      rtl: false,
      SmallSidebarLogo: WhiteLogo,
      message: [
        { image: require('../assets/images/user/01.jpg'), name: 'Nik Emma Watson', date: '13 jan' },
        { image: require('../assets/images/user/02.jpg'), name: 'Greta Life', date: '14 Jun' },
        { image: require('../assets/images/user/03.jpg'), name: 'Barb Ackue', date: '16 Aug' },
        { image: require('../assets/images/user/03.jpg'), name: 'Anna Sthesia', date: '21 Sept' },
        { image: require('../assets/images/user/01.jpg'), name: 'Bob Frapples', date: '29 Sept' }
      ],
      notification: [
        { image: require('../assets/images/user/01.jpg'), name: 'Nik Emma Watson', date: '23 hour ago', description: 'Enjoy smart access to videos, games' },
        { image: require('../assets/images/user/02.jpg'), name: 'Greta Life', date: '14 hour ago', description: 'Google Chromecast: Enjoy a world of entertainment' },
        { image: require('../assets/images/user/03.jpg'), name: 'Barb Ackue', date: '16 hour ago', description: 'Dell Inspiron Laptop: Get speed and performance from' },
        { image: require('../assets/images/user/03.jpg'), name: 'Anna Sthesia', date: '21 hour ago', description: 'Deliver your favorite playlist anywhere in your home ' },
        { image: require('../assets/images/user/02.jpg'), name: 'Bob Frapples', date: '11 hour ago', description: 'MacBook Air features up to 8GB of memory, a fifth-generation' }
      ]
    }
  },
  methods: {
    layoutSetting (routeName) {
      this.onlyLogo = true
      this.onlyLogoText = true
      this.sidebarGroupTitle = true
      switch (routeName) {
        case 'dashboard.home-5':
          this.onlyLogoText = true
          this.onlyLogo = false
          break
        case 'dashboard.home-6':
          this.logo = WhiteLogo
          this.onlyLogo = true
          this.onlyLogoText = false
          this.sidebarGroupTitle = false
          break
        default:
          if (this.darkMode) {
            this.logo = darkLoader
          } else {
            this.logo = WhiteLogo
          }
          break
      }
    },
    changeLogo (e) {
      this.logo = e
    },
    sidebarMini () {
      core.triggerSet()
      this.$store.dispatch('Setting/miniSidebarAction')
    },
    logout () {
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'auth1.sign-in1' })
    },
    langChange (lang) {
      this.langChangeState(lang)
      this.$i18n.locale = lang.value
      document.getElementsByClassName('iq-show')[0].classList.remove('iq-show')
      if (lang.value === 'ar') {
        this.rtlAdd(lang)
      } else {
        this.rtlRemove(lang)
      }
    },
    routerAnimationChange (e) {
      this.animated = e
    },
    ...mapActions({
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction'
    })
  }
}
</script>
<style>
  @import url("../assets/css/custom.css");
  @import url("../assets/css/PriceSlider.css");
</style>
