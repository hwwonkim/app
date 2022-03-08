<template>
  <button id="login-button" @click="onClick">sign in</button>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    onClick($event) {
      this.$emit('click', $event)
    }
  }
}
</script>

<style scoped>

</style>