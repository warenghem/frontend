<template>
        <div class="productSection pb-10">
            <div class="page-title absolute-title d-none">{{$t('productTitle')}}</div>
                <v-container fluid class="myGrid pa-md-10">
                    <v-card 
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        height= "100%"
                        elevation="0"
                        lazy
                    >
                        <div class="img-fluid theme--light gradientoverlay squaredimage position-relative">
                            <v-card-actions class="position-absolute w-100 d-none" style="bottom:0;z-index:5">
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            </v-card-actions>
                            <!--<ik-image
                                    :path="backgroundImages[p_idx]"
                                    :lqip="{active:true, quality: 40, blur: 5}"
                                    :transformation="[{quality: 65, width:500, dpr:2, focus: 'bottom',}]"
                                    loading="lazy"
                                    class="cover bg-white catalogue-item-background elevation-3"
                                />-->
                                <img
                                    data-sizes="auto"
                                    :data-srcset="backgroundImages[p_idx]" 
                                    :src="backgroundImagelqip[p_idx]" 
                                    class="lazyload cover bg-white catalogue-item-background elevation-3" 
                                />
                            <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                {{product.desc}}
                            </div>
                            <v-card-text class="teradeli-light mt-5 position-absolute pa-3 text-white" style="line-height: normal;bottom:0;font-size:13px;z-index:5">
                                {{product.tag}}
                            </v-card-text>  
                        </div>
                        <v-card-text elevation="4" class="catalogue-item-content-title mt-4 p-0">
                                <span class="pr-1 pr-sm-3 titlesmall teradeli-medium"> {{product.title}}</span>
                                <span class="subtitlesmall teradeli light">
                                    {{product.summary}}
                                </span>
                        </v-card-text>
                    </v-card>
                    <v-card
                        elevation="0"
                        class="div5"
                        
                    >
                        <v-card-title class="text-center pt-8 justify-center h-100">
                            <div class="d-block w-100">
                                <!--<ik-image
                                    path="/Logos/Citadins_Sauvages.png"
                                    :lqip="{active:true, quality: 40, blur: 5}"
                                    :transformation="[{quality: 65, width:500, dpr:2}]"
                                    loading="lazy"
                                    width="500"
                                />--> 
                                <img
                                    data-sizes="auto"
                                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-65,w-500,dpr-2/Logos/Citadins_Sauvages.png" 
                                    src="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-500,bl-10/Logos/Citadins_Sauvages.png" 
                                    class="lazyload" 
                                />
                            </div>
                        </v-card-title>
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
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/AdobeStock_50352719.jpeg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/Products/PFsolomoutain_V__6TkALbMDj.jpg 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/Products/S48blackmountain__JiqyHXRH6pZ.jpg 1500w",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/AdobeStock_213093083-scaled.jpeg 1500w",
                ],
                backgroundImagelqip: [
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/AdobeStock_50352719.jpeg",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/Products/PFsolomoutain_V__6TkALbMDj.jpg",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/Products/S48blackmountain__JiqyHXRH6pZ.jpg",
                    "https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/AdobeStock_213093083-scaled.jpeg",
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
                            tag: 'Visuals to come',
                            title: 'The belt',
                            summary: "She won't let you down.All in nobility.",
                            desc: 'Wide and thick, with saddle finish, it also fits well on' +
                                'a suit than jeans.'
                        },
                        {
                            tag: 'Available soon',
                            title: 'The portfolio',
                            summary: 'Plant like its leaves. Obviously.',
                            desc: 'Ally of your daily life, it is competed around oblique lines representing the' +
                                'W emblematic of the brand. Each of them has space for your cards.'
                        },
                        {
                            tag: 'Available soon',
                            title: 'The 48H bag',
                            summary: 'Vines and flax. Such is his destiny. ',
                            desc: 'The biggest of the bags. Composed of grapes and a French linen lining. ' +
                                'Indispensable for weekends, sports, or short stays. This is the room ' +
                                'mistress, which sets the tone for the collection.'
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
                            tag: 'Visuels à venir',
                            title: 'La ceinture',
                            summary: 'Elle ne vous laissera pas tomber. Tout en noblesse.',
                            desc: 'Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur ' +
                                'un costume que sur un jean.'
                        },
                        {
                            tag: 'Disponible prochainement',
                            title: 'Le portefeuille',
                            summary: 'Végétal comme ses feuilles. Evidemment.',
                            desc: 'Allié de votre quotidien, il est concu autours de lignes obliques représentant le' +
                                ' W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.'
                        },
                        {
                            tag: 'Disponible prochainement',
                            title: 'Le sac 48H',
                            summary: 'Des vignes et du lin. Tel est son destin.',
                            desc: 'Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais. ' +
                                'Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce ' +
                                'maitresse, qui donne le ton de la collection.'
                        },
                        {
                            tag: 'En cours de création',
                            title: 'La chaussure',
                            summary: '',
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


</style>