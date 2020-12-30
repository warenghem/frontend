<template>
    <div class="tree-data d-flex justify-center py-3 py-md-0 flex-column flex-md-row">
      <div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0">
          <animated-number ref="treeCount"
                           :from="0"
                           :to="treeData.treeCount"
                           :duration="3"
                           :delay="2"
                           easing="Power1.easeOut"
                           class="tree-number"
          ></animated-number>
        </div>
        <div style="line-height: 1.4rem;" class="secondary--text"> {{$t('term1')}}</div>
      </div>
      <div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0">
          <animated-number ref="co2"
                           :from="0"
                           :to="treeData.co2"
                           :format="2"
                           :duration="3"
                           :delay="2"
                           easing="Power1.easeOut"
                           class="tree-number"
          ></animated-number>
        </div>
        <div style="line-height: 1.4rem;" class="secondary--text">{{$t('term2')}}</div>
      </div>
      <div class="text-center py-3 py-md-4 d-flex d-sm-block">
        <div class="pr-3 pr-md-0">
          <animated-number ref="reforest"
                           :from="0"
                           :to="treeData.reforest"
                           :duration="3"
                           :delay="2"
                           :format="3"
                           easing="Power1.easeOut"
                           class="tree-number"
          ></animated-number>
        </div>
        <div style="line-height: 1.4rem;" class="secondary--text">{{$t('term3')}}</div>
      </div>

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
        i18n: {
            messages: {
                en: {
                    term1: 'planted trees',
                    term2: 'To CO2 compensated',
                    term3: 'reforested Ha',

                },
                fr: {
                    term1: 'arbres plantés',
                    term2: 'To CO2 compensées',
                    term3: 'Ha reforestés',
                }
            }
        },
    }
</script>

<style scoped>
.tree-number {
    font-size: 20px;
    font-family: teradeli-medium;
}
</style>
