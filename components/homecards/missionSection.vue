<template>
    <div>
        <v-theme-provider dark>
            <v-container fluid class="productgridhome pa-0">
                <OrganismsCardMain
                    v-for="(mission,p_idx) in missions"
                    :key="p_idx"                 
                    :link="link[p_idx]" 
                    :textColor="'white--text'" :btnText="$t('btnDiscover')" :className="className[p_idx]" :title="mission.title" :subtitle="mission.subtitle" :image="image[p_idx]" :type="type[p_idx]"
                />
            </v-container>
        </v-theme-provider>
    </div>
</template>

<script>
export default {
        name: "mission-section",
        data() {
            return {
                image: [
                    ",fo-bottom,c-maintain_ratio/Environments/dionysos_2.png",
                    "https://res.cloudinary.com/dfnpkqf5d/video/upload/f_auto,q_auto:good/v1613767325/pexels-alessandro-giordano-5494638_zbuos5.mp4",
                    ",fo-custom,h-100,cm-extract/Environments/tech_abstractstone.png",
                ],
                link: [
                    "sustainabletech/dionysos/",
                    "",
                    "sustainabletech/origin/",
                ],
                className: [
                    "div1",
                    "div2",
                    "div3",
                ],
                type: [
                    "bgImage",
                    "video",
                    "bgImage"
                ],
                missions: this.$t('missions')
            }
        }, 
        i18n: {
            messages: {
                en: {
                    missions: [
                        {
                            title: "Dionysos® wine leather. Vegetally noble.",
                            subtitle: "Efficient, natural, solid, our materials come from the soil and the harvest."
                        },
                        {
                            title: "Made in France. Saddler finishing.",
                            subtitle: "Refined, artisanal, local, our objects develop French industry and know-how."
                        },
                        {
                            title: "Total traceability via our Blockchain technology",
                            subtitle: "Powerful, CO2 neutral, our technologies support the regeneration of nature."
                        }
                    ]
                }
                ,
                fr: {
                    missions: [
                        {
                            title: "Végétalement noble. Nos cuirs de vin DIONYSOS®.",
                            subtitle: "Solides, performantes, nos matières sont issues de la terre et des vendanges."
                        },
                        {
                            title: "Fabriqué en France. Finitions sellier.",
                            subtitle: "Raffinés, locaux, nos objets développent le savoir-faire français."
                        },
                        {
                            title: "Tracabilité totale via notre technologie ORIGIN®.",
                            subtitle: "Suivez l'origine de vos produits de la matière première jusqu'à leurs livraisons."
                        }
                    ]
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
        grid-gap: 1rem;
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            grid-gap: 1rem;
        }
        @media #{map-get($display-breakpoints, 'xs-only')} {
            grid-gap: 0.5rem;
        }
    }
</style>
