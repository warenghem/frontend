<template>
  <div>
    <h3 class="page-title teradeli-medium pb-10">
      {{$t('contact')}}
    </h3>
    <p class="text-center mb-3">{{$t('contactsubtitle')}}</p>
    <CustomerServices/>
  </div>
</template>

<script>
    export default {
        name: "customer-services-layout",
    }
</script>

<i18n>
{
	"en": {
		"contact": "Contact us",
		"contactsubtitle": "Personalized advice? A specific question? Any advice for us?"
	},
	"fr": {
		"contact": "Contactez nous",
		"contactsubtitle": "Des conseils personnalisés? Une question particulière? Des conseils à nous donner?"
	}
}
</i18n>
