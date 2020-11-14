<template>
    <div class="py-10 border-bottom-2" v-intersect.once="mapIntersect">
        <h2 class="page-title pt-md-5 pt-4 pr-4"> {{$t('title')}}</h2>
        <h3 class="page-details pb-md-5 py-2 teradeli-light pr-4"> {{$t('subtitle')}}</h3>
        <client-only>
            <l-map
                style="height: 800px; width: 800px"
                :zoom="zoom"
                :center="center"
                :options="{zoomControl: false,attributionControl: false}"
            >
                <l-tile-layer
                    :url="url"
                />
                <l-marker :lat-lng="[22.003975, 86.06648]">
                    <l-icon
                        :icon-size= "[32, 37]"
                        icon-url="require(`~/assets/images/map2.png`)"
                        >
                    </l-icon>
                </l-marker>   
                <l-marker :lat-lng="[-16.270975, 44.445852]">
                    <l-icon
                        :icon-size= "[32, 37]"
                        icon-url="require(`~/assets/images/map1.png`)" >
                    </l-icon>
                </l-marker>    
            </l-map>
        </client-only>
    </div>
</template>
<script>
	export default {
		name: 'leaflet-map',
        data() {
            return {
                zoom: 4,
                center: [3.770449, 64.38911],
                url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                showParagraph: false,
                showMap: true,
                };
            },
        methods: {
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            innerClick() {
                alert("Click!");
            }
        },
        i18n: {
            messages: {
                en: {
                    title: 'We also plant trees. And you?',
                    subtitle: 'To offset the CO2 emissions linked to the creation of our objects, your visits to our ' +
                        'site, and the electricity consumption of our technologies. Our projects are exclusively ' +
                        'reserved for the regeneration of biodiversity. Our trees are traced and certified.',
                    term1: 'planted trees',
                    term2: 'of CO2 compensated',
                    term3: 'reforested hectares',
                    madagascar: {
                        section1: {
                            title: 'Forest',
                            subtitle: 'Black mangrove',
                            paraTitle: 'Local flora and fauna.',
                            paraText: '<p>Madagascar has over 200,000 species of plants and animals that do not exist' +
                                ' anywhere else in the world. 90% of the forests have been destroyed, ' +
                                'displacing entire animal species and Malagasy people.</p>',
                            term1: 'CO2 compensation',
                            term2: 'Lifetime',
                            term2bis: '25y',
                            term3: 'Cut',
                        },
                        section2: {
                            title: 'Project',
                            subtitle: 'Paradis project, Madagascar',
                            paraTitle1: 'Incredible project. Total success.',
                            paraText1: "<p>Eden Reforestation Projects launched this program in 2007 following the" +
                                " critical loss of forests.</p><p>16 million mangroves have been planted. Healthy " +
                                "forests are starting to emerge and all the negative effects of deforestation are " +
                                "starting to disappear.</p>",
                            paraTitle2: 'An active local community. To remember.',
                            paraText2: "<p>The Vilamatsa were eager to be part of this reforestation initiative due " +
                                "to the success of a nearby plantation.</p><p>It gives them a decent income so that " +
                                "they can support their families again.</p>"
                        },
                        section3: {
                            title: 'Google Map link.'
                        }
                    },
                    india: {
                        section1: {
                            title: 'Forest',
                            subtitle: 'Mango trees',
                            paraTitle: 'Local flora and fauna.',
                            paraText: '<p>Similipal National Park is the 7th largest national park in India (2,750 km2), ' +
                                'and has been part of the UNESCO World Network of Biosphere Reserves since 2009. ' +
                                'It is home to the Bengal tiger, elephant Asia, the gaur and the chausingha. ' +
                                'As well as the most beautiful waterfalls like Joranda and Barehipani Falls.</p>',
                            term1: 'CO2 compensation',
                            term2: 'Lifetime',
                            term2bis: '100y',
                            term3: 'Cut',
                        },
                        section2: {
                            title: 'Project',
                            subtitle: 'Trees for tigers, India',
                            paraTitle1: 'The Jungle Book 2.',
                            paraText1: "<p>The project is targeting 50,000 trees on the edge of the Similipal National " +
                                "Park to enrich the local virgin forest, especially for Bengal tigers.</p>",
                            paraTitle2: 'How about we drop by to help them?',
                            paraText2: "<p>The project area is inhabited by a variety of tribal communities (Bhumija, " +
                                "Gondas, Kolha… About 4,093 working days will be created for them.</p>" +
                                "<p>The nearest airport is Biju Patnaik, located 200 km from the site. " +
                                "The nearest town is Jamshedpur 105 km away.</p>"
                        },
                        section3: {
                            title: 'Google Map link.'
                        }
                    }

                },
                fr: {
                    title: 'Nous plantons aussi des arbres. Et vous?',
                    subtitle: 'Pour compenser les émissions de CO2 liées à la création de nos objets, à vos visites' +
                        ' sur notre site, et à la consommation d’électricité de nos technologies. Nos projets sont' +
                        ' exclusivement réservés à la régénération de la biodiversité. Nos arbres sont tracés' +
                        ' et certifiés.',
                    term1: 'arbres plantés',
                    term2: 'de CO2 compensées',
                    term3: 'hectares reforestés',
                    madagascar: {
                        section1: {
                            title: 'Fôret',
                            subtitle: 'Mangrove noire',
                            paraTitle: 'Faune et Flore locale.',
                            paraText: '<p>Madagascar dispose de plus de 200 000 espèces de plantes et d’animaux qui ' +
                                'n’existent nulle part ailleurs dans le monde. 90% des forêts ont été détruites, ' +
                                'déplaçant des espèces animales entières et les Malgaches.</p>',
                            term1: 'Compensation CO2',
                            term2: 'Durée de vie',
                            term2bis: '25ans',
                            term3: 'Taille',
                        },
                        section2: {
                            title: 'Projet',
                            subtitle: 'Projet Paradis, Madagascar',
                            paraTitle1: 'Incroyable projet. Réussite totale.',
                            paraText1: "<p>Eden Reforestation Projects a lancé ce programme en 2007 suite à la perte" +
                                " critique de fôrets.</p><p>16 millions de mangroves ont été plantés. Des forêts " +
                                "saines commencent à émerger et tous les effets négatifs de la déforestation " +
                                "commencent à disparaître.</p>",
                            paraTitle2: 'Une communauté locale active. A ne pas oublier.',
                            paraText2: "<p>Les Vilamatsa avaient hâte de faire partie de cette initiative " +
                                "de reboisement en raison du succès d’une plantation à proximité.</p>" +
                                "<p>Cela leur donne un revenu décent afin qu’ils puissent à nouveau " +
                                "subvenir aux besoins de leur famille.</p>"
                        },
                        section3: {
                            title: 'Lien Google Map.'
                        }
                    },
                    india: {
                        section1: {
                            title: 'Fôret',
                            subtitle: 'Manguiers',
                            paraTitle: 'Faune et Flore locale.',
                            paraText: '<p>Le parc national de Similipal est le 7e plus grand parc national d’Inde ' +
                                '(2 750 km2), et fait partie du Réseau mondial des réserves de biosphère ' +
                                'de l’UNESCO depuis 2009. Il abrite le tigre du Bengale, l’éléphant d’Asie, ' +
                                'le gaur et le chausingha. Ainsi que les plus belles chutes d’eau comme Joranda ' +
                                'et Barehipani Falls.</p>',
                            term1: 'Compensation CO2',
                            term2: 'Durée de vie',
                            term2bis: '100ans',
                            term3: 'Taille',
                        },
                        section2: {
                            title: 'Projet',
                            subtitle: 'Des arbres pour les tigres, Inde',
                            paraTitle1: 'Le livre de la jungle 2.',
                            paraText1: "<p>Le projet vise 50 000 arbres en bordure du parc national de Similipal " +
                                "pour enrichir la fôret vierge locale, en particulier pour les tigres du Bengale.</p>",
                            paraTitle2: 'Et si nous passions les aider ?',
                            paraText2: "<p>La région du projet est habitée par une variété de communautés tribales " +
                                "(Bhumija, Gondas, Kolha… Environ 4 093 jours de travail seront créés pour eux.</p>" +
                                "<p>L’aéroport le plus proche est celui de Biju Patnaik, situé de 200 km du site." +
                                " La ville la plus proche est Jamshedpur à 105 km.</p>"
                        },
                        section3: {
                            title: 'Lien Google Map.'
                        }
                    }
                }
            }
        },
	}
