<template>
  <div class="wa-smart-picture square-ratio">
    <img
      :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,'+ ratio +'/'+ image +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,'+ ratio +'/'+ image +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,'+ ratio +'/'+ image +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,'+ ratio +'/'+ image +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,'+ ratio +'/'+ image +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,'+ ratio +'/'+ image +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,'+ ratio +'/'+ image +' 2500w,'"
      class="lazyload mediabox-img"
      :alt="alt"
    >
  </div>
</template>
<script>
  export default {
    name: 'imageSquared',
    props: {
      image: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
      ratio: {
        type: String,
        default: ''
      }
    }
  }
</script>
