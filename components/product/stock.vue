<template>
  <div>
    <div class="smalltext text-capitalize-first">
        <v-icon x-small :color="stock == '0' ? 'systemRed' : 'systemGreen'">{{ svgPath4 }}</v-icon>
        {{$tc('product.stock', stock)}}
    </div>
  </div>
</template>

<script>
    import { mdiCircle } from '@mdi/js'
    export default {
        name: 'stock',
        data () {
            return {
                svgPath4: mdiCircle,
            }
        },
        props: {
            stock: {
                type: String,
                default: ''
            }
        }
    }
</script>