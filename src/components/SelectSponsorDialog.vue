<template>
  <div>
    <b-button v-b-modal.select-sponsor-modal>MODAL TEST BUTTON</b-button>
    <b-modal title="스폰서 선택 모달" ref="select-sponsor-modal" id="select-sponsor-modal" centered>
      스폰서 선택
      <b-dropdown block
                  variant="primary"
                  menu-class="w-100">
        <template #button-content> {{ selectedSponsor ? selectedSponsor.sponsorName : "sponsor 선택" }}</template>
        <b-dd-item @click="selectSponsor" v-for="sponsor in sponsors" :key="sponsor">{{ sponsor.sponsorName }}</b-dd-item>
      </b-dropdown>
      <b-dropdown text="sender 선택"
                  block
                  variant="primary"
                  menu-class="w-100">
        <template #button-content> {{ selectedSender ? selectedSender.SND_ORGAN : "sender 선택" }}</template>
        <b-dd-item @click="selectSender" v-for="sender in senders" :key="sender">{{ sender.SND_ORGAN }}</b-dd-item>
      </b-dropdown>
      <template #modal-footer>
        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="completeSelection">
          Ok
        </b-button>
      </template>
    </b-modal>
    <button @click="showModal">TEST</button>
  </div>
</template>

<script>
export default {
  name: "SelectSponsorDialog",
  data() {
    return {
      sponsorList: Array,
      senderList: Array
    }
  },
  props: {
    sponsors: Array,
    senders: Array,
    selectedSponsor: null,
    selectedSender: null,
  },
  methods: {
    selectSponsor(event) {
      this.selectedSponsor = event.target.innerText;
    },
    selectSender(event) {
      this.selectedSender = event.target.innerText;
    },
    completeSelection() {
      this.$refs['select-sponsor-modal'].hide();
    },
    showModal(){
      this.$refs['select-sponsor-modal'].show();
    }
  },
}
</script>

<style scoped>

</style>