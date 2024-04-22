<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4 form-text" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="email" name="E-mail" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="emailInput">Email address</label>
          <input type="email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="emailInput" aria-describedby="emailHelp"
                 v-model="user.email" placeholder="Enter email" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/auth/password-reset1" class="float-right text-dark">
            Forgot password?
          </router-link>
          <input type="password"  :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="passwordInput"
                 v-model="user.password" placeholder="Password" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">Remember Me</label>
        </div>
      </div>
       <div class="sign-info text-center">
          <button type="submit" class="btn btn-white d-block w-100 mb-2">Sign in</button>
          <span class="text-dark dark-color d-inline-block line-height-2">Don't have an account? <router-link to="/auth/sign-up1" class="text-white">Sign up</router-link></span>
       </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '../../../../axios.js'

export default {
  name: 'SignInForm',
  components: { },
  props: ['email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  mounted () {
    this.user.email = this.$props.email
    this.user.password = this.$props.password
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState'
    })
  },
  methods: {
    async onSubmit () {
      try {
        // 发起登录请求
        const response = await axios.post('/auth', {
          email: this.user.email,
          password: this.user.password
        })
        localStorage.setItem('x-auth-token', response)
        const user = await axios.get('/users/me')
        localStorage.setItem('app-userInfo', JSON.stringify(user))
        this.$router.push({ name: 'shop.home' })
      } catch (error) {
        // 处理登录失败的逻辑
        console.error('Error signing in:', error.response)
        // 在这里可以根据错误情况做相应的处理，例如显示错误信息给用户
      }
    }
  }
}
</script>
