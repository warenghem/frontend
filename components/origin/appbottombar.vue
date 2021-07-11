<template>
    <v-bottom-navigation
        app
        grow
    >
        <v-btn v-for="(item, index) in footerLink" :key="index" :to="localePath(item.link)" nuxt>
            <span class="text-capitalize-first">{{ item.text }}</span>
            <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    import { mdiMapMarker, mdiHomeVariant, mdiInformationOutline } from '@mdi/js'
    export default {
        name: "appbottombar",
        data() {
            return {
                home: mdiHomeVariant,
                markerIcon: mdiMapMarker,
                svgPath2: mdiInformationOutline,
            }
        },
        props: {
            productId: {
                type: String,
            },
            productIndex: {
                type: String,
                default: ''
            },
            productItem: {
                type: Array,
                default: []
            },
            treeIcon: {
                type: String,
                default: ''
            }
        },
        computed: {
            footerLink() {
                let currentProduct = this.productItem.categories.find(y => y.depth === 2).id
                return  [
                    {
                        link: '/origin/'+this.productId+'/'+this.productIndex+'/general/',
                        text: this.$t('origin.footerLinks.general')+' '+this.$t('productCategory.depth2.'+currentProduct),
                        icon: this.home
                    },
                    {
                        link: '/origin/'+this.productId+'/'+this.productIndex+'/trip/',
                        text: this.$t('origin.footerLinks.trip'),
                        icon: this.markerIcon
                    },
                    {
                        link: '/origin/'+this.productId+'/'+this.productIndex+'/carbon/',
                        text: this.$t('origin.footerLinks.co2'),
                        icon: this.treeIcon
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .appBar {
    background: transparent !important;
  }
    .v-bottom-navigation {
        box-shadow: none!important;
    }
</style>