<template>
  <div>
    <v-carousel
      :cycle="false"
      hide-delimiter-background
      show-arrows-on-hover
      class="grey lighten-5"
       v-model="currentItem"
    >
      <v-carousel-item
        :src="item.image"
        v-for="item in product.variants"
        v-if="product.variants"
        :key="item.id"

      >
      </v-carousel-item>
      <v-carousel-item
        :src="item.image"
        v-for="item in product.images"
        :key="item.id"
        v-else
      >
      </v-carousel-item>
    </v-carousel>
    <div class="pt-3 pb-2 d-flex justify-space-between align-center titlesmall teradeli-medium">
      <strong>{{product.name}}</strong>
      <div>
        <button v-for="(item,idx) in colors"
                :key="'color'+item"
                :style="'background-color:'+item"
                class="color-button"
                @click="currentItem=idx"
        >
        </button>
      </div>
    </div>
    <div class="subtitlesmall teradeli-light">{{product.price}}</div>
  </div>
</template>

<script>
    export default {
        name: "product-item",
        data() {
            return {
                colors:['red','green'],
                currentItem:1,
                product: {
                    "mode": "Test",
                    "userDefinedId": "AP1",
                    "url": "/product-examples.html",
                    "price": 299.99,
                    "name": "Android Phone",
                    "description": "",
                    "image": "https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png",
                    "archived": false,
                    "inventoryManagementMethod": "Variant",
                    "stock": 1,
                    "totalStock": 11,
                    "allowOutOfStockPurchases": false,
                    "statistics": {
                        "numberOfSales": 0,
                        "totalSales": 0
                    },
                    "customFields": [
                        {
                            "name": "Size",
                            "operation": "+200.00",
                            "type": "dropdown",
                            "options": "16GB|32GB[+50.00]|128GB[+200.00]",
                            "required": false,
                            "value": "128GB",
                            "optionsArray": [
                                "16GB",
                                "32GB",
                                "128GB"
                            ]
                        },
                        {
                            "name": "Color",
                            "operation": "",
                            "type": "dropdown",
                            "options": "Black|Blue|Red|White",
                            "required": false,
                            "value": "Blue",
                            "optionsArray": [
                                "Black",
                                "Blue",
                                "Red",
                                "White"
                            ]
                        }
                    ],
                    "variants": [
                        {
                            "stock": 10,
                            "variation": [
                                {
                                    "name": "Size",
                                    "option": "16GB"
                                },
                                {
                                    "name": "Color",
                                    "option": "Black"
                                }
                            ],
                            "image": "https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png",
                            "allowOutOfStockPurchases": true
                        },
                        {
                            "stock": 1,
                            "variation": [
                                {
                                    "name": "Size",
                                    "option": "32GB"
                                },
                                {
                                    "name": "Color",
                                    "option": "Red"
                                }
                            ],
                            "image": "https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sac-%C3%A0-dos-trio-toile-monogram-%C3%A9clipse-sacs--M45538_PM2_Front%20view.png",
                            "allowOutOfStockPurchases": false
                        }
                    ],
                    "metadata": {
                        "meta": true
                    },
                    "id": "3932ecd1-6508-4209-a7c6-8da4cc75590d",
                    "creationDate": "2016-11-03T12:51:04.297Z",
                    "modificationDate": "2016-11-03T12:51:28.873Z"
                }
            }
        }
    }
</script>

<style scoped>
.color-button{
  width: 15px;
  height: 15px;
  margin: 2px;
}
</style>
