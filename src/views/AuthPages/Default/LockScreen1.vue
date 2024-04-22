<template>
<div class="sign-in-from bg-primary rounded">
  <img src="../../../assets/images/user/1.jpg" alt="user-image" class="rounded">
  <h3 class="mt-3 mb-0 text-white">Hi ! Michael Smith</h3>
  <p class="text-white">Enter your password to access the admin.</p>
  <router-link to="/">
  <form action="/" class="mt-4 form-text">
    <div class="form-group">
        <label for="exampleInputEmail1">Password</label>
        <input type="Password" class="form-control mb-0" id="exampleInputEmail1"  placeholder="Password">
    </div>
    <div class="d-inline-block w-100">
        <button type="submit" class="btn btn-white float-left">Log In</button>
    </div>
  </form>
  </router-link>
</div>
</template>
<script>
export default {
  name: 'LockScreen1'
}
</script>
