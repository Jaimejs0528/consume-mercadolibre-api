<template>
  <div class="items-ctn">
    <span class="info" v-if="isLoading">Loading...</span>
    <span class="alert" v-if="error">{{error}}</span>
    <template v-if="!isLoading" v-for="res in results">
      <Item v-bind:key="`${res.id}-item`"
      v-bind:thumbnail="res.thumbnail"
      v-bind:price="res.price"
      v-bind:title="res.title"
      v-bind:sellerID="res.seller.id"
      v-on:hasPressed="showDetails"></Item>
      <ItemDetail v-bind:key="`${res.id}-detail`" ref="details"></ItemDetail>
    </template>
    <Paging ref="paging" v-on:nextPage="makeRequestPaging" v-on:previousPage="makeRequestPaging"></Paging>
  </div>
</template>

<script>
import Item from './Item.vue';
import ItemDetail from './ItemDetail.vue';
import Paging from './Paging.vue'
import { getTotalPages } from '../utils/tools.js';

export default {
  name: 'ItemsContainer',
  components: {
    Item,
    ItemDetail,
    Paging,
  },
  mounted() {
    this.makeRequest('');
  },
  data() {
    return {
      error: null,
      isLoading: true,
      paging: null,
      results: null,
      search: "",
      offset: 0,
    };
  },
  methods: {
    makeRequest(search) {
      this.isLoading = true;
      this.error = null;
      this.search = search;
      const BASE_URL = 'https://api.mercadolibre.com/sites/MCO/search';
      const QUERY = `?q=${search}&category=MCO1055&offset=${this.offset}&limit=24&attributes=paging,results`;
      this.$http.get(`${BASE_URL}${QUERY}`)
        .then((response) => {
          if (response.status !== 200) {
            this.error = `${e.status}: ${e.body.error}`;
            return;
          }
          this.paging = response.body.paging;
          this.$refs.paging.totalPages = getTotalPages(this.paging);
          if (this.search !== search) {
            this.$refs.paging.currentPage = 1;
          }
          this.$refs.paging.currentPage = this.$refs.paging.currentPage < this.$refs.paging.totalPages && this.$refs.paging.currentPage || 1;
          this.offset = this.$refs.paging.currentPage;
          this.results = response.body.results;
          if (this.results.length === 0) {
            this.error = 'Nothing to show =(';
          }
          this.isLoading = false;
        }).catch((e) => {
          this.isLoading = false;
          this.error = e.status && `${e.status}: ${e.body.error}` || e;
        });
        setTimeout(()=> this.$refs.paging.active = false, 200);
    },
    showDetails(key) {
      const itemKey = key.replace('-item', '');
      const itemDetail = this.$refs.details.filter(e => e.$vnode.key.match(itemKey))[0];
      const others = this.$refs.details.filter(e => !e.$vnode.key.match(itemKey));
      others.forEach(e => e.isShowing = false);
      itemDetail.toggle();
    },
    makeRequestPaging(){
      this.makeRequest(this.search);
    }
  },
};
</script>

<style lang="scss">
%span{
  position: fixed;
  top: 50%;
  transform: scale(2.2);
}

  .items-ctn{
    position: relative;
    display: flex;
    min-height: calc(100vh - 110px);
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;

    .info{
     @extend %span;
     color: #17a2b8;
    }

    .alert{
      @extend %span;
      color: #dc3545;
    }
  }
</style>
