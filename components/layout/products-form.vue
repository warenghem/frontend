<template>
  <div>
    <div class="mx-auto text-center">
      <v-dialog
        v-model="$store.state.productModal"
        transition="dialog-bottom-transition"
        content-class="bg-white bottom-dialog rounded-0"
        persistent
        max-width="700px"
      >
        <v-card>
          <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2">
            <div class="sub-title pl-3">{{$t('btnWaitforit')}}</div>
            <v-btn
              text
              color="black"
              style="font-size: 26px"
              class="px-0 h-100 border-left-2 rounded-0"
            >
              <v-icon @click="$store.state.productModal = false">{{ svgPath }}</v-icon>
            </v-btn>
          </div>
          <v-card-text class="pa-3 pa-sm-5">
            <div class="d-flex flex-column align-center justify-center h-100">
              <p class="pb-3 px-4 text-justify bottomText" v-html="$t('video.rightSection.subtitle')">
              </p>
              <div class="w-100 px-sm-5">
                <mailchimp-subscribe
                  url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                  user-id="2f7dbf20677f88c14c1389365"
                  list-id="7e113bce09"
                  @error="snackbarError=true"
                  @success="snackbarSuccess=true"
                >
                  <template v-slot="{ subscribe, setEmail, setName, setBag, setBelt, setWallet, loading }">
                    <validation-observer
                      ref="observer"
                      v-slot="{ invalid }"
                    >
                      <v-form @submit.prevent="subscribe" class="d-flex flex-column w-100">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Name"
                          rules="required|max:20"
                        >
                          <v-text-field
                            v-model="name"
                            required
                            :counter="20"
                            :error-messages="errors"
                            clearable
                            color="lightbugattiblue"
                            :prepend-icon="svgPath3"
                            :label="$t('video.rightSection.label1')"
                            type="text" value="" @input="setName(name)"
                          ></v-text-field>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email"
                        >
                          <v-text-field
                            clearable
                            required
                            color="lightbugattiblue"
                            :prepend-icon="svgPath2"
                            :label="$t('video.rightSection.label2')"
                            v-model="email"
                            :error-messages="errors"
                            type="email"
                            value=""
                            @input="setEmail(email)"
                          ></v-text-field>
                        </validation-provider>
<validation-provider
                            v-slot="{ errors }"
                            rules="required"
                          >
                        <v-row class="line mb-5">
                            <v-col cols="4" class="p-0">
                              <input v-model="product"
                                     type="checkbox"
                                     value="1"
                                     :error-messages="errors"
                                     @input="setBag($event.target.checked)"
                                     id="mce-BAG-0">
                              <label for="mce-BAG-0" class="rounded-xl">
                                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                                  <img class="mediabox-img"
                                       src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/48H_cote.png"/>
                                </div>
                              </label>
                            </v-col>
                            <v-col cols="4" class="p-0">
                              <input v-model="product"
                                     type="checkbox"
                                     value="2"
                                     @input="setBelt($event.target.checked)"
                                     id="mce-BELT-0">
                              <label for="mce-BELT-0" class="rounded-xl">
                                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                                  <img class="mediabox-img"
                                       src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/belt-blackblue-above2.png"/>
                                </div>
                              </label>
                            </v-col>
                            <v-col cols="4" class="p-0">
                              <input v-model="product"
                                     type="checkbox"
                                     value="3"
                                     @input="setWallet($event.target.checked)"
                                     id="mce-WALLET-0">
                              <label for="mce-WALLET-0" class="rounded-xl">
                                <div class="wa-smart-picture square-ratio skeletton wa-product-image bgcard rounded-xl">
                                  <img class="mediabox-img"
                                       src="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-400,dpr-2,ar-1-1/Products/pf-blackblue-below.png"/>
                                </div>
                              </label>
                            </v-col>
                        </v-row>
                </validation-provider>

                        <div class="mx-auto">
                          <v-btn
                            elevation="0"
                            large
                            :disabled="invalid"
                            :loading="loading"
                            class="btn-theme"
                            type="submit"
                            style="max-width: 250px;border-radius: 28px;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
                          >
                            {{$t('btnDiscover')}}
                          </v-btn>
                        </div>
                      </v-form>
                    </validation-observer>
                  </template>
                </mailchimp-subscribe>
              </div>
            </div>
            <v-card-subtitle class="text-justify">
              {{$t('newsletterdisclaimer')}}
            </v-card-subtitle>
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
            <div>{{$t('video.rightSection.error')}} <a style="color:white" href="mailto:hello@warenghem.com">hello@warenghem.com</a>
            </div>
          </v-layout>
        </v-layout>
      </div>
    </v-snackbar>
  </div>

</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe-products'
    import {mdiClose, mdiEmail, mdiAccount} from '@mdi/js'
    import {ValidationObserver, ValidationProvider} from "vee-validate";

    export default {
        name: "products-form",
        components: {
            MailchimpSubscribe,
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                product: [],
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                loading: false,
                svgPath: mdiClose,
                isFormValid: false,
                items: ['Francais', 'English'],
                svgPath2: mdiEmail,
                svgPath3: mdiAccount,
                name: '',
                checkbox: false,
            }
        },
        methods: {}
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
				"label1": "First Name",
				"label2": "e-mail",
				"subtitle": "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed about the progress of the project.",
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
				"error": "Votre email semble invalide ou déjà enregistré. Contactez nous:",
				"label1": "PRENOM ",
				"label2": "EMAIL",
				"subtitle": "Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.",
				"success": "Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de commencer la plantation... A tout de suite!",
				"tag": "Création <br> d’objets en 3D",
				"title": "Avancement du projet"
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
    display: none !important;
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
