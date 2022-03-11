<template>
  <div id="modal-example-container">
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal title="스폰서 선택 모달" id="modal-1" centered>
      this is test modal => 로그인 이후 스폰서 선택 모달에 사용 예정
      <br><br>
      <b-dropdown block
                  variant="primary"
                  menu-class="w-100">
        <template #button-content> {{ selectSponsorText }} </template>
        <b-dd-item @click="select">제일 제약</b-dd-item>
        <b-dd-item @click="select">하나 제약</b-dd-item>
        <b-dd-item @click="select">한국 제약</b-dd-item>
      </b-dropdown>
      <br>
      <b-dropdown text="sender 선택"
                  block
                  variant="primary"
                  menu-class="w-100">
        <template #button-content>Sender 선택</template>
        <b-dd-item> Ace Company</b-dd-item>
        <b-dd-item> Beta Pharmacy</b-dd-item>
        <b-dd-item> Toronto Corp.</b-dd-item>
        <b-dd-item> Medical organization</b-dd-item>
      </b-dropdown>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalExample',
  data() {
    return {
      selectSponsorText: '스폰서를 선택하세요'
    }
  },
  methods: {
    select(event){
      this.selectSponsorText = event.target.innerText;
    }
  }
}
</script>

<style scoped>

</style>