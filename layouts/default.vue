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
      <loading />
    </div>
  </v-app>
</template>
<script>
    import Loading from "../components/loading";
    export default {
        components: {Loading},
        data(){
          return{
              isLoading:false,
          }
        },
        beforeCreate(){
            if(this.$cookies.get('currency_default')){
                this.$store.dispatch('product/getExchangeRate',this.$cookies.get('currency_default'))
            }
        },

    }
</script>
