<template>
  <div>
    <b-modal title="Select the sponsor" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      <b-form-select v-model="selectedSponsorName" :options="sponsorNameList" id="sponsor-select-bar" @change="changeSponsor"/>
      <b-form-select v-model="selectedSenderName" :options="senderNameList" id="sender-select-bar"/>
      <template #modal-footer>
        <b-button variant="primary"
                  class="float-right"
                  @click="onConfirm"> ok
        </b-button>
      </template>
    </b-modal>

  </div>
</template>

<script>
import {retrieveUserSenders} from "@/components/utils/authenticationApi";

export default {
  name: 'SelectSponsorModal',
  data() {
    return {
      userKey: Number,
      sponsors: Array,
      sponsorNameList: Array,
      senders: Array,
      senderNameList: Array,
      selectedSponsorName: null,
      selectedSenderName: null,
      modalPromise: null,
      resolve: Function,
    }
  },
  methods: {
    showModal() {
      this.$refs['select-sponsor-modal'].show();
      return this.modalPromise = new Promise(resolve => {this.resolve = resolve});
    },
    setUserInformation(sponsors, userKey) {
      this.sponsors = sponsors;
      this.userKey = userKey;
      this.sponsorNameList = sponsors?.map(spo => spo.sponsorName) ?? [];
      this.selectedSponsorName = this.sponsorNameList[0];
      this.changeSponsor();
    },
    changeSponsor() {
      const {sponsorKey} = this.getSelectedSponsor();
      return retrieveUserSenders(sponsorKey, this.userKey)
          .then(senderInfo => {
            this.senders = senderInfo.data.senders;
            this.senderNameList = this.senders.map(sender => sender.SND_ORGAN);
            this.selectedSenderName = this.senderNameList[0];
          });
    },
    onConfirm() {
      this.resolve(this.getSelectedSponsor());
    },
    getSelectedSponsor() {
      return this.sponsors.find(sponsor => sponsor.sponsorName === this.selectedSponsorName);
    }
  },
}
</script>

<style scoped>

</style>