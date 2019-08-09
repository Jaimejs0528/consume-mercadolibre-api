<template>
  <div id="app">
    <Header title="Jaime.JS - Mercado Libre API" v-on:emitEvent="loadData"></Header>
    <main>
      <div id="overlay-parent"></div>
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
  * {
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

  #overlay-parent {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #3C3B44;
    z-index: 7;
    pointer-events: none;
    transition: all 0.4s;

    &.opacity-effect {
      opacity: 0.7;
    }
  }

  main{
    padding: 1rem 0;
    position: relative;
    background: #3C3B44;

    &.opacity-effect {
      pointer-events: none;
      user-select: none;
    }
  }
</style>
