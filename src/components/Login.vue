<template>
  <div id="login-container">
    <div id="login-header-container"><h1 id="login-header">Sign in</h1></div>
    <LoginInput v-model="userId" name="USER ID" input-type="text" ref="user-id" @enter="toNextInput"/>
    <LoginInput v-model="password" name="PASSWORD" input-type="password" ref="password" @enter="onSignIn"/>
    <div id="login-button-container">
      <LoginButton @click="onSignIn"/>
    </div>
    <div class="dev-tag">DEVELOPMENT PAGE</div>
    <SelectSponsorModal ref="select-sponsor-modal"/>
  </div>
</template>

<script>
import LoginInput from "@/components/LoginInput";
import LoginButton from "@/components/LoginButton";
import SelectSponsorModal from "@/components/SelectSponsorModal";
import {authentication, getUserAuth, handleResponseData} from "@/components/utils/authenticationApi";
import {isBlank} from "@/components/utils/commonUtils";

export default {
  name: 'Login',
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  components: {
    SelectSponsorModal,
    LoginButton,
    LoginInput
  },
  methods: {
    onSignIn() {
      this.validation(this.onLogin);
    },
    onLogin() {
      authentication(this.userId, this.password)
          .then(res => handleResponseData(res))
          .then(authInfo => this.selectSponsorAndSender(authInfo))
          .catch(err => this.errorhandler(err));
    },
    async selectSponsorAndSender(authInfo) {
      this.storeSession(authInfo);
      await this.$refs['select-sponsor-modal'].setUserInformation(authInfo.data.sponsorList, authInfo.userKey);
      this.$refs['select-sponsor-modal']
              .showModal()
              .then(sponsor => this.doLogin(sponsor));
    },
    storeSession(authInfo) {
      this.$store.commit('storeSession', {
        token: authInfo.data.token,
        userKey: authInfo.userKey,
        userId: authInfo.data.userId,
      });
    },
    doLogin(sponsor) {
      getUserAuth(sponsor.sponsorKey)
          .then(res => this.$router.push({name: 'login-result', params: {data: res.data}}));
    },
    errorhandler(err) {
      alert(err);
    },
    validation(resolve, reject) {
      if (isBlank(this.userId)) {
        this.$refs['user-id'].onFocus("USER ID is required");
        reject();
      } else if (isBlank(this.password)) {
        this.$refs['password'].onFocus("PASSWORD is required");
        reject();
      } else {
        resolve();
      }
    },
    toNextInput() {
      this.$refs['password'].onFocus();
    },
  }
}
</script>