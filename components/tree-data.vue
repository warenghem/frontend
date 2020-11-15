<template>
    <div class="d-flex justify-center py-3 py-md-0 flex-column flex-sm-row">
      <div class="text-center py-4 px-7">
        <div class="sub-title">
          <animated-number ref="treeCount"
                           :from="0"
                           :to="treeData.treeCount"
                           :duration="3"
                           :delay="2"
                           easing="Power1.easeOut"
          ></animated-number>
        </div>
        <div style="color: #888;"> {{$t('term1')}}</div>
      </div>
      <div class="text-center py-4 px-7">
        <div class="sub-title">
          <animated-number ref="co2"
                           :from="0"
                           :to="treeData.co2"
                           :format="2"
                           :duration="3"
                           :delay="2"
                           easing="Power1.easeOut"
          ></animated-number>
          tonnes
        </div>
        <div style="color: #888;">{{$t('term2')}}</div>
      </div>
      <div class="text-center py-4 px-7">
        <div class="sub-title">
          <animated-number ref="reforest"
                           :from="0"
                           :to="treeData.reforest"
                           :duration="3"
                           :delay="2"
                           :format="3"
                           easing="Power1.easeOut"
          ></animated-number>
        </div>
        <div style="color: #888;">{{$t('term3')}}</div>
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
                    term2: 'of CO2 compensated',
                    term3: 'reforested hectares',

                },
                fr: {
                    term1: 'arbres plantés',
                    term2: 'de CO2 compensées',
                    term3: 'hectares reforestés',
                }
            }
        },
    }
</script>

<style scoped>

</style>
