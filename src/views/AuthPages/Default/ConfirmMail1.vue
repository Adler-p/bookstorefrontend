<template>
<div class="sign-in-from bg-primary rounded">
    <img src="../../../assets/images/login/mail.png" width="80"  alt="">
    <h3 class="mt-3 mb-0 text-white">Success !</h3>
    <p class="text-white">A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
    <div class="d-inline-block w-100">
        <router-link to="/" class="btn btn-white mt-3">Back to Home</router-link>
    </div>
</div>
</template>
<script>
export default {
  name: 'ConfirmMail1'
}
</script>
