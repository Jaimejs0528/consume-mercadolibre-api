<template>
  <div v-on:click="toggle" class="details-ctn" v-if="isShowing">
    <!-- <div v-for="pic in pictures">
        <img v-bind:src="pic.url">
    </div> -->
    <h2>{{title}}</h2>
    <img v-bind:src="picture.url" v-bind:alt="picture.id">
    <p>Seller location: {{sellerLocation}}</p>
    <p>Seller location: {{sellerLocation}}</p>
    HI!
  </div>
</template>

<script>
import { getDiscount, getLocation } from '../utils/tools.js';

export default {
  name: 'ItemDetail',
  data() {
    return {
      isShowing: false,
      title: "",
      actualPrice: 0,
      originalPrice: 0,
      sellerLocation: "",
      freeShipping: false,
      acceptsMercadoPago: false,
      condition: "",
      picture: null,
    }
  },
  mounted(){
    const keyID = this.$vnode.key.replace('-detail','');
    const BASE_URL = `https://api.mercadolibre.com/items/${keyID}`;
    const QUERY = '?attributes=title,price,original_price,seller_address,free_shipping,accepts_mercadopago,pictures, condition';
    this.$http.get(`${BASE_URL}${QUERY}`)
    .then(response => {
      //console.log(response)
      const { title, price, original_price,seller_address, free_shipping,accepts_mercadopago,pictures, condition} = response.body;
      this.title = title;
      this.picture = pictures.length > 0 && pictures[0];
      this.freeShipping = free_shipping;
      this.acceptsMercadoPago = accepts_mercadopago;
      this.originalPrice = original_price;
      this.actualPrice = price;
      console.log(getDiscount(this.actualPrice, this.originalPrice));
      this.sellerLocation = getLocation(seller_address)
    }).catch(e => console.log(e))
  },
  methods: {
    toggle(){
      this.isShowing = !this.isShowing
      let mainContainer = document.querySelector('#overlay-parent');
      this.isShowing && mainContainer.classList.add('opacity-effect');
      !this.isShowing && mainContainer.classList.remove('opacity-effect');
      mainContainer = document.querySelector('main');
      this.isShowing && mainContainer.classList.add('opacity-effect');
      !this.isShowing && mainContainer.classList.remove('opacity-effect');
    },
  }
}
</script>

<style lang="scss">
  .details-ctn{
    position: fixed;
    top:50%;
    left:50%;
    z-index: 10;
    transition: all 0.5s;
    pointer-events: all;
    width: 50vw;
    height: 60vh;
    animation: growing-effect 0.5s forwards ease-out;
    background: #797927;
  }

  @keyframes growing-effect{
    from {
      transform: translate(-50%,-50%) scale(0);
      opacity: 0;
    }
    to {
      transform: translate(-50%,-50%) scale(1);
      opacity: 1;
    }
    
  }
</style>
