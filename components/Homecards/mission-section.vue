<template>
    <div>
        <div class="fp-section d-none d-lg-table finebordert">
            <div class="page-title absolute-title d-none">{{$t('mission.title')}}</div>
            <div class="fp-tableCell" style="height: 80vh!important">
                <div class="fp-bg" style="transform: translateX(0px) translateY(0px);">
                    <div class="homepage-item">
                        <div class="homepage-catalogue-background" :class="{'active':currentMissionHover}">
                            <div class="homepage-catalogue-background-big">
                                <div class="skeletton">
                                    <img
                                    data-sizes="auto"
                                    :srcset="backgroundImage.img"
                                    :data-lowsrc="backgroundImage.blur_v"
                                    class="lazyload mediabox-img"
                                    alt="bg image"/>
                                </div>
                            </div>
                            <div class="homepage-catalogue-background-lines"
                                 :class="{'opacity-02':currentMissionHover}"
                            >
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="homepage-catalogue-background-divided d-none">
                                <div v-for="(bgLogo,idx) in $store.state.picture.backgroundlogos" :key="'bg_logo_'+idx">
                                    <div>
                                        <img
                                          data-sizes="auto"
                                          :data-src="bgLogo.img"
                                          class="lazyload d-none position-relative"
                                          style="z-index:10"
                                      />
                                        </div>
                                    </div>
                            </div>
                            <div class="homepage-catalogue-background-divided2" :class="{'d-none':currentMissionHover}">
                                <div v-for="(bgImage,idx) in $store.state.picture.backgroundImages" :key="'bg_image_'+idx" class="blackoverlay gradientoverlay">
                                    <div class="skeletton">
                                            <img
                                            data-sizes="auto"
                                            :data-srcset="bgImage.img"
                                            :data-lowsrc="bgImage.blur_v"
                                            class="lazyload mediabox-img lazypreload"
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
                                    <div style="fill: #ffffff;stroke: #ffffff;width:35px" class="mx-auto" v-html="MagazinePlus" />
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
        <div class="d-lg-none mission-accordion finebordert">
            <v-expansion-panels accordion>
                <div v-for="(mission,m_idx) in $t('mission.sections').slice().reverse()" :key="'mission_ac'+m_idx" class="w-100">
                    <v-expansion-panel
                            style="min-height: 33vw"
                            class="gradientoverlay blackoverlay backgroundcover"
                    >
                        <div class="skeletton">
                            <img
                                data-sizes="auto"
                                :data-srcset="$store.state.picture.backgroundImages[$store.state.picture.backgroundImages.length-1-m_idx].img"
                                :data-lowsrc="$store.state.picture.backgroundImages[$store.state.picture.backgroundImages.length-1-m_idx].blur_v"
                                class="lazyload mediabox-img"
                            />
                        </div>
                        <v-expansion-panel-header style="min-height:250px" ripple class="flex-column align-start p-0 z-2">
                            <div class="pa-sm-10 pvw h-100 z-2">
                                <div style="height:49px" class="pb-3">
                                    <div style="fill: #ffffff;stroke: #ffffff;width:35px" class="plusIcon" v-html="MagazinePlus" />
                                    <div style="fill: #ffffff;stroke: #ffffff;width:35px" class="minusIcon" v-html="MagazineMinus" />
                                </div>
                                <div class="sub-title text-white">
                                    {{mission.title}}
                                </div>
                                <div class="sub-title text-gray">
                                    {{mission.subtitle}}
                                </div>
                            </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content :eager="true">
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
    import MagazinePlus from "~/assets/images/magazine-plus.svg?raw";
    import MagazineMinus from "~/assets/images/magazine-minus.svg?raw";
    export default {
        name: "mission-section",
        data() {
            return {
                MagazinePlus,MagazineMinus,
                currentMissionHover: null,
                backgroundImage: '',
                backgroundImagesL:''
            }
        },
        methods: {
            fpMouseOver(idx) {
                this.currentMissionHover = idx;
                this.backgroundImage = this.$store.state.picture.backgroundImages[idx - 1];
                this.backgroundlogos = this.$store.state.picture.backgroundlogos[idx - 1];
            },
        }, 
        i18n: {
            messages: {
                en: {
                    mission: {
                        title: "The mission: to reunite man with nature",
                        sections: [{
                            title: "Total traceability via our Blockchain technology",
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
                                title: "Tracabilité totale via notre technologie ORIGIN®.",
                                subtitle:
                                    "Suivez l'origine de vos produits de la matière première jusqu'à leurs livraisons.",
                                items:
                                    [
                                        "Tagez un QR code pour découvrir l'histoire de vos produits et de leurs fabriquants.",
                                        "Notre application est basée sur la Blockchain, une base de donnée publique et décentralisée. Infalsifiable.",
                                        "Elle est Neutre en CO2 grâce à nos projets de reforestation.",
                                    ]
                            }
                            , {
                                title: "Design en studio. Naturellement sobre.",
                                subtitle:
                                    "Intuitives, brutes, sans excès, nos créations sont pensées pour l’usage.",
                                items:
                                    [
                                        "Le design est pensé intemporel, échappant à toute mode éphémère.",
                                        "Inspirées par les architectes et designers du monde. Nos objets casse les codes de la maroquinerie classique.",
                                        "Centrés sur relation entre l’Homme et l’objet. Le design est construit pour la fonctionnalité et le quotidien."
                                    ]
                            }
                            , {
                                title: " Fabriqué en France. Point.",
                                subtitle:
                                    "Raffinés, locaux, nos objets développent le savoir-faire français.",
                                items:
                                    [
                                        "Local : Véritable projet français de A à Z.",
                                        "Social : Développer les emplois et les traditions francaises.",
                                        "Éthique : Ne pas profiter de pays à bas couts (y compris en Europe).",
                                        "Écologique : Éviter les transports et l’opacité de pays en dehors de nos règlementations."
                                    ]
                            }
                            , {
                                title: "Végétalement noble. Nos cuirs de vin DIONYSOS®.",
                                subtitle:
                                    "Solides, performantes, nos matières sont issues de la terre et des vendanges.",
                                items:
                                    [
                                        "Issues de la rencontre entre la nature et nos innovations technologiques.",
                                        "Beaucoup plus écologiques et aussi solides que le cuir animal. Sans entretient",
                                        "Sans matière animale. Sans souffrance.",
                                    ]
                            }]
                    }
                }
                ,
            }
        }
    }
