<template>
<div class="sign-in-from bg-primary rounded">
      <h3 class="mb-0 text-center text-white">Sign in</h3>
      <p class="text-center text-white">Enter your email address and password to access admin panel.</p>
      <sign-in-form email="admin@demo.com" password="admin123"></sign-in-form>
  </div>
</template>

<script>
import SignInForm from './Forms/SignInForm'

export default {
  name: 'SignIn1',
  components: { SignInForm },
  data: () => ({}),
  mounted () {
  },
  methods: {
  }
}
</script>
