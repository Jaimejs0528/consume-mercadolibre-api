<template>
  <header>
    <h1>{{title}}</h1>
    <a href="https://github.com/Jaimejs0528/consume-mercadolibre-api" target="_blank"><font-awesome-icon :icon="['fab','github']"></Font-awesome-icon></a>
    <a href="https://co.linkedin.com/in/jaime-jimenez-serrano" target="_blank"><font-awesome-icon :icon="['fab','linkedin']"></Font-awesome-icon></a>
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
