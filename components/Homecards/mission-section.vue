<template>
    <div>
        <v-container fluid style="padding:0!important" class="productgridhome pa-0">
            <NuxtLink :to="localePath('sustainabletech/dionysos')"> 
            <v-card 
                height= "100%"
                lazy
                class="homecard bgcard hand invgradientoverlay"
            >
                    <div class="h-100 img-fluid theme--light position-relative skeletton">
                        <div class="pvw text-center">
                            <h2 class="home-title teradeli-medium px-0 text-white">{{$t('section1.title')}}</h2>
                            <div class="pt-2 home-subtitle text-white"> {{$t('section1.subtitle')}}</div>
                            <v-theme-provider dark>
                                <Discoverbutton class="text-white pt-3 position-relative" style="font-size:16px"/>
                            </v-theme-provider>
                        </div>
                        <div>
                            <img
                                data-sizes="auto"
                                :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/Environments/dionysos_2.png 2500w'"
                                class="lazyload mediabox-img"
                            />
                        </div>
                    </div>
            </v-card>
            </NuxtLink>
            <v-card 
                height= "100%"
                lazy
                class="homecard bgcard hand invgradientoverlay"
            >
                    <div class="h-100 img-fluid theme--light position-relative skeletton">
                        <div class="pvw text-center">
                            <h2 class="home-title teradeli-medium px-0 text-white">{{$t('section2.title')}}</h2>
                            <div class="pt-2 home-subtitle text-white"> {{$t('section2.subtitle')}}</div>
                        </div>
                        <div style="position: absolute;overflow: hidden;top: 0;width: 100%;height: 100%;">
                            <div class="blackoverlay gradientoverlay h-100 w-100">
                                <div class="skeletton h-100 w-100">
                                    <video class="h-100 w-100" style="object-fit:cover" width="720" height="405" webkit-playsinline playsinline autoplay loop muted poster="https://ik.imagekit.io/g1noocuou2/projects.jpg">
                                        <source src="https://res.cloudinary.com/dfnpkqf5d/video/upload/f_auto,q_auto:good/v1613767325/pexels-alessandro-giordano-5494638_zbuos5.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
            </v-card>
            <NuxtLink :to="localePath('origin')"> 
            <v-card 
                height= "100%"
                lazy
                class="homecard bgcard hand invgradientoverlay"
            >
                    <div class="h-100 img-fluid theme--light position-relative skeletton">
                        <div class="pvw text-center">
                            <h2 class="home-title teradeli-medium px-0 text-white">{{$t('section3.title')}}</h2>
                            <div class="pt-2 home-subtitle text-white">{{$t('section3.subtitle')}}</div>
                            <v-theme-provider dark>
                                <Discoverbutton class="text-white theme--dark pt-3 position-relative" style="font-size:16px"/>
                            </v-theme-provider>
                        </div>
                        <div>
                            <img
                                data-sizes="auto"
                                :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png 2500w'"
                                class="lazyload mediabox-img"
                            />
                        </div>
                    </div>
            </v-card>
            </NuxtLink>
        </v-container>
    </div>
</template>

<script>
export default {
        name: "mission-section",
        data() {
            return {
                currentMissionHover: null,
                backgroundImage: '',
                backgroundImagesL:'',
                classe: [
                    "d-block text-white pt-3 position-relative",
                    "d-none",
                    "d-block text-white pt-3 position-relative",
                ],
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
                    section1: {
                            title: "Dionysos® wine leather. Vegetally noble.",
                            subtitle: "Efficient, natural, solid, our materials come from the soil and the harvest.",
                        },
                    section2: {
                            title: "Made in France. Saddler finishing.",
                            subtitle: "Refined, artisanal, local, our objects develop French industry and know-how.",
                        },
                    section3: {
                            title: "Total traceability via our Blockchain technology",
                            subtitle: "Powerful, CO2 neutral, our technologies support the regeneration of nature.",
                        },
                   /* mission: {
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
                            , /*{
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
                    }*/
                }
                ,
                fr: {
                    section1: {
                            title: "Végétalement noble. Nos cuirs de vin DIONYSOS®.",
                            subtitle: "Solides, performantes, nos matières sont issues de la terre et des vendanges."
                        },
                    section2: {
                            title: "Fabriqué en France. Finitions sellier.",
                            subtitle: "Raffinés, locaux, nos objets développent le savoir-faire français."
                        },
                    section3: {
                            title: "Tracabilité totale via notre technologie ORIGIN®.",
                            subtitle: "Suivez l'origine de vos produits de la matière première jusqu'à leurs livraisons."
                        },
                    /*mission: {
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
                            ,/* {
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
                    }*/
                }
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
#Container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

#Container video {
    position: absolute;
    left: 50%;
    top: 50%;
    /* The following will size the video to fit the full container. Not necessary, just nice.*/
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 0;
}

#Container div {
    position: relative;
    z-index: 1;
}
    .productgridhome {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    padding: 1rem!important;
    grid-gap: 1rem;
    @media (max-width: 48em) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        grid-gap: 0.5rem;
    }
    }
</style>
