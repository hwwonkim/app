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
    <div id="dev-tag"> DEVELOPMENT PAGE </div>
  </div>
</template>

<script>
import LoginInput from "@/components/LoginInput";
import LoginButton from "@/components/LoginButton";
import axios from "axios";

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
    onLogin() {
      alert("hey")
      const userId = this.userId
      const password = this.password
      axios
          .post(`https://dev-safetyr3-api.crscube.io/safety/1.0/auth`, { userId, password})
          .then(res => {
            const keys = Object.values(res.data)
            for(let i of keys){
              console.log(i)
            }
          })
    }
  }
}
</script>

<style scoped>

</style>