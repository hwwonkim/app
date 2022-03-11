<template>
<div>
  <b-button @click="$bvToast.show('test-toast')">
    Show toast
  </b-button>
  <b-toast id="test-toast" title="Test" static no-auto-hide>
    Hello...
  </b-toast>
  <br>
  <b-dropdown v-bind:text="curData">
    <b-dropdown-item @click="select">DAAATAAAA1</b-dropdown-item>
    <b-dropdown-item @click="select">TTTTTTTTT2</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      curData: '입력해주세요',
    }
  },
  methods: {
    select(event){
      this.curData = event.target.innerText;
    }
  }
}
</script>

<style scoped>

</style>