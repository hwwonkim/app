<template>
  <div id="login-result-page">
    user-id : {{ data.userId ? data.userId : " NONE " }} <br>
    user-key : {{ data.token ? data.token : " NO TOKEN " }}
  </div>
</template>

<script>
export default {
  name: "LoginResult",
  data() {
    return {
      data: Object
    }
  }
}
</script>

<style scoped>

</style>