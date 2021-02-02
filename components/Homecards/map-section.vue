<template>
  <div class="treemapwhole position-relative" v-intersect.quiet="{handler: mapIntersect,options: {rootMargin: '50px', threshold: [0, 0.5, 1.0]}}">
    <div class="pb-0 pvw treemapheader px-10 pb-3 text-center">
      <h2 class="page-title px-0">{{$t('title')}}</h2>
      <div class="page-subtitle py-2">{{$t('subtitle')}}</div>
      <v-text
          @click="$store.state.plantModal=true"
          style="z-index:2"
          class="text-center hand position-relative lightbugattiblue--text "
          >
          {{$t('btnTitle')}}
          <v-icon color="lightbugattiblue" small>{{ svgPath1 }}</v-icon>
      </v-text>
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
		"subtitle": "The trees of our projects are traced and certified. To offset our CO2 emissions, that of your visits, and the electricity from our technologies.",
		"title": "Reforestation"
	},
	"fr": {
		"subtitle": "Vos visites et vos commandes plantent des arbres. Ils sont tracés et certifiés. Découvrez nos projets en cliquant sur les localisations.",
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
    z-index: 3;
    max-width: 300px;
    margin: 15px;
    border-radius: 5px;
    padding: 15px;
    background: white;
    @media(min-width:48em) {
      max-width: 400px;
    }
}
</style>
