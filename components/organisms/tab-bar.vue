<template>
    <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
      <AtomsBtnBack/>
      <div class="pl-5 d-flex border-left-2">
        <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
          {{$t('title')}}
        </div>
      </div>
      <v-spacer></v-spacer>
        <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            centered
            dark
            icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#protection">
                Subscribe
                <v-icon>mdi-phone</v-icon>
            </v-tab>

            <v-tab href="#contact">
                Contact
                <v-icon>mdi-heart</v-icon>
            </v-tab>
        </v-tabs>
    </v-toolbar-bar>
</template>

<script>

export default {
        name: "calender-section",
        data() {
            return {
                tab: "subscribe"
            }
        },
}
</script>
<i18n>
{
	"en": {
		"tabs": [
			{
				"href": "protection",
				"menu": "Data protection policy"
			},
			{
				"href": "protection",
				"menu": "General sales conditions"
			},
			{
				"href": "protection",
				"menu": "Legal Notice"
			}
		],
		"title": "Legal Notice"
	},
	"fr": {
		"tabs": [
			{
				"href": "#protection",
				"menu": "Politique de protection des données"
			},
			{
				"href": "#conditions",
				"menu": "Conditions générales de ventes"
			},
			{
				"href": "#mentions",
				"menu": "Mentions Légales"
			}
		],
		"title": "Mentions Légales"
	}
}
</i18n>
<style scoped lang="scss">
</style>
