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
    </article>
  </div>
</template>

<script>
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