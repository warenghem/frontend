<template>
    <v-timeline dense clipped>
        <div v-for="(originTimeline, index) in originTimelines" :key="index">
        <v-timeline-item
            fill-dot
            color="lightbugattiblue"
            :icon="transactionIcon(originTimeline.type)"
        >
            <v-card
                class="rounded-xl pa-3"
                @click="openModal(originTimeline.id)"
            >
            <template v-if="originTimeline.type === 'transit'">
                <v-card-subtitle class="pa-0 pb-3">{{ formatDistance(new Date(originTimeline.date), new Date(), {locale, addSuffix: true}) }}</v-card-subtitle>
                <v-row class="pb-3 ma-0" align="center" v-for="(product, index) in originTimeline.goods" :key="index">
                    <div class="time">{{getDescription(product.id, productsItem).name}}</div>
                    <v-card-subtitle class="time pa-0">{{product.quantity}} {{product.units}}</v-card-subtitle>
                </v-row>
                <v-row align="center" class="ma-0 py-3">
                    <v-col class="pa-0" cols="12">TRANSFERRED TO {{getDescription(originTimeline.to.id, providersItem).name}}</v-col>
                    <v-avatar left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getDescription(originTimeline.from.id, providersItem).image">
                    </v-avatar>
                    <v-icon class="mx-3">{{arrowRightIcon}}</v-icon>
                    <v-avatar left>
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getDescription(originTimeline.to.id, providersItem).image">
                    </v-avatar>
                    <!--<div class="time"><span>{{productDescription.custom.providersoriginTimeline.brand}}</span> <span>{{originTimeline.product}}</span></div>-->
                </v-row>
                <div >Envoyé {{ format(new Date(originTimeline.from.date), 'PPPPp', {locale}) }} via {{originTimeline.carrier}}</div>
                <div >Tracking number : <a class="text-white" :href="'https://www.ship24.com/tracking?p='+originTimeline.tracking" target="_blank">{{originTimeline.tracking}}</a></div>
                <div >CO2 : {{originTimeline.co2}}</div>
                <div >Km : {{(originTimeline.length/1000).toFixed(1)}}</div>
                <div >Recu {{  format(new Date(originTimeline.to.date), 'PPPPp', {locale}) }} par {{getDescription(originTimeline.to.id, providersItem).name}}</div>
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
                    <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getDescription(originTimeline.id, productsItem).image">
                    </div>
                </v-col>
                <v-col
                    cols="9"
                > 
                    <div class="time text-uppercase">{{getDescription(originTimeline.id, productsItem).type}}</div>
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
                    <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getDescription(originTimeline.registered, providersItem).image">
                    </v-avatar>
                    <div>
                    <div>Made by</div>
                    <div class="pt-0">{{getDescription(originTimeline.registered, providersItem).name}}</div>
                    </div>
                    <!--<div class="time"><span>{{productDescription.custom.providersoriginTimeline.brand}}</span> <span>{{originTimeline.product}}</span></div>-->
                </v-row>
                <div v-if="originTimeline.rawMaterials.length > 0">
                <div>Made with</div>
                <v-row v-for="(rawMaterial, index) in originTimeline.rawMaterials" :key="index" align="center" class="ma-0 pb-3">
                    <v-avatar class="mr-3" left>
                        <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ getDescription(rawMaterial.id, productsItem).image">
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
                    <img class="lazyload bg-white mediabox-img" :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/API/'+ treesItem.image">
                    </div>
                </v-col>
                <v-col
                    cols="9"
                > 
                    <div class="time text-uppercase">{{treesItem.name}}</div>
                    <div class="time">{{treesItem.family}}</div>
                    <div class="time">Quantity : {{originTimeline.quantity}}</div>
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
        </v-timeline-item>
        </div>
    </v-timeline>
</template>

<script>
  import getDescription from "~/mixins/getDescription";
  import { mdiTree, mdiChevronRight, mdiShieldCheck, mdiShieldLock, mdiSwapHorizontal, mdiArrowRight, mdiFlagVariant } from '@mdi/js';
  import { format, formatDistance } from 'date-fns'
  import locale from "~/mixins/localesI18n"

  export default {
        name: "originTimeline",
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
              }
        },
        mixins: [getDescription, locale],
        props: {
            originTimelines: {
                type: Array,
                default: () => {
                }
            },
            providersItem: {
                type: Array,
                default: () => {
                }
            },
            productsItem: {
                type: Array,
                default: () => {
                }
            },
            certificatesItem: {
                type: Array,
                default: () => {
                }
            },
            treesItem: {
                type: Array,
                default: () => {
                }
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
            }
        }
    }
</script>