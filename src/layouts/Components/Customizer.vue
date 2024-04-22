<template>
  <div>
    <RightSideBar toggleClass="setting-toggle" class="">
      <i class="fa fa-spinner fa-spin font-size-24" slot="icon" />
      <iq-card class="shadow-none">
        <template v-slot:body>
          <b-row>
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2 sub-color">Booksto Awesome Color <b-button variant="primary" size="sm" @click="reset">{{ $t('customizer.reset') }}</b-button></h4>
              <p class="sub-text">This color combo available inside whole template. You can change on your wish, Even you can create your own with limitless possibilities! </p>
              <div class="text-center">
                <div
                  v-for="(item,index) in colors"
                  :key="index"
                  class="d-inline-flex justify-content-between "
                >
                  <div
                    id="color-box"
                    :style="`background: ${item.primary};position: relative;width: 50px;height: 40px;float: left;border-radius: 5px; cursor: pointer;margin: 0 10px 10px 0;`"
                    @click="changeColor(item,$event)"
                    class="p-3 mx-1"
                    :class="item.primary == setColor ? 'iq-colormark' : '' "
                  ></div>
                </div>
              </div>
               <a target="_blank" class="btn btn-primary d-block mt-3 text-white" href="https://themeforest.net/item/booksto-ebook-admin-template/27928145">Purchase Now</a>
            </b-col>
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.colorMode') }}</h4>
              <div class="text-center d-flex">
                <img
                  :src="require('../../assets/images/customizer/light.png')"
                  alt="light"
                  @click="themeMode(false)"
                  class="img-fluid"
                  style="height: 160px;border: 2px solid var(--iq-primary)"
                />
                <img
                  :src="require('../../assets/images/customizer/dark.png')"
                  alt="dark"
                  @click="themeMode(true)"
                  class="img-fluid ml-2"
                  style="height: 160px;border: 2px solid var(--iq-primary)"
                />
              </div>
            </b-col>
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.rtlMode')}}</h4>
              <div class="text-center d-flex">
                <img
                  :src="require('../../assets/images/customizer/ltr.png')"
                  alt="ltr"
                  @click="rtlChange(false)"
                  class="img-fluid"
                  style="height: 160px;border: 2px solid var(--iq-primary)"
                />
                <img
                  :src="require('../../assets/images/customizer/rtl.png')"
                  alt="rtl"
                  @click="rtlChange(true)"
                  class="img-fluid ml-2"
                  style="height: 160px;border: 2px solid var(--iq-primary)"
                />
              </div>
            </b-col>
            <div class="border mt-4 mb-4 w-100" />
            <b-col cols="12" class="justify-content-between">
              <h4 class="text-left mb-2">{{ $t('customizer.routeAnimation') }}</h4>
              <div class="text-center d-flex">
                <b-form-radio-group
                  @change="animateChange"
                  id="radio-group-1"
                  v-model="animated"
                  :options="animateClass"
                  name="radio-options"
                ></b-form-radio-group>
              </div>
            </b-col>
          </b-row>
        </template>
      </iq-card>
    </RightSideBar>
  </div>
</template>
<script>
// import darkLoader from '../../assets/images/darkMode/dark-logo.gif'
// import loader from '../../assets/images/loader.gif'
import darkLogo from '../../assets/images/darkMode/dark-logo.png'
import Logo from '../../assets/images/logo.png'
import RightSideBar from '../../components/core/rightsidebar/RightSideBar'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Customizer',
  components: {
    RightSideBar
  },
  computed: {
    ...mapGetters({
      darkMode: 'Setting/darkModeState',
      colors: 'Setting/colorState'
    })
  },
  mounted () {
    this.updateRadio()
  },
  data () {
    return {
      setColor: '#0dd6b8',
      animated: { enter: 'fadeInUp', exit: 'fadeOutDown' },
      animateClass: [
        { value: { enter: 'fadeInUp', exit: 'fadeOutDown' }, text: 'Fade' },
        { value: { enter: 'zoomIn', exit: 'zoomOut' }, text: 'Zoom' },
        {
          value: { enter: 'slideInLeft', exit: 'slideOutRight' },
          text: 'Slide'
        },
        {
          value: { enter: 'rotateInDownLeft', exit: 'rotateOutDownLeft' },
          text: 'Roll'
        }
      ],
      logo: Logo,
      rtl: false,
      dark: false,
      mini: false,
      res: null,
      res1: null,
      backgroundColor: null
    }
  },
  methods: {
    themeMode (mode) {
      this.dark = mode
      this.modeChange({ rtl: this.rtl, dark: mode })
      if (mode) {
        this.logo = darkLogo
      } else {
        this.logo = Logo
      }
      this.$emit('onLogo', this.logo)
    },
    changeColor (code, event) {
      this.setColor = code.primary
      document.documentElement.style.setProperty('--iq-primary', code.primary)
      // var element = document.getElementById('color-box')
      // element.classList.add('iq-colormark')
      document.documentElement.style.setProperty(
        '--iq-light-primary',
        code.primaryLight
      )
      if (event) {
        this.backgroundColor = event.currentTarget.style['background-color']
        this.res = this.backgroundColor.replace('rgb(', '')
        this.res1 = this.res.replace(')', '')
        document.documentElement.style.setProperty(
          '--iq-light-primary',
          'rgba(' + this.res1.concat(',', 0.1) + ')'
        )
        document.documentElement.style.setProperty(
          '--iq-primary-hover',
          'rgba(' + this.res1.concat(',', 0.8) + ')'
        )
      }
      if (this.darkMode) {
        document.documentElement.style.setProperty(
          '--iq-dark-body-bg',
          code.bodyBgDark
        )
      } else {
        document.documentElement.style.setProperty(
          '--iq-body-bg',
          code.bodyBgLight
        )
      }
    },
    reset () {
      this.changeColor({
        primary: '#0dd6b8',
        primaryLight: '#fbfcff',
        bodyBgDark: '#030508',
        bodyBgLight: '#fbfcff'
      })
      this.animated = { enter: 'fadeInUp', exit: 'fadeOutDown' }
      this.themeMode(false)
      this.rtlChange(false)
    },
    rtlChange (mode) {
      this.rtl = mode
      this.modeChange({ rtl: mode, dark: this.darkMode })
      if (this.darkMode) {
        this.logo = darkLogo
      } else {
        this.logo = Logo
      }
    },
    updateRadio () {
      this.mini = this.$store.getters['Setting/miniSidebarState']
    },
    async miniSidebar () {
      this.$emit('toggle')
      await this.$nextTick()
      this.updateRadio()
    },
    async animateChange () {
      await this.$nextTick()
      this.$emit('animationChange', this.animated)
    },
    ...mapActions({
      modeChange: 'Setting/layoutModeAction'
    })
  }
}
</script>
