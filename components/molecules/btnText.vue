<template>
    <div
        style="z-index:2"
        class="text-center"
        >
            {{ text }}
        <v-icon small>{{ svgPath1 }}</v-icon>
    </div>
</template>

<script>
    import { mdiChevronRight } from '@mdi/js'
    export default {
        name: "text-button",
        data() {
            return {
                svgPath1: mdiChevronRight,
            }
        },
        props: {
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>