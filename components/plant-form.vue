<template>
    <div>
        <div class="mx-auto text-center">
            <v-dialog
                    v-model="$store.state.plantModal"
                    persistent
                    max-width="600px"
                    class="ma-3"
            >
                <v-card>
                    <v-btn
                            icon
                            @click="$store.state.plantModal = false"
                    >
                        <v-icon
                                color="black"
                                medium
                        >
                            mdi-close
                        </v-icon>
                    </v-btn>
                    <v-card-text
                    class="pa-3 pa-sm-5">
                        <div class="d-flex flex-column align-center justify-center h-100">
                            <p class="pb-3 px-4 text-justify bottomText">
                                {{$t('video.rightSection.subtitle')}}
                            </p>
                            <div class="w-100 px-sm-5">
                                <mailchimp-subscribe
                                        url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                        user-id="2f7dbf20677f88c14c1389365"
                                        list-id="ee2afb40a2"
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
                                            <v-btn
                                                elevation="2"
                                                rounded
                                                large
                                                :loading="loading"
                                                class="btn-theme"
                                                type="submit"
                                                >
                                                {{$t('btnTitle')}}
                                            </v-btn>
                                            
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
                        <v-btn class="close" @click="snackbarSuccess=false">
                            <v-icon>mdi-close</v-icon>
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
            timeout="0"
            rounded="lg"
            >
            <div>
                <div class="d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center">
                        <small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <v-btn icon class="close" @click="snackbarError=false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                </div>
                <v-layout align-center mt-5 mb-2 pr-4>
                    <v-icon color="orange darken-2" class="pr-3" dark large>mdi-alert-circle-outline</v-icon>
                    <v-layout column>
                        <div>{{$t('video.rightSection.error')}}</div>
                    </v-layout>
                </v-layout>
            </div>
        </v-snackbar>
    </div>

</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe'

    export default {
        name: "plant-form",
        components: {
            MailchimpSubscribe,
        },
        i18n: {
            messages: {
                en: {
                    video: {
                        rightSection: {
                            title: 'Project progress',
                            tag: 'Creation <br> of 3D objects',
                            subtitle: "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed of the progress of the project.",
                            label1: 'FIRST NAME',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem says',
                            alerttime: 'just now',
                            error: 'Looks invalid or already subscribed. ',
                            success: 'Thank you! To avoid SPAM, we have sent you a confirmation email before ' +
                                'start planting ... see you soon!'
                        }
                    }
                },
                fr: {
                    video: {
                        rightSection: {
                            title: 'Avancement du projet',
                            tag: 'Création <br> d’objets en 3D',
                            subtitle: 'Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.',
                            label1: 'PRENOM ',
                            label2: 'EMAIL',
                            alerttitle: 'Warenghem dit',
                            alerttime: 'maintenant',
                            error: 'Semble invalide ou déjà enregistré.',
                            success: 'Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de ' +
                                'commencer la plantation... A tout de suite!'
                        }
                    }
                },
            }
        },
        data() {
            return {
                snackbarSuccess: false,
                snackbarError: false,
                email: '',
                loading: false
            }
        },
    }
</script>

<style scoped>

</style>