<template>
    <div>
        <a href="https://www.instagram.com/warenghem.studios/" target="_blank">
            <v-row style="z-index:2"  align="center" justify="center" class="ma-0 h-100 w-100 position-absolute">
                <v-col align="center">
                    <div class="ma-auto" style="fill: #ffffff;stroke: #ffffff;width:85px" v-html="LogoSmSm" />
                    <div style="font-size: 50px;margin-left: 8px;" class="teradeli-light pt-3 text-white">Live.</div>
                </v-col>
            </v-row>
            <div style="top:1vw;left:1vw;width:40px;z-index: 2;" class="svglogo position-absolute" v-html="InstaLogo" />
            <div class="insta-row invgradientoverlay blackoverlay">
                <div>
                    <InstagramWait />
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    import LogoSmSm from "~/assets/images/WAshort-w-vf.svg?raw";
    import InstaLogo from "~/assets/images/Instagram.svg?raw";
    export default {
        name: "social-section",
        data() {
          return {
            LogoSmSm,InstaLogo,
          }
        },
        methods: {
            hideModal() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto'
            },
        },
    }
</script>

<style scoped lang="scss">
    .insta-row {
        max-width: 1440px;
        margin: 0 auto !important;
    }
</style>