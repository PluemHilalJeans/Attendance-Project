<template>
  <div class="hello">
    
    <form @submit.prevent="sendToPrepPage">
      <span>Username : </span><input type="text" name="name" v-model="logindata.user" />
      <br><span>Password : </span><input type="password" name="name" v-model="logindata.password" />

      <br><br><button type="submit">Enter Site</button>
    </form>
    <h2 v-show="this.wrong">YOU HAVE TYPED IN THE FUCKIN WRONG PASSSWORD OR USERRR</h2>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data () {
    return {
      wrong: false,
      logindata: {}
      }
  },
  methods: {
    sendToPrepPage: function() {
      if (this.logindata.user == 'kruyuan' && this.logindata.password == '12345678') {
      this.$router.push('/preCheck')
      }
      else {
          this.wrong = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
