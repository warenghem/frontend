<template>
    <div class="tree-data d-flex justify-center py-3 py-md-0 flex-column flex-md-row">
      <div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0 tree-number">
          {{$store.state.tree_count.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}
        </div>
        <div style="line-height: 1.4rem;" class="mx-2 secondary--text"> {{$t('term1')}}</div>
      </div>
      <div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0 tree-number">
          {{parseFloat(this.$store.state.co2_compensated.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " "))}}
        </div>
        <div style="line-height: 1.4rem;" class="mx-2 secondary--text">{{$t('term2')}}</div>
      </div>
      <!--<div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0 tree-number">
          {{parseFloat(this.$store.state.reforest.replace(/\B(?=(\d{3})+(?!\d))/g, " "))}}
        </div>
        <div style="line-height: 1.4rem;" class="mx-2 secondary--text">{{$t('term3')}}</div>
      </div>-->

    </div>
</template>

<script>
    export default {
        name: "tree-data",
        props:{
          treeData:{
              type:Object,
              default:()=>{

              }
          }
        },
    }
</script>
<i18n>
{
	"fr": {
		"term1": "arbres plantés",
		"term2": "To CO2 compensées",
		"term3": "Ha reforestés"
	},
	"en": {
		"term1": "planted trees",
		"term2": "To CO2 compensated",
		"term3": "Ha reforested"
	}
}
</i18n>
<style scoped>
.tree-number {
    font-size: 20px;
    font-family: teradeli-medium;
}
</style>
