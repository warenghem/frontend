<template>
  <v-card
    rounded="xl"
    class="ma-1r"
    @click="clicked"
  >
    <div class="d-flex flex-no-wrap justify-space-between align-center">
      <v-avatar
        class="ma-3 img-fluid position-relative"
        size="100"
        tile
      >
        <img
            data-sizes="auto"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/'+ image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/'+ image+' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/'+ image+' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/'+ image+' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-800,fo-bottom,c-maintain_ratio/'+ image+' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-960,fo-bottom,c-maintain_ratio/'+ image+' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-1500,fo-bottom,c-maintain_ratio/'+ image+' 1500w'"
            class="lazyload cover bg-white catalogue-item-background rounded-xl"
        />
      </v-avatar>
      <div class="w-100">
        <v-card-title
          class="text-h5 pt-0"
          v-text="title"
        ></v-card-title>
        <slot name="content"></slot>
      </div>
      <v-btn class="mr-n3 buttonCard" fab x-small>
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>
<script>
  
  export default {
    clicked() {
      this.$emit('clicked');
    },
    props: {
        image: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
  }
</script>