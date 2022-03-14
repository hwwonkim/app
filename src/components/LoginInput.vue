<template>
  <div id="login-input-container">
    <h2>{{ name }}</h2>
    <input :type="inputType" v-model="inputData" ref="input" @keyup.enter="onEnterKey">
  </div>
</template>

<script>
export default {
  name: 'LoginInput',
  props: {
    name: String,
    inputType: String,
  },
  computed: {
    inputData: {
      get() {
        return this.value;
      },
      set(inputValue) {
        this.$emit('input', inputValue);
      }
    },
  },
  methods: {
    onFocus(msg) {
      if(msg) alert(msg);
      this.$nextTick(() => this.$refs['input'].focus());
    },
    onEnterKey(event){
      this.$emit('enter', event);
    },
  }
}
</script>

<style scoped>

</style>