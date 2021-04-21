<template>
    <div style="max-width:800px" class="h-100 ma-auto">
        <h2 class="d-none page-title px-0">{{$t('references')}}</h2>
        <v-row class="ma-0 h-100 w-100" align="center" justify="center">
            <v-col cols="12" sm="4" align="center"><div class="svgicon svglogo text-center px-3"  v-html="require(`~/assets/images/label-co2-website_`+$i18n.localeProperties.language+`.svg?raw`)" /></v-col>
            <v-col cols="12" sm="4" align="center"><div class="svgicon2 svglogo text-center px-3" v-html="require(`~/assets/images/Label-Tech-white_`+$i18n.localeProperties.language+`.svg?raw`)" /></v-col>
            <v-col cols="12" sm="4" align="center"><div class="svgiconpeta svglogo text-center px-3" v-html="PETALogo" /></v-col>
        </v-row>
    </div>
</template>

<script>
    import PETALogo from "~/assets/images/PETAapproved.svg?raw";

    export default {
        name: "references",
       data() {
            return {
                PETALogo,
            }
        },
    }
</script>
<style scoped>
.svgicon {
	max-width: 170px
}
.svgicon2 {
	max-width: 185px
}
.svgiconpeta { 
	max-width: 130px
}
</style>