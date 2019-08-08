<template>
  <div id="app">
    <Header title="Mercado Libre API" v-on:makeSearch="loadData"></Header>
    <img alt="Vue logo" src="./assets/logo.png">
    <main>
      <ItemsContainer v-bind:isLoading="this.isLoading" v-bind:error="this.error"></ItemsContainer>
    </main>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import ItemsContainer from './components/ItemsContainer.vue'

export default {
  name: 'app',
  components: {
    Header,
    ItemsContainer,
  },
  data(){
    return{
      error: null,
      isLoading: true,
    }
  },
  methods: {
    loadData: function(search){
      this.isLoading = true;
      this.error = null;
      const BASE_URL = 'https://api.mercadolibre.com/sites/MCO/search';
      const QUERY = `?q=${search}&category=MCO1055&offset=${ItemsContainer.data().offset}&attributes=paging,results`
      this.$http.get(`${BASE_URL}${QUERY}`)
        .then(response => {
          if (response.status !== 200){
            this.error = response.body.error
            return;
          }
          ItemsContainer.data().paging=response.body.paging
          ItemsContainer.data().results=response.body.results
          this.isLoading=false;
        }).catch(error => {
          this.isLoading=false;
          this.error = `${error.status}: ${error.body.error}`
        })
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
