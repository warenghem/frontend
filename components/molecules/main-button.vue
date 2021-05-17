<template>
        <v-btn
            elevation="0"
            color="lightbugattiblue"
            class="btn-theme"
            dark
            :large="large"
            rounded
            style="max-width:100%;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
            >
            {{$t(text)}}
        </v-btn>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: () => {
                }
            },
            large: {
                type: Boolean,
                default: () => {
                }
            }
        }
    }
</script>