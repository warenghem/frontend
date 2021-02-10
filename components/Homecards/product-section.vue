<template>
        <div class="productSection">
            <div class="page-title absolute-title d-none">{{$t('productTitle')}}</div>
                <div class="text-center d-block py-4 pb-md-8 w-100">
                    <picture>
                        <source media="screen and (min-width: 32em)"
                            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Citadins_Sauvages.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Citadins_Sauvages.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Citadins_Sauvages.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Citadins_Sauvages.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Logos/Citadins_Sauvages.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Logos/Citadins_Sauvages.png 960w" 
                        >
                        <source
                            data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Citadins_Sauvages_m.png 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/Logos/Citadins_Sauvages_m.png 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/Logos/Citadins_Sauvages_m.png 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/Logos/Citadins_Sauvages_m.png 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/Logos/Citadins_Sauvages_m.png 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/Logos/Citadins_Sauvages_m.png 960w" 
                        >
                        <img class="lazyload mx-auto w-100 lazypreload collectionlogo"
                            data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/Logos/Citadins_Sauvages.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/Logos/Citadins_Sauvages.png 2x'" 
                            data-sizes="auto"
                            />
                    </picture>
                </div>
                <v-container fluid style="padding:0!important" class="productgridhome pa-0">
                    <v-card 
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        height= "100%"
                        lazy
                        class="homecard bgcard hand"
                    >
                        <NuxtLink :to="'/'+$i18n.locale+link[p_idx]"> 
                            <div class="h-100 img-fluid theme--light position-relative skeletton">
                                <div class="position-absolute h-100 w-100 px-3">
                                    <div class="boxcenterabsolute teradeli-medium secondary--text visualtocome">
                                        {{product.visualtocome}}
                                    </div>
                                </div>
                                <div class="pvw text-center">
                                    <h2 class="page-title teradeli-medium px-0">{{product.title}}</h2>
                                    <div class="py-2 page-subtitle"> {{product.summary}}</div>
                                    <v-text
                                        :class="disabled[p_idx]"
                                        style="z-index:2"
                                        class="text-center lightbugattiblue--text"
                                        >
                                        {{$t('btnDiscover')}}
                                        <v-icon  color="lightbugattiblue" small>{{ svgPath1 }}</v-icon>
                                    </v-text>
                                </div>
                                <picture>
                                    <source media="screen and (min-width: 64em)"
                                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380'+ backgroundImages[p_idx]"
                                    >
                                    <source media="screen and (min-width: 48em)"
                                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380'+ backgroundImages[p_idx]"
                                    >
                                    <source
                                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ backgroundImages[p_idx] +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ backgroundImages[p_idx] +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ backgroundImages[p_idx] +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ backgroundImages[p_idx] +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ backgroundImages[p_idx] +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500'+ backgroundImages[p_idx] +' 1500w,'" 
                                        :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380'+ backgroundImages[p_idx]"
                                    >
                                    <img style="top:50px" class="lazyload mediabox-img"
                                        :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ backgroundImages[p_idx] +' 2x'" 
                                        data-sizes="auto" />
                                </picture>
                            </div>
                        </NuxtLink>
                    </v-card>
                    <v-card class="bgcard homecard item2">
                        <ProjectsSection/>
                    </v-card>
                </v-container>
        </div>
</template>

<script>
    import { mdiChevronRight } from '@mdi/js'
    export default {
        name: "product-section",
        data() {
            return {
                svgPath1: mdiChevronRight,
                backgroundImages: [
                    ",ar-6-4/Products/48H_black_blue_side_bottle.png",
                    ",fo-top/Products/belt-blackblue-above2bis.png",
                    "/Products/pf-blackblue-side.png",
                    /*"/vide.png",*/
                ],
                link: [
                    "/shop/bag-dionysos-48h-black-darkbluebugatti/",
                    "/shop/belt-dionysos/",
                    "/shop/wallet-dionysos/",
                    /*"",*/
                ],
                disabled: [
                    "",
                    "",
                    "",
                    /*"d-none",*/
                ],
                products: this.$t('products'),
            }
        },
    }
</script>
<i18n>
{
	"en": {
		"productTitle": "Objects in creation",
		"products": [
			{
				"desc": "The largest of the bags. Composed of grapes and a French linen lining. Indispensable for weekends, sports, or short stays. This is the centerpiece, which sets the tone for the collection.",
				"summary": "Vines and flax. Such is his destiny.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos 48H",
				"visualtocome": ""
			},
			{
				"desc": "Large and thick, with saddle finish, it fits just as well with a suit as with jeans.",
				"summary": "She won't let you down.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Belt",
				"visualtocome": ""
			},
			{
				"desc": "Ally of your daily life, it is designed around oblique lines representing the emblematic W of the brand. Each of them has space for your cards.",
				"summary": "Vegetal like its leaves.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Wallet",
				"visualtocome": ""
			}
		]
	},
	"fr": {
		"productTitle": "Les objets en création",
		"products": [
			{
				"desc": "Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais. Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce maitresse, qui donne le ton de la collection.",
				"summary": "Des vignes et du lin. Tel est son destin.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Dionysos 48H",
				"visualtocome": ""
			},
			{
				"desc": "Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur un costume que sur un jean.",
				"summary": "Elle ne vous laissera pas tomber.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Ceinture Dionysos",
				"visualtocome": ""
			},
			{
				"desc": "Allié de votre quotidien, il est concu autours de lignes obliques représentant le W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.",
				"summary": "Végétal comme ses feuilles.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Portefeuille Dionysos",
				"visualtocome": ""
			}
		]
	}
}
</i18n>

<style scoped lang="scss">
@import "~/assets/scss/home/product";

@media (min-width: 1263px) {
    .shop div:nth-of-type(4) {
        max-height: 400px;
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.visualtocome {
  font-size: 3rem;
  line-height: 3rem;
  @media (max-width: 48em) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 0.5rem;
    font-size: 2.5rem
  }
}
 .visualtocome {
    margin-top: 30px;
    @media (min-width: 48em) {
        margin-top: unset!important;
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
/*.container.productgridhome div:nth-of-type(2) .productdescription {
    top: 0;
    bottom: unset;
}*/
 .collectionlogo {
    max-width: 200px;
    @media (min-width: 32em) {
        max-width: 430px;
    }
}
.boots .v-btn {
    display: none;
}
@media (max-width: 48em) {
    .homebutton {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 20px;
        right: 20px;
        bottom:20px;
        text-align: center;
    }
}
/* @media (min-width: 48em) {
    .container.productgridhome div:nth-of-type(2) .productdescription {
        left: 0;
    }
}*/
</style>