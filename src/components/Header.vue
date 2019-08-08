<template>
  <header>
    <h1>{{title}}</h1>
    <input type="search" placeholder="Search..." v-model="search" v-on:keyup="makeSearch">
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
  data() {
    return {
      search: '',
    }
  },
  methods: {
    makeSearch(event) {
      if (event.key === 'Enter') {
        this.$emit('makeSearch', this.search);
      }
    },
  },
}
</script>

<style>

</style>
