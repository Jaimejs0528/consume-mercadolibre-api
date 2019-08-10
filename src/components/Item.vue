<template>
  <div v-on:mousedown="hasPressed"
    class="item-ctn">
    <img v-bind:alt="title" class="thumbnail" v-bind:src='thumbnail'>
    <h2>{{title}}</h2>
    <span>{{seller}}</span>
    <i>$ {{price}}</i>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    thumbnail: {
      type: String,
      default: 'https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png',
    },
    title: {
      type: String,
      required: true,
    },
    sellerID: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      seller: "",
    }
  },
  mounted(){
    const BASE_URL = `https://api.mercadolibre.com/users/${this.sellerID}`
    const QUERY = '?attributes=nickname'
    this.$http.get(`${BASE_URL}${QUERY}`)
      .then(response => this.seller=response.body.nickname || "Seller not found")
      .catch(error => this.seller = "Error getting seller")
  },
  methods: {
    hasPressed(){
      this.$emit('hasPressed',this.$vnode.key)
    },
  }
}
</script>

<style lang="scss">
.item-ctn{
  opacity: .8;
  transform: scale(0.9);
  transition: all 0.15s;
  cursor: pointer;
  background: #fff;
  border: 2px solid #f76707;
  border-radius: 15px;
  margin: 0.5rem 1rem;
  padding: 0.8rem;
  display: grid;
  width: 25%;
  height: 30vh;
  min-width: 300px;
  min-height: 200px;
  max-height: 220px;
  grid-template-areas:  "img title"
                        "img price"
                        "img seller";
  grid-auto-columns: 1fr 3fr;
  grid-template-rows: repeat(3,1fr);
  
  h2{
    grid-area: title;
  }

  i{
    grid-area: price;
  }

  span{
    grid-area: seller;
  }

  &:hover{
    box-shadow: #ffc078 0 0 16px 5px;
    transform: scale(1);
    opacity: 1;
  }
}

.thumbnail {
  margin: auto;
  grid-area: img;
}
</style>
