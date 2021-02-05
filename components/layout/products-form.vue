<template>
    <div>
        <div class="mx-auto text-center">
            <v-dialog
                    v-model="$store.state.productModal"
                    persistent
                    max-width="700px"
            >
                <v-card>
                    <v-btn
                            icon
                            @click="$store.state.productModal = false"
                    >
                        <v-icon>{{ svgPath }}</v-icon>
                    </v-btn>
                    <v-card-text
                    class="pa-3 pa-sm-5">
                        <div class="d-flex flex-column align-center justify-center h-100">
                            <p class="pb-3 px-4 text-justify bottomText" v-html="$t('video.rightSection.subtitle')">
                            </p>
                            <div class="w-100 px-sm-5">
                                <!--<mailchimp-subscribe
                                        url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                        user-id="2f7dbf20677f88c14c1389365"
                                        list-id="7e113bce09"
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
                                </mailchimp-subscribe>-->
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<v-form v-model="isFormValid" action="https://warenghem.us20.list-manage.com/subscribe/post-json?u=2f7dbf20677f88c14c1389365&amp;id=7e113bce09&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
    <div class="mc-field-group">
        <v-text-field
            v-model="name"
            clearable
            color="lightbugattiblue"
            :prepend-icon="svgPath3"
            :label="$t('video.rightSection.label1')"
            type="text" value="" name="FNAME" class="" id="mce-FNAME"
        ></v-text-field>
    </div>
    <div class="mc-field-group">
        <v-text-field
            clearable
            color="lightbugattiblue"
            :prepend-icon="svgPath2"
            :label="$t('video.rightSection.label2')"
            v-model="email"
            :error-messages="emailErrors"
            :rules="[rules.required, rules.email]"
            type="email" value="" name="EMAIL" class="" id="mce-EMAIL"
        ></v-text-field>
    </div>
    <!--Has to be function of $i18n.localeProperties.language-->
    <div class="mc-field-group">
        <v-select
            :items="items"
            label="Language"
            name="LANGUAGE"
            id="mce-LANGUAGE"
        ></v-select>
    </div>
    <v-row class="line mb-5"> 
        <v-col cols="4" class="mc-field-group input-group c-choiceCard_innerContainer"> 
            <input type="checkbox" class="c-choiceCard_input av-checkbox" name="BAG" id="mce-BAG-0"> 
            <label for="mce-BAG-0" class="c-choiceCard_label border-gray border-radius--lv1 padding--lv4 alignc rounded-xl">
                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                    <img class="mediabox-img" src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/48H_cote.png" />
                </div>
            </label> 
        </v-col> 
        <v-col cols="4" class="mc-field-group input-group c-choiceCard_innerContainer"> 
            <input type="checkbox" class="c-choiceCard_input av-checkbox"  name="BELT" id="mce-BELT-0">
            <label for="mce-BELT-0" class="c-choiceCard_label border-gray border-radius--lv1 padding--lv4 alignc rounded-xl"> 
                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                    <img class="mediabox-img" src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/belt-blackblue-above2.png" />
                </div>
            </label> 
        </v-col> 
        <v-col cols="4" class="mc-field-group input-group c-choiceCard_innerContainer"> 
            <input type="checkbox" class="c-choiceCard_input av-checkbox" name="WALLET" id="mce-WALLET-0"> 
            <label for="mce-WALLET-0" class="c-choiceCard_label border-gray border-radius--lv1 padding--lv4 alignc rounded-xl"> 
                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                    <img class="mediabox-img" src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/pf-blackblue-below.png" />
                </div>
            </label> 
        </v-col> 
    </v-row>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2f7dbf20677f88c14c1389365_7e113bce09" tabindex="-1" value=""></div>
    <div class="w-100 text-center">
        <v-btn
            :disabled="!isFormValid"
            elevation="0"
            rounded 
            type="submit" 
            name="subscribe" 
            id="mc-embedded-subscribe"
            class="btn-theme"
            style="max-width:100%;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
            >
                {{$t('btnWaitforit')}}
        </v-btn>  
    </div>  
    </div>
</v-form>
</div>

<!--End mc_embed_signup-->
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
    import { validationMixin } from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'
    /*import MailchimpSubscribe from './mailchp-subscribe'*/
    import { mdiClose, mdiEmail, mdiAccount } from '@mdi/js'
    export default {
        name: "products-form",
        /*components: {
            MailchimpSubscribe,
        },*/
        /*mixins: [validationMixin],
        validations: {
            email: { required, email },
            select: { required },
            checkbox: {
                checked (val) {
                return val
                },
            },
        },*/
        data() {
            return {
                isFormValid: false,
                items: ['Francais', 'English'],
                snackbarSuccess: false,
                snackbarError: false,
                /*email: '',*/
                loading: false,
                svgPath: mdiClose,
                svgPath2: mdiEmail,
                svgPath3: mdiAccount,
                email: '',
                /*name: '',
                checkbox: false,*/
                rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
                },
            }
        },
        /*computed: {
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        },
        },
        methods: {
        submit () {
            this.$v.$touch()
        },
        },*/
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
				"label1": "Prénom ",
				"label2": "Email",
				"subtitle": "<strong>Seules 30 pièces par modèle sont en cours de production.</strong><br>Pour réserver votre article, indiquez votre prénom et votre adresse email. Puis selectionnez le ou les articles souhaités. Aucun paiement n'est requis.",
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
				"subtitle": "<strong>Only 30 pieces per model are in production.</strong><br>To reserve your item, enter your first name and email address. Then select the desired item (s). No payment is required.",
				"success": "Thank you! To avoid SPAM, we have sent you a confirmation email before starting the planting ... See you soon!",
				"tag": "Creation <br> of 3D objects",
				"title": "Project progress"
			}
		}
	}
}
</i18n>
<style scoped>
    ul {
    list-style-type: none;
    }

    li {
    display: inline-block;
    }

    input[type="checkbox"][id^="mce-"] {
    display: none!important;
    }

    label {
    border: 1px solid #fff;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    transition: box-shadow 0.2s linear, margin 0.2s linear;
    }

    :checked + label {
    box-shadow: 0px 0px 0px 2px #3D8EBE;
    transition: box-shadow 0.2s linear, margin 0.2s linear;
    margin: 0.5em;
    outline: solid 10px transparent;
    }
</style>
