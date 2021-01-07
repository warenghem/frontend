<template>
        <div class="productSection">
            <div class="page-title absolute-title d-none">{{$t('productTitle')}}</div>
                <div class="text-center d-block py-4 pb-md-8 w-100">
                    <img
                        data-sizes="auto"
                        data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-500,dpr-2/Logos/Citadins_Sauvages.png" 
                        class="d-none d-sm-block lazyload mx-auto w-100 lazypreload" 
                        style="max-width:500px"
                    />
                    <img
                        data-sizes="auto"
                        data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-500,dpr-2/Logos/Citadins_Sauvages_m.png" 
                        class="d-block d-sm-none lazyload mx-auto w-100 lazypreload" 
                        style="max-width:65%"
                    />
                </div>
                <v-container fluid style="padding:0!important" class="productgridhome pa-0">
                    <v-card 
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        height= "100%"
                        lazy
                        class="productcard bgcard"
                    >
                        <div class="h-100 img-fluid theme--light position-relative skeletton">
                            <div class="position-absolute pa-3 w-100" style="bottom:0;z-index:5">
                                <v-spacer></v-spacer>
                                <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                    {{product.desc}}
                                </div>
                                <v-card-text class="teradeli-light mt-5 pa-0" style="line-height: normal;bottom:0;font-size:13px;z-index:5">
                                    {{product.tag}}
                                </v-card-text> 
                                <v-card-text elevation="4" class="catalogue-item-content-title mt-3 pa-0">
                                        <span class="pr-1 sub-title teradeli-medium">{{product.title}}</span>
                                        <span class="sub-title teradeli-medium secondary--text">
                                            {{product.summary}}
                                        </span>
                                </v-card-text>
                            </div>
                            <img
                                data-sizes="auto"
                                :data-srcset="backgroundImages[p_idx]" 
                                :data-lowsrc="backgroundImagelqip[p_idx]" 
                                class="lazyload mediabox-img" 
                            />
                        </div>
                    </v-card>
                </v-container>
        </div>
</template>

<script>
    export default {
        name: "product-section",
        data() {
            return {
                backgroundImages: [
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,ar-2-1/Products/sac_cote.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-2-1/Products/sac_cote.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-2-1/Products/sac_cote.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-2-1/Products/sac_cote.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-2-1/Products/sac_cote.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-2-1/Products/sac_cote.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-2-1/Products/sac_cote.png 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,ar-2-1/Products/ceinture.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-2-1/Products/ceinture.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-2-1/Products/ceinture.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-2-1/Products/ceinture.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-2-1/Products/ceinture.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-2-1/Products/ceinture.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-2-1/Products/ceinture.png 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,ar-2-1,/Products/portefeuilles.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-2-1/Products/portefeuilles.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-2-1/Products/portefeuilles.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-2-1/Products/portefeuilles.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-2-1/Products/portefeuilles.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-2-1/Products/portefeuilles.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-2-1/Products/portefeuilles.png 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,ar-2-1/vide.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-2-1/vide.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-2-1/vide.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-2-1/vide.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-2-1/vide.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-2-1/vide.png 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-2-1/vide.png 1500w",
                ],
                backgroundImagelqip: [
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,ar-2-1/Products/sac_cote.png",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,ar-2-1/Products/ceinture.png",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,ar-2-1/Products/portefeuilles.png",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,ar-2-1/vide.png",
                ],
                products: this.$t('products'),
            }
        },
        i18n: {
            messages: {
                en: {
                    productTitle: 'Objects in creation',
                    products: [
                        {
                            tag: 'Available soon - 30 pieces',
                            title: 'The 48H bag',
                            summary: 'Vines and flax. Such is his destiny. ',
                            desc: 'The biggest of the bags. Composed of grapes and a French linen lining. ' +
                                'Indispensable for weekends, sports, or short stays. This is the room ' +
                                'mistress, which sets the tone for the collection.'
                        },
                        {
                            tag: 'Available soon - 30 pieces',
                            title: 'The belt',
                            summary: "She won't let you down.All in nobility.",
                            desc: 'Wide and thick, with saddle finish, it also fits well on' +
                                'a suit than jeans.'
                        },
                        {
                            tag: 'Available soon - 30 pieces',
                            title: 'The portfolio',
                            summary: 'Plant like its leaves. Obviously.',
                            desc: 'Ally of your daily life, it is competed around oblique lines representing the' +
                                'W emblematic of the brand. Each of them has space for your cards.'
                        },
                        {
                            tag: 'Visuals to come',
                            title: 'The shoes',
                            summary: "",
                            desc: ""
                        },
                    ]
                },
                fr: {
                    productTitle: 'Les objets en création',
                    products: [
                        {
                            tag: 'Disponible prochainement - 30 pièces',
                            title: 'Le sac 48H',
                            summary: 'Des vignes et du lin. Tel est son destin.',
                            desc: 'Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais. ' +
                                'Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce ' +
                                'maitresse, qui donne le ton de la collection.'
                        },
                        {
                            tag: 'Disponible prochainement - 30 pièces',
                            title: 'La ceinture',
                            summary: 'Elle ne vous laissera pas tomber.',
                            desc: 'Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur ' +
                                'un costume que sur un jean.'
                        },
                        {
                            tag: 'Disponible prochainement - 30 pièces',
                            title: 'Le portefeuille',
                            summary: 'Végétal comme ses feuilles.',
                            desc: 'Allié de votre quotidien, il est concu autours de lignes obliques représentant le' +
                                ' W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.'
                        },
                        {
                            tag: 'En cours de création',
                            title: 'La chaussure',
                            summary: 'Les pieds sur terre. Tournée vers le futur.',
                            desc: ''
                        },

                    ]
                }
            }
        },
    }
</script>

<style scoped lang="scss">
@import "../assets/scss/home/product";

@media (min-width: 1263px) {

    .shop div:nth-of-type(4) {
        max-height: 400px;
        flex: 0 0 100%;
        max-width: 100%;
    }
}
.productcard {
  height: 25rem!important;
  @media (min-width: 48em) {
    height: 30rem;
  }
}
.productgridhome {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  padding: 1rem!important;
  grid-gap: 1rem;
  @media (max-width: 48em) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 0.5rem;
  }
}

</style>