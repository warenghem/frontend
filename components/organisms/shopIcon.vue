<template>
    <v-row class="ma-0 justify-center">
        <v-col class="pa-0 text-center py-5" cols="6" md="4" 
            v-for="(item,idx) in $t('items')"
            :key="'item_'+idx"
        >
            <v-btn
                icon
                class="mb-2"
                :to="localePath('/')+items[idx].link" nuxt
            >
                <v-icon x-large>{{ items[idx].icon }}</v-icon>
            </v-btn>
            <div class=" teradeli-medium">{{item.title}}</div>
            <!--<NuxtLink :to="items[idx].link">
                <MoleculesBtnText :text="$t('btnDiscover')" class="teradeli-medium lightbugattiblue--text"/>
            </NuxtLink>-->
        </v-col>
    </v-row>
</template>

<script>
    import { mdiCreditCard, mdiTruckDelivery, mdiPackageVariantClosed } from '@mdi/js'
    export default {
        data() {
            return {
                items: [
                    {
                        link: 'shipping/',
                        icon: mdiTruckDelivery
                    },
                    {
                        link: 'payments/',
                        icon: mdiCreditCard
                    },
                    {
                        link: 'shipping/',
                        icon: mdiPackageVariantClosed
                    }
                ]
            }
        }
    }

</script>

<i18n>
{
	"en": {
		"items": [
			{
				"title": "Free delivery"
			},
			{
				"title": "Secure payment"
			},
			{
				"title": "Return within 14 days"
			}
		]
	},
	"fr": {
		"items": [
			{
				"title": "Livraison gratuite"
			},
			{
				"title": "Paiement sécurisé"
			},
			{
				"title": "Retour sous 14 jours"
			}
		]
	}
}
</i18n>