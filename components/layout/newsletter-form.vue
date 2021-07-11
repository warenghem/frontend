<template>
    <div>
        <div class="mx-auto text-center">
            <v-dialog
                    v-model="$store.state.newsletterModal"
                    persistent
                    transition="dialog-bottom-transition"
                    content-class="bg-white small-bottom-dialog bottom-dialog rounded-b-0 rounded-t-lg w-100"
                    style="transform-origin: center center;max-width: 600px;margin: 0;!important"
            >
                <v-card style="max-width:inherit">
                    <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2 bar-fixed rounded-t-lg">
                        <div class="sub-title text-capitalize pl-3">Newsletter</div>
                        <v-btn
                        text
                        color="black"
                        style="font-size: 26px"
                        class="px-0 h-100 border-left-2 rounded-0"
                        @click="$store.state.newsletterModal = false"
                        >
                        <v-icon>{{ svgPath }}</v-icon>
                        </v-btn>
                    </div>
                    <div style="transform: translateY(50px);">
                        <div class="wa-smart-picture small-ratio">
                            <img
                            data-sizes="auto"
                            data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 2500w"
                            class="lazyload mediabox-img lazypreload"
                            />
                        </div>
                        <v-card-text
                        class="pvw">
                            <div class="d-flex flex-column align-center justify-center h-100">
                                <p class="pb-3 text-justify bottomText" v-html="$t('video.rightSection.subtitle')">
                                </p>
                                <div class="w-100">
                                    <mailchimp-subscribe
                                            url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                            user-id="2f7dbf20677f88c14c1389365"
                                            list-id="ee2afb40a2"
                                            @error="snackbarError=true"
                                            @success="snackbarSuccess=true"
                                    >
                                        <template v-slot="{ subscribe, setEmail, setName }">
                                            <validation-observer
                                            ref="observer"
                                            >
                                                <v-form @submit.prevent="subscribe" class="d-flex flex-column  w-100">
                                                    <validation-provider
                                                    v-slot="{ errors }"
                                                    name="Name"
                                                    rules="required"
                                                    >
                                                    <v-text-field
                                                        v-model="name"
                                                        filled
                                                        rounded
                                                        required
                                                        :error-messages="errors"
                                                        clearable
                                                        color="lightbugattiblue"
                                                        :append-icon="svgPath3"
                                                        :label="$t('video.rightSection.label1')"
                                                        type="text" 
                                                        value="" 
                                                        @input="setName(name)"
                                                    ></v-text-field>
                                                    </validation-provider>
                                                    <validation-provider
                                                    v-slot="{ errors }"
                                                    name="email"
                                                    rules="required|email"
                                                    >
                                                        <v-text-field
                                                            clearable
                                                            filled
                                                            rounded
                                                            required
                                                            color="lightbugattiblue"
                                                            :append-icon="svgPath2"
                                                            :label="$t('video.rightSection.label2')"
                                                            v-model="email"
                                                            :error-messages="errors"
                                                            type="email"
                                                            value=""
                                                            @input="setEmail(email)"
                                                        ></v-text-field>
                                                    </validation-provider>
                                                    <div class="mx-auto">
                                                            <v-btn
                                                                elevation="0"
                                                                large
                                                                @click.prevent="submitForm"
                                                                class="btn-theme"
                                                                type="submit"
                                                                style="max-width: 250px;border-radius: 28px;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
                                                                >
                                                                    {{$t('btnDiscover')}}
                                                            </v-btn>
                                                            <button class="hidden" type="submit" ref="mailForm"></button>
                                                    </div>
                                                </v-form>
                                            </validation-observer>
                                        </template>
                                    </mailchimp-subscribe>
                                </div>
                            </div>
                            <v-card-subtitle class="text-justify pb-0 teradeli-light">
                                {{$t('newsletterdisclaimer')}}
                            </v-card-subtitle>
                        </v-card-text>
                    </div>
                </v-card>
            </v-dialog>
        </div>
        <v-snackbar
            v-model="snackbarSuccess"
            timeout="7500"
            rounded="lg"
            style="padding-bottom: 0!important;"
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
                    <v-icon color="blue darken-2" class="pr-3" dark large>{{ svgPath5 }}</v-icon>
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
            style="padding-bottom: 0!important;"
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
                    <v-layout column>
                      <v-icon color="orange darken-2" class="ma-auto pb-5" dark x-large>{{ svgPath4 }}</v-icon>
                      <div class="pb-3" v-html="$t('video.rightSection.error')"></div>
                      <a class="text-center w-100" @click="$store.state.newsletterModal = false" onclick="tidioChatApi.open()">
                        <v-icon x-large color="lightbugattiblue">{{ svgPath9 }}</v-icon>
                      </a>
                    </v-layout>
                </v-layout>
            </div>
        </v-snackbar>
    </div>

</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe'
    import {mdiClose, mdiEmail, mdiAccount, mdiEmoticonCryOutline, mdiEmoticonCoolOutline, mdiForum} from '@mdi/js'
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    export default {
        name: "plant-form",
        components: {
            MailchimpSubscribe,            
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                name: '',
                svgPath: mdiClose,
                svgPath2: mdiEmail,
                svgPath3: mdiAccount,
                svgPath4: mdiEmoticonCryOutline,
                svgPath5: mdiEmoticonCoolOutline,
                svgPath9: mdiForum,
                isFormValid: false,

            }
        },
        methods: {
            async submitForm() {
                const isValid = await this.$refs.observer.validate()
                if (isValid) {
                    console.log(this.$refs.mailForm)
                    this.$refs.mailForm.click()
                }
            }
        }
    }
</script>
<i18n>
{
	"en": {
		"video": {
			"rightSection": {
				"alerttime": "Now",
				"alerttitle": "Warenghem says",
				"error": "Your email appears to be invalid or already registered. Contact us:",
				"label1": "FIRST NAME",
				"label2": "E-MAIL",
				"subtitle": "Once a month, discover our history and that of the incredible objects that bring nature and humans together. <br>Unsubscribe in one click",
				"success": "Thank you! To avoid SPAM, we have sent you a confirmation email before starting the planting ... See you soon!",
				"tag": "Creation <br> of 3D objects",
				"title": "Project progress"
			}
		}
	},
	"fr": {
		"video": {
			"rightSection": {
				"alerttime": "maintenant",
				"alerttitle": "Warenghem dit",
				"error": "Votre email semble invalide ou déjà enregistré. Contactez nous en cliquant ici:",
				"label1": "PRENOM ",
				"label2": "EMAIL",
				"subtitle": "Une fois par mois, découvrez notre histoire et celle des incroyables objets qui rapprochent la nature et l'humain.<br>Désinscription en un clic",
				"success": "Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de commencer la plantation... A tout de suite!",
				"tag": "Création <br> d’objets en 3D",
				"title": "Avancement du projet"
			}
		}
	}
}
</i18n>
<style scoped>

</style>
