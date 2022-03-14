<template>
  <div id="login-input-container">
    <h2>{{ name }}</h2>
    <input :type="inputType" v-model="inputData">
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
        return this.value
      },
      set(inputValue) {
        this.$emit('input', inputValue)
      }
    }
  }
}
</script>

<style scoped>

</style>