<template>
  <div>
    <h3 class="page-title teradeli-medium pb-10">
      {{$t('contact')}}
    </h3>
    <div>
      <p class="page-subtitle mb-5">{{$t('contactsubtitle')}}</p>
      <div class="mb-5"> 
        <a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
          <v-icon color="lightbugattiblue">{{ svgPath5 }}</v-icon><span class="pl-3">WhatsApp</span>
        </a>
      </div>
      <div class="mb-5">
        <a class="text-center w-100" target="_blank" href="https://m.me/warenghem.studios">
          <v-icon color="lightbugattiblue">{{ svgPath7 }}</v-icon><span class="pl-3">Facebook Messenger</span>
        </a>
      </div>
      <div class="mb-5">
        <a class="text-center w-100" target="_blank" href="https://www.instagram.com/warenghem.studios/">
          <v-icon color="lightbugattiblue">{{ svgPath8 }}</v-icon><span class="pl-3">Instagram</span>
        </a>
      </div>
      <div class="mb-5">
        <a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
          <v-icon color="lightbugattiblue">{{ svgPath6 }}</v-icon><span class="pl-3">Email</span>
        </a>
      </div>
    </div>
    <div v-html="$t('contacthours')">
    </div>
  </div>
</template>

<script>
    import { mdiWhatsapp, mdiEmail, mdiFacebookMessenger, mdiInstagram } from '@mdi/js'
    export default {
        name: "info-modal",
        data() {
            return {
              svgPath5: mdiWhatsapp,
              svgPath6: mdiEmail,
              svgPath7: mdiFacebookMessenger,
              svgPath8: mdiInstagram
                }
        },
    }
</script>

<i18n>
{
   "fr":{
      "contact":"Contactez nous",
      "contactsubtitle":"Des conseils personnalisés? Une question particulière? Des conseils à nous donner?",
      "contacthours":"<p >Nous sommes à votre écoute et nous nous ferons un plaisir de répondre à toutes vos questions.</p><p>Lundi – Samedi : 9h30 - 20h</p><p>Dimanche : 9h30 – 17h30</p>"
   }
}
</i18n>
