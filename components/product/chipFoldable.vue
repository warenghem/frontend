<template>
    <foldable class="baidu-foldable mb-5" height="%50">
        <slot>
            <div class="py-4">
                <v-chip-group
                    active-class="primary--text"
                    column
                >
                    <v-chip
                        v-for="(det,i_dx) in chip"
                        :key="'award'+i_dx"
                    >
                        {{ det }}
                    </v-chip>
                </v-chip-group>
            </div>
        </slot>
        <template slot="view-more" slot-scope="{ toggle, collapsed }">
        <div @click="toggle"
            class="baidu-view-more"
            :class="{ 'collapsed': collapsed }">
            <svg class="baidu-view-more-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20"
                height="20" fill="#3596ff">
            <path
                d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 938.666667c-234.666667 0-426.666667-192-426.666667-426.666667s192-426.666667 426.666667-426.666667 426.666667 192 426.666667 426.666667-192 426.666667-426.666667 426.666667z"
                p-id="3018"></path>
            <path
                d="M793.6 396.8c-17.066667-17.066667-42.666667-17.066667-59.733333 0l-221.866667 221.866667-221.866667-221.866667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l251.733333 251.733334c17.066667 17.066667 42.666667 17.066667 59.733334 0l251.733333-251.733334c17.066667-12.8 17.066667-42.666667 0-59.733333z"
                p-id="3019"></path>
            </svg>
            <span class="baidu-view-more-text">{{ collapsed ? $t('product.readMore') : $t('product.readLess') }}</span>
        </div>
        </template>
    </foldable>
</template>

<script>
    import Vue from "vue";
    import VueFoldable from 'vue-foldable'
    import 'vue-foldable/dist/vue-foldable.css'
    Vue.component('foldable', VueFoldable);

    export default {
        props: {
            chip: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .v-chip {
    height: auto!important;
    white-space: inherit!important;
    min-height: 32px;
    padding: 6px 12px!important;
    }
/* purgecss start ignore */
.vue-foldable-mask {
    transition: opacity 3s;
    bottom: 24px;
}
.slick-list {
    padding-left: 0!important;
}
::v-deep .vue-foldable .vue-foldable-container {
    overflow: hidden;
    transition: max-height 0.3s;
}
.vue-foldable {
    position: relative;
}
.vue-foldable .vue-foldable-mask.collapsed {
    opacity: 1;
    background: linear-gradient(180deg,rgba(255,255,255,0),#fff);
}
.vue-foldable .vue-foldable-mask:not(.collapsed) {
    opacity: 0;
}
.vue-foldable .vue-foldable-mask {
    position: absolute;
    bottom: 30px;
    height: 80px;
    width: 100%;
    background: transparent;
    pointer-events: none;
}
.vue-foldable.baidu-foldable {
    .vue-foldable-container {
        transition: max-height 0.3s;
    }
    .vue-foldable-mask {
        transition: opacity 3s;
        bottom: 34px;
    }
    .v-slide-group__wrapper {
        touch-action: unset!important;
    }
    .baidu-view-more {
        background-color: #fff;
        transition: background-color .1s ease-in-out;
        color: #3D8EBE;
        padding: 0 8px;
        font-size: 14px;
        border-radius: 4px;
        text-align: center;
        height: 34px;
        line-height: 32px;
        min-width: 72px;
        cursor: pointer;
        .baidu-view-more-icon {
        vertical-align: middle;
        }
        .baidu-view-more-text {
        vertical-align: middle;
        }
        &:not(.collapsed) {
        .baidu-view-more-icon {
            transform: scaleY(-1);
        }
        }
    }
}
/* purgecss end ignore */
</style>
