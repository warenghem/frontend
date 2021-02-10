<template>
  <div>
    <FilterBar class="stickyFilterBar" :products="productsItem.length"
               :colors="filter.colors"
               :materials="filter.materials"
    >
    </FilterBar>
    <v-container class="px-lg-7" fluid>
      <v-row>
        <v-col lg="4" md="6" v-for="(product,idx) in productsItem" :key="'product_'+idx">
          <ProductItem :productItem="product"></ProductItem>
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
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productsItem = await $content(`${lang_path}/shop`).fetch();
            const filter = await $content(`${lang_path}/filter`, 'type').fetch();
            return {
                productsItem,
                filter: {
                    colors: filter.colors,
                    materials: filter.materials
                }
            }
        },
        methods: {
            infiniteScrolling() {
                this.productCount = this.productCount + 10;
            }
        }

    }

</script>
