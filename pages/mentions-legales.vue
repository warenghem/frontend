<template>
<body>
    <div id="app">
        <div v-for="item in arr" :key="item.mainId">
            MainId : {{item.mainId}}
            <p v-for="subitem in item.subItems" :key="subitem.subId">
                SubItem Name : {{subitem.property.name}}
                <hr/>
            </p>
        </div>
    </div>
</body>
</template>

<script>
    export default {
        name: 'mentions-legales',
    data: { 
        arr: [
        {
            mainId: 8,
            subItems: [
            {
                subId: 1,
                property: {
                    subSubId: 1,
                    name: 'Name1'
                }
            }]
        },
        {
            mainId: 5,
            subItems: [{
                subId: 2,
                    property: {
                        subSubId: 3,
                        name: 'Name2'
                    }
                },
                {
                    subId: 3,
                    property: {
                        subSubId: 4,
                        name: 'Name3'
                    }
                }
            ]
        }]    
    },
        i18n: {
            messages: {
                en: {
                    title: "Politique de protection des données",
                    description: "Cette Politique de Protection des Données (la « Politique ») décrit comment Louis Vuitton Malletier SAS, société de droit français dont le siège social est situé 2 rue du Pont Neuf, 75001 Paris, France, et/ou ses sociétés affiliées (« LV ») traitent, en qualité de responsable de traitement, les données à caractère personnel de leurs clients et prospects (« Vous », « Votre », « Vos ») afin de Vous fournir la meilleur expérience client possible. Vous pouvez obtenir le nom et l’adresse de l’entité Louis Vuitton responsable du traitement dans votre juridiction en cliquant ici. Louis Vuitton Malletier et/ou Votre entité Louis Vuitton responsable localement ( « Nous », « Notre », ou « Nos ») collecte, conserve, traite, utilise et communique des données à caractère personnel vous concernant lorsque Vous utilisez les sites internet et applications mobiles LV, Nos produits connectés (si et lorsque celles-ci sont disponibles), ou lorsque Vous visitez Nos pages sur les réseaux sociaux, ou que Vous vous rendez dans l’un de Nos magasins Louis Vuitton dans Votre pays/région.",
                    tabs: [
                        {
                            menu: '1. QUELLES CATEGORIES DE DONNÉES COLLECTONS-NOUS ?',
                            description: 'LV collecte les catégories de données suivantes, pour les finalités décrites ci-après dans Notre Politique:Votre identité et vos coordonnées (tels que nom, adresse, numéro de téléphone ou adresse e-mail), lorsque vous décidez de les communiquer, par exemple pour créer un compte en ligne, participer à un événement, effectuer un achat ou remplir un formulaire',
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
                        menu: "Politique de protection des données",
                        sub: [{ title: 'SubItem Item 1-1'}, { title: 'SubItem Item 1-2'}],
                      },
                      {
                        menu: "Confitions générales de ventes",
                        sub: [{ title: 'SubItem Item 1-1'}, { title: 'SubItem Item 1-2'}],
                      },
                      {
                        menu: "Mentions Légales",
                        sub: [{ title: 'SubItem Item 1-1'}, { title: 'SubItem Item 1-2'}],
                      }
                    ],
                },
            }
        },
        head() {
            return {
            }
        }
    }

</script>
