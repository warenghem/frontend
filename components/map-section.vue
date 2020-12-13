<template>
  <div class="pt-10 position-relative" v-intersect.once="mapIntersect">
    <h2 class="page-title pt-md-5 pt-4 px-3">{{$t('title')}}</h2>
    <h3 class="page-details pb-md-5 py-2 teradeli-light pr-4">{{$t('subtitle')}}</h3>
    <TreeData :treeData="treeData"/>
    <div class="treemapcontainer" v-intersect.quiet="mapintersect2">
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
                intersectionOptions: {
                    root: null,
                    rootMargin: '0px 0px 0px 0px',
                    threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
                },
            };
        },
        methods: {
            mapIntersect() {
                this.treeData.treeCount = this.$store.state.tree_count;
                this.treeData.co2 = parseFloat(this.$store.state.co2_compensated);
                this.treeData.reforest = parseFloat(this.$store.state.reforest);
            },
            mapintersect2(entries, observer, isIntersecting) {
              this.mapshow = true
            }
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
                    subtitle: 'Pour compenser les émissions de CO2 liées à la création de nos objets, à vos visites' +
                        ' sur notre site, et à la consommation d’électricité de nos technologies. Nos projets sont' +
                        ' exclusivement réservés à la régénération de la biodiversité. Nos arbres sont tracés' +
                        ' et certifiés.',
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
  .treemapcontainer {
    height:700px;
      @media only screen and (max-width: 600px) {
        height:400px;
      }
    }
</style>
