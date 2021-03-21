<template>
    <section class="team-section pt-0">
        <h2 class="home-title px-0 pb-3">{{$t('title2')}}</h2>
        <h3 class="text-center home-subtitle px-0 pb-10">{{$t('subtitle2')}}</h3>
        <v-row no-gutters class="pa-0 pt-3">
            <v-col cols="12" lg="4" md="6" v-for="(profile,idx) in profiles" :key="'profile_'+idx">
                <v-card align=center class="item-inner pa-sm-5 pa-0 pb-10">
                    <div class="profile-holder mb-0 pa-0 skeletton wa-smart-picture rounded-xl large-ratio elevation-14">
                    <v-card-actions style="z-index:2;bottom:0;right:0" class="position-absolute">
                        <v-spacer></v-spacer>
                        <v-btn
                            icon
                            dark
                            target="_blank"
                            class="mr-2 pt-3 d-none"
                             v-for="(socialmedia,idx) in profile.socialmedias" :key="'socialmedia'+idx"
                            :href="socialmedia.link"
                        >
                            <v-icon medium>{{ socialmedia.icon }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                        <img
                            :data-srcset="profile.img" 
                            :data-lowsrc="profile.imglqip" 
                            class="lazyload profil mediabox-img" 
                        />
                    </div>
                    <div class="text-left pt-2">
                        <div class="smalltitle teradeli-medium primary--text pt-3">{{profile.name}}</div>
                        <div class="smalltitle teradeli-medium lightbugattiblue--text pt-2">
                            {{$t('profiles').find(pro=>profile.key===pro.key)?$t('profiles').find(pro=>profile.key===pro.key).role:''}}
                        </div>
                        <div class="item-details pt-3">
                            {{$t('profiles').find(pro=>profile.key===pro.key)?$t('profiles').find(pro=>profile.key===pro.key).biography:''}}
                        </div>
                        <div style="margin-left:-7px">
                        <v-btn
                            icon
                            target="_blank"
                            class="mr-2 pt-3"
                             v-for="(socialmedia,idx) in profile.socialmedias" :key="'socialmedia'+idx"
                            :href="socialmedia.link"
                        >
                            <v-icon medium>{{ socialmedia.icon }}</v-icon>
                        </v-btn>
                        </div>
                    </div>
                    <!--<v-expand-transition>
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
                    </v-expand-transition>-->
                </v-card>
            </v-col>
        </v-row>
        <div style="max-width:1000px" class="pb-3 py-2 text-center secondary--text ma-auto" v-html="$t('text2')"></div>
    </section>
</template>

<script>
    import { mdiInstagram, mdiLinkedin,mdiTwitter } from '@mdi/js'
    export default {
        data() {
            return {
                svgPath2: mdiLinkedin,
                svgPath3: mdiTwitter,
                reveal: false,
                profiles: [
                    {
                        key: 1,
                        name: 'Kevin Brosseau',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-100,ar-4-3,w-400,dpr-1/kevin.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-100,ar-4-3,w-400,dpr-2/kevin.png 2x",
                        socialmedias: [
                            {
                                name: "Instagram",
                                link: "https://www.instagram.com/kbrosseauwarenghem/",
                                icon: mdiInstagram
                            },
                            {
                                name: "Twitter",
                                link: "https://twitter.com/theriseofheroes/",
                                icon: mdiTwitter
                            },
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/kevin-brosseau-29a41719/",
                                icon: mdiLinkedin
                            }
                        ]
                    },
                    {
                        key: 2,
                        name: 'Alexandre marty',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-100,w-400,dpr-1//alexandre.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-100,w-400,dpr-2//alexandre.png 2x",
                        socialmedias: [
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/alexandre-marty-39a67786/",
                                icon: mdiLinkedin
                            }
                        ]
                    }, {
                        key: 3,
                        name: 'Julie maurence',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-100,ar-1-1,w-400,dpr-1/julie.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-100,ar-1-1,w-400,dpr-2/julie.png 2x",
                        socialmedias: [
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/juliemaurence/",
                                icon: mdiLinkedin
                            }
                        ]
                    },
                    {
                        key: 4,
                        name: 'Quentin Brosseau',
                        img: "https://ik.imagekit.io/g1noocuou2/tr:q-100,w-400,dpr-1/quentin_jvUVQy_Hk0VvA.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-100,w-400,dpr-2/quentin_jvUVQy_Hk0VvA.png 2x",
                        socialmedias: [
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/quentin-b-40533293/",
                                icon: mdiLinkedin
                            }
                        ]
                    },
                    {
                        key: 5,
                        name: 'Karine Palazon',
                        img: "",
                        socialmedias: [
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/karina-palazon-163844204/",
                                icon: mdiLinkedin
                            }
                        ]
                    },
                    {
                        key: 6,
                        name: 'Vincent Kreis',
                        img: "",
                        socialmedias: [
                            {
                                name: "instagram",
                                link: "https://www.instagram.com/vincent_kreis/",
                                icon: mdiInstagram
                            },
                            {
                                name: "linkedin",
                                link: "https://www.linkedin.com/in/vincent-kreis-3163a994/",
                                icon: mdiLinkedin
                            }
                        ]
                    }
                ]
            }
        },
        i18n: {
            messages: {
                en: {
                    title2: "Warenghem Studios",
                    subtitle2:"Men and women",
                    text2:"Our offices are located in Paris and in the Var, our factories are located all over France. If you have a particular talent, or skills that could help us, do not hesitate to contact us so that we discuss it together.",
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
                        },
                        {
                            key: 5,
                            role: "Head of Operations / Quality Control",
                            biography: ""
                        },
                        {
                            key: 6,
                            role: "Head of Scenography & photography",
                            biography: ""
                        }
                    ],
                },
                fr: {
                    title2: "Warenghem Studios",
                    subtitle2:"Des hommes et des femmes",
                    text2:"Nos bureaux sont situés à Paris et dans le Var, nos usines sont situées un peu partout en France. <div>Si vous avez un talent particulier, ou des compétences qui pourraient nous aider. Et vous êtes : <br><br>- conscient(e) des conséquences sociales et environnementales de la mode et du design, <br>- attaché(e) au sens culturel, social et écologique d’une consommation plus locale,<br>- attaché(e) aux savoir-faire, aux imaginaires et aux personnes qui se cachent derrière les produits,<br>- polyvalent(e), passionné(e), décidé(e) à participer à une belle aventure responsable et engagée, dans un environnement inclusif et bienveillant.<br><br>N'hésitez pas à nous contacter afin que nous en discutions ensemble.<br><br></div>",
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
                            biography: "Ancienne étudiante à Esmod Paris, j'ai commencé ma carrière en tant que styliste au sein de diverses maisons, et dans un second temps en lancant ma marque de maroquinerie. Aujourd’hui, j’évolue à travers différents univers qui mêlent design et photographie. J’adore porter un regard global sur une création, et lui trouver une identité forte qui la distinguera des autres.",
                        },
                        {
                            key: 4,
                            role: "Recherche & Developpement / Matières & Technologies",
                            biography: 'Après quelques années à travailler comme ingénieur spatial chez Airbus, j’ai repris un ' +
                                'Master Gestion de l’écosystème et de la biodiversité à l’Université de Montréal. Je recherche ' +
                                'les matières végétales les plus écologiques et les technologies durables qui pourraient nous' +
                                ' accompagner.'
                        },
                        {
                            key: 5,
                            role: "Responsable des opérations / Contrôle qualité",
                            biography: ""
                        },
                        {
                            key: 6,
                            role: "Responsable scénographie & photographie",
                            biography: ""
                        }
                    ],
                }
            }
        }
    }
