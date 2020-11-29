<template>
  <div>

    <div class="fp-section d-none d-lg-table finebordert elevation-3">
      <div class="page-title absolute-title d-none">{{$t('mission.title')}}</div>
      <div class="fp-tableCell" style="height: 900px;">
        <div class="fp-bg" style="transform: translateX(0px) translateY(0px);">
          <div class="homepage-item">
            <div class="homepage-catalogue-background" :class="{'active':currentMissionHover}">
              <div class="homepage-catalogue-background-big">
                <picture v-if="backgroundImage.images">
                  <source
                    :srcset="img.img"
                    :media="'(min-width: '+img.width+')'"
                    v-for="img in backgroundImage.images"
                    v-if="img.width"
                  >
                  <img class="lazyload cover "
                       :data-lowsrc="backgroundImage.images[backgroundImage.images.length-1].img"
                       data-sizes="auto" alt="" v-else
                       :src="backgroundImage.images[backgroundImage.images.length-1].img"/>
                </picture>
              </div>
              <div class="homepage-catalogue-background-lines"
                   :class="{'opacity-02':currentMissionHover}"
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="homepage-catalogue-background-divided2" :class="{'d-none':currentMissionHover}">
                <div v-for="(bgImage,idx) in backgroundImages" :key="'bg_image_'+idx"
                     class="blackoverlay gradientoverlay">
                  <picture>
                    <source
                      :srcset="img.img"
                      :media="'(min-width: '+img.width+')'"
                      v-for="img in bgImage.images"
                      v-if="img.width"
                    >
                    <img class="lazyload cover" :data-lowsrc="bgImage.images[bgImage.images.length-1].img"
                         data-sizes="auto" alt="" v-else :src="bgImage.images[bgImage.images.length-1].img"/>
                  </picture>
                </div>

              </div>
            </div>
            <div class="homepage-catalogue-links">
              <div class=" homepage-catalogue-links-item"
                   v-for="(mission,m_idx) in $t('mission.sections')"
                   @mouseover="fpMouseOver(m_idx+1)"
                   @mouseout="currentMissionHover=null"
                   :class="{'opacity-02':currentMissionHover}"
                   :key="'mission_'+m_idx"
              >
                <div class="pb-3">
                  <ik-image
                    path="/Icons/magazine-plus.svg"
                    :transformation="[{quality: 65}]"
                  />
                </div>
                <div class="homepage-catalogue-links-item-title pb-3">
                  <a>
                    <div class="text-left px-3 mb-4">
                      <div class="sub-title text-white">
                        {{mission.title}}
                      </div>
                      <div class="sub-title text-gray">
                        {{mission.subtitle}}
                      </div>
                    </div>
                  </a>
                </div>
                <div class="homepage-catalogue-links-item-links">
                  <div>
                    <ul class="text-left mb-4 teradeli-light">
                      <li class="fp-list-item" v-for="(item,idx) in mission.items"
                          :key="idx">
                        <div class="count">
                          {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                        </div>
                        <div class="col">{{item}}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-lg-none mission-accordion finebordert" style="background:black">
      <v-expansion-panels accordion>
        <div v-for="(mission,m_idx) in $t('mission.sections').slice().reverse()" :key="'mission_ac'+m_idx"
             class="w-100">
          <v-expansion-panel
            style="min-height: 33vw"
            class="gradientoverlay blackoverlay backgroundcover"
          >
            <picture v-if="backgroundImage.images" >
              <source
                :srcset="img.img"
                :media="'(min-width: '+img.width+')'"
                v-for="img in backgroundImages[m_idx].images"
                v-if="img.width"
              >
              <img class="lazyload cover" :data-lowsrc="backgroundImages[m_idx].images[backgroundImages[m_idx].images.length-1].img"
                   data-sizes="auto" alt="" v-else :src="backgroundImages[m_idx].images[backgroundImages[m_idx].images.length-1].img"/>
            </picture>
            <!--            <ik-image-->
            <!--              :path="backgroundImages1500[backgroundImages1500.length-1-m_idx]"-->
            <!--              :lqip="{active:true, quality: 40, blur: 5}"-->
            <!--              :transformation="[{quality: 65, width:1500, dpr:2, focus: 'bottom'}]"-->
            <!--              loading="lazy"-->
            <!--              class="cover position-absolute"-->
            <!--            ></ik-image>-->
            <v-expansion-panel-header style="min-height:250px" ripple class="flex-column align-start p-0 z-2">
              <div class="pa-sm-10 pa-3 h-100 z-2">
                <div class="pb-3">
                  <img width="35px" src="../assets/images/magazine-plus.svg"
                       alt="Wait For It"
                       class="plusIcon"
                  >
                  <img style="padding-bottom:2px" width="35px"
                       src="../assets/images/magazine-minus.svg"
                       alt="Wait For It"
                       class="minusIcon"
                  >
                </div>
                <div class="sub-title text-white">
                  {{mission.title}}
                </div>
                <div class="sub-title text-gray">
                  {{mission.subtitle}}
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div>
                <ul class="text-left mb-4 teradeli-light z-2">
                  <li class="fp-list-item" v-for="(item,idx) in mission.items"
                      :key="idx">
                    <div class="count">
                      {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                    </div>
                    <div class="col py-1 pr-0">{{item}}
                    </div>
                  </li>
                </ul>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mission-section",
        data() {
            return {
                currentMissionHover: null,
                backgroundImages: [
                    {
                        name: 'image 1',
                        images: [
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-240,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-240,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '240px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-320,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '320px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-480,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-480,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '480px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-640,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '640px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1024,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1024,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '1024px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1280,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1280,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '1280px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1500,fo-bottom/tech_mx5bGeVoG3pm.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom/tech_mx5bGeVoG3pm.jpg 2x,",
                                width: '1500px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,fo-bottom/tech_mx5bGeVoG3pm.jpg",
                                width: null
                            },
                        ]
                    },
                    {
                        name: 'image 2',
                        images: [
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-240,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-240,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '240px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-320,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '320px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-480,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-480,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '480px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-640,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '640px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1024,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1024,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '1024px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1280,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1280,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '1280px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1500,fo-bottom/studio_65kZ-dLBvomY.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom/studio_65kZ-dLBvomY.jpg 2x,",
                                width: '1500px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,fo-bottom/studio_65kZ-dLBvomY.jpg",
                                width: null
                            },
                        ]
                    },
                    {
                        name: 'image 3',
                        images: [
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-240,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-240,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '240px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-320,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '320px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-480,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-480,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '480px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-640,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '640px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1024,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1024,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '1024px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1280,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1280,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '1280px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1500,fo-bottom/roche_AT2d0GTl7n9w.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom/roche_AT2d0GTl7n9w.png 2x,",
                                width: '1500px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,fo-bottom/roche_AT2d0GTl7n9w.png",
                                width: null
                            },
                        ]
                    },
                    {
                        name: 'image 4',
                        images: [
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-240,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-240,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '240px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-320,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-320,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '320px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-480,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-480,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '480px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-640,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-640,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '640px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1024,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1024,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '1024px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1280,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1280,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '1280px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-1,w-1500,fo-bottom/home_gCAPosI9qrtpP.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom/home_gCAPosI9qrtpP.jpg 2x,",
                                width: '1500px'
                            },
                            {
                                img: "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1000,fo-bottom/home_gCAPosI9qrtpP.jpg",
                                width: null
                            },
                        ]
                    }
                ],
                backgroundImage: {}
            }
        },
        methods: {
            fpMouseOver(idx) {
                this.currentMissionHover = idx;
                this.backgroundImage = this.backgroundImages[idx - 1];
                console.log(this.backgroundImage)
            }
        }
        ,
        i18n: {
            messages: {
                en: {
                    mission: {
                        title: "The mission: to reunite man with nature",
                        sections: [{
                            title: "Sustainable technologies. Total traceability.",
                            subtitle: "Powerful, CO2 neutral, our technologies support the regeneration of nature.",
                            items:
                                [
                                    "Blockchain technology. For seamless transparency.",
                                    "Bio-Technologies. As an alternative to animal leather.",
                                    "CO2 neutral technologies. Powered by renewable energies.",
                                    "Technologies and electronics made in France. Our factories seek to innovate without altering the environment."
                                ]
                        }
                            , {
                                title: "Design in the studio. Naturally understated.",
                                subtitle:
                                    "Intuitive, raw, without excess, our creations are designed for use.",
                                items:
                                    [
                                        "Passionate about objects that last. The design is thought to be timeless, escaping any ephemeral fashion.",
                                        "Inspired by architects and designers. The assertive personality of our" +
                                        "objects break the codes of classic leather goods.",
                                        "Centered on the relationship between Man and the object. Design is built for the" +
                                        "functionality and everyday life.",
                                        "Focused on a future that we must reinvent. The style of each material is" +
                                        "studied to confuse the object in the landscape.",
                                    ]
                            }
                            , {
                                title: "Made in France. Point.",
                                subtitle:
                                    "Refined, artisanal, local, our objects develop French industry and know-how.",
                                items:
                                    [
                                        "Premises: Genuine French project from A to Z.",
                                        "Social: Developing French jobs and traditions.",
                                        "Ethics: Do not take advantage of low-cost countries (including Europe).",
                                        "Green: Let's avoid transport and the opacity of countries outside our national regulations."
                                    ]
                            }
                            , {
                                title: "Dionysos® wine leather. Vegetally noble.",
                                subtitle:
                                    "Efficient, natural, solid, our materials come from the soil and the harvest.",
                                items:
                                    [
                                        "Resulting from the encounter between nature and our technological innovations.",
                                        "Much more ecological and as strong as traditional leather.",
                                        "Does not require any maintenance.",
                                        "Without animal matter. Without suffering.",
                                    ]
                            }]
                    }
                }
                ,
                fr: {
                    mission: {
                        title: "La mission: réunifier l’Homme à la nature",
                        sections: [
                            {
                                title: "Technologies durables. Tracabilité totale.",
                                subtitle:
                                    "Puissantes, neutres en CO2, nos technologies accompagnent la régénération de la nature.",
                                items:
                                    [
                                        "Technologie Blockchain. Pour une transparence sans faille.",
                                        "Bio-Technologies. Comme alternative au cuir animal.",
                                        "Technologies neutres en CO2. Alimentées par des énergies renouvelables.",
                                        "Technologies et electroniques fabriquées en France. Nos usines cherchent à innover sans altérer l’environnement."
                                    ]
                            }
                            , {
                                title: "Design en studio. Naturellement sobre.",
                                subtitle:
                                    "Intuitives, brutes, sans excès, nos créations sont pensées pour l’usage.",
                                items:
                                    [
                                        "Passionés par des objets qui durent. Le design est pensé intemporel, échappant à toute mode éphémère.",
                                        "Inspirées par les architectes et designers. La personnalité affirmée de nos " +
                                        "objets casse les codes de la maroquinerie classique.",
                                        "Centrés sur relation entre l’Homme et l’objet. Le design est construit pour la " +
                                        "fonctionnalité et le quotidien.",
                                        "Focalisés sur un futur que nous devons réinventer. Le style de chaque matière est " +
                                        "étudié pour confondre l’objet dans le paysage.",
                                    ]
                            }
                            , {
                                title: " Fabriqué en France. Point.",
                                subtitle:
                                    "Raffinés, artisanaux, locaux, nos objets développent l’industrie et le savoir-faire français.",
                                items:
                                    [
                                        "Local : Véritable projet français de A à Z.",
                                        "Social : Développer les emplois et les traditions francaises.",
                                        "Éthique : Ne pas profiter de pays à bas couts (y compris en Europe).",
                                        "Écologique : Éviter les transports et l’opacité de pays en dehors de nos règlementations nationales."
                                    ]
                            }
                            , {
                                title: "Cuir de vin Dionysos®. Végétalement noble.",
                                subtitle:
                                    "Performantes, naturelles, solides, nos matières sont issues de la terre et des vendanges.",
                                items:
                                    [
                                        "Issues de la rencontre entre la nature et nos innovations technologiques.",
                                        "Beaucoup plus écologiques et aussi solides que le cuir traditionnel.",
                                        "Ne demande aucun entretien",
                                        "Sans matière animale. Sans souffrance.",
                                    ]
                            }]
                    }
                }
                ,
            }
        }
    }
</script>

<style scoped lang="scss">
  @import "../assets/scss/home/mission";


</style>
