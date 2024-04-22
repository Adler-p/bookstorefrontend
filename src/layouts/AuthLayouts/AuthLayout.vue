<template>
  <div>
    <Loader />
    <section class="sign-in-page">
            <div class="container p-0">
                <div class="row no-gutters height-self-center">
                  <div class="col-sm-12 align-self-center page-content rounded">
                    <div class="row m-0">
                      <div class="col-sm-12 sign-in-page-data">
                         <router-view></router-view>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
    </section>
  </div>
</template>
<script>
import Loader from '../../components/core/loader/Loader'
import logo from '../../assets/images/logo.png'
import { core } from '../../config/pluginInit'
import bgImage from '../../assets/images/login/2.jpg'
export default {
  name: 'AuthLayout',
  components: {
    Loader
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>
<style>
  @import url("../../assets/css/custom.css");
</style>
