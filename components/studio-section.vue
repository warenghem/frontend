<template>
    <section class="team-section pvw">
        <h2 class="page-title px-3 primary--text">{{$t('title')}}</h2>
        <div class="pb-5 py-2 px-3 px-md-10 text-center secondary--text"> {{$t('subtitle')}}</div>
        <v-row no-gutters class="pa-0">
            <v-col cols="12" v-for="(profile,idx) in profiles" :key="'profile_'+idx">
                <v-card align=center elevation="0" class="item-inner px-0 px-sm-5 py-3 py-sm-3 d-flex">
                    <div class="profile-holder mb-0 pa-0 col-4 col-sm-3">
                        <!--<ik-image
                            :path="profile.img"
                            :lqip="{active:true, quality: 40, blur: 5}"
                            :transformation="[{quality: 65, width:400, dpr:2, radius:'max'}]"
                            loading="lazy"
                            width="400"
                        />-->
                        <img
                            :data-srcset="profile.img" 
                            :src="profile.imglqip" 
                            class="lazyload profil" 
                        />
                    </div>
                    <div class="content-holder text-left pl-4 pa-0 col-8 col-sm-9">
                        <div class="titlesmall teradeli-medium primary--text">{{profile.name}}</div>
                        <div class="subtitlesmall secondary--text">
                            {{$t('profiles').find(pro=>profile.key===pro.key)?$t('profiles').find(pro=>profile.key===pro.key).role:''}}
                        </div>
                        <div class="item-details d-none">
                            {{$t('profiles').find(pro=>profile.key===pro.key)?$t('profiles').find(pro=>profile.key===pro.key).biography:''}}
                        </div>
                        <v-card-actions class="p-0">
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = true"
                            class="d-none pa-0"
                        >
                            Learn More
                        </v-btn>
                        </v-card-actions>
                    </div>
                    <v-expand-transition>
                    <v-card
                        v-if="reveal"
                        class="transition-fast-in-fast-out v-card--reveal"
                        style="height: 100%;"
                    >
                        <v-card-text class="pb-0">
                            <div class="item-details">
                                {{$t('profiles').find(pro=>profile.key===pro.key)?$t('profiles').find(pro=>profile.key===pro.key).biography:''}}
                            </div>
                        </v-card-text>
                        <v-card-actions class="pt-0">
                        <v-btn
                            text
                            color="teal accent-4"
                            @click="reveal = false"
                        >
                            Close
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        i18n: {
            messages: {
                en: {
                    title: "Warenghem Studio",
                    subtitle:"Our offices are located in Paris and in the Var, our factories are located all over France. Our team is growing, write to us ...",
                    profiles: [
                        {
                            key: 1,
                            role: 'Founder & Artistic Director',
                            biography: 'Convinced by a world where nature would be omnipresent around us, I decided to ' +
                                'use my knowledge acquired in the business world for causes that are close to ' +
                                "our hearts. Let's create together ecologically perfect and intuitive French objects."
                        },
                        {
                            key: 2,
                            role: 'Designer',
                            biography: "After studying style and model making at Esmod Paris, I learned my skills in the creative " +
                                "studio of the Maison Courrèges. I create products that are both functional and aesthetic," +
                                " combining architectural references, graphic design, and fashion, convinced that these" +
                                " different types are complementary.",
                        },
                        {
                            key: 3,
                            role: 'Designer',
                            biography: "Former student at Esmod Paris, I started my career as a stylist in various houses, " +
                                "and then by launching my leather goods brand. Today, I work through different worlds that " +
                                "combine design and photography. I love taking a global look at a creation, and finding a " +
                                "strong identity for it that will set it apart from others.",
                        },
                        {
                            key: 4,
                            role: "Research & Development / Materials & Technologies",
                            biography:
                                "After a few years working as a space engineer at Airbus, I took over a" +
                                "Master in Ecosystem and Biodiversity Management at the University of Montreal. I'm looking for " +
                                'the most ecological plant materials and sustainable technologies that could help us' +
                                " to accompany."
                        }
                    ],
                },
                fr: {
                    title: "Warenghem Studio",
                    subtitle:"Nos bureaux sont situés à Paris et dans le Var, nos usines sont situées un peu partout en France. Notre équipe s'agrandie, écrivez nous...",
                    profiles: [
                        {
                            key: 1,
                            role: 'Fondateur & Directeur Artistique',
                            biography: 'Convaincu par un monde ou la nature serait omniprésente autour de nous, j’ai décidé ' +
                                'd’utiliser mes connaissances acquises dans le monde de l’entreprise pour des causes qui nous ' +
                                'tiennent à cœur. Créons ensemble des objets français écologiquement parfaits et intuitifs.'
                        },
                        {
                            key: 2,
                            role: 'Designer',
                            biography: 'Après avoir étudié le style et le modélisme à Esmod Paris, j’ai fait mes armes au sein du ' +
                                'studio créatif de la maison Courrèges. Je créé des produits à la fois fonctionnels et' +
                                ' esthétiques, mêlant références architecturales, design graphique, et mode, convaincu que ces ' +
                                'différentes typologies sont complémentaires.',
                        },
                        {
                            key: 3,
                            role: 'Designer',
                            biography: 'Ancienne étudiante à Esmod Paris, jai commencé ma carrière en tant que styliste au sein ' +
                                'de diverses maisons, et dans un second temps en lancant ma marque de maroquinerie. ' +
                                'Aujourd’hui, j’évolue à travers différents univers qui mêlent design et photographie. ' +
                                'J’adore porter un regard global sur une création, et lui trouver une identité forte ' +
                                'qui la distinguera des autres.',
                        },
                        {
                            key: 4,
                            role: "Recherche & Developpement / Matières & Technologies",
                            biography: 'Après quelques années à travailler comme ingénieur spatial chez Airbus, j’ai repris un ' +
                                'Master Gestion de l’écosystème et de la biodiversité à l’Université de Montréal. Je recherche ' +
                                'les matières végétales les plus écologiques et les technologies durables qui pourraient nous' +
                                ' accompagner.'
                        }
                    ],
                }
            }
        },
        data() {
            return {
                reveal: false,
                profiles: [
                    {
                        key: 1,
                        name: 'Kevin Brosseau',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-1,r-max/kevin_zsPDDH5iKn2R.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2,r-max/kevin_zsPDDH5iKn2R.png 2x",
                        imglqip: "https://ik.imagekit.io/g1noocuou2/tr:q-15,w-200,bl-10,r-max/kevin_zsPDDH5iKn2R.png"
                    },
                    {
                        key: 2,
                        name: 'Alexandre marty',
                    }, {
                        key: 3,
                        name: 'Julie maurence',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-1,r-max/julie_e3H-plJ5LNi5.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2,r-max/julie_e3H-plJ5LNi5.png 2x",
                        imglqip: "https://ik.imagekit.io/g1noocuou2/tr:q-15,w-200,bl-10,r-max/julie_e3H-plJ5LNi5.png"
                    },
                    {
                        key: 4,
                        name: 'Quentin Brosseau',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-1,r-max/quentin_jvUVQy_Hk0VvA.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-65,w-200,dpr-2,r-max/quentin_jvUVQy_Hk0VvA.png 2x",
                        imglqip: "https://ik.imagekit.io/g1noocuou2/tr:q-15,w-200,bl-10,r-max/quentin_jvUVQy_Hk0VvA.png"
                    }
                ]
            }
        }
    }

</script>
<style scoped lang="scss">
    .team-section {
        .item-inner {
            padding: 30px;
            height: 100%;
            align-items: center;

            .profile-holder {
                text-align: center;
            }
            img {
                max-width: 160px;
                width: 100%;
            }
            .item-details {
                margin-bottom: 15px;
                color: #86868b;
                text-align: left;
                font-size: 13px;
                line-height: 1.47059;
                font-weight: 300;
                letter-spacing: -.022em;
                font-family: 'teradeli-light', sans-serif;
            }
        }
    }
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>