<template>
    <v-bottom-sheet v-model="sheet">
    <template v-slot:activator="{ on, attrs }">
        <v-progress-circular
        indeterminate
        color="primary"
        :size="20"
        v-show="$store.state.product.loading"
        ></v-progress-circular>
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
            :ripple="false"
            class="nohover item priceHide"
            v-show="!$store.state.product.loading"
        >
            <img :src="$store.state.langs.currentLang.img"
                width="24"
                alt="lang flag"
                v-if="$store.state.langs.currentLang.img"
                style="margin-top:2px"
            />
            <span style="font-size: 1.5em;" class="px-2">-</span>
            <div style="font-size: 1.5em;">
                {{$store.state.langs.currentLang.sign}}
            </div>
        </v-btn>

    </template>
    <slot name="langSwitcher">
        <div class="bg-white">
            <div style="height: 60px" class="d-flex justify-space-between align-center border-bottom-2">
                <div class="text-center page-title pl-3">Choose your country/region</div>
                <v-btn
                    text
                    color="black"
                    @click="sheet = false"
                    style="font-size: 26px"
                    class="px-0 h-100 border-left-2 rounded-0"
                >
                    <v-icon>{{ svgPath }}</v-icon>
                </v-btn>
            </div>
                <v-row class="pvw">
                    <v-col
                    cols="12"
                    sm="3"
                    v-for="(flag,idx) in $store.state.langs.items"
                    :key="'flag_list_'+idx"
                    style="min-height: 30px" class="langChanger pa-0"
                    :class="{'active':$store.state.langs.currentLang.iso===flag.iso}"
                    >
                        <v-card 
                            class="bgcard"
                            @click="sheet = false"
                            ripple
                        >
                            <v-card-title class="cursor-pointer" @click="changeLang(flag)">
                                <!--                    <NuxtLink :to="{path:flag.path}">-->
                                <!--                      <img :src="flag.img"-->
                                <!--                           width="24"-->
                                <!--                           alt="flag"-->
                                <!--                      />-->
                                <!--                    </NuxtLink>-->
                                <img :src="flag.img"
                                    width="24"
                                    class="ml-3"
                                    alt="lang flag"
                                    v-if="$store.state.langs.currentLang.img"
                                />
                                {{flag.full}}
                                <span class="px-2">-</span>
                                {{flag.sign}}
                            </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </slot>
    </v-bottom-sheet>
</template>

<script>
    import { mdiClose } from '@mdi/js';
    export default {
        data() {
            return {
                svgPath: mdiClose,
            };
        },
        props: {
            type: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            changeLang(flag){
                this.$store.dispatch('langs/setLang',flag);
                if( this.$route.params.slug){
                    this.$router.push({path:flag.path});
                }else{
                    this.$router.push({path:this.switchLocalePath(flag.path)});
                }

            }

        }
    }
</script>

<style scoped lang="scss">

</style>