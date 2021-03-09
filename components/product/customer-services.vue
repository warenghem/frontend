<template>
  <div>
    <h3 class="page-title teradeli-medium pb-10">
      {{$t('contact')}}
    </h3>
    <div class="text-center">
      <p class="mb-5">{{$t('contactsubtitle')}}</p>
      <div class="mb-5"> 
        <v-btn max-width="300px" depressed nuxt rounded class="text-center w-100" onclick="tidioChatApi.open()">
          <v-icon color="lightbugattiblue">{{ svgPath9 }}</v-icon><span class="pl-3">{{$t('chat')}}</span>
        </v-btn>
      </div>
      <div class="mb-5"> 
        <v-btn max-width="300px" depressed nuxt rounded class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
          <v-icon color="lightbugattiblue">{{ svgPath5 }}</v-icon><span class="pl-3">WhatsApp</span>
        </v-btn>
      </div>
      <div class="mb-5">
        <v-btn max-width="300px" depressed nuxt rounded class="text-center w-100" target="_blank" href="https://m.me/warenghem.studios">
          <v-icon color="lightbugattiblue">{{ svgPath7 }}</v-icon><span class="pl-3">Facebook Messenger</span>
        </v-btn>
      </div>
      <div class="mb-5">
        <v-btn max-width="300px" depressed nuxt rounded class="text-center w-100" target="_blank" href="https://www.instagram.com/warenghem.studios/">
          <v-icon color="lightbugattiblue">{{ svgPath8 }}</v-icon><span class="pl-3">Instagram</span>
        </v-btn>
      </div>
      <div class="mb-5">
        <v-btn max-width="300px" depressed nuxt rounded class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
          <v-icon color="lightbugattiblue">{{ svgPath6 }}</v-icon><span class="pl-3">Email</span>
        </v-btn>
      </div>
    </div>
    <div v-html="$t('contacthours')">
    </div>
  </div>
</template>

<script>
    import { mdiWhatsapp, mdiEmail, mdiFacebookMessenger, mdiInstagram, mdiForum } from '@mdi/js'
    export default {
        name: "info-modal",
        data() {
            return {
              svgPath9: mdiForum,
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
	"en": {
    "chat": "Our online chat",
		"contact": "Contact us",
		"contacthours": "<p> We are at your disposal and we will be happy to answer all your questions. </p> <ul><li> Monday - Saturday: 10:00 am - 08:30 pm (UTC+01:00)</li> <li> Sunday: 10:00 am - 08:30 pm UTC+01:00</li></ul>",
		"contactsubtitle": "Personalized advice? A specific question? Any advice for us?"
	},
	"fr": {
    "chat": "Notre chat en ligne",
		"contact": "Contactez nous",
		"contacthours": "<p >Nous sommes à votre écoute et nous nous ferons un plaisir de répondre à toutes vos questions.</p><ul><li>Lundi – Samedi : 10h00 - 20h30</li><li>Dimanche : 10h00 – 20h30</li></ul>",
		"contactsubtitle": "Des conseils personnalisés? Une question particulière? Des conseils à nous donner?"
	}
}
</i18n>
