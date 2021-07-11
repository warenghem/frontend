<template dark>
  <div id="general">
    <div class="">
        <!--<v-card rounded="xl">
          <div class="teradeli-medium text-center py-3 pt-8">
            PROVIDERS
          </div>
          <div class="text-center py-3 pb-5">
            {{ (providers.filter(y => !y.type.includes('Brand')) || []).length }} providers were involved in creating this products
          </div>
          <div class="text-center py-3 pb-8">
            <v-avatar size="90" class="mx-3" left  v-for="(provider, index) in providers.filter(y => !y.type.includes('Brand'))" :key="index">
              <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ provider.image">
            </v-avatar>
          </div>
        </v-card>
        <v-card rounded="xl">
          <div class="teradeli-medium text-center py-3 pt-8">
            MATERIALS
          </div>
          <div class="text-center py-3 pb-5">
            This product's supply chain includes {{ products.filter(y => y.type.includes('Material')).length }} materials
          </div>
          <div class="text-center py-3 pb-8">
            <v-avatar size="90" class="mx-3" left  v-for="(product, index) in products.filter(y => y.type.includes('Material'))" :key="index">
              <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,ar-1-1/'+ product.image">
            </v-avatar>
          </div>
        </v-card>-->
        <div class="twogrid pt-0">
            <v-card class="pa-3 pr-0" v-for="(slider, index) in sliders" :key="index" rounded="xl">
              <div class="d-flex align-center py-3 pl-5">
                <div class="text-h5 yellow--text pr-2">{{ slider.data.length }}</div>
                <div class="text-capitalize-first mt-1">{{ slider.title }} {{ slider.text }}</div>
              </div>
              <OriginSmallSlider :icon="$attrs.mdiChevronRight" :check="$attrs.check" :cards="slider.data"/>
            </v-card>
        </div>
    </div>
    <!--<div class="teradeli-medium text-center py-3 pt-8">
      CERTIFICATES
    </div>
    <div class="text-center py-3 pb-8">
      This product's supply chain includes {{ certificates.length }} certificates
    </div>
    <VueSlickCarousel class="ma-1r" v-bind="settings">
      <SmallVerticalCard v-for="(certificate, index) in certificates" :key="index" :image="getDescription(certificate.id, certificatesItem).image" :name="getDescription(certificate.id, certificatesItem).name" />
    </VueSlickCarousel>-->
      <v-switch :label="`Dark Theme`" v-model="$vuetify.theme.dark">
      </v-switch>
  </div>
</template>

<script>
  import getDescription from "~/mixins/getDescription";
  import locale from "~/mixins/localesI18n";
  import { format, formatDistance } from 'date-fns'

  export default {
    layout: 'app',
    name: 'general',
    head () {
      return {
        meta: [
          { hid: 'robots', name: 'robots', content: 'noindex' }
        ]
      }
    },
    data() {
        return {
            currentModal: false,
            format, formatDistance,
            polylines: [],
            sliders: [
                {
                    title: this.$tc('provider.name', this.suppliersDetails.length),
                    text: this.$tc('provider.text', this.suppliersDetails.length),
                    data: this.suppliersDetails
                },
                {
                    title: this.$tc('material.name', this.materialsDetails.length),
                    text: this.$tc('material.text', this.materialsDetails.length),
                    data: this.materialsDetails
                },
                {
                    title: this.$tc('certificate.name', this.certificatesDetails.length),
                    text: this.$tc('certificate.text', this.certificatesDetails.length),
                    data: this.certificatesDetails
                },
                {
                    title: this.$tc('tree.name', this.treesDetails.length),
                    text: this.$tc('tree.text', this.treesDetails.length),
                    data: this.treesDetails
                }
            ],
        };
    },
    props: {
        suppliersDetails: {
            type: Array,
            default: () => []
        },
        materialsDetails: {
            type: Array,
            default: () => []
        },
        products: {
            type: Array,
            default: () => []
        },
        certificatesDetails: {
            type: Array,
            default: () => []
        },
        treesDetails: {
            type: Array,
            default: () => []
        },
        actorsFocus: {
            type: Array,
            default: () => []
        }
    },
    mixins: [getDescription, locale],
    mounted(){
        this.$emit('focus-on-markers', this.actorsFocus, false)
        this.$emit('resize-markers')
    }
  }
</script>

<i18n>
{
	"en": {
		"provider": {
      "name":"supplier | suppliers",
      "text": "participated in the realization of this product | participated in the production of this product"
    },
    "material": {
      "name":"material | materials",
      "text": "has been used | were used"
    },
    "certificate": {
      "name":"certificate | certificates",
      "text": "was obtained | were obtained"
    }
	},
	"fr": {
		"provider": {
      "name":"fournisseur | fournisseurs",
      "text": "a participé à la réalisation de ce produit | ont participés à la réalisation de ce produit"
    },
    "material": {
      "name":"matière | matières",
      "text": "a été utilisée | ont été utilisées"
    },
    "certificate": {
      "name":"certificat | certificats",
      "text": "a été obtenu et vérifié par notre équipe | ont été obtenus et vérifiés par notre équipe"
    },
    "tree": {
      "name":"projet de reforestation | projets de reforestation",
      "text": "a été lancé | ont été lancés"
    }
	}
}
</i18n>