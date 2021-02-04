<template>
    <div>
        <div class="mx-auto text-center">
            <v-dialog
                    v-model="$store.state.historiesModal"
                    persistent
                    max-width="600px"
            >
                <v-card>
                    <v-btn
                            icon
                            @click="$store.state.historiesModal = false"
                    >
                        <v-icon>{{ svgPath }}</v-icon>
                    </v-btn>
                    <v-card-text
                    class="pa-3 pa-sm-5">
                        <div class="d-flex flex-column align-center justify-center h-100">
                            <p class="pb-3 px-4 text-justify bottomText" v-html="$t('video.rightSection.subtitle')">
                            </p>
                            <div class="w-100 px-sm-5">
                                <mailchimp-subscribe
                                        url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                        user-id="2f7dbf20677f88c14c1389365"
                                        list-id="e86339e7ff"
                                        @error="snackbarError=true"
                                        @success="snackbarSuccess=true"
                                >
                                    <template v-slot="{ subscribe, setEmail, setName,loading }">
                                        <form @submit.prevent="subscribe" class="d-flex flex-column  w-100">
                                            <input type="text"
                                                   class="form-theme"
                                                   :placeholder="$t('video.rightSection.label1')"
                                                   @input="setName($event.target.value)"
                                            >
                                            <input type="email"
                                                   class="form-theme"
                                                   :placeholder="$t('video.rightSection.label2')"
                                                   @input="setEmail($event.target.value)"
                                            >
                                            <div class="mx-auto">
                                                    <v-btn
                                                        elevation="0"
                                                        large
                                                        :loading="loading"
                                                        class="btn-theme"
                                                        type="submit"
                                                        style="max-width: 250px;border-radius: 28px;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
                                                        >
                                                            {{$t('btnDiscover')}}
                                                    </v-btn>
                                            </div>
                                        </form>
                                    </template>
                                </mailchimp-subscribe>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <v-snackbar
            v-model="snackbarSuccess"
            timeout="7500"
            rounded="lg"
            >
            <div>
                <div class="d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center"><small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <v-btn icon class="close" @click="snackbarSuccess=false">
                            <v-icon>{{ svgPath }}</v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-layout align-center mt-5 mb-2 pr-4>
                    <v-icon color="blue darken-2" class="pr-3" dark large>mdi-checkbox-marked-circle</v-icon>
                    <v-layout column>
                        <div>{{$t('video.rightSection.success')}}</div>
                    </v-layout> 
                </v-layout>
            </div>
        </v-snackbar>
        <v-snackbar
            v-model="snackbarError"
            timeout="-1"
            rounded="lg"
            >
            <div>
                <div class="d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center">
                        <small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <v-btn icon class="close" @click="snackbarError=false">
                            <v-icon>{{ svgPath }}</v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-layout align-center mt-5 mb-2 pr-4>
                    <v-icon color="orange darken-2" class="pr-3" dark large>mdi-alert-circle-outline</v-icon>
                    <v-layout column>
                        <div>{{$t('video.rightSection.error')}} <a style="color:white" href="mailto:hello@warenghem.com">hello@warenghem.com</a></div>
                    </v-layout>
                </v-layout>
            </div>
        </v-snackbar>
    </div>

</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe'
    import { mdiClose } from '@mdi/js'
    export default {
        name: "histories-form",
        components: {
            MailchimpSubscribe,
        },
        data() {
            return {
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                loading: false,
                svgPath: mdiClose,
            }
        },
    }
</script>
<i18n>
{
	"fr": {
		"video": {
			"rightSection": {
				"alerttime": "maintenant",
				"alerttitle": "Warenghem dit",
				"error": "Votre email semble invalide ou déjà enregistré. Contactez nous:",
				"label1": "PRENOM ",
				"label2": "EMAIL",
				"subtitle": "Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.",
				"success": "Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de commencer la plantation... A tout de suite!",
				"tag": "Création <br> d’objets en 3D",
				"title": "Avancement du projet"
			}
		}
	},
	"en": {
		"video": {
			"rightSection": {
				"alerttime": "Now",
				"alerttitle": "Warenghem says",
				"error": "Your email appears to be invalid or already registered. Contact us:",
				"label1": "First Name",
				"label2": "e-mail",
				"subtitle": "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed about the progress of the project.",
				"success": "Thank you! To avoid SPAM, we have sent you a confirmation email before starting the planting ... See you soon!",
				"tag": "Creation <br> of 3D objects",
				"title": "Project progress"
			}
		}
	}
}
</i18n>
<style scoped>

</style>
