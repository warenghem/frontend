<template>
  <div>
    <div v-if="$attrs.productDescription.custom">
        <div  id="carbon">
          <div>Plante : {{ $attrs.treesItem.name }}</div>
          <v-avatar
            class="ma-3 img-fluid position-relative"
            size="100"
            tile
          >
            <img
                data-sizes="auto"
                :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/'+ $attrs.treesItem.image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/'+ $attrs.treesItem.image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/'+ $attrs.treesItem.image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/'+ $attrs.treesItem.image +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-800,fo-bottom,c-maintain_ratio/'+ $attrs.treesItem.image +' 800w'"
                class="lazyload cover bg-white catalogue-item-background rounded-xl"
            />
          </v-avatar>
          <div>CO2 par plante : {{ $attrs.treesItem.lifeTimeCO2 }} kg</div>
          <div>Number planted : {{ $attrs.productDescription.custom.trees.quantity }}</div>
          <div>Total CO2 : {{ $attrs.productDescription.custom.trees.quantity * $attrs.treesItem.lifeTimeCO2 }} kg</div>
          <div>Energy of this transaction 1 kWh = 0,45 kg CO2 (average in Europe)</div>
          <div>kWh of this transaction = 50 kWh (average for Ethereum)</div>
          <div>CO2 : {{ 50 * 0.45 }} kg</div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'app',
    name: 'carbon',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    props: {
        treesFocus: {
            type: Array,
            default: () => []
        }
    },
    mounted(){
        this.$emit('focus-on-markers', this.treesFocus, true, 4)
        this.$emit('resize-markers')
    }
  }
</script>
