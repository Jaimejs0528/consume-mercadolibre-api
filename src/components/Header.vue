<template>
  <header>
    <h1 class="header-title">{{title}}</h1>
    <a class="link-github" href="https://github.com/Jaimejs0528/consume-mercadolibre-api" target="_blank">
      <font-awesome-icon :icon="['fab','github']"></Font-awesome-icon>
    </a>
    <a class="link-linkedin" href="https://co.linkedin.com/in/jaime-jimenez-serrano" target="_blank">
      <font-awesome-icon :icon="['fab','linkedin']"></Font-awesome-icon>
    </a>
    <input type="search" placeholder="Search..." maxlength="35" v-model="search" v-on:keyup="makeSearch">
    <button v-on:click="emitEvent" class="btn-search" type="button">Search</button>
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
    };
  },
  methods: {
    emitEvent() {
      this.$emit('emitEvent', this.search);
    },
    makeSearch(event) {
      if (event.key === 'Enter') {
        this.emitEvent();
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

@mixin anchor-mobile{
  @media screen and (max-width: 480px) {
    @content;
  }
}

@mixin focus{
  &:focus{
    box-shadow:#2c2421 0 0 6px 1px;
  }

  &:hover{
    box-shadow: inset 0 0 6px 1px #666 ;
  }

  &:active{
    box-shadow: inset 0 0 10px 3px #666 ;
  }
}

@mixin anchor-effects{
  &:focus{
    filter: drop-shadow(2px 2px 1px #2c2421);
  }

  &:hover{
    filter: drop-shadow(2px 2px 2px #2c2421);
  }

  &:active{
    filter: drop-shadow(3px 4px 3px #2c2421);
  }
}

header{
  font-family: 'Righteous', cursive;
  position: sticky;
  z-index: 8;
  min-height: 110px;
  top: 0;
  padding: 0.6rem;
  background: #ff8700;
  color: #2c2421;
}

.header-title{
  padding: 0.6rem;
  font-size: 2.2rem;
  letter-spacing: 2px;
}

a{
  @include anchor-effects();
  position:absolute;
  top: 80%;
  left: 90%;
  transition: transform 0.4s;
  
  &.link-github {
    @include anchor-mobile(){
      transform: scale(1.6) translate(0,-125%);
    }
    transform: scale(1.6) translate(0,-50%);
    color: #fff;
  }

  &.link-linkedin {
    @include anchor-mobile(){
      transform: scale(1.6) translate(-140%,-125%);
    }
    transform: scale(1.6) translate(-140%,-50%);
    color: #0073b1;
  }
}

.btn-search{
  @include focus;
  font-size: 1.1rem;
  border: 2px solid #2c2421;
  border-radius: 0 1rem 1rem 0;
  border-left: none;
  outline: none;
  padding: 0.5rem;
}

input[type="search"]{
  @include focus;

  background: url(/search-solid.svg) no-repeat 97% 50% #faf9f7;
  background-size: 10%;
  padding: .5rem 2.3rem .5rem .5rem;
  font-size: 1.1rem;
  letter-spacing: 1px;
  border:2px solid #2c2421;
  outline: none;
  max-width: 260px;
  width: 60%;
  border-radius: 1rem 0 0 1rem;
}

</style>
