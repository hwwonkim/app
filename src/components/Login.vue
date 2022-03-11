<template>
  <div id="login-container">
    <div id="login-header-container"><h1 id="login-header">Sign in</h1></div>
    <LoginInput v-model="userId" name="USER ID" input-type="text"/>
    <LoginInput v-model="password" name="PASSWORD" input-type="password"/>
    <div id="login-button-container">
      <LoginButton @click="onLogin"/>
    </div>
    <div class="dev-tag">DEVELOPMENT PAGE</div>
    <SelectSponsorDialog ref="select-sponsor-modal" :sponsors="sponsors"
                         :senders="senders" :selected-sender="selectedSender" :selected-sponsor="selectedSponsor"/>
  </div>
</template>

<script>
import LoginInput from "@/components/LoginInput";
import LoginButton from "@/components/LoginButton";
import SelectSponsorDialog from "@/components/SelectSponsorDialog";
import axios from "axios";
import {handleResponseData} from "@/components/utils/handleResponseUtils";

export default {
  name: "Login",
  data() {
    return {
      userId: "",
      password: "",
      sponsors: null,
      senders: null,
      selectedSponsor: null,
      selectedSender: null,
    }
  },
  components: {
    SelectSponsorDialog,
    LoginButton,
    LoginInput
  },
  methods: {
    onLogin() {
      this.authentication(this.userId, this.password)
          .then(res => handleResponseData(res))
          .then(authInfo => this.initializeSelectedSponsor(authInfo))
          .then(() => this.showSelectSponsorDialog())
          .catch(err => console.log(err.message))
    },
    authentication(userId, password) {
      return axios
          .post(`http://localhost:8180/safety/1.0/auth`, {userId, password})
          .then((res) => res.data);
    },
    handleResponseData(resData) {
      if (resData.success) {
        return Promise.resolve(resData); //authInfo
      } else if (resData.errCode === 1040 && resData.errorDetails) {
        return Promise.reject({redirectTo: resData.errorDetails, errMsg: resData.errMsg})
      } else {
        return Promise.reject(resData.errMsg);
      }
    },
    initializeSelectedSponsor(authInfo) {
      this.sponsors = authInfo.data.sponsorList;
      this.selectedSponsor = this.sponsors[0];
      return this.retrieveUserSenders(this.selectedSponsor.sponsorKey, authInfo.userKey)
    },
    retrieveUserSenders(sponsorKey, userKey) {
      return axios
          .get(`http://localhost:8180/safety/1.1/sponsors/${sponsorKey}/users/${userKey}/senders`)
          .then(res => res.data)
          .then(senderInfo => {
                this.senders = senderInfo.data.senders;
                this.selectedSender = this.senders[0];
              }
          );
    },
    showSelectSponsorDialog() {
      console.log("dialog");
      this.$refs["select-sponsor-modal"].showModal();
    },
    doLogin() {
      this.$router.push({name: 'login-result', params: {}});
    },
  }
}
</script>