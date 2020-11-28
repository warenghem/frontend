<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar  pr-4 filter-bar" flat>
      <div class="d-flex align-center">
        <div class="ma-2 font-weight-bold title">
          {{categoryName?categoryName:'Tous les sacs'}}
        </div>
        <div class="teradeli-light">
          ({{products}} Produits)
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center title">
        <div class="pa-2  border-left-2 d-flex align-center" style="height: 70px">
          <v-checkbox
            v-model="online"
            class="no-message"
            label="Acheter en ligne"
          ></v-checkbox>
        </div>

        <div class="pa-2 border-left-2 d-flex align-center " style="height: 70px">
          <div class="cursor-pointer" @click="togglePanel">
            <v-icon class="m-2">mdi-filter</v-icon>
            Filterer
          </div>
        </div>

      </div>
    </v-app-bar>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel :key="0">
        <v-expansion-panel-content>
          <v-slide-group
            multiple
            show-arrows
            class="w-100"
          >
            <v-slide-item

            >
              <div class="slide-item">
                <div class="font-weight-bold py-3 title">Catégories</div>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 300px">
                  <v-list flat class="custom-list">
                    <v-list-item-group
                      color="primary"
                    >
                      <v-list-item
                        v-for="(item, c_idx) in categories"
                        :key="'cat_'+c_idx"
                        link
                        style="border-bottom: none!important;min-height: 10px!important;"
                        class="py-1"
                        :active-class="categoryName"
                      >
                        <v-list-item-content class="py-1">
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
              </div>
            </v-slide-item>
            <v-slide-item
            >
               <div class="slide-item">
              <div class="font-weight-bold py-3 title">Collections</div>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 300px">
                  <v-list flat class="custom-list">
                    <v-list-item-group
                      color="primary"
                    >
                      <v-list-item
                        v-for="(item, c_idx) in collections"
                        :key="'col_'+c_idx"
                        link
                        style="border-bottom: none!important;min-height: 10px!important;"
                        class="py-1"
                      >
                        <v-list-item-content class="py-1">
                          <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
               </div>
            </v-slide-item>
            <v-slide-item
            >
              <div class="slide-item">fdsfdsfsd</div>
            </v-slide-item>
            <v-slide-item
            >
              <div class="slide-item">fdsfdsfsd</div>
            </v-slide-item>
          </v-slide-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>


</template>

<script>
    export default {
        name: 'filter-bar',
        data() {
            return {
                fixedOnScroll: false,
                sidebar: false,
                online: false,
                panel: []
            }
        },
        props: {
            categoryName: {
                type: String,
                default: 'Tous les sacs'
            },
            products: {
                type: Number,
                default: 0
            },
            categories: {
                type: Array,
                default: () => {
                }
            },
            colors: {
                type: Array,
                default: () => {
                }
            },
            materials: {
                type: Array,
                default: () => {
                }
            },
            collections: {
                type: Array,
                default: () => {
                }
            },
        },
        methods: {
            handleScroll() {
                if (window.scrollY >= 400) {
                    this.fixedOnScroll = true
                } else {
                    this.fixedOnScroll = false
                }
            },
            togglePanel() {
                this.panel = this.panel[0] === 0 ? [] : [0]
            }
        },
        created() {
            if (process.browser) {
                window.addEventListener('scroll', this.handleScroll)
            }
        },
        beforeUpdate() {
            if (process.browser) {
                window.addEventListener('scroll', this.handleScroll)
            }
        },
    }
</script>

<style scoped lang="scss">
  .appBar {

    .topBar {
      background: white;
      padding: 7px;
      font-size: 12px;
    }

    .menu-bar {
      border-bottom: #eae8e4 solid 1px !important;
    }
  }

  .slide-item {
    width: 25%;
    min-width: 300px;
    padding: 10px;
  }
</style>
