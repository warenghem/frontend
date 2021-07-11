<template>
    <v-btn 
        :style="{ borderColor: $vuetify.theme.currentTheme.systemBackground }"
        class="mx-auto text-center btnCard text-uppercase" 
        elevation="0" rounded 
    >
        {{ text }}
    </v-btn>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style scoped>
.btnCard {
    z-index:2; margin-top: -35px;
}
</style>