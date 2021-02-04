<template>
    <section class="team-section invgradientoverlay blackoverlay text-center pvw">
        <h2 class="page-title teradeli-medium text-white px-0">{{$t('title')}}</h2>
        <div class=" pb-3 py-2 page-subtitle text-white" v-html="$t('subtitle')"></div>
        <!--<v-text
            @click="$store.state.plantModal=true"
            style="z-index:2"
            class="text-center hand position-relative text-white "
            >
            {{$t('btnDiscover')}}
            <v-icon color="white" small>{{ svgPath1 }}</v-icon>
        </v-text>-->
        <picture>
            <source media="screen and (min-width: 64em)"
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/projects.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/projects.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/projects.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/projects.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/projects.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/projects.jpg"
            >
            <source media="screen and (min-width: 48em)"
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/projects.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/projects.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/projects.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/projects.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/projects.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/projects.jpg"
            >
            <source
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/projects.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/projects.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/projects.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/projects.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/projects.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/projects.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/projects.jpg"
            >
            <img class="lazyload mediabox-img"
                data-src="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/projects.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/projects.jpg 2x" 
                data-sizes="auto" />
        </picture>
    </section>
</template>

<script>
    import { mdiChevronRight } from '@mdi/js'
    export default {
        data() {
            return {
                svgPath1: mdiChevronRight,
            }
        }
    }
    //conjugent nature au future : 
</script>

<i18n>
{
	"en": {
		"btnDiscover": "I subscribe",
		"subtitle": "Participate soon in their creations",
		"title": "Upcoming objects"
	},
	"fr": {
		"btnDiscover": "Je m'abonne",
		"subtitle": "Participez bientôt à leur création",
		"title": "Objets à venir"
	}
}
</i18n>

<style scoped lang="scss">

</style>