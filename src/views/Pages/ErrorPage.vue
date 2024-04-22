<template>
<div class="wrapper">
  <div class="container p-0">
    <div class="row no-gutters height-self-center">
      <div class="col-sm-12 text-center align-self-center">
        <div class="iq-error position-relative" :class="$route.params.code !== '404' ? '' : ''">
          <img :src="image404" class="img-fluid iq-error-img" alt="404" v-if="$route.params.code === '404'">
          <img :src="image500" class="img-fluid iq-error-img" alt="500" v-else>
          <h1 class="text-in-box" v-if="$route.params.code !== '404' ">500</h1>
          <h2 class="mb-0 mt-4" v-if="$route.params.code === '404'">Oops! This Page is Not Found.</h2>
          <h2 class="mb-0" v-else>Oops! This Page is Not Working.</h2>
          <p v-if="$route.params.code === '404'">The requested page dose not exist.</p>
          <p v-else>The requested is Internal Server Error.</p>
          <button @click="$router.go(-1)" class="btn btn-primary mt-3"><i class="ri-home-4-line"></i>Back to Home</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { core } from '../../config/pluginInit'
export default {
  name: 'ErrorPage',
  mounted () {
    core.index()
  },
  data () {
    return {
      image404: require('../../assets/images/error/404.png'),
      image500: require('../../assets/images/error/500.png')
    }
  }
}
</script>
