<template>
  <div class="iq-sidebar" >
    <div class="iq-sidebar-logo d-flex justify-content-between">
      <router-link :to="homeURL" class="header-logo">
        <img :src="logo" v-if="onlyLogo" class="img-fluid rounded-normal" alt="logo">
        <span v-if="onlyLogoText" class="text-primary text-uppercase">{{ appName }}</span>
      </router-link>
      <div class="iq-menu-bt-sidebar" v-if="toggleButton">
        <div class="iq-menu-bt align-self-center">
          <div class="wrapper-menu" @click="miniSidebar">
            <div class="main-circle"><i class="las la-bars"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar-scrollbar">
      <nav class="iq-sidebar-menu">
        <CollapseMenu :items="items" :open="true" :horizontal="horizontal" :sidebarGroupTitle="sidebarGroupTitle"/>
      </nav>
      <div class="p-3"></div>
       <div id="sidebar-bottom" class="p-3 position-relative">
                  <iq-card>
                     <div class="iq-card-body">
                        <div class="sidebarbottom-content">
                           <div class="image"><img src="../../../assets/images/page-img/side-bkg.png" alt=""></div>
                           <button type="submit" class="btn w-100 btn-primary mt-4 view-more">Become Membership</button>
                        </div>
                     </div>
                  </iq-card>
          </div>
    </div>
  </div>
  <!-- TOP Nav Bar -->
</template>

<script>
import CollapseMenu from '../menus/CollapseMenu'
import { APPNAME } from '../../../config/pluginInit'
export default {
  name: 'Sidebar',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'shop.home' }) },
    items: { type: Array },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    horizontal: { type: Boolean },
    toggleButton: { type: Boolean, default: true },
    logoShow: { type: Boolean, default: true },
    onlyLogo: { type: Boolean, default: false },
    onlyLogoText: { type: Boolean, default: false },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  components: {
    CollapseMenu
  },
  mounted () {
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    }
  },
  data () {
    return {
      appName: APPNAME
    }
  }
}
</script>
