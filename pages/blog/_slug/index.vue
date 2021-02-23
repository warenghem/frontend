<template>
  <div class="">
    <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
      <Backbutton/>
      <div class="pl-5 d-flex border-left-2">
        <div class="d-inline-flex flex-column justify-center">
          <div class="teradeli-medium text-uppercase label">
            {{ post.category }}
          </div>
          <div class="teradeli-medium appbartitle text-uppercase">
            {{ post.title }}
          </div>
        </div>
      </div>
      <client-only>
        <LazyReadprogressbar/>
      </client-only>
    </v-toolbar-bar>
    <article class="wa-magazine" v-if="post">
      <div class="mb-5 wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay blackoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-bottom,c-maintain_ratio/'+ post.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/'+ post.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/'+ post.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/'+ post.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/'+ post.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-bottom,c-maintain_ratio/'+ post.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-bottom,c-maintain_ratio/'+ post.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-640,fo-bottom/'+ post.media"
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-bottom,c-maintain_ratio/'+ post.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-bottom,c-maintain_ratio/'+ post.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-bottom,c-maintain_ratio/'+ post.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-bottom,c-maintain_ratio/'+ post.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-bottom,c-maintain_ratio/'+ post.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-bottom,c-maintain_ratio/'+ post.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-bottom,c-maintain_ratio/'+ post.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,ar-4-3,w-640,fo-bottom/'+ post.media"
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-bottom,c-maintain_ratio/'+ post.media +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-bottom,c-maintain_ratio/'+ post.media +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-bottom,c-maintain_ratio/'+ post.media +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-bottom,c-maintain_ratio/'+ post.media +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-bottom,c-maintain_ratio/'+ post.media +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-bottom,c-maintain_ratio/'+ post.media +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-bottom,c-maintain_ratio/'+ post.media +' 2500w,'" 
            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,ar-3-5,bl-10,w-640,fo-bottom/'+ post.media"
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/'+ post.media +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-bottom,c-maintain_ratio/'+ post.media +' 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
      <div class="pvw">
        <header>
          <div class="mb-5 d-flex justify-space-between flex-md-column">
            <div class="teradeli-medium text-uppercase label">
              {{ post.category }}
            </div>
            <div class="teradeli-medium text-uppercase label">
              {{ $d(new Date(post.updatedAt), 'short') }}
            </div>
            <Share/>
          </div>
          <h1 class="page-title text-left px-0 mb-2">{{ post.title }}</h1>
          <h2 class="body-xl text-left px-0 mb-2">{{ post.description }}</h2>
        </header>
        <nuxt-content class="my-5" :document="post"/>
      </div>
    </article>
  </div>
</template>

<script>
    import getSiteMeta from '@/utils/getSiteMeta';
    export default {
        name: 'post',
        transition: 'home',
        async asyncData(context) {
            const {$content, params, app} = context;
            const slug = params.slug;
            const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();
            return {
                post,
            }
        },
        methods: {
            formatDate(date) {
              const options = { year: 'numeric', month: 'long', day: 'numeric' }
              return new Date(date).toLocaleDateString(`${this.$i18n.locale}`, options)
            }
        },
        computed: {
          meta() {
            const metaData = {
              type: "blog",
              title: this.post.title,
              description: this.post.description,
              url: `${this.$config.baseUrl}/${this.$i18n.locale}/blog/${this.$route.params.slug}`,
              mainImage: this.post.image,
            };
            return getSiteMeta(metaData);
          }
        },
        head() {
          return {
            title: this.post.title,
            meta: [
              ...this.meta,
              {
                property: "post:published_time",
                content: this.post.createdAt,
              },
              {
                property: "post:modified_time",
                content: this.post.updatedAt,
              },
              {
                property: "post:tag",
                content: this.post.tags ? this.post.tags.toString() : "",
              },
              { name: "twitter:label1", content: "Written by" },
              { name: "twitter:data1", content: "Bob Ross" },
              { name: "twitter:label2", content: "Filed under" },
              {
                name: "twitter:data2",
                content: this.post.tags ? this.post.tags.toString() : "",
              },
            ],
            link: [
              {
                hid: "canonical",
                rel: "canonical",
                href: `https://www.warenghem.com/${this.$i18n.locale}/blog/${this.$route.params.slug}`,
              },
            ],
          };
        }
    }
/*
    export default {
        name: 'post',
        transition: 'home',
        middleware ({ app, params, redirect }) {
          if (params.pathMatch === 'index') {
            redirect(app.localePath('/'))
          }
        },
        async asyncData ({ $content, store, app, params, error }) {
          const path = `/${app.i18n.locale}/${params.pathMatch || 'index'}`
          const [post] = await $content({ deep: true }).where({ path }).fetch()
          const [prev, next] = await $content(app.i18n.locale, { deep: true })
            .fetch()
          return {
            post,
            prev,
            next
          }
        },
        methods: {
            formatDate(date) {
              const options = { year: 'numeric', month: 'long', day: 'numeric' }
              return new Date(date).toLocaleDateString('fr', options)
            }
        },
        head() {
            return {
                title: this.post.title,
                htmlAttrs: {
                    lang: this.$i18n.locale,
                },
                meta: [
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.post.description,
                    },
                    {
                        property: 'og:title',
                        hid: 'og:title',
                        content: this.post.title,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.post.media,
                    },
                ],
            };
        },
    }
  */
</script>