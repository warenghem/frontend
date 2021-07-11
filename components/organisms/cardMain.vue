<template>
    <v-card 
        height= "100%"
        lazy
        class="homecard hand"
        :class="className"
    >
        <NuxtLink :to="localePath('/')+link"> 
            <div class="primary--text h-100 img-fluid theme--light position-relative">
                <div v-bind:class="textColor" class="pvw text-center">
                    <h2 class="home-title teradeli-medium px-0">{{ title }}</h2>
                    <div class="pt-2 home-subtitle"> {{ subtitle }}</div>
                    <MoleculesBtnText :text="btnText" v-bind:class="btnColor" class="position-relative lighbugattiblue--text"/>
                </div>
                <div class="invgradientoverlay" v-if="type === 'bgImage'">
                    <img
                        data-sizes="auto"
                        :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640'+ image +' 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768'+ image +' 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024'+ image +' 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366'+ image +' 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600'+ image +' 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920'+ image +' 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500'+ image +' 2500w'"
                        class="lazyload mediabox-img"
                    />
                </div>
                <div v-else-if="type === 'video'" style="position: absolute;overflow: hidden;top: 0;width: 100%;height: 100%;">
                    <div class="invgradientoverlay h-100 w-100">
                        <div class="skeletton h-100 w-100">
                            <video class="h-100 w-100" style="object-fit:cover" width="720" height="405" webkit-playsinline playsinline autoplay loop muted poster="https://ik.imagekit.io/g1noocuou2/projects.jpg">
                                <source :src="image" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
                <div v-else class="picture" style="height: 100%;top: 70px;width: 100%;position: absolute">
                    <picture>
                        <source 
                            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-4-3'+ image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,ar-4-3'+ image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,ar-4-3'+ image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,ar-4-3'+ image +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,ar-4-3'+ image +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,ar-4-3'+ image +' 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,ar-4-3'+ image +' 1500w,'" 
                            :data-lowsrc="'https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-380'+ image"
                        >
                        <img class="lazyload mediabox-img"
                            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ image +' 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500'+ image +' 2x'" 
                            data-sizes="auto" />
                    </picture>
                </div>
            </div>
        </NuxtLink>
    </v-card>
</template>

<script>
    export default {
        name: 'card-main',
        props: {
            title: {
                type: String,
                default: ''
            },
            subtitle: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },
            className: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: ''
            },
            textColor: {
                type: String,
                default: ''
            },
            btnColor: {
                type: String,
                default: ''
            },
            btnText: {
                type: String,
                default: ''
            }
        }
    }
</script>