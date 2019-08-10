<template>
  <div v-on:click="toggle" class="details-ctn" v-if="isShowing">
    <div class="img-ctn">
      <img v-bind:src="picture.url" v-bind:alt="picture.id">
    </div>
    <div class="info-ctn">
      <h2>{{title}}</h2>
      <p>Price: 
        <span style="text-decoration:line-through;" v-if="discount > 0">${{originalPrice}}</span>
        ${{actualPrice}}
        <i v-if="discount > 0">{{discount}} %</i>
      </p>
      <p>Available quantity: {{availableQuantity}}</p>
      <p>Seller location: {{sellerLocation}}</p>
      <p>Accepts MercadoPago: {{acceptsMercadoPago ? 'yes' : 'no'}}</p>
    </div>
  </div>
</template>

<script>
import { getDiscount, getLocation } from '../utils/tools.js';

export default {
  name: 'ItemDetail',
  data() {
    return {
      isShowing: false,
      title: '',
      actualPrice: 0,
      originalPrice: 0,
      discount: 0,
      sellerLocation: '',
      availableQuantity: 0,
      acceptsMercadoPago: false,
      condition: '',
      picture: null,
    };
  },
  mounted() {
    const keyID = this.$vnode.key.replace('-detail', '');
    const BASE_URL = `https://api.mercadolibre.com/items/${keyID}`;
    const QUERY = '?attributes=title,price,original_price,seller_address,available_quantity,accepts_mercadopago,pictures, condition';
    this.$http.get(`${BASE_URL}${QUERY}`)
      .then((response) => {
        const {
          title, price, original_price, seller_address, available_quantity, accepts_mercadopago, pictures, condition,
        } = response.body;
        this.title = title;
        this.picture = pictures.length > 0 && pictures[0];
        this.availableQuantity = available_quantity;
        this.acceptsMercadoPago = accepts_mercadopago;
        this.condition = condition;
        this.originalPrice = original_price;
        this.actualPrice = price;
        this.discount = getDiscount(this.actualPrice, this.originalPrice);
        this.sellerLocation = getLocation(seller_address);
      }).catch(e => console.log(e));
  },
  methods: {
    toggle() {
      this.isShowing = !this.isShowing;
      let mainContainer = document.querySelector('#overlay-parent');
      this.isShowing && mainContainer.classList.add('opacity-effect');
      !this.isShowing && mainContainer.classList.remove('opacity-effect');
      mainContainer = document.querySelector('main');
      this.isShowing && mainContainer.classList.add('opacity-effect');
      !this.isShowing && mainContainer.classList.remove('opacity-effect');
    },
  },
};
</script>

<style lang="scss">
@mixin image-mobile{
  @media screen and (max-width: 1100px) {
    @content;
  }
}

  .details-ctn{
    @include image-mobile(){
      flex-direction: column;
      width: 85vw;
      height: 70vh;
      top:60%;
    }
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top:50%;
    left:50%;
    z-index: 10;
    border-radius: 4rem;
    transition: all 0.5s;
    pointer-events: all;
    padding: 1rem;
    width: 50vw;
    height: 60vh;
    animation: growing-effect 0.5s forwards ease-out;
    background: #ff8700;
    color: #2c2421;
  }

  .img-ctn{
    margin: 1rem;
    flex-shrink: 1;
    flex-grow: 1;
    img{
      @include image-mobile(){
        max-width: 60%;
        min-width: unset;
      }
      box-shadow: #eee 0 0 12px 2px;
      min-width: 220px;
      max-width: 100%;
    }
  }
  
  .info-ctn{
    margin: 1rem;
    flex-shrink: 2;
    flex-grow: 3;
    min-width: 260px;
    max-width: 500px;
    &>*{
      padding: 0.1rem 0;
    }
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
