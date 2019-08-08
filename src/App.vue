<template>
  <div id="app">
    <Header title="Mercado Libre API" v-on:makeSearch="loadData"></Header>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
