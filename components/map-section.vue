<template>
  <div class="pvw treemapwhole position-relative" v-intersect.quiet="{handler: mapIntersect,options: {rootMargin: '50px', threshold: [0, 0.5, 1.0]}}">
    <div class="treemapheader">
      <h2 class="page-title px-3 primary--text">{{$t('title')}}</h2>
      <div class="py-2 px-3 px-md-10 text-center secondary--text">{{$t('subtitle')}}</div>
      <TreeData :treeData="treeData"/>
    </div>
    <div class="treemapcontainer">
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
                        'site, and the electricity consumption of our technologies. Our projects are exclusively ' +
                        'reserved for the regeneration of biodiversity. Our trees are traced and certified.',
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
  @media(max-width: 960px) {
  border-bottom: #eae8e4 solid 1px;
}
}

.treemapcontainer {
  flex-grow : 1;
}
</style>
