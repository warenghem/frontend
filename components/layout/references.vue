<template>
    <div>
        <div class="d-flex justify-center border-top-2 align-center flex-column flex-md-row py-5">
            <div v-for="(profile,idx) in profiles" :key="'profile_'+idx" class="ttext-center py-8 py-md-4 px-7">
                <!--<ik-image
                    :path="profile.img"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 80, width:200, dpr:2}]"
                    loading="lazy"
                    width="200"
                />-->
                <img
                    :data-src="profile.img" 
                    class="lazyload"
                    width="200"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import * as InstagramFeed from 'instafeed';
    export default {
        name: "app-footer",

       data() {
            return {
                profiles: [
                    {
                        key: 1,
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2/Logos/label-co2-website.png",
                    },
                    {
                        key: 2,
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2/Logos/Label-Tech-white.png",
                    }, {
                        key: 3,
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2/Logos/PETAapproved.png",
                    },
                ]
            }
        },
    }
</script>