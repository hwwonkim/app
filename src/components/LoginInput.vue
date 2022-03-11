<template>
  <div id="login-input-container">
    <h2>{{ name }}</h2>
    <input v-bind:type="inputType" v-model="inputData">
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
      get(){
        return this.value
      },
      set(val){
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>