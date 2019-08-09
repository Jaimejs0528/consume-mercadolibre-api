<template>
  <div class="items-ctn">
    <span v-if="isLoading">Loading...</span>
    <span v-if="error">{{error}}</span>
    <template v-if="!isLoading" v-for="res in results">
      <Item v-bind:key="`${res.id}-item`"
      v-bind:thumbnail="res.thumbnail"
      v-bind:price="res.price"
      v-bind:title="res.title"
      v-bind:sellerID="res.seller.id"
      v-on:hasPressed="showDetails"></Item>
      <ItemDetail v-bind:key="`${res.id}-detail`" ref="details"></ItemDetail>
    </template>
  </div>
</template>

<script>
import Item from './Item.vue'
import ItemDetail from './ItemDetail.vue';
export default {
  name: 'ItemsContainer',
  components:{
    Item,
    ItemDetail,
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
    makeRequest(search) {
      this.isLoading = true;
      this.error = null;
      const BASE_URL = 'https://api.mercadolibre.com/sites/MCO/search';
      const QUERY = `?q=${search}&category=MCO1055&offset=${this.offset}&limit=20&attributes=paging,results`
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
    },

    showDetails(key){
      const itemKey = key.replace('-item','')
      const itemDetail = this.$refs.details.filter(e => e.$vnode.key.match(itemKey))[0]
      const others = this.$refs.details.filter(e => !e.$vnode.key.match(itemKey))
      others.forEach(e => e.isShowing=false);
      itemDetail.toggle()
    }
  },
}
</script>

<style lang="scss">
  .items-ctn{
    display: flex;
    min-height: calc(100vh - 110px);
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
