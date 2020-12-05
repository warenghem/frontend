<template>
    <div>
        <div class="fp-section d-none d-lg-table finebordert elevation-3">
            <div class="page-title absolute-title d-none">{{$t('mission.title')}}</div>
            <div class="fp-tableCell" style="height: 900px;">
                <div class="fp-bg" style="transform: translateX(0px) translateY(0px);">
                    <div class="homepage-item">
                        <div class="homepage-catalogue-background" :class="{'active':currentMissionHover}">
                            <div class="homepage-catalogue-background-big">
                                <!--<ik-image
                                        :path="backgroundImage"
                                        :transformation="[{quality: 65, width:1500, dpr:2, focus: 'bottom'}]"
                                        class="cover "
                                />-->
                                <img
                                  data-sizes="auto"
                                  :srcset="backgroundImage.img"
                                  :src="backgroundImage.blur_v"
                                  class="lazyload cover"
                                 alt="bg image"/>
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

                                <div v-for="(bgImage,idx) in $store.state.picture.backgroundImages" :key="'bg_image_'+idx" class="blackoverlay gradientoverlay">
                                    <div>
                                        <!--<ik-image
                                            :path="bgImage"
                                            :lqip="{active:true, quality: 40, blur: 5}"
                                            :transformation="[{quality: 65, width:1500, dpr:2, focus: 'bottom'}]"
                                            loading="lazy"
                                            class="cover"
                                        />-->
                                        <img
                                          data-sizes="auto"
                                          :data-srcset="bgImage.img"
                                          :src="bgImage.blur_v"
                                          class="lazyload cover"
                                      />
                                        </div>
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
                                    <img src="https://ik.imagekit.io/g1noocuou2/tr:q-65/Icons/magazine-plus.svg">
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
                <div v-for="(mission,m_idx) in $t('mission.sections').slice().reverse()" :key="'mission_ac'+m_idx" class="w-100">
                    <v-expansion-panel
                            style="min-height: 33vw"
                            class="gradientoverlay blackoverlay backgroundcover"
                    >
                    <!--<ik-image
                        :path="backgroundImages[backgroundImages.length-1-m_idx]"
                        :lqip="{active:true, quality: 40, blur: 5}"
                        :transformation="[{quality: 65, width:1500, dpr:2, focus: 'bottom'}]"
                        loading="lazy"
                        class="cover position-absolute"
                    />-->
                    <img
                        data-sizes="auto"
                        :data-srcset="$store.state.picture.backgroundImages[$store.state.picture.backgroundImages.length-1-m_idx].img"
                        :src="$store.state.picture.backgroundImages[$store.state.picture.backgroundImages.length-1-m_idx].blur_v"
                        class="lazyload cover position-absolute"
                    />
                        <v-expansion-panel-header style="min-height:250px" ripple class="flex-column align-start p-0 z-2">
                            <div class="pa-sm-10 pa-3 h-100 z-2">
                                <div class="pb-3">
                                    <img width="35px" src="https://ik.imagekit.io/g1noocuou2/Icons/magazine-plus.svg"
                                         alt="Wait For It"
                                         class="plusIcon"
                                    >
                                    <img style="padding-bottom:2px" width="35px"
                                         src="https://ik.imagekit.io/g1noocuou2/Icons/magazine-minus.svg"
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
                backgroundImage: '',
                backgroundImagesL:''
            }
        },
        methods: {
            fpMouseOver(idx) {
                this.currentMissionHover = idx;
                this.backgroundImage = this.$store.state.picture.backgroundImages[idx - 1];
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
