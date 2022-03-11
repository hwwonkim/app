<template>
  <div>
    <b-modal title="Select the sponsor" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      <b-form-select v-model="selectedSponsor" :options="sponsorList" id="sponsor-select-bar"/>
      <b-form-select v-model="selectedSender" :options="senderList" id="sender-select-bar"/>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "SelectSponsorDialog",
  data() {
    return {
      sponsorList: Array,
      senderList: Array,
    }
  },
  props: {
    sponsors: Array,
    senders: Array,
    selectedSponsor: null,
    selectedSender: null,
  },
  methods: {
    showModal(){
      this.sponsorList = this.sponsors.map(spo => spo.sponsorName);
      this.senderList = this.senders.map(sender => sender.SND_ORGAN);
      this.$refs['select-sponsor-modal'].show();
    }
  },
}
</script>

<style scoped>

</style>