<template>
<div class="sign-in-from bg-primary rounded">
      <h3 class="mb-0 text-white">Reset Password</h3>
      <p class="text-white">Enter your email address and we'll send you an email with instructions to reset your password.</p>
      <router-link to="/auth/sign-in1">
      <form action="/auth/sign-in1" class="mt-4 form-text">
          <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email">
          </div>
          <div class="d-inline-block w-100">
              <button type="submit" class="btn btn-white">Reset Password</button>
          </div>
      </form>
      </router-link>
</div>
</template>
<script>
export default {
  name: 'RecoverPassword1'
}
</script>
