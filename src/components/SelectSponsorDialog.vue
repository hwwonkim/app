<template>
  <div>
    <b-modal title="Select the sponsor" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      <b-form-select v-model="selectedSponsor" :options="sponsorList" id="sponsor-select-bar" @change="changeSponsor"/>
      <b-form-select v-model="selectedSender" :options="senderList" id="sender-select-bar"/>
      <template #modal-footer>
        <b-button variant="primary"
        class="float-right"
        @click="onConfirm">ok</b-button>
      </template>
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
      senderList: [],
      senders: Array,
      selectedSponsor: null,
      selectedSender: null,
    }
  },
  props: {
    userKey: Number,
    sponsors: Array,
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
    },
    onConfirm() {
      this.$emit('confirm', this.sponsors
          .filter(sponsor => sponsor.sponsorName === this.selectedSponsor)[0],
      this.selectedSender);

    }
  },
}
</script>

<style scoped>

</style>