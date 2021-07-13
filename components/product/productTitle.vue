<template>
    <div class="home-title px-0 text-left">{{title}}</div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>
