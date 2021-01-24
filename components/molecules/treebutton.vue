<template>
    <v-btn
        elevation="0"
        rounded
        
        @click="$store.state.plantModal=true"
        class="btn-theme"
        >
        {{$t('btnTitle')}}
    </v-btn>
</template>