<template>
    <div
        style="z-index:2"
        class="text-center"
        >
        {{$t('btnDiscover')}}
        <v-icon small>{{ svgPath1 }}</v-icon>
    </div>
</template>

<script>
    import { mdiChevronRight } from '@mdi/js'
    export default {
        name: "discover-button",
        data() {
            return {
                svgPath1: mdiChevronRight,
            }
        },
    }
</script>