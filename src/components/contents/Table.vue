<template>
<div id="table-view">
  <table>
    <tr>
      <td v-for="(key, value) in contents" v-bind:key="key"> {{key}} : {{value}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: 'Table.vue',
  data() {
    return {
      keyOrder: Number
    }
  },
  props: {
    contents: Object
  },
  mounted(){
    this.keyOrder = 0;
  }
}
</script>

<style scoped>

</style>