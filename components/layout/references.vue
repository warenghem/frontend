<template>
    <div class="pvw h-100">
        <h2 class="d-none page-title px-0">{{$t('references')}}</h2>
        <v-row class="ma-0 h-100 w-100" align="center" justify="center">
            <v-col align="center"><div class="svgicon svglogo text-center px-3" v-html="CO2SiteLogo" /></v-col>
            <v-col align="center"><div class="svgicon svglogo text-center px-3" v-html="CO2TechLogo" /></v-col>
            <v-col align="center"><div class="svgiconpeta svglogo text-center px-3" v-html="PETALogo" /></v-col>
        </v-row>
    </div>
</template>

<script>
    import CO2SiteLogo from "~/assets/images/label-co2-website.svg?raw";
    import CO2TechLogo from "~/assets/images/Label-Tech.svg?raw";
    import PETALogo from "~/assets/images/PETAapproved.svg?raw";

    export default {
        name: "app-footer",
        i18n: {
            messages: {
                en: {
                    references: "Warenghem Studio",
                },
                fr: {
                    references: "Nos certifications",
                }
            }
        },
       data() {
            return {
                CO2SiteLogo,CO2TechLogo,PETALogo,
            }
        },
    }
</script>
<style scoped>
.svgicon {
	max-width: 250px
}
.svgiconpeta {
	max-width: 210px
}
</style>