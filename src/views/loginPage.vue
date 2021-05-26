<template>
  <div class="loginPage">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <h1>Please Enter your Teacher ID</h1>
    <br><br>
    <loginPageForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import loginPageForm from '../components/loginPageForm.vue'

export default {
  name: 'loginPage',
  components: {
    loginPageForm
  }
}
</script>
