<template>
    <div style="max-width:800px" class="h-100 ma-auto">
        <v-row class="ma-0 h-100 w-100" align="center" justify="center">
            <v-col v-for="(item, index) in items" :key="index" cols="12" sm="4" align="center">
                <div :class="item.itemClass" v-html="item.image" />
            </v-col>
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
                items: [
                    {
                        image: require(`~/assets/images/label-co2-website_`+this.$i18n.localeProperties.language+`.svg?raw`),
                        itemClass: "svgicon svglogo text-center px-3"
                    },
                    {
                        image: require(`~/assets/images/Label-Tech-white_`+this.$i18n.localeProperties.language+`.svg?raw`),
                        itemClass: "svgicon2 svglogo text-center px-3"
                    },
                    {
                        image: PETALogo,
                        itemClass: "svgiconpeta svglogo text-center px-3"
                    }                    
                ] 
            }
        }
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