<template>
    <v-hover v-slot="{ hover }">
        <v-btn
            elevation="0"
            rounded
            dark
            :outlined="hover ? false : true"
            class="btn-theme teradeli-medium"
            style="max-width:100%;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
            >
            {{ text }}
        </v-btn>
    </v-hover>
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