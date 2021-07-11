<template>
  <MoleculesToolbarMain >
    <template v-slot:title>
      <div class="d-inline-flex flex-column justify-center one-line">
        {{products +' '+ $tc('product.product', products)}}
      </div>
    </template>
  </MoleculesToolbarMain>
</template>

<script>
    export default {
        name: 'filter-bar',
        props: {
            products: {
                type: Number,
                default: 0
            }
        }
    }
</script>