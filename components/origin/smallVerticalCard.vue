<template>
    <v-card
    rounded="xl"
    class="mb-5"
    >
      <div class="d-flex flex-column justify-center align-center text-center">
        <v-avatar
          class="ma-3 img-fluid position-relative"
          size="100"
        >
          <img
              data-sizes="auto"
              :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/API/'+ image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/API/'+ image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/API/'+ image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/API/'+ image +' 683w'"
              class="lazyload cover bg-white catalogue-item-background"
          />
        </v-avatar>
        <div class="w-100">
          <v-card-subtitle class="text-hide py-0">{{name}}</v-card-subtitle>
        </div>
        <div class="d-flex align-center">
          <v-icon small right >
            {{check}}
          </v-icon>
          <v-card-subtitle class="font-italic text-hide ml-1 pa-0">Verified</v-card-subtitle>
        </div>
        <v-btn class="buttonCard mb-n3" fab x-small>
          <v-icon>{{mdiChevronRight}}</v-icon>
        </v-btn>
      </div>
    </v-card>
</template>
<script>
  
  import { mdiShieldCheck, mdiChevronRight } from '@mdi/js';
  export default {
    data () {
      return {
            check : mdiShieldCheck,
            mdiChevronRight: mdiChevronRight,
      }
    },
    props: {
        image: {
            type: Array,
            default: () => {
            },
        },
        name: {
            type: Array,
            default: () => {
            }
        }
    },
  }
</script>
<style scoped lang="scss">
</style>
