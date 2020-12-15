<template>
    <div class="pvw mb-n4">
        <h2 class="page-title px-0 primary--text">{{$t('references')}}</h2>
        <div class="d-flex justify-center align-center flex-column flex-md-row">
                <div class="svgicon svglogo text-center py-8 py-md-4 px-7" v-html="CO2SiteLogo" />
                <div class="svgicon svglogo text-center py-8 py-md-4 px-7" v-html="CO2TechLogo" />
                <div class="svgiconpeta svglogo text-center py-8 py-md-4 px-7" v-html="PETALogo" />
        </div>
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
	width: 250px
}
.svgiconpeta {
	width: 210px
}
</style>