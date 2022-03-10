<template>
  <div id="login-container">
    <div id="login-header-container">
      <h1 id="login-header">Sign in</h1>
    </div>
    <LoginInput v-model="userId" name="USER ID" input-type="text"/>
    <LoginInput v-model="password" name="PASSWORD" input-type="password"/>
    <div id="login-button-container">
      <LoginButton @click="onLogin"></LoginButton>
    </div>
    <button @click="onTest">this is vuex test</button>
    <div id="dev-tag"> DEVELOPMENT PAGE</div>
  </div>
</template>

<script>
import LoginInput from "@/components/LoginInput";
import LoginButton from "@/components/LoginButton";
import {authentication, handleResponseData} from "@/components/utils/AuthenticationApi";

export default {
  name: "Login",
  data() {
    return {
      test: "hi",
      userId: "",
      password: ""
    }
  },
  components: {
    LoginButton,
    LoginInput
  },
  methods: {
    onTest(){
     alert(JSON.stringify(this.$store.state));
    },
    onLogin() {
      authentication(this.userId, this.password)
          .then(res => handleResponseData(res))
          .then(authInfo => {
            this.sessionUpdate(authInfo);
            this.$router.push({name: 'login-result', params: {data: authInfo}})
          })
          .catch(() => console.log("error"))
    },
    sessionUpdate(res) {
      this.$store.commit('login', {
        userToken: res.data.token,
        userSponsor: res.data.userKey,
        userId: res.data.userId});
    }
  }
}
</script>

<style scoped>

</style>