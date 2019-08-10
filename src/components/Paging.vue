<template>
  <div class="paging-ctn">
    <button v-on:click="previousPage" class="left">Previous</button>
    <span>{{currentPage}} of {{totalPages}}</span>
    <button v-on:click="nextPage" class="right">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  data(){
    return{
      currentPage: 1,
      totalPages: 1,
      active: false,
    }
  },
  methods: {
    nextPage() {
      this.currentPage < this.totalPages && !this.active && this.$emit('nextPage')
      this.currentPage = this.currentPage < this.totalPages && !this.active && this.currentPage + 1 || this.currentPage
      this.active = this.currentPage < this.totalPages;
    },
    previousPage() {
      this.currentPage > 1 && !this.active && this.$emit('previousPage')
      this.currentPage = this.currentPage > 1 && !this.active && this.currentPage - 1 || this.currentPage
      this.active = this.currentPage > 1;
    }
  },
}
</script>

<style lang="scss">
  %button{
    border: 1px solid #2c2421;
    font-size: 1.2rem;
    width: 100px;
    user-select: none;
    color: #2c2421;
    outline: none;
    background: #ff8700;
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

  .paging-ctn{
    position: fixed;
    top:90%;
    left: 50%;
    width: 95%;
    transform: translate(-50%,-50%);

    span{
      padding: 0.3rem 1.4rem;
      border: 1px solid #2c2421;
      background: #fff; 
    }

    button{
      @extend %button;
      @include focus;

      &.right {
        padding: 0.2rem 0.8rem 0.2rem 0.2rem;
        border-radius: 0 50% 50% 0;
      }
      &.left {
        padding: 0.2rem 0.2rem 0.2rem 0.8rem;
        border-radius: 50% 0 0 50%;
      }
    }
  }
  
</style>