/*
<i18n locale="fr" lang="json5">
{
  "fr": {
        "title": "Warenghem Studios",
        "subtitle":"Nos bureaux sont situés à Paris et dans le Var, nos usines sont situées un peu partout en France. Notre équipe s'agrandie, écrivez nous...",
        "profiles": [
            {
                "key": 1,
                "role": "Fondateur & Directeur Artistique",
                "biography": "Convaincu par un monde ou la nature serait omniprésente autour de nous, j’ai décidé d’utiliser mes connaissances acquises dans le monde de l’entreprise pour des causes qui nous tiennent à cœur. Créons ensemble des objets français écologiquement parfaits et intuitifs."
            },
            {
                "key": 2,
                "role": "Designer",
                "biography": "Après avoir étudié le style et le modélisme à Esmod Paris, j’ai fait mes armes au sein du studio créatif de la maison Courrèges. Je créé des produits à la fois fonctionnels et esthétiques, mêlant références architecturales, design graphique, et mode, convaincu que ces différentes typologies sont complémentaires.",
            },
            {
                "key": 3,
                "role": "Designer",
                "biography": "Ancienne étudiante à Esmod Paris, jai commencé ma carrière en tant que styliste au sein de diverses maisons, et dans un second temps en lancant ma marque de maroquinerie. Aujourd’hui, j’évolue à travers différents univers qui mêlent design et photographie. J’adore porter un regard global sur une création, et lui trouver une identité forte qui la distinguera des autres.",
            },
            {
                "key": 4,
                "role": "Recherche & Developpement / Matières & Technologies",
                "biography": "Après quelques années à travailler comme ingénieur spatial chez Airbus, j’ai repris un Master Gestion de l’écosystème et de la biodiversité à l’Université de Montréal. Je recherche les matières végétales les plus écologiques et les technologies durables qui pourraient nous accompagner."
            }
        ],
    }
}
</i18n>
*/
</script>
<style scoped lang="scss">
    .team-section {
        .item-inner {
            height: 100%;
            align-items: center;

            .profile-holder {
                text-align: center;
                width: 100%;
            }
            img {
                width: 100%;
            }
            .item-details {
                color: #86868b;
                text-align: left;
                line-height: 1.47059;
                font-weight: 300;
                letter-spacing: -.03em;
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