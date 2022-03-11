<template>
  <div class="dropdown" v-bind:id="dropdownId">
    <ul class="dropdown-content" v-bind:id="dropdownContentsId">
      <li v-for="item in contents" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  props: {
    contents: Array,
    dropdownId: null,
    dropdownContentsId: null
  },
  methods: {

  },
  mounted: {

  }
}
</script>

<style scoped>
.dropdown {
  width: 3rem;
  border: 1px solid black;
  display: none;
}

.dropdown-content{
  width: 3rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
</style>