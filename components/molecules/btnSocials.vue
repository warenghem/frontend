<template>
    <div>
        <v-btn
            v-for="(link,l_idx) in $store.state.link.sociallinks"
            class="mx-3"
            icon
            :key="'link3_'+l_idx"
            target="_blank"
            :href="link.url"
            color="systemGray6"
            >
            <v-icon class="d-block" size="24px">{{ link.icon }}</v-icon>
        </v-btn>
    </div>
</template>