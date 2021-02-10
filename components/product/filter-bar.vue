<template>
  <section class="appBar" v-bind:class="{ 'active': fixedOnScroll}">

    <v-app-bar class="menu-bar  pr-4 filter-bar" flat>
      <div class="d-flex align-center">
        <div class="teradeli-light  pl-2">
          ({{products}} Produits)
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center title">
        <!--<div class="pa-2  border-left-2 d-flex align-center" style="height: 50px">
          <v-checkbox
            v-model="online"
            class="no-message"
            label="Acheter en ligne"
          ></v-checkbox>
        </div>-->

        <div class="pa-2 border-left-2 d-flex align-center " style="height: 50px">
          <div class="cursor-pointer" @click="togglePanel">
            <v-icon class="m-2">{{ svgPath }}</v-icon>
          </div>
        </div>

      </div>
    </v-app-bar>
    <v-expansion-panels v-model="panel" multiple class="expan-panel">
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
                <div class="font-weight-bold py-3 title">Materials</div>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 300px">
                  <div v-for="(material,m_idx) in materials" :key="'mat_'+m_idx">
                    <div class="d-flex">
                      <input type="radio"
                             v-model="filterChecked.material"
                             :value="material"
                             hidden
                             :id="'mat_radio_'+m_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'mat_radio_'+m_idx"
                        :class="{'active':filterChecked.material===material}"
                      >
                        <h4 class="text-capitalize">{{material.name}}</h4>
                      </label>
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
                             v-model="filterChecked.color"
                             :value="color"
                             hidden
                             :id="'color_radio_'+c_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'color_radio_'+c_idx"
                        :class="{'active':filterChecked.color===color}"
                      >
                        <div class="color-box">
                          <img
                            :src="color.icon"
                          >
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
                <div class="font-weight-bold ">Materials</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="overflow-y-auto d-flex flex-wrap flex-column" style="height: 100px">
                  <div v-for="(material,m_idx) in materials" :key="'mat_'+m_idx">
                    <div class="d-flex">
                      <input type="radio"
                             v-model="filterChecked.material"
                             :value="material"
                             hidden
                             :id="'mat_radio_'+m_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'mat_radio_'+m_idx"
                        :class="{'active':filterChecked.material===material}"
                      >
                        <h4 class="text-capitalize">{{material.name}}</h4>
                      </label>
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
                             v-model="filterChecked.color"
                             :value="color"
                             hidden
                             :id="'color_radio_'+c_idx"
                             class="filter-radio"
                      >
                      <label
                        :for="'color_radio_'+c_idx"
                        :class="{'active':filterChecked.color===color}"
                      >
                        <div class="color-box">
                          <img
                            :src="color.icon"
                          >
                        </div>

                      </label>
                    </div>
                  </div>

                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <hr>
          <v-btn block text class="my-2" @click="togglePanel">
            <v-icon class="px-3">mdi-chevron-up</v-icon>
            Cacher les filtres
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-app-bar class="menu-bar  pr-4 filter-bar" flat v-if="filterChecked.color || filterChecked.material">
      <div class="d-flex align-center">
        <v-btn color="secondary" class="ma-2" dark v-if="filterChecked.color">
          {{filterChecked.color.name}}
          <v-icon class="pl-2" @click="filterChecked.color=null">mdi-close</v-icon>
        </v-btn>
        <v-btn color="secondary" class="ma-2" dark v-if="filterChecked.material">
          {{filterChecked.material.name}}
          <v-icon class="pl-2" @click="filterChecked.material=null">mdi-close</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center title">
        <h5 class="cursor-pointer" @click="emptyFilter" style="text-decoration: underline;">
          Effacer tous les filtres
        </h5>


      </div>
    </v-app-bar>
  </section>


</template>

<script>
    import { mdiFilter } from '@mdi/js'
    export default {
        name: 'filter-bar',
        data() {
            return {
                svgPath: mdiFilter,
                fixedOnScroll: false,
                sidebar: false,
                online: false,
                panel: [],
                filterChecked: {
                    material: null,
                    color: null
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
            updateFilter:{
                type:Function,
                default: function () {
                }
            }
        },
        methods: {
            handleScroll() {
                if (window.scrollY >= 400) {
                    this.fixedOnScroll = true
                } else {
                    this.fixedOnScroll = false
                }
            },
            emptyFilter() {
                this.filterChecked = {
                    material: null,
                    color: null
                }
            },
            togglePanel() {
                this.panel = this.panel[0] === 0 ? [] : [0]
            }
        },
        watch: {
            filterChecked: {
                handler(val) {
                    this.$emit('updateFilter',val)
                },
                deep: true,
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

    img {
      width: 35px;
      height: 35px;
    }
  }

  .filter-radio {
    &:checked + label .color-box {
      border: 1px solid;
    }
  }

  .expan-panel {
    position: absolute;
    width: 100%;
    top: 50px;
    z-index: 1000;
  }

  label.active {
    text-decoration: underline;
  }
</style>
