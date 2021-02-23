<template>
<div class="">


  

</div>
</template>

<script>
  export default {
    name: 'blog',
    transition: 'home',
    async asyncData(context) {
      const { $content, params, app } = context;
      const firstpost = await $content(`/blog`, params.slug).limit(1).only(['title', 'description', 'media', 'path', 'cta', 'updatedAt', 'author,']).sortBy('createdAt', 'asc').fetch();
      const posts = await $content(`/blog`, params.slug).skip(1).only(['title', 'description', 'media', 'path', 'cta', 'updatedAt', 'author,']).sortBy('createdAt', 'asc').fetch();
      return {
        posts: posts,firstposts: firstpost
      }
    },

  }
</script>
<i18n>
{
	"en": {
		"link": " To contribute",
		"subtitle": "From the Provenance team, invited experts and you?",
		"title": "The latest news on supply chain transparency, product traceability and the quest for conscious consumption, empowered by technology."
	},
	"fr": {
		"link": " Contribuer",
		"subtitle": "De l'équipe de Provenance, des experts invités et vous?",
		"title": "Les dernières nouvelles sur la transparence de la chaîne d'approvisionnement, la traçabilité des produits et la quête d'une consommation consciente, renforcée par la technologie."
	}
}
</i18n>
