<template>
    <v-btn
        elevation="2"
        rounded
        large
        @click="$store.state.plantModal=true"
        class="btn-theme"
        style="border-radius: 28px;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
        >
        {{$t('btnTitle')}}
    </v-btn>
</template>