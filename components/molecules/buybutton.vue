<template>
  <div>
    <v-btn
        elevation="0"
        rounded
        dark
        class="btn-theme snipcart-add-item"
        style="max-width:100%;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
        :data-item-id="product.sku"
        :data-item-price="JSON.stringify(product.snipCurrency)"
        :data-item-url="'https://www.warenghem.com' + this.$route.fullPath"
        :data-item-description="product.description"
        :data-item-image="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-120,dpr-2,ar-3-4/Products/'+ product.image[0].src"
        :data-item-name="product.name"
        v-bind="customFields"
    >
      {{$t('product.cartBtn')}}
    </v-btn>
  </div>

</template>

<script>
    export default {
        data() {
            return { prPrice:''}
        },
        props: {
            product: {
                type: Object,
                default: () => {
                }
            }
        },
        mounted() {
                if (this.product.snipCurrency) {
                    this.prPrice=JSON.stringify(this.product.snipCurrency).replaceAll(/"/g, "&quot;")
                }
        }
    }
</script>
