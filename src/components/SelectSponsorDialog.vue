<template>
  <div>
    <b-modal title="Select the sponsor" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      <b-form-select v-model="selectedSponsor" :options="sponsorList" id="sponsor-select-bar" @change="changeSponsor"/>
      <b-form-select v-model="selectedSender" :options="senderList" id="sender-select-bar"/>
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
  name: 'SelectSponsorDialog',
  data() {
    return {
      userKey: Number,
      sponsors: Array,
      sponsorList: Array,
      senders: Array,
      senderList: [],
      selectedSponsor: null,
      selectedSender: null,
      onConfirm: Function,
    }
  },
  methods: {
    showModal(sponsors, userKey) {
      this.sponsors = sponsors;
      this.userKey = userKey;
      this.sponsorList = sponsors?.map(spo => spo.sponsorName) ?? [];
      this.selectedSponsor = this.sponsorList[0];
      return this.changeSponsor()
          .then(() => new Promise(resolve => {
              this.onConfirm = () => resolve(this.sponsors.find(sponsor => sponsor.sponsorName === this.selectedSponsor));
              this.$refs['select-sponsor-modal'].show();
            }));
    },
    changeSponsor() {
      const {sponsorKey} = this.sponsors.find(sponsor => sponsor.sponsorName === this.selectedSponsor);
      return retrieveUserSenders(sponsorKey, this.userKey)
          .then(senderInfo => {
            this.senders = senderInfo.data.senders;
            this.senderList = this.senders.map(sender => sender.SND_ORGAN);
            this.selectedSender = this.senderList[0];
          });
    },
  },
}
</script>

<style scoped>

</style>