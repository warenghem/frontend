<template>
  <div>
    <FilterBar class="stickyFilterBar" :products="productsItem.length"
                :categories="categories"
                :colors="colors"
                :collections="collections"
                :category-name="null"
                :materials="materials"/>
    <v-container class="px-lg-7" fluid>
      <v-row>
        <v-col lg="4" md="6" v-for="(product,idx) in productsItem" :key="'product_'+idx">
          <ProductItem :productItem="product"/>
        </v-col>
      </v-row>
      <div v-intersect="infiniteScrolling" style="height: 100px;width: 100%"></div>
    </v-container>
  </div>

</template>

<script>
    import product from "../../store/product";

    export default {
        name: 'shop',
        async asyncData(context) {
            const {$content, app} = context;
            const productsItem = await $content(`${app.i18n.locale}/shop`).fetch();
            console.log(productsItem)
            return {
                productsItem,
            }
        },
        methods: {
            infiniteScrolling() {
                this.productCount = this.productCount + 10;
            }
        }

    }

</script>
