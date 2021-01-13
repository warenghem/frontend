<template>
    <v-speed-dial v-model="dialShare" absolute right bottom direction="left" open-on-hover>
      <template v-slot:activator>
        <v-btn fab bottom small color="primary">
          <v-icon v-if="dialShare">mdi-close</v-icon>
          <v-icon v-else>mdi-share-variant</v-icon>
        </v-btn>
      </template>
      <!--<v-btn dark fab bottom color="blue darken-7" small :href="'https://www.linkedin.com/shareArticle?mini=true&url='+ params.slug" target="_blank">
        <v-icon>{{ svgPath }}</v-icon>
      </v-btn>
      <v-btn dark fab bottom color="blue" small :href="'https://www.facebook.com/sharer/sharer.php?u='+ params.slug" target="_blank">
        <v-icon>{{ svgPath2 }}</v-icon>
      </v-btn>
      <v-btn dark fab bottom color="green" small :href="'https://wa.me/?text=Checkout%20this%20page.%20'+ params.slug" target="_blank">
        <v-icon>{{ svgPath3 }}</v-icon>
      </v-btn>
      <v-btn dark fab bottom color="tertiary" small :href="'mailto:?subject=Awesomeness!&amp;body=Checkout this page!<a href='${route.path}>${route.path}</a>`" target="_blank">-->
    </v-speed-dial>
</template>

<script>
    import { mdiFacebook, mdiLinkedin, mdiWhatsapp, mdiEmail, mdiShareVariant } from '@mdi/js'
    export default {
        name: "tree-data",
        data: () => ({
          svgPath: mdiFacebook,
          svgPath2: mdiLinkedin,
          svgPath3: mdiWhatsapp,
          svgPath4: mdiEmail,
          svgPath5: mdiShareVariant,
          dialShare: false,
        }),
        mounted() {
          console.log(this.$route.params.slug);
        },
    }
</script>

<style scoped>

</style>
