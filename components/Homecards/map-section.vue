<template>
  <div class="treemapwhole position-relative" v-intersect.quiet="{handler: mapIntersect,options: {rootMargin: '50px', threshold: [0, 0.5, 1.0]}}">
    <div class="pvw treemapheader px-10 text-center position-absolute w-100">
      <h2 class="home-title px-0">{{$t('title')}}</h2>
      <div class="home-subtitle py-2">{{$t('subtitle')}}</div>
      <div
          @click="$store.state.plantModal=true"
          style="z-index:2"
          class="text-center hand position-relative lightbugattiblue--text "
          >
          {{$t('btnTitle')}}
          <v-icon color="lightbugattiblue" small>{{ svgPath1 }}</v-icon>
      </div>
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
    import { mdiChevronRight } from '@mdi/js'
    export default {
        name: 'map-section',
        data() {
            return {
                svgPath1: mdiChevronRight,
                mapshow: false,
                /*treeData: {
                    treeCount: 0,
                    co2: 0,
                    reforest: 0
                },*/
            };
        },
        props: {
            treeData: {
                type: Object,
                default: () => {
                }
            }
        },
        methods: {
            mapIntersect() {
                /*this.treeData.treeCount = this.$store.state.tree_count;
                this.treeData.co2 = parseFloat(this.$store.state.co2_compensated);
                this.treeData.reforest = parseFloat(this.$store.state.reforest);*/
                this.mapshow = true;
            },

        },
    }
</script>
<i18n>
{
	"en": {
		"subtitle": "Your visits and your orders plant trees. They are traced and certified.",
		"title": "Reforestation"
	},
	"fr": {
		"subtitle": "Vos visites et vos commandes plantent des arbres. Ils sont tracés et certifiés.",
		"title": "Reforestation"
	}
}
</i18n>
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
    bottom: 0;
    right: 0;
    z-index: 3;
    max-width: 300px;
    margin: 15px;
    border-radius: 5px;
    padding: 15px;
    @media(min-width:48em) {
      max-width: 400px;
    }
}
.treemapheader {
    z-index: 2;
    background: rgb(246,245,243);
    background: linear-gradient(180deg, rgba(234, 234, 236,1) 0%, rgba(234, 234, 236,0.923406862745098) 50%, rgba(234, 234, 236,0.7693452380952381) 78%, rgba(234, 234, 236,0) 100%);
}
</style>
