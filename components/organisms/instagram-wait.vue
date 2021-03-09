<template>
    <v-row id="instaFeed" class="ma-0">
        <div 
            v-for="image in images"
            :key="image"
            class="wa-smart-picture square-ratio skeletton wa-product-image"
        >
            <img class="lazyload mediabox-img"
                :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-150'+ image +' 150w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ image +' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380'+ image +' 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512'+ image +' 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683'+ image +' 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800'+ image +' 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960'+ image +' 960w'" 
                data-sizes="auto"
                />
        </div>
    </v-row>
</template>

<script>
    export default {
        name: "instagram",
        data() {
            return {
                images: [
                    "/instagram_1.jpg",
                    "/instagram_2.jpg",
                    "/instagram_3.jpg",
                    "/instagram_4.jpg",
                    "/instagram_5.jpg",
                    "/instagram_6.jpg",
                    "/instagram_8.jpg",
                    "/instgram_7.jpg",
                ],
            }
        },
    }
</script>

<style scoped lang="scss">
    #instaFeed {
        div {
        width: 25%!important;
        }
    @media only screen and (max-width: 599px) {
        div:nth-child(n+5) {
        display: none;
        }
        div {
        width: 50%!important;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 779px) {
        div:nth-child(n+7) {
        display: none!important;
        }
        div {
        width: 33.33%!important;
        }
    }
    }
</style>