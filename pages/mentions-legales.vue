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
                            menu: 'Politique de protection des données',
                            description: 'Description Politique de protection des données',
                        },
                        {
                            menu: 'Politique de protection des données',
                            description: 'Description Politique de protection des données',
                        },
                    ]
                },
                fr: {
                    title: "Mentions Légales",
                    description: "Cette Politique de Protection des Données (la « Politique ») décrit comment Louis Vuitton Malletier SAS, société de droit français dont le siège social est situé 2 rue du Pont Neuf, 75001 Paris, France, et/ou ses sociétés affiliées (« LV ») traitent, en qualité de responsable de traitement, les données à caractère personnel de leurs clients et prospects (« Vous », « Votre », « Vos ») afin de Vous fournir la meilleur expérience client possible. Vous pouvez obtenir le nom et l’adresse de l’entité Louis Vuitton responsable du traitement dans votre juridiction en cliquant ici. Louis Vuitton Malletier et/ou Votre entité Louis Vuitton responsable localement ( « Nous », « Notre », ou « Nos ») collecte, conserve, traite, utilise et communique des données à caractère personnel vous concernant lorsque Vous utilisez les sites internet et applications mobiles LV, Nos produits connectés (si et lorsque celles-ci sont disponibles), ou lorsque Vous visitez Nos pages sur les réseaux sociaux, ou que Vous vous rendez dans l’un de Nos magasins Louis Vuitton dans Votre pays/région.",
                    tabs: [
                        {
                            menu: 'Politique de protection des données',
                            description: 'Description Politique de protection des données',
                        },
                        {
                            menu: 'Politique de protection des données',
                            description: 'Description Politique de protection des données',
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
