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
  </div>
</template>

<script>
export default {
  name: "LoginResult",
  props: {
    data: Object
  },
}
</script>

<style scoped>
</style>