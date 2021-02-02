<template>
    <v-btn
        elevation="0"
        rounded
        
        @click="$store.state.plantModal=true"
        class="btn-theme"
        style="max-width:100%;word-break: break-word;outline: 0;display: inline-block;white-space: normal;"
        >
        {{$t('btnNewsletter')}}
    </v-btn>
</template>