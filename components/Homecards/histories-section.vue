<template>
    <section class="team-section invgradientoverlay blackoverlay2 text-center pvw">
        <h2 class="page-title teradeli-medium text-white px-0">{{$t('title')}}</h2>
        <div class=" pb-3 py-2 page-subtitle text-white" v-html="$t('subtitle')"></div>
        <v-text
            @click="$store.state.historiesModal=true"
            style="z-index:2"
            class="text-center hand position-relative lightbugattiblue--text"
            >
            {{$t('btnDiscover')}}
            <v-icon color="lightbugattiblue"  small>{{ svgPath1 }}</v-icon>
        </v-text>
        <NewsletterSection class="text-white" />
        <picture>
            <source media="screen and (min-width: 64em)"
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg"
            >
            <source media="screen and (min-width: 48em)"
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg"
            >
            <source
                data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1500w," 
                data-lowsrc="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg"
            >
            <img class="lazyload mediabox-img"
                data-src="https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500/X-Architecture-Shilda-Visual_Atelier_8-Architecture-2.jpg 2x" 
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
</script>

<i18n>
{
	"en": {
		"btnDiscover": "I subscribe",
		"subtitle": "The incredible story of objects that bring nature and humans together<br/>1 article per week - Unsubscribe in one click",
		"title": "Wildly beautiful"
	},
	"fr": {
		"btnDiscover": "Je m'abonne",
		"subtitle": "L'incroyable histoire des objets qui rapprochent la nature et l'humain<br/>1 article par semaine - Désinscription en un clic",
		"title": "Sauvagement beau"
	}
}
</i18n>

<style scoped lang="scss">

</style>