<template>
  <div>
    <div class="videoSection">
      <div class="homepage-slider-background" ref="backgroundImg">
        <div class="homepage-slider-background-item active activeNew gradientoverlay blackoverlay">
        <!--<ik-image
            path="/S048_PF_TEuxOrfV7C_a.png"
            :lqip="{active:true, quality: 40, blur: 5}"
            :transformation="[{quality: 65, width:1500, height:800, dpr:2, focus: 'bottom'}]"
            loading="lazy"
            class="cover"
          />-->
        <picture>
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1500,fo-bottom/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom/S048_PF_TEuxOrfV7C_a.png 2x," 
            media="(min-width: 1500px)"
          >
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1280,fo-bottom/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1280,fo-bottom/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 1280px)"
          >
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1024,ar-4-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1024,ar-4-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 1024px)"
          >
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,ar-4-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,ar-4-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 640px)"
          >
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-480,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-480,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 480px)"
          >
          <source 
            data-srcset="http://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 1x,
                          http://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 320px)"
          >
          <source 
            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-240,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 1x,
                          https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-240,ar-3-5,fo-bottom,c-maintain_ratio/S048_PF_TEuxOrfV7C_a.png 2x,"
            media="(min-width: 240px)"
          >
          <img class="lazyload cover" data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1500,h-800,fo-bottom/S048_PF_TEuxOrfV7C_a.png" data-sizes="auto" />
        </picture>
        </div>

      </div>
      <div class="scrollicon d-none d-lg-block">
        <div class="mouse">
          <div class="frame">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.9 91">
              <path class="st0" linejoin="round"
                    d="M27.4 3.6L27.4 3.6C14.2 3.6 3.5 14.3 3.5 27.5v36c0 13.2 10.7 23.9 23.9 23.9h0c13.2 0 23.9-10.7 23.9-23.9v-36C51.4 14.3 40.7 3.6 27.4 3.6z"></path>
            </svg>
          </div>
          <div class="mouse-left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
              <path linejoin="round" class="Draw-Frame Animate-Draw"
                    d="M27.4 87.5L27.4 87.5c-13.2 0-23.9-10.7-23.9-23.9v-36c0-13.2 10.7-23.9 23.9-23.9h0"></path>
            </svg>
          </div>
          <div class="mouse-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
              <path linejoin="round" class="Draw-Frame Animate-Draw"
                    d="M0 3.6L0 3.6c13.2 0 23.9 10.7 23.9 23.9v36c0 13.2-10.7 23.9-23.9 23.9h0"></path>
            </svg>
          </div>
        </div>
      </div>
      <v-row no-gutters class="homepage-slider-content">
        <v-col class="topCenter my-auto col-12">
          <div class="bannerLeft px-2 text-center">
            <h2 class="title"> {{$t('video.title')}}{{$t('video.title2')}}</h2>
            <h4 class="subtitle">{{$t('video.subtitle')}}</h4>
          </div>
          <div class="row col-md-10 mx-auto text-center inner">
            <div class="col-md-4">
              <p>
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65/Icons/ecological.svg">
              </p>
              <span>{{$t('video.tag1')}}</span>
            </div>
            <div class="col-md-4">
              <p>
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65/Icons/france.svg">
              </p>
              <span>{{$t('video.tag2')}}</span>
            </div>
            <div class="col-md-4">
              <p>
                <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65/Icons/tech.svg">
              </p>              
              <span>{{$t('video.tag3')}}</span>
            </div>
          </div>
        </v-col>

        <div style="bottom:0;right:0" class="mx-auto position-absolute pa-5">
          <treebutton/>
        </div>
        <div class="bottomleft text-gray">
          <animated-number ref="treeCount"
                           :from="0"
                           :to="treeData.treeCount"
                           :duration="3"
                           :delay="0"
                           easing="Power1.easeOut"
          ></animated-number> <span>{{$t('video.forest.term1')}}</span> <br>
          <animated-number ref="co2"
                           :from="0"
                           :to="treeData.co2"
                           :format="2"
                           :duration="3"
                           :delay="0"
                           easing="Power1.easeOut"
          ></animated-number> <span>{{$t('video.forest.term2')}}</span> <br>
          <animated-number ref="reforest"
                           :from="0"
                           :to="treeData.reforest"
                           :duration="3"
                           :delay="0"
                           :format="3"
                           easing="Power1.easeOut"
          ></animated-number> <span>{{$t('video.forest.term3')}}</span> <br>
        </div>

      </v-row>
    </div>


  </div>
</template>

<script>


    export default {
        name: "video-section",

        data() {
            return {
                dialog: false,
                interval: {},
                progressValue: 0,
                maxProgress: 30,
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                treeData: {
                    treeCount: 0,
                    co2: 0,
                    reforest: 0
                },
            }
        },
        beforeDestroy() {
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
            }.bind(this), 50);
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
        },
        methods: {},
        i18n: {
            messages: {
                en: {
                    video: {
                        title: 'Vegetable shoes & leather goods of the future. ',
                        title2: 'Now.',
                        subtitle: 'Meeting between French leather traditions and our wine leathers',
                        tag1: 'Ecological / Vegan',
                        tag2: 'Made in France',
                        tag3: 'Sustainable technology',
                        forest: {
                            term1: 'trees planted',
                            term2: 'tonnes of CO2 offset',
                            term3: 'reforested hectares'
                        },
                        rightSection: {
                            title: 'Project progress',
                            tag: 'Creation <br> of 3D objects',
                            subtitle: "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed of the progress of the project.",
                            label1: 'FIRST NAME',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem says',
                            alerttime: 'just now',
                            error: 'looks invalid or already subscribed. ',
                            success: 'Thank you! To avoid SPAM, we have sent you a confirmation email before ' +
                                'start planting ... see you soon!'
                        }
                    }
                },
                fr: {
                    video: {
                        title: ' Maroquinerie & chaussures végétales du futur. ',
                        title2: ' Dès à présent.',
                        subtitle: 'Rencontre entre les traditions maroquinières francaises et nos cuirs de vin',
                        tag1: 'Ecologique / Vegan',
                        tag2: 'Made in France',
                        tag3: 'Technologie durable',
                        forest: {
                            term1: 'arbres plantés',
                            term2: 'tonnes CO2 compensées',
                            term3: 'hectares reforestés'
                        },
                        rightSection: {
                            title: 'Avancement du projet',
                            tag: 'Création <br> d’objets en 3D',
                            subtitle: 'Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.',
                            label1: 'PRENOM ',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem dit',
                            alerttime: 'maintenant',
                            error: 'semble invalide ou déjà enregistré.',
                            success: 'Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de ' +
                                'commencer la plantation... A tout de suite!'
                        }
                    }
                },
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/home/video";

</style>
