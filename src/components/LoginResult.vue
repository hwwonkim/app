<template>
  <div id="login-result-page">
    {{JSON.stringify(data)}}
  </div>
</template>

<script>
export default {
  name: 'LoginResult',
  props: {
    data: Object
  },
  methods: {
    sessionCheck() {
      alert('DEBUG')
    }
  }
}
</script>

<style scoped>
#login-result-page{
  word-break: break-all;
}
</style>