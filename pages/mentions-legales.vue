<template>
  <div>
    <TabBar/>
    <v-tabs-items v-model="tab">
      <v-tab-item
          v-for="(tab,t_idx) in tabs"
          :key="t_idx"
      >
        <div>
          <div class="teradeli-medium">
            {{$t('title')}}
          </div>
          <div class="a">
            {{$t('description')}}
          </div>
          <v-tabs vertical>
            <v-tab>
              {{ tab.menu }}
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <p>
                    {{ tab.description }}
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
    export default {
        name: 'mentions-legales',
        data() {
            return {
                tabs: this.$t('tabs'),
            }
        },
        i18n: {
            messages: {
                en: {
                    title: "Politique de protection des données",
                    description: "Cette Politique de Protection des Données (la « Politique ») décrit comment Louis Vuitton Malletier SAS, société de droit français dont le siège social est situé 2 rue du Pont Neuf, 75001 Paris, France, et/ou ses sociétés affiliées (« LV ») traitent, en qualité de responsable de traitement, les données à caractère personnel de leurs clients et prospects (« Vous », « Votre », « Vos ») afin de Vous fournir la meilleur expérience client possible. Vous pouvez obtenir le nom et l’adresse de l’entité Louis Vuitton responsable du traitement dans votre juridiction en cliquant ici. Louis Vuitton Malletier et/ou Votre entité Louis Vuitton responsable localement ( « Nous », « Notre », ou « Nos ») collecte, conserve, traite, utilise et communique des données à caractère personnel vous concernant lorsque Vous utilisez les sites internet et applications mobiles LV, Nos produits connectés (si et lorsque celles-ci sont disponibles), ou lorsque Vous visitez Nos pages sur les réseaux sociaux, ou que Vous vous rendez dans l’un de Nos magasins Louis Vuitton dans Votre pays/région.",
                    tabs: [
                        {
                            menu: '1. QUELLES CATEGORIES DE DONNÉES COLLECTONS-NOUS ?',
                            description: 'LV collecte les catégories de données suivantes, pour les finalités décrites ci-après dans Notre Politique:Votre identité et vos coordonnées (tels que nom, adresse, numéro de téléphone ou adresse e-mail), lorsque vous décidez de les communiquer, par exemple pour créer un compte en ligne, participer à un événement, effectuer un achat ou remplir un formulaire ',
                        },
                        {
                            menu: '2. À QUELLES FINS UTILISONS-NOUS VOS DONNÉES ?',
                            description: 'Vos données sont utilisées pour les finalités décrites ci-après, que nous détaillerons lors de la collecte: mieux comprendre vos intérêts et mieux comprendre comment vous utilisez Nos produits et services : Nous utilisons vos données pour améliorer Notre site Web, Nos applications et Nos produits. Nous utiliser également vos données pour vous personnaliser votre expérience avec Louis Vuitton et adapter Nos activités marketing à vos besoins et préférences, car il est dans Notre intérêt légitime de mieux vous servir et répondre à vos attentes ;',
                        },
                    ]
                },
                fr: {
                    title: "Mentions Légales",
                    description: "Cette Politique de Protection des Données (la « Politique ») décrit comment Louis Vuitton Malletier SAS, société de droit français dont le siège social est situé 2 rue du Pont Neuf, 75001 Paris, France, et/ou ses sociétés affiliées (« LV ») traitent, en qualité de responsable de traitement, les données à caractère personnel de leurs clients et prospects (« Vous », « Votre », « Vos ») afin de Vous fournir la meilleur expérience client possible. Vous pouvez obtenir le nom et l’adresse de l’entité Louis Vuitton responsable du traitement dans votre juridiction en cliquant ici. Louis Vuitton Malletier et/ou Votre entité Louis Vuitton responsable localement ( « Nous », « Notre », ou « Nos ») collecte, conserve, traite, utilise et communique des données à caractère personnel vous concernant lorsque Vous utilisez les sites internet et applications mobiles LV, Nos produits connectés (si et lorsque celles-ci sont disponibles), ou lorsque Vous visitez Nos pages sur les réseaux sociaux, ou que Vous vous rendez dans l’un de Nos magasins Louis Vuitton dans Votre pays/région.",
                    tabs: [
                        {
                            menu: 'ARTICLE PRÉLIMINAIRE',
                            description: 'La société des magasins Louis Vuitton - France (ci-après dénommée " Louis Vuitton") commercialise les articles Louis Vuitton en France. Soucieuse de toujours mieux répondre aux attentes de ses clients, Louis Vuitton a souhaité mettre en place, parallèlement au réseau de magasins',
                        },
                        {
                            menu: 'ARTICLE 1 : CHAMP APPLICATION',
                            description: 'Ces Conditions Générales de Vente sont applicables à toutes les ventes',
                        },
                    ]
                },
            }
        },
        head() {
            return {
            }
        }
    }

</script>
