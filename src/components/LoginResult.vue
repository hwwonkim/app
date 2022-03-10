<template>
  <div id="login-result-page">
    <table>
      <tr v-for="(value, key) in data.data" v-bind:key="key">
        <td>{{key}}</td>
        <td v-if="typeof value === 'object'">
          <ul><li v-for="val in Object.values(value)" v-bind:key="val">{{val}}</li></ul>
        </td>
        <td v-else>{{value}}</td>
      </tr>
    </table>
    <div id="test-debug"> Debug - Vuex - Store <br>
    {{ this.$store.state.userId}} <br>
      {{this.$store.state.userSponsor}} <br> {{this.$store.state.userToken}}</div>
  </div>
</template>

<script>
export default {
  name: "LoginResult",
  props: {
    data: Object
  },
  methods: {
    sessionCheck() {
      alert("DEBUG")
    }
  }
}
</script>

<style scoped>
#test-debug {
  position: fixed;
  right: 0;
  bottom: 0;
}
</style>