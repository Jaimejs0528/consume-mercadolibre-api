<template>
  <div id="app">
    <Header title="Jaime.JS - Mercado Libre API" v-on:emitEvent="loadData"></Header>
    <main>
      <ItemsContainer ref="itemsContainer"></ItemsContainer>
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
  methods: {
    loadData(search){
      this.$refs.itemsContainer.makeRequest(search);
    }
  },
};
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fd7e14;
}
main{
  padding: 1rem 0;
  background: #3C3B44;
}
</style>
