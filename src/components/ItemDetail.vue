<template>
  <div v-on:click="toggle" class="details-ctn" v-if="isShowing">
    HI!{{title}}{{sellerLocation}}
  </div>
</template>

<script>

function getLocation(locationObject) {
  const city = locationObject.city.name || ''
  const country = locationObject.country.name || ''
  const location = `${city}, ${country}`
  return location === ''?  'No Location' : location
}

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
      pictures: null,
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
