<template>
    <div>
        <VueSlickCarousel ref="slides" @afterChange="mapFocus" class="ma-1r" v-bind="settings">
            <v-card
                class="rounded-xl pa-3"
                @click="openModal(originTimeline.id)"
                v-for="(originTimeline, index) in originTimelines" :key="index"
            >
            <div>{{currentSlide }}</div>
            <template v-if="originTimeline.type === 'transit'">
                <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(originTimeline.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                <v-row class="pb-3 ma-0" align="center" v-for="(product, index) in originTimeline.goods" :key="index">
                    <div class="time pr-3">{{getDescription(product.id, productsItem).name}}</div>
                    <v-card-subtitle class="time pa-0">{{product.quantity}} {{$tc('origin.units.'+product.units,product.quantity)}}</v-card-subtitle>
                </v-row>
                <v-row align="center" class="ma-0 py-3">
                    <v-col class="pa-0 text-capitalize-first" cols="12">{{$t('transfered')}} {{getDescription(originTimeline.to.id, providersItem).name}} {{$t('on')}} {{ format(new Date(originTimeline.from.date), 'PPPPp', {locale}) }}</v-col>
                    <v-avatar left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(originTimeline.from.id, providersItem).image">
                    </v-avatar>
                    <v-icon class="mx-3">{{arrowRightIcon}}</v-icon>
                    <v-avatar left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(originTimeline.to.id, providersItem).image">
                    </v-avatar>
                    <!--<div class="time"><span>{{productDescription.custom.providersoriginTimeline.brand}}</span> <span>{{originTimeline.product}}</span></div>-->
                </v-row>
                <v-row align="center" class="ma-0 pb-3">
                    <v-avatar class="mr-3" size="30" left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(originTimeline.carrier, carriersItem).image">
                    </v-avatar>
                    <v-card-subtitle class="pa-0">{{$t('tracking')}} : <a class="text-white" :href="'https://www.ship24.com/tracking?p='+originTimeline.tracking" target="_blank">{{originTimeline.tracking}}</a></v-card-subtitle>
                </v-row>
                <div class="text-capitalize-first"><span class="teradeli-medium yellow--text text-h6">{{originTimeline.co2.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</span><span class="text-caption"> {{$t('map.counts.co2')}}</span></div>
                <div class="text-capitalize-first"><span class="teradeli-medium yellow--text text-h6">{{(originTimeline.length/1000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</span><span class="text-caption"> {{$tc('map.counts.km', originTimeline.length/1000)}}</span></div>
                <div class="text-capitalize-first">{{$t('received')}} {{$t('on')}} {{  format(new Date(originTimeline.to.date), 'PPPPp', {locale}) }}</div>
                <v-row
                    align="center"
                    class="ma-0"
                >
                <v-icon small class="mr-3">
                    {{flagIcon}}
                </v-icon>
                <v-card-subtitle class="pa-0">{{ originTimeline.from.location.city }}, {{ originTimeline.from.location.country }}</v-card-subtitle>
                </v-row>
            </template>
            <template v-if="originTimeline.type === 'product'">
                <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(originTimeline.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                <v-row class="pb-3" align="center">
                <v-col
                    cols="3"
                >
                    <div class="rounded-lg wa-smart-picture square-ratio skeletton wa-product-image">
                    <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(originTimeline.id, productsItem).image">
                    </div>
                </v-col>
                <v-col
                    cols="9"
                > 
                    <div class="time text-uppercase">{{$t('origin.products.'+getDescription(originTimeline.id, productsItem).type)}}</div>
                    <div class="time">{{getDescription(originTimeline.id, productsItem).name}}</div>
                    <v-row align="center" class="ma-0 pb-3">
                        <v-chip v-for="(certificate, index) in originTimeline.certificates" :key="index" class="mr-3" left>
                        {{getDescription(certificate.id, certificatesItem).name}}
                        <v-icon small right>
                            {{check}}
                        </v-icon>
                        </v-chip>
                    </v-row>
                </v-col>
                </v-row>
                <v-row align="center" class="ma-0 pb-3">
                    <v-avatar class="mr-3" left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(originTimeline.registered, providersItem).image">
                    </v-avatar>
                    <div>
                        <div class="text-uppercase">{{$t('madeby')}}</div>
                        <div class="pt-0">{{getDescription(originTimeline.registered, providersItem).name}}</div>
                    </div>
                    <!--<div class="time"><span>{{productDescription.custom.providersoriginTimeline.brand}}</span> <span>{{originTimeline.product}}</span></div>-->
                </v-row>
                <div v-if="originTimeline.rawMaterials.length > 0">
                <div class="text-uppercase">{{$t('madewith')}}</div>
                <v-row v-for="(rawMaterial, index) in originTimeline.rawMaterials" :key="index" align="center" class="ma-0 pb-3">
                    <v-avatar class="mr-3" left>
                        <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ getDescription(rawMaterial.id, productsItem).image">
                    </v-avatar>
                    <div class="pt-0">{{getDescription(rawMaterial.id, productsItem).name}}</div>
                </v-row>
                </div>
                <v-row
                align="center"
                class="ma-0"
                >
                <v-icon small class="mr-3">
                    {{flagIcon}}
                </v-icon>
                <v-card-subtitle class="pa-0">{{ getDescription(originTimeline.registered, providersItem).location.city }}, {{ getDescription(originTimeline.registered, providersItem).location.country }}</v-card-subtitle>
                </v-row>
            </template>
            <template v-if="originTimeline.type === 'tree'">
                <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(originTimeline.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                <v-row class="pb-3" align="center">
                <v-col
                    cols="3"
                >
                    <div class="rounded-lg wa-smart-picture square-ratio skeletton wa-product-image">
                    <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ treesItem.image">
                    </div>
                </v-col>
                <v-col
                    cols="9"
                > 
                    <div class="time text-uppercase">{{treesItem.name}}</div>
                    <div class="time">{{treesItem.family}}</div>
                    <div class="time text-capitalize-first">{{$t('quantity')}} : {{originTimeline.quantity}}</div>
                </v-col>
                </v-row>
                <v-row
                align="center"
                class="ma-0"
                >
                <v-icon small class="mr-3">
                    {{flagIcon}}
                </v-icon>
                <v-card-subtitle class="pa-0">{{ treesItem.location.country }}</v-card-subtitle>
                </v-row>
            </template>
            </v-card>
        </VueSlickCarousel>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import getDescription from "~/mixins/getDescription";
  import { mdiTree, mdiChevronRight, mdiShieldCheck, mdiShieldLock, mdiSwapHorizontal, mdiArrowRight, mdiFlagVariant } from '@mdi/js';
  import { format, formatDistance } from 'date-fns'
  import locale from "~/mixins/localesI18n"

  export default {
    data() {
        return {
            format, formatDistance,
            flagIcon: mdiFlagVariant,
            arrowRightIcon: mdiArrowRight,
            mdiChevronRight: mdiChevronRight,
            transfert : mdiSwapHorizontal,
            lock : mdiShieldLock,
            check : mdiShieldCheck,
            tree : mdiTree,
            settings: {
                "focusOnSelect": true,
                "slidesToShow": 3.2,
                "slidesToScroll": 3,
                "infinite": false,
                "arrows": false,
                "dots": false,
                "swipeToSlide": true,
                "responsive": [
                    {
                        "breakpoint": 768,
                        "settings": {
                            "slidesToShow": 2.2,
                            "slidesToScroll": 1,
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1.1,
                            "slidesToScroll": 1,
                        }
                    }
                ]
            }
          }
    },
    components: {
        VueSlickCarousel
    },
    mixins: [getDescription, locale],
    props: {
        originTimelines: {
            type: Array,
            default: () => []
        },
        providersItem: {
            type: Array,
            default: () => []
        },
        carriersItem: {
            type: Array,
            default: () => []
        },
        productsItem: {
            type: Array,
            default: () => []
        },
        certificatesItem: {
            type: Array,
            default: () => []
        },
        treesItem: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        transactionIcon(type) {
            if (type === 'transit') {
            return this.transfert
            } 
        if (type === 'product') {
            return this.lock
            }
        if (type === 'tree') {
            return this.tree
            }
        },
        openModal(modalName) {
            this.currentModal = true
            this.provider = this.providersItem.find(y => y.slug.includes(modalName))
        },
        mapFocus(event, slick, currentSlide) {
            console.log(event);
        }
    }
  }
</script>
<i18n>
{
	"en": {
	    "transfered":"transfered to",
        "on":"on",
        "tracking":"tracking number",
        "received":"received",
        "madeby":"made by",
        "madewith":"made with",
        "quantity":"quantity"
	},
	"fr": {
		"transfered":"transféré à",
        "on":"le",
        "tracking":"numéro de suivi",
        "received":"reçu",
        "madeby":"fabriqué par",
        "madewith":"fabriqué avec",
        "quantity":"quantité"
	}
}
</i18n>