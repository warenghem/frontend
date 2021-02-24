<template>
  <div>
    <div class="videoSection">
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
        <div class="homepage-slider-background-item active activeNew skeletton mediabox">
        <!--<ik-image
            path="/AllMountain.jpeg"
            :lqip="{active:true, quality: 40, blur: 5}"
            :transformation="[{quality: 65, width:1500, height:800, dpr:2, focus: 'bottom'}]"
            loading="lazy"
            class="cover"
          />-->
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
      <v-row no-gutters class="homepage-slider-content px-md-10 ma-md-10" style="max-width:600px">
        <v-col class="topCenter col-12">
          <div class="bannerLeft px-2 text-left">
            <h4 class="title mb-2">{{$t('video.subtitle')}}</h4>
            <h2 class="subtitle"> {{$t('video.title')}}{{$t('video.title2')}}</h2>
            <div style="bottom:0; left:0; right:0" class="text-center position-sm-relative position-absolute pb-5 px-5">
              <p style="font-size:15px;line-height:16px" class="text-justify teradeli-light" v-html="$t('video.rightSection.subtitle')">
              <div>
                <Reservebutton style="width:260px" class="mx-2 mb-2" />
              </div>
              <div>
                <Treebutton style="width:260px" class="lightbugattiblue mx-2 mb-2" />
              </div>
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
    import Eco from "~/assets/images/ecological.svg?raw";
    import France from "~/assets/images/france.svg?raw";
    import Tech from "~/assets/images/tech.svg?raw";
    export default {
        name: "video-section",
        data() {
            return {
                Eco,France,Tech,
                dialog: false,
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                /*interval: {},
                progressValue: 0,
                maxProgress: 30,
                treeData: {
                    treeCount: 0,
                    co2: 0,
                    reforest: 0
                },*/
            }
        },
        /*beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            this.treeData.treeCount = this.$store.state.tree_count;
            this.treeData.co2 = parseFloat(this.$store.state.co2_compensated);
            this.treeData.reforest = parseFloat(this.$store.state.reforest)
            this.interval = window.setInterval(function () {
                if (this.progressValue < this.maxProgress) {
                    this.progressValue = this.progressValue < this.maxProgress ? this.progressValue + 1 : this.maxProgress;
                }
            }.bind(this), 50);*/
            // changeBackground();
            //
            // function changeBackground() {
            //     var activeIndex = parseInt(document.querySelector(".homepage-slider-background-item.active").getAttribute('data-idx'));
            //     var previousIndex = 0;
            //     var nextIndex = 0;
            //     if (activeIndex === 1) {
            //         previousIndex = 2;
            //     } else {
            //         previousIndex = activeIndex - 1;
            //     }
            //     if (activeIndex === 2) {
            //         nextIndex = 1;
            //     } else {
            //         nextIndex = activeIndex + 1;
            //     }
            //     document.querySelector(".homepage-slider-background-item[data-idx='" + previousIndex + "']").classList.remove("activeNew");
            //
            //     // Set Next Direction
            //     var direction = document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").getAttribute("data-direction");
            //     switch (direction) {
            //         case "right":
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "bottom");
            //             break;
            //         case "bottom":
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "left");
            //             break;
            //         case "left":
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "top");
            //             break;
            //         case "top":
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "right");
            //             break;
            //     }
            //     setTimeout(function () {
            //         document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").classList.add('active', 'activeNew');
            //         document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").classList.remove("activeNew");
            //         setTimeout(function () {
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").classList.remove("active");
            //             document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").setAttribute("data-direction", "");
            //             changeBackground();
            //         }, 5000);
            //     }, 100);
            // }
        // },
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
			"rightSection": {
				"alerttime": "Now",
				"alerttitle": "Warenghem says",
				"error": "seems invalid or already registered.",
				"label1": "First Name",
				"label2": "e-mail",
				"subtitle": "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed about the progress of the project.",
				"success": "Thank you! To avoid SPAM, we have sent you a confirmation email before starting the planting ... See you soon!",
				"tag": "Creation <br> of 3D objects",
				"title": "Project progress"
			},
			"subtitle": "Wine vetal leather shoes and leather goods",
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
			"rightSection": {
				"alerttime": "maintenant",
				"alerttitle": "Warenghem dit",
				"error": "semble invalide ou déjà enregistré.",
				"label1": "PRENOM ",
				"label2": "EMAIL",
				"subtitle": "Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.",
				"success": "Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de commencer la plantation... A tout de suite!",
				"tag": "Création <br> d’objets en 3D",
				"title": "Avancement du projet"
			},
			"subtitle": "Maroquinerie et chaussures en cuir végétal de vin",
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
