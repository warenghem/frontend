<template>
  <v-app>
    <div>
      <slot name="header">
        <MainToolbar/>
      </slot>
      <slot name="content">
        <nuxt/>
      </slot>
      <Footer/>
    </div>
  </v-app>
</template>
<script>
    export default {
        mounted(){
            if(this.$cookies.get('currentLang')){
                this.$store.commit('langs/SET_LANG',this.$cookies.get('currentLang'))
            }
            setTimeout(()=>{
                document.querySelectorAll('.priceHide').forEach(el=>{
                    el.style.opacity='1';
                })
            },1000)


        },

    }
</script>
