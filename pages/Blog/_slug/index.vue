<template>
  <div class="container mx-auto pt-6">
    <article v-if="post">
      <header class="grid grid-cols-2 gap-4 mb-12 rounded shadow-lg p-4">
        <img :src="post.media" alt="post.title" />
        <div class="">
          <h2 class="text-lg font-bold text-gray-800 mb-2">{{ post.title }}</h2>
          <p class="text-sm text-gray-700">
            {{ $t('published-at') }} {{ getDate }}
            <nuxt-link
            class="uppercase text-teal-600 hover:text-teal-800"
            v-for="lang in otherLanguages"
            :key="lang.locale"
            :to="lang.path"
            >
            {{ lang.locale }}
            </nuxt-link>
          </p>
        </div>
      </header>
      <nuxt-content class="text-gray-800" :document="post" />
    </article>
  </div>
</template>

<script>

import { format } from 'date-fns';

export default {
  name: 'post',
  async asyncData(context) {
    const { $content, params, app, route, redirect } = context;
    const slug = params.slug;
    const post = await $content(`${app.i18n.locale}/blog`, slug).fetch();
    const computed = {
        getDate() {
            return format(new Date(this.post.createdAt), 'dd/MM');
        },
    };
    return {
      post,
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
</script>