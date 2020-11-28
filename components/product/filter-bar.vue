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
            class="w-100 d-none d-lg-block"
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
              <div class="slide-item">
                <div class="font-weight-bold py-3 title">Materials</div>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 300px">
                  <div v-for="(material,m_idx) in materials" :key="'mat_'+m_idx">
                    <h4 class="text-capitalize">{{material.name}}</h4>
                    <div class="d-flex">
                      <div v-for="(item,idx) in material.items"
                           :key="'item_'+m_idx+'_'+idx">
                        <input type="radio"
                               v-model="filter.materialSelected"

                               :value="item.id"
                               hidden
                               :id="'mat_radio_'+m_idx+'_'+idx"
                               class="filter-radio"
                        >
                        <label
                          :for="'mat_radio_'+m_idx+'_'+idx"
                        >
                          <img class="color-box"
                               :src="item.image"
                               alt=""
                          >
                        </label>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </v-slide-item>
            <v-slide-item
            >
              <div class="slide-item">
                <div class="font-weight-bold py-3 title">Colors</div>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 100px">
                  <div class="d-flex">
                    <div v-for="(color,c_idx) in colors" :key="'color_'+c_idx">
                      <input type="radio"
                             v-model="filter.colorSelected"
                             :value="color"
                             hidden
                             :id="'color_radio_'+c_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'color_radio_'+c_idx"
                      >
                        <div class="color-box">
                          <div
                            :style="'background-color:'+color"
                          ></div>
                        </div>

                      </label>
                    </div>
                  </div>

                </div>
              </div>
            </v-slide-item>
          </v-slide-group>
          <v-expansion-panels class="d-lg-none overflow-y-auto" accordion style="max-height: 50vh">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="font-weight-bold">Catégories</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
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
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="font-weight-bold">Collections</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 100px">
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
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="font-weight-bold ">Materials</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 100px">
                  <div v-for="(material,m_idx) in materials" :key="'mat_'+m_idx">
                    <h4 class="text-capitalize">{{material.name}}</h4>
                    <div class="d-flex">
                      <div v-for="(item,idx) in material.items"
                           :key="'item_'+m_idx+'_'+idx">
                        <input type="radio"
                               v-model="filter.materialSelected"

                               :value="item.id"
                               hidden
                               :id="'mat_radio_'+m_idx+'_'+idx"
                               class="filter-radio"
                        >
                        <label
                          :for="'mat_radio_'+m_idx+'_'+idx"
                        >
                          <img class="color-box"
                               :src="item.image"
                               alt=""
                          >
                        </label>
                      </div>


                    </div>
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="font-weight-bold">Color</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 100px">
                  <div class="d-flex">
                    <div v-for="(color,c_idx) in colors" :key="'color_'+c_idx">
                      <input type="radio"
                             v-model="filter.colorSelected"
                             :value="color"
                             hidden
                             :id="'color_radio_'+c_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'color_radio_'+c_idx"
                      >
                        <div class="color-box">
                          <div
                            :style="'background-color:'+color"
                          ></div>
                        </div>

                      </label>
                    </div>
                  </div>

                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
                panel: [],
                filter: {
                    materialSelected: null,
                    colorSelected: null
                }

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

  .color-box {
    width: 45px;
    height: 45px;
    padding: 4px;

    div {
      width: 35px;
      height: 35px;
      border: 1px solid #c1c1c1;
    }
  }

  .filter-radio {
    &:checked + label .color-box {
      border: 1px solid;
    }
  }
</style>
