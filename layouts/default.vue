<template>
  <div>
    <Header/>
    <header></header>
    <nuxt/>
    <color-mode-picker></color-mode-picker>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import ColorModePicker from '~/components/molecules/ColorModePicker';

export default {
  name:'default',
  components:{
    Header,
    ColorModePicker
  }
}
</script>