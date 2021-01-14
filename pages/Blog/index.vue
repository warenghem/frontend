<template>
<div class="">

  <div           
    v-for="(firstpost, $index) in firstposts"
    :key="`firstpost-${$index}`"
    class="position-relative"
    >
    <div class="position-absolute w-100 h-100">
      <div style="z-index: 2;max-width:600px" class="position-relative d-flex mx-auto h-100 justify-center align-center flex-column text-white text-center">
        <div class="page-title py-3">
        {{ firstpost.title }}
        </div>
        <div class="py-3">
        {{ firstpost.description }}
        </div>
        <div class="py-3">
        {{ formatDate(firstpost.updatedAt) }}
        </div>  
        <v-btn
            elevation="0"
            rounded
            :to="firstpost.path" nuxt
            class="btn-theme my-3"
            >
            {{ firstpost.cta }}
        </v-btn>
      </div>
    </div>
    <article class="wa-magazine">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay blackoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,fo-bottom/'+ firstpost.media"
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-4-3,fo-bottom/'+ firstpost.media"
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,ar-3-5,fo-bottom/'+ firstpost.media"
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/'+ firstpost.media +' 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
  </div>
  
  <div class="">
    <v-container fluid class="productgrid">
        <v-card 
            v-for="(post, $index) in posts"
            :key="`post-${$index}`"
            height= "100%"
            lazy
            style="background-color:unset!important"
        >
          <nuxt-link :to="post.path" class="font-bold text-xl mb-2">
            <div class="gradientoverlay img-fluid theme--light wa-smart-picture square-ratio position-relative skeletton">
                <v-card-actions class="position-absolute w-100 d-none" style="bottom:0;z-index:5">
                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                </v-btn>
                </v-card-actions>
                    <img
                        data-sizes="auto"
                        :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-1-1,fo-bottom,c-maintain_ratio/' + post.media +' 1500w'"
                        :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-500,ar-1-1/' + post.media" 
                        :alt="post.title" 
                        class="lazyload bg-white catalogue-item-background mediabox-img" 
                    />
                <v-card-text class="teradeli-light mt-5 position-absolute pa-3 text-white" style="line-height: normal;bottom:0;font-size:13px;z-index:5">
                  {{ post.tags }}
                </v-card-text>
            </div>
            <v-card-text elevation="4" class="catalogue-item-content-title mt-4 p-0">
                    <span class="pr-1 titlesmall teradeli-medium primary--text">{{ post.title }}</span>
                    <span class="titlesmall teradeli-medium secondary--text">
                    </span>
                    <div class="teradeli-medium text-uppercase label">
                      {{ formatDate(post.updatedAt) }}
                    </div>
            </v-card-text>
          </nuxt-link>
        </v-card>
    </v-container>
    <v-container style="grid-template-rows: auto;" fluid class="homegrid">
      <v-card dark class="black item4 text-center justify-center align-center d-flex flex-column pvw">
        <div class="py-3">{{$t('title')}}</div>
        <div class="py-3">{{$t('subtitle')}}</div>
        <v-btn
            elevation="0"
            rounded
            :href="'mailto:hello@warenghem.com?subject=Submission to Warenghem News!'" target="_blank"
            class="btn-theme my-3"
            >
            {{$t('link')}}
        </v-btn>
      </v-card>
      <v-card dark class="color black item5">
        <SocialSection/>
      </v-card>
    </v-container>
  </div>
</div>
</template>

<script>
  export default {
    name: 'blog',
    transition: 'home',
    async asyncData(context) {
      const { $content, params, app } = context;
      const firstpost = await $content(`${app.i18n.locale}/blog`, params.slug).limit(1).only(['title', 'description', 'media', 'path', 'cta', 'updatedAt', 'author,']).sortBy('createdAt', 'asc').fetch();
      const posts = await $content(`${app.i18n.locale}/blog`, params.slug).skip(1).only(['title', 'description', 'media', 'path', 'cta', 'updatedAt', 'author,']).sortBy('createdAt', 'asc').fetch();
      return {
        posts: posts,firstposts: firstpost
      }
    },
    methods: {
        formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
        }
    },
  }
</script>
<i18n>
{
	"fr": {
      "title": "Les dernières nouvelles sur la transparence de la chaîne d'approvisionnement, la traçabilité des produits et la quête d'une consommation consciente, renforcée par la technologie.",
      "subtitle":"De l'équipe de Provenance, des experts invités et vous?",
      "link": " Contribuer"
  }
}
</i18n>
