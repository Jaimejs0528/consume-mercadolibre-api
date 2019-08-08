<template>
  <div class="items-ctn">
    <span v-if="isLoading">Loading...</span>
    <span v-if="error">{{error}}</span>
    <template v-if="!isLoading" v-for="res in results">
      <Item v-bind:key="res.id"
      v-bind:thumbnail="res.thumbnail"
      v-bind:price="res.price"
      v-bind:title="res.title"
      v-bind:sellerID="res.seller.id"></Item>
    </template>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  name: 'ItemsContainer',
  components:{
    Item
  },
  mounted() {
    this.makeRequest("");
  },
  data() {
    return {
      error: null,
      isLoading: true,
      paging:null,
      results:null,
      offset: 0
    }
  },
  methods: {
    makeRequest: function(search){
      this.isLoading = true;
      this.error = null;
      const BASE_URL = 'https://api.mercadolibre.com/sites/MCO/search';
      const QUERY = `?q=${search}&category=MCO1055&offset=${this.offset}&attributes=paging,results`
      this.$http.get(`${BASE_URL}${QUERY}`)
        .then(response => {
          if (response.status !== 200){
            this.error = `${e.status}: ${e.body.error}`
            return;
          }
          this.paging = response.body.paging;
          this.results = response.body.results;
          if (this.results.length === 0){
            this.error = "Nothing to show =("
          }
          this.isLoading=false;
        }).catch(e => {
          this.isLoading=false;
          this.error = e.status && `${e.status}: ${e.body.error}` || e
        });
    }
  },
}
</script>

<style lang="scss">
  .items-ctn{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
