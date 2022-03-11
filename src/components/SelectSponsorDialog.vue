<template>
  <div>
    <b-modal title="Select the sponsor" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      <b-form-select v-model="selectedSponsor" :options="sponsorList" id="sponsor-select-bar" @change="changeSponsor"/>
      <b-form-select v-model="selectedSender" :options="senderList" id="sender-select-bar"/>
    </b-modal>
  </div>
</template>

<script>
import {retrieveUserSenders} from "@/components/utils/authenticationApi";

export default {
  name: "SelectSponsorDialog",
  data() {
    return {
      sponsorList: Array,
      senderList: Array,
      senders: Array,
    }
  },
  props: {
    userKey: String,
    sponsors: Array,
    selectedSponsor: null,
    selectedSender: null,
  },
  methods: {
    showModal() {
      this.sponsorList = this.sponsors.map(spo => spo.sponsorName);
      this.selectedSponsor = this.sponsorList[0];
      this.changeSponsor();
      this.$refs['select-sponsor-modal'].show();
    },
    changeSponsor() {
      retrieveUserSenders(
          this.sponsors
              .filter(sponsor => sponsor.sponsorName === this.selectedSponsor)[0].sponsorKey,
          this.userKey)
      .then(senderInfo => {
        this.senders = senderInfo.data.senders;
        this.senderList = this.senders.map(sender => sender.SND_ORGAN);
        this.selectedSender = this.senderList[0];
      })
    }
  },
}
</script>

<style scoped>

</style>