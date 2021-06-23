<template>
    <v-card
    rounded="xl"
    class="mb-5"
    @click="clicked"
    >
      <div class="d-flex flex-column justify-center align-center text-center">
        <v-avatar
          class="ma-3 img-fluid position-relative"
          size="100"
        >
          <img
              data-sizes="auto"
              :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-640/'+ image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-380,fo-bottom,c-maintain_ratio/'+ image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-512,fo-bottom,c-maintain_ratio/'+ image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-1-1,w-683,fo-bottom,c-maintain_ratio/'+ image +' 683w'"
              class="lazyload cover bg-white catalogue-item-background"
          />
        </v-avatar>
        <div class="w-100">
          <v-card-subtitle class="text-hide py-0">{{name}}</v-card-subtitle>
        </div>
        <slot></slot>
        <v-btn class="buttonCard mb-n3" fab x-small>
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
            type: Array,
            default: () => []
        },
        icon: {
            type: String,
            default: ''
        },
        name: {
            type: Array,
            default: () => []
        }
    },
  }
</script>