</script>
	}
</script>
<style lang="scss" scoped>

    .slideArea {
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        z-index: 100000 !important;
        background: #fff;
        max-height: 100%;
        overflow-y: scroll;
        transition: right 0.4s;

        .card-header {
            position: fixed;
            z-index: 1;
            background: white;
        }

        @media only screen and (min-width: 1291px) {
            width: 50vw !important;
            right: -50vw !important;
            .card-header {
                width: 49vw !important;
            }
        }

        @media only screen and (max-width: 1290px) {
            width: 70vw !important;
            right: -70vw;
            .card-header {
                width: 69vw !important;
            }
        }
        @media only screen and (max-width: 48em) {
            width: 100vw !important;
            right: -100vw;
            .card-header {
                width: 99vw !important;
            }
        }

        &.active {
            right: 0 !important;
            visibility: visible !important;
        }

    }

    .map-modal {
        .para-title {
            font-weight: 700;
            margin-bottom: 5px;
            color: #888;
            font-size: 16px;
        }

        .para-subtitle {
            font-size: 18px;
            font-family: 'teradeli-medium', sans-serif;
            line-height: 1rem;
            color: #153038;
            margin: 0;
        }

        .para-subtitle-small {
            font-size: 15px;
            font-family: 'teradeli-medium', sans-serif;
            line-height: 1rem;
            color: #153038;
            margin: 0;
        }

        .para-img {
            padding-bottom: 1rem;
            padding-top: 1rem;
        }

        .para-text {
            color: #888;
            font-size: 14px;
        }

    }

</style>