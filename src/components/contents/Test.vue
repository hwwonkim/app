<template>
<div>
  <b-button @click="$bvToast.show('test-toast')">
    Show toast
  </b-button>
  <b-toast id="test-toast" title="Test" static no-auto-hide>
    Hello...
  </b-toast>
</div>
</template>

<script>
export default {
  name: "Test"
}
</script>

<style scoped>

</style>