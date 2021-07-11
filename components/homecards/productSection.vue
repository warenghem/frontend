<template>
        <div class="productSection">
            <div class="home-title absolute-title d-none">{{$t('productTitle')}}</div>
                <div style="height:135.547px" class="text-center d-block py-4 pb-md-8 w-100">
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
                <v-container fluid class="productgridhome pa-0">
                   <OrganismsCardMain
                        v-for="(product,p_idx) in products"
                        :key="p_idx"
                        :link="link[p_idx]" 
                         :btnText="$t('btnDiscover')" :btnColor="'lightbugattiblue--text'" :className="className[p_idx]" :title="product.title" :subtitle="product.subtitle" :image="image[p_idx]"
                        @click="onClick"
                    />
                </v-container>
        </div>
</template>

<script>
    export default {
        name: "product-section",
        data() {
            return {
                image: [
                    ",ar-6-4/Products/48H_cote.png",
                    ",fo-top/Products/belt-blackblue-above2bis.png",
                    "/Products/pf-blackblue-side.png",
                ],
                link: [
                    "shop/bag-dionysos-48h-black-lightbluebugatti/",
                    "shop/belt-dionysos/",
                    "shop/wallet-dionysos/",
                ],
                className: [
                    "div1",
                    "div2",
                    "div3",
                ],
                products: this.$t('products'),
            }
        },
        methods: {
            onClick() {
                this.$gtm.push({ 
                    event: "productClick",
                    eventCategory: "Ecommerce",
                    eventAction: "Clic",
                    eventLabel: this.product.title,
                    ecommerce: {
                        click: {
                            actionField: {list: productList}, // Optionnel
                            products: [{
                                name: this.product.title,
                            }]
                        }
                    },
                })
            },
        }
    }
</script>
<i18n>
{
	"en": {
		"productTitle": "Objects in creation",
		"products": [
			{
				"desc": "The largest of the bags. Composed of grapes and a French linen lining. Indispensable for weekends, sports, or short stays. This is the centerpiece, which sets the tone for the collection.",
				"subtitle": "Vines and flax. Such is his destiny.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Voyageur"
			},
			{
				"desc": "Large and thick, with saddle finish, it fits just as well with a suit as with jeans.",
				"subtitle": "She won't let you down.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Belt"
			},
			{
				"desc": "Ally of your daily life, it is designed around oblique lines representing the emblematic W of the brand. Each of them has space for your cards.",
				"subtitle": "Vegetal like its leaves.",
				"tag": "Available soon - 30 pieces",
				"title": "Dionysos Wallet"
			}
		]
	},
	"fr": {
		"productTitle": "Les objets en création",
		"products": [
			{
				"desc": "Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais. Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce maitresse, qui donne le ton de la collection.",
				"subtitle": "Des vignes et du lin. Tel est son destin.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Dionysos Voyageur"
			},
			{
				"desc": "Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur un costume que sur un jean.",
				"subtitle": "Elle ne vous laissera pas tomber.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Dionysos Ceinture"
			},
			{
				"desc": "Allié de votre quotidien, il est concu autours de lignes obliques représentant le W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.",
				"subtitle": "Végétal comme ses feuilles.",
				"tag": "Disponible prochainement - 30 pièces",
				"title": "Dionysos Portefeuille"
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
  @media #{map-get($display-breakpoints, 'xs-only')} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 0.5rem;
    font-size: 2.5rem
  }
}
 .visualtocome {
    margin-top: 30px;
    @media #{map-get($display-breakpoints, 'sm-and-up')} {
        margin-top: unset!important;
    }
}
::v-deep .div1 { 
    grid-area: div1; 
    .picture { 
        max-width: 800px; 
        margin: auto; 
        left: 0; 
        right: 0; 
    }
}
.div2 { grid-area: div2; }
.div3 { grid-area: div3; }
.productgridhome {
  margin: 0 auto;
  display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "div1 div1"
        "div2 div3";
  grid-gap: 1rem;
  @media #{map-get($display-breakpoints, 'xs-only')} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-areas:
        "div1 div1"
        "div2 div2"
        "div3 div3";
    grid-gap: 0.5rem;
  }
}
 .collectionlogo {
    max-width: 200px;
    @media (min-width: 32em) {
        max-width: 430px;
    }
}
@media #{map-get($display-breakpoints, 'xs-only')} {
    ::v-deep .mediabox-img {
        height: 88%;
     }
}
</style>