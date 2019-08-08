<template>
  <div>
    <span v-if="isLoading">Loading...</span>
    <span v-if="error">{{error}}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemsContainer',
  props:{
    error: String,
    isLoading: Boolean,
  },
  data() {
    return {
      paging:null,
      results:null,
      offset: 0
    }
  },
}
</script>

<style>

</style>
