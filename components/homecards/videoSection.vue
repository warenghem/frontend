<template>
  <div>
    <div style="height:100vh!important" class="videoSection">
      <!--<div style="z-index: 2;top: 50%;transform: translateY(-50%);" class="text-center inner position-absolute d-none">
        <div class="col-12 py-5">
            <div class="logosvg logosvg" v-html="Eco" />
          <span>{{$t('video.tag1')}}</span>
        </div>
        <div class="col-12 py-5">
            <div class="logosvg logosvg" v-html="France" />
          <span>{{$t('video.tag2')}}</span>
        </div>
        <div class="col-12 py-5">
            <div class="logosvg logosvg" v-html="Tech" />
          <span>{{$t('video.tag3')}}</span>
        </div>
      </div>
      <div style="z-index: 2;bottom:0" class="row mx-auto text-center inner position-absolute w-100 d-none d-md-flex">
        <div class="col-md-4">
            <div class="logosvg pr-5 pr-md-0 logosvg" v-html="Eco" />
          <span>{{$t('video.tag1')}}</span>
        </div>
        <div class="col-md-4">
            <div class="logosvg pr-5 pr-md-0 logosvg" v-html="France" />
          <span>{{$t('video.tag2')}}</span>
        </div>
        <div class="col-md-4">
            <div class="logosvg pr-5 pr-md-0 logosvg" v-html="Tech" />
          <span>{{$t('video.tag3')}}</span>
        </div>
      </div>-->
      <div class="homepage-slider-background" ref="backgroundImg">
        <div class="homepage-slider-background-item active activeNew mediabox">
        <picture class="invgradientoverlay ">
          <source media="screen and (min-width: 64em)"
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/AllMountain.jpeg 640w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/AllMountain.jpeg 768w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/AllMountain.jpeg 1024w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/AllMountain.jpeg 1366w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/AllMountain.jpeg 1600w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/AllMountain.jpeg 1920w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/AllMountain.jpeg 2500w,"
            data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,fo-bottom/AllMountain.jpeg"
          >
          <source media="screen and (min-width: 48em)"
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-4-3,fo-bottom,c-maintain_ratio/AllMountain.jpeg 640w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 768w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 1024w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 1366w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 1600w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 1920w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,ar-4-3,c-maintain_ratio/AllMountain.jpeg 2500w,"
            data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,ar-4-3,w-1000,fo-bottom/AllMountain.jpeg"
          >
          <source
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,ar-3-5,fo-bottom,c-maintain_ratio/AllMountain.jpeg 640w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 768w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 1024w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 1366w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 1600w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 1920w,
                https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,ar-3-5,c-maintain_ratio/AllMountain.jpeg 2500w,"
            data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,ar-3-5,fo-bottom/AllMountain.jpeg"
          >
          <img class="lazyload mediabox-img lazypreload"
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/AllMountain.jpeg 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/AllMountain.jpeg 2x"
            data-sizes="auto" />
        </picture>
        </div>
      </div>
      <!--<div class="scrollicon d-none d-lg-block">
        <div class="mouse">
          <div class="frame">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 54.9 91">
              <path class="st0" linejoin="round"
                    d="M27.4 3.6L27.4 3.6C14.2 3.6 3.5 14.3 3.5 27.5v36c0 13.2 10.7 23.9 23.9 23.9h0c13.2 0 23.9-10.7 23.9-23.9v-36C51.4 14.3 40.7 3.6 27.4 3.6z"></path>
            </svg>
          </div>
          <div class="mouse-left">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
              <path linejoin="round" class="Draw-Frame Animate-Draw"
                    d="M27.4 87.5L27.4 87.5c-13.2 0-23.9-10.7-23.9-23.9v-36c0-13.2 10.7-23.9 23.9-23.9h0"></path>
            </svg>
          </div>
          <div class="mouse-right">
            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
              <path linejoin="round" class="Draw-Frame Animate-Draw"
                    d="M0 3.6L0 3.6c13.2 0 23.9 10.7 23.9 23.9v36c0 13.2-10.7 23.9-23.9 23.9h0"></path>
            </svg>
          </div>
        </div>
      </div>-->
      <v-row no-gutters class="homepage-slider-content px-md-10 ma-md-10">
        <v-col class="topCenter col-12">
          <div class="bannerLeft px-2 text-center">
            <h4 class="app-title mb-2">{{$t('video.subtitle')}}</h4>
            <!--<h2 class="app-subtitle"> {{$t('video.title')}}{{$t('video.title2')}}</h2>-->
            <div style="bottom:0; left:0; right:0" class="text-center position-sm-relative position-absolute pb-5 px-5 justify-center d-block d-md-flex">
                <MoleculesBtnTrsp :hovering="outlined" :text="$t('btnWaitforit')" @click.native="$store.state.productModal=true" style="width:260px" class="mx-2 mb-2" />
                <MoleculesBtnTrsp :text="$t('btnTitle')" @click.native="$store.state.plantModal=true" style="width:260px" class="mx-2 mb-2" />
          </div>
          </div>
        </v-col>
      </v-row>
      <!--<div class="bottomleft text-gray">
        <span class="pr-2">{{$store.state.tree_count.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</span><span>{{$t('video.forest.term1')}}</span> <br>
        <span class="pr-2">{{parseFloat(this.$store.state.co2_compensated.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " "))}}</span><span>{{$t('video.forest.term2')}}</span> <br>
        <span class="pr-2">{{parseFloat(this.$store.state.reforest.replace(/\B(?=(\d{3})+(?!\d))/g, " "))}}</span><span>{{$t('video.forest.term3')}}</span> <br>
      </div>-->
    </div>
  </div>
</template>

<script>
    /*import Eco from "~/assets/images/ecological.svg?raw";
    import France from "~/assets/images/france.svg?raw";
    import Tech from "~/assets/images/tech.svg?raw";*/
    export default {
        name: "video-section",
        data() {
            return {
                /*Eco,France,Tech,*/
            }
        }
    }
</script>

<i18n>
{
	"en": {
		"video": {
			"forest": {
				"term1": "planted trees",
				"term2": "tonnes of CO2 offset",
				"term3": "reforested hectares"
			},
			"subtitle": "Say hello to Dionysos, the vegetal wine leather",
			"tag1": "Ecological / Vegan",
			"tag2": "Made in France",
			"tag3": "Sustainable technology",
			"title": "Inspired by tradition. ",
			"title2": "Made for the future."
		}
	},
	"fr": {
		"video": {
			"forest": {
				"term1": "arbres plantés",
				"term2": "tonnes CO2 compensées",
				"term3": "hectares reforestés"
			},
			"subtitle": "Dites bonjour à Dionysos, le cuir végétal de vin",
			"tag1": "Ecologique / Vegan",
			"tag2": "Made in France",
			"tag3": "Technologie durable",
			"title": "Inspiré par la tradition. ",
			"title2": "Fabriqué pour le futur."
		}
	}
}
</i18n>

<style scoped lang="scss">
  @import "~/assets/scss/home/video";
</style>
