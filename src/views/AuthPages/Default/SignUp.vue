<template>
<div class="sign-in-from bg-primary rounded">
        <h3 class="mb-0 text-center text-white">Sign Up</h3>
        <p class="text-center text-white">Enter your email address and password to access admin panel.</p>
         <sign-up-form></sign-up-form>
    </div>
</template>
<script>
import SignUpForm from './Forms/SignUpForm'
export default {
  name: 'SignUp1',
  components: { SignUpForm },
  data: () => ({}),
  methods: {
  }
}
</script>