/*
<i18n>
{
	"en": {
		"mission": {
			"sections": [
				{
					"items": [
						"Tag a QR code to discover the history of your products and their manufacturers.",
						"Our application is based on the Blockchain, a public and decentralized database. Tamper-proof.",
						"It is CO2 neutral thanks to our reforestation projects."
					],
					"subtitle": "Track the origin of your products from raw material to delivery.",
					"title": "Total traceability via our ORIGIN® technology."
				},
				{
					"items": [
						"The design is thought to be timeless, escaping any ephemeral fashion.",
						"Inspired by architects and designers around the world. Our objects break the codes of classic leather goods.",
						"Centered on the relationship between man and object. Design is built for functionality and everyday."
					],
					"subtitle": "Intuitive, raw, without excess, our creations are designed for use.",
					"title": "Design in studio. Naturally sober."
				},
				{
					"items": [
						"Local: Genuine French project from A to Z.",
						"Social: Develop French jobs and traditions.",
						"Ethics: Do not take advantage of low-cost countries (including Europe).",
						"Ecological: Avoid transport and the opacity of countries outside our regulations."
					],
					"subtitle": "Refined, local, our objects develop French know-how.",
					"title": " Made in France. Point."
				},
				{
					"items": [
						"From the encounter between nature and our technological innovations.",
						"Much more ecological and as strong as animal leather. Without maintenance",
						"Without animal matter. Without suffering."
					],
					"subtitle": "Solid, efficient, our materials come from the soil and the harvest.",
					"title": "Vegetally noble. Our DIONYSOS® wine leathers."
				}
			],
			"title": "The mission: reunite man with nature"
		}
	},
	"fr": {
		"mission": {
			"sections": [
				{
					"items": [
						"Tagez un QR code pour découvrir l'histoire de vos produits et de leurs fabriquants.",
						"Notre application est basée sur la Blockchain, une base de donnée publique et décentralisée. Infalsifiable.",
						"Elle est Neutre en CO2 grâce à nos projets de reforestation."
					],
					"subtitle": "Suivez l'origine de vos produits de la matière première jusqu'à leurs livraisons.",
					"title": "Tracabilité totale via notre technologie ORIGIN®."
				},
				{
					"items": [
						"Le design est pensé intemporel, échappant à toute mode éphémère.",
						"Inspirées par les architectes et designers du monde. Nos objets casse les codes de la maroquinerie classique.",
						"Centrés sur relation entre l’Homme et l’objet. Le design est construit pour la fonctionnalité et le quotidien."
					],
					"subtitle": "Intuitives, brutes, sans excès, nos créations sont pensées pour l’usage.",
					"title": "Design en studio. Naturellement sobre."
				},
				{
					"items": [
						"Local : Véritable projet français de A à Z.",
						"Social : Développer les emplois et les traditions francaises.",
						"Éthique : Ne pas profiter de pays à bas couts (y compris en Europe).",
						"Écologique : Éviter les transports et l’opacité de pays en dehors de nos règlementations."
					],
					"subtitle": "Raffinés, locaux, nos objets développent le savoir-faire français.",
					"title": " Fabriqué en France. Point."
				},
				{
					"items": [
						"Issues de la rencontre entre la nature et nos innovations technologiques.",
						"Beaucoup plus écologiques et aussi solides que le cuir animal. Sans entretient",
						"Sans matière animale. Sans souffrance."
					],
					"subtitle": "Solides, performantes, nos matières sont issues de la terre et des vendanges.",
					"title": "Végétalement noble. Nos cuirs de vin DIONYSOS®."
				}
			],
			"title": "La mission: réunifier l’Homme à la nature"
		}
	}
}
</i18n>
*/
</script>

<style scoped lang="scss">
    @import "~/assets/scss/home/mission";
</style>
