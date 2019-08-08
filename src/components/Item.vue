<template>
  <div>
    <img v-bind:src='thumbnail'>
    <strong>{{title}}</strong>
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
    price: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style>

</style>
