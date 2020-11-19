<template>
    <div>
        <div class="d-flex justify-center border-top-2 align-center flex-column flex-md-row py-5">
            <div v-for="(profile,idx) in profiles" :key="'profile_'+idx" class="ttext-center py-8 py-md-4 px-7">
                <ik-image
                    :path="profile.img"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 80, width:200, dpr:2}]"
                    loading="lazy"
                    width="200"
                />
            </div>
        </div>
        <div class="whole-footer border-top-2 pt-10 pt-sm-0">
            <div class="insta-row border-left-2 border-right-2">
                <h3 class="page-title py-md-5 py-4">Instagram - Warenghem Live</h3>
                <div id="instaFeed"></div>
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
                        img: "/label-co2-website.png"
                    },
                    {
                        key: 2,
                        img: "/Label-Tech-white.png"
                    }, {
                        key: 3,
                        img: "/PETAapproved.png"
                    },
                ]
            }
        },
        mounted() {
            new InstagramFeed({
                'username': 'warenghem.studios',
                'container': document.getElementById("instaFeed"),
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'callback': null,
                'styling': false,
                'margin': 0,
                'lazy_load': true,
                'on_error': console.error
            });
            setTimeout(() => {
                const slider = document.querySelector('.instagram_gallery');
                let isDown = false;
                let startX;
                let scrollLeft;
                if (slider) {
                    slider.addEventListener('mousedown', (e) => {
                        isDown = true;
                        slider.classList.add('active');
                        startX = e.pageX - slider.offsetLeft;
                        scrollLeft = slider.scrollLeft;
                    });
                    slider.addEventListener('mouseleave', () => {
                        isDown = false;
                        slider.classList.remove('active');
                    });
                    slider.addEventListener('mouseup', () => {
                        isDown = false;
                        slider.classList.remove('active');
                    });
                    slider.addEventListener('mousemove', (e) => {
                        if (!isDown) return;
                        e.preventDefault();
                        const x = e.pageX - slider.offsetLeft;
                        const walk = (x - startX) * 3; //scroll-fast
                        slider.scrollLeft = scrollLeft - walk;
                    });
                }

            }, 3000);


        },
    }
</script>

<style scoped lang="scss">
    .insta-row {
        max-width: 1440px;
        margin: 0 auto !important;
        padding-left: 1em;
        padding-right: 1em;
        @media (min-width: 767px) {
            padding-top: 2.5rem !important;
        }
    }

</style>