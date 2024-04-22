<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4 form-text" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Your Full Name</label>
          <input type="text" v-model="user.name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="user.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">I accept Terms and Conditions</label>
        </div>
      </div>
       <div class="sign-info text-center">
                <button type="submit" class="btn btn-white d-block w-100 mb-2">Sign Up</button>
                <span class="text-dark d-inline-block line-height-2">Already Have Account ? <router-link to="/auth/sign-in1" class="text-white">Log In</router-link></span>
       </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '../../../../axios.js'

export default {
  name: 'SignUpForm',
  components: { },
  props: [],
  computed: {
    ...mapGetters({
      users: 'Setting/usersState'
    })
  },
  data: () => ({
    user: {
      name: 'admin',
      email: 'admin@demo.com',
      password: 'admin123'
    }
  }),
  methods: {
    async onSubmit () {
      // 发起注册请求
      const response = await axios.post('/users/registerUser', this.user)
      console.log('Registered user:', response.data)
      this.$store.dispatch('Setting/addUserAction', this.user)
      this.$router.replace('/auth/sign-in1')
    }
  }
}
</script>
