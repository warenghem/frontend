<template>
  <div class="treemapwhole position-relative" v-intersect.quiet="{handler: mapIntersect,options: {rootMargin: '50px', threshold: [0, 0.5, 1.0]}}">
    <div class="pb-0 pvw treemapheader px-10">
      <h2 class="page-title px-0">{{$t('title')}}</h2>
      <div class="py-2 text-center secondary--text">{{$t('subtitle')}}</div>
    </div>
    <div class="treemapcontainer">
      <TreeData :treeData="treeData"/>
      <client-only placeholder="Loading...">
        <LazyMap v-if="mapshow"/>
      </client-only>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'map-section',
        data() {
            return {
                mapshow: false,
                treeData: {
                    treeCount: 0,
                    co2: 0,
                    reforest: 0
                },
            };
        },
        methods: {
            mapIntersect() {
                this.treeData.treeCount = this.$store.state.tree_count;
                this.treeData.co2 = parseFloat(this.$store.state.co2_compensated);
                this.treeData.reforest = parseFloat(this.$store.state.reforest);
                this.mapshow = true;
            },

        },
        i18n: {
            messages: {
                en: {
                    title: 'We also plant trees. And you?',
                    subtitle: 'To offset the CO2 emissions linked to the creation of our objects, your visits to our ' +
                        'site, and the electricity consumption of our technologies.',
                },
                fr: {
                    title: 'Nos projets de reforestation',
                    subtitle: 'Nos arbres sont tracés et certifiés, pour compenser nos émissions de CO2, à celle vos visites' +
                        ' sur notre site, et la consommation d’électricité de nos technologies.',
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
.treemapwhole {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.treemapcontainer {
  flex-grow : 1;
}
.tree-data {
    position: absolute;
    z-index: 3;
    max-width: 300px;
    margin: 15px;
    border-radius: 15px;
    padding: 15px;
    background: white;
    @media(min-width:48em) {
      max-width: 400px;
    }
}
</style>
