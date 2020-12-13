<template>
    <div>
        <div class="whole-footer border-top-2 pt-10 pt-sm-0">
            <div class="insta-row border-left-2 border-right-2">
                <h3 class="page-title pl-1 py-md-5 py-4">Instagram - #warenghemlive</h3>
                <div v-intersect.quiet="instaintersect">
                    <LazyInstagram v-if="instashow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "social-section",
        data() {
          return {
            instashow: false,
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
            instaintersect(entries, observer, isIntersecting) {
              this.instashow = true
            }
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