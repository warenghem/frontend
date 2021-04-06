export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).where({ slug: { $ne: 'type' } }).only(['path']).fetch()
  return files.map(file => file.path === '/index' ? '/' : file.path)
};