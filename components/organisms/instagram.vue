<template>
    <div id="instaFeed"></div>
</template>

<script>
    import * as InstagramFeed from 'instafeed';
    export default {
        name: "app-footer",
        mounted() {
            new InstagramFeed({
                'username': 'warenghem.studios',
                'container': document.getElementById("instaFeed"),
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'display_captions': true,
                'callback': null,
                'styling': true,
                'items': 8,
                'items_per_row': 4,
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
    #instaFeed {
    @media only screen and (max-width: 599px) {
        a:nth-child(n+5) {
        display: none;
        }
        img {
        width: 50%!important;
        }
    }
    @media only screen and (min-width: 600px) and (max-width: 779px) {
        a:nth-child(n+7) {
        display: none!important;
        }
        img {
        width: 33.33%!important;
        }
    }
    }
</style>