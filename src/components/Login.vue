<template>
  <div id="login-container">
    <div id="login-header-container"><h1 id="login-header">Sign in</h1></div>
    <LoginInput v-model="userId" name="USER ID" input-type="text"/>
    <LoginInput v-model="password" name="PASSWORD" input-type="password"/>
    <div id="login-button-container">
      <LoginButton @click="onLogin"/>
    </div>
    <div class="dev-tag">DEVELOPMENT PAGE</div>
    <SelectSponsorDialog ref="select-sponsor-modal" :sponsors="sponsors" :user-key="userKey"/>
  </div>
</template>

<script>
import LoginInput from "@/components/LoginInput";
import LoginButton from "@/components/LoginButton";
import SelectSponsorDialog from "@/components/SelectSponsorDialog";
import {authentication, handleResponseData} from "@/components/utils/authenticationApi";

export default {
  name: "Login",
  data() {
    return {
      userId: "",
      password: "",
      sponsors: null,
      senders: null,
      userKey: null,
    }
  },
  components: {
    SelectSponsorDialog,
    LoginButton,
    LoginInput
  },
  methods: {
    onLogin() {
      authentication(this.userId, this.password)
          .then(res => handleResponseData(res))
          .then(authInfo => this.initializeSelectedSponsor(authInfo))
          .then(() => this.showSelectSponsorDialog())
          .catch(err => console.log(err.message))
    },
    initializeSelectedSponsor(authInfo) {
      this.sponsors = authInfo.data.sponsorList;
      this.userKey = authInfo.userKey;
    },
    showSelectSponsorDialog() {
      this.$refs["select-sponsor-modal"].showModal();
    },
    doLogin() {
      this.$router.push({name: 'login-result', params: {}});
    },
  }
}
</script>