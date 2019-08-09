<template>
  <header>
    <h1>{{title}}</h1>
    <font-awesome-icon :icon="['fab','fa-github']"><a href="https://github.com/Jaimejs0528/consume-mercadolibre-api" target="_blank"></a></Font-awesome-icon>
    <input type="search" placeholder="Search..." v-model="search" v-on:keyup="makeSearch">
    <button v-on:click="emitEvent" type="button">Search</button>
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
    emitEvent(){
      this.$emit('emitEvent', this.search);
    },
    makeSearch(event) {
      if (event.key === 'Enter') {
        this.emitEvent();
      }
    },
  },
}
</script>

<style lang="scss">
header{
  position: sticky;
  z-index: 8;
  min-height: 110px;
  top: 0;
  background: #f76707;
  color: #343a40;
}

input[type="search"]{
  padding: .4rem;
  background: url('../assets/search-solid.svg') no-repeat 95% 50%;
}

</style>
