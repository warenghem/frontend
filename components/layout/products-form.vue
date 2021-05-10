<template>
  <div>
    <div class="mx-auto text-center">
      <v-dialog
        v-model="$store.state.productModal"
        transition="dialog-bottom-transition"
        content-class="bg-white small-bottom-dialog bottom-dialog rounded-b-0 rounded-t-lg"
        persistent
      >
        <v-card style="max-width:inherit">
          <div style="height: 50px;" class="d-flex justify-space-between align-center border-bottom-2 bar-fixed rounded-t-lg">
            <div class="sub-title pl-3">{{$t('btnWaitforit')}}</div>
            <v-btn
              text
              color="black"
              style="font-size: 26px"
              class="px-0 h-100 border-left-2 rounded-0"
              @click="$store.state.productModal = false"
            >
              <v-icon>{{ svgPath }}</v-icon>
            </v-btn>
          </div>
          <div style="transform: translateY(50px);">
            <div class="wa-smart-picture small-ratio skeletton">
                <img
                data-sizes="auto"
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/projects.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/projects.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/projects.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/projects.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/projects.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/projects.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/projects.jpg 2500w"
                class="lazyload mediabox-img lazypreload"
                />
            </div>
            <v-card-text class="pvw">
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
                      >
                        <v-form @submit.prevent="subscribe" class="d-flex flex-column w-100" >
                          <validation-provider
                            v-slot="{ errors }"
                            name="Name"
                            rules="required"
                          >
                            <v-text-field
                              v-model="name"
                              required
                              filled
                              rounded
                              :error-messages="errors"
                              clearable
                              color="lightbugattiblue"
                              :append-icon="svgPath3"
                              :label="$t('video.rightSection.label1')"
                              type="text" value="" @input="setName(name)"
                              class="px-5"
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
                              filled
                              rounded
                              color="lightbugattiblue"
                              :append-icon="svgPath2"
                              :label="$t('video.rightSection.label2')"
                              v-model="email"
                              :error-messages="errors"
                              type="email"
                              value=""
                              @input="setEmail(email)"
                              class="px-5"
                            ></v-text-field>
                          </validation-provider>
                          <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                          >
                            <v-row class="line mb-3 mx-1">
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
                            <div class="error--text">{{errors[0]?'Please select at least one':''}}</div>
                          </validation-provider>

                          <div class="mx-auto">
                            <v-btn
                              elevation="0"
                              large
                              :loading="loading"
                              class="btn-theme mt-5"
                              type="button"
                              @click.prevent="submitForm"
                              style="max-width: 250px;border-radius: 28px;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
                            >
                              {{$t('btnWaitforit')}}
                            </v-btn>
                            <button class="hidden" type="submit" ref="mailForm"></button>
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
                    <div class="d-flex align-center">
                        <small>{{$t('video.rightSection.alerttime')}} </small>
                        <v-btn icon class="close" @click="snackbarSuccess=false">
                            <v-icon>{{ svgPath }}</v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-layout align-center mt-5 mb-2 pr-4>
                    <v-layout column>
                        <v-icon color="lightbugattiblue" class="ma-auto pb-5" x-large>{{ svgPath5 }}</v-icon>
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
                        <small>{{$t('video.rightSection.alerttime')}} </small>
                        <v-btn icon class="close" @click="snackbarError=false">
                            <v-icon>{{ svgPath }}</v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-layout align-center mt-5 mb-2 pr-4>
                    <v-layout column>
                      <v-icon color="orange darken-2" class="ma-auto pb-5" x-large>{{ svgPath4 }}</v-icon>
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
    import MailchimpSubscribe from './mailchp-subscribe-products'
    import {mdiClose, mdiEmail, mdiAccount, mdiForum, mdiEmoticonCoolOutline, mdiEmoticonCryOutline} from '@mdi/js'
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
                svgPath4: mdiEmoticonCryOutline,
                svgPath5: mdiEmoticonCoolOutline,
                svgPath9: mdiForum,
                name: '',
                checkbox: false,
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
				"subtitle": "30 examplaires par produit sont en cours de production. Reservez les avant qu'il ne soit trop tard, aucun paiement n'est requis !",
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
    margin: 5px;
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
