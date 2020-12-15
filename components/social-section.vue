<template>
    <div>
        <div class="whole-footer border-top-2 pt-sm-0">
            <div class="insta-row border-left-2 border-right-2 pvw pb-0">
                <h3 class="page-title pl-1 pb-md-5 pb-4 primary--text">Instagram - #warenghemlive</h3>
                <div>
                    <Instagram />
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