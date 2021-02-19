<template>
  <div class="bgcard">
    <div class="d-none d-md-block">
      <v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
        <Backbutton/>
        <div class="px-5 d-flex border-bottom-2 bg-white">
          <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
            {{$t('title')}}
          </div>
        </div>
        <v-spacer></v-spacer>
        <v-tabs
            v-model="tab"
            right
			center-active
			show-arrows
			:prev-icon="svgPath2"
			:next-icon="svgPath1"
            class="border-bottom-2"
          >
              <v-tabs-slider color="#0081a7"></v-tabs-slider>
              <v-tab 
                  v-for="(tab,t_idx) in tabs"
                  :key="t_idx"
                  :href="tab.href"
                  class="border-left-2"
				  :id="tab.id"
              >
                {{ tab.menu }}
              </v-tab>
          </v-tabs>
      </v-toolbar-bar>
      <v-tabs-items v-model="tab">
        <v-tab-item
          :key="1" value="questions"
        >
          <div>
            <template>
              <v-card>
				<v-row class="pa-0">
					<v-col  class="bgcard pvw" cols="8">
					<div class="page-title teradeli-medium pb-10">
						{{$t('questions.subtitle')}}
					</div>
						<v-expansion-panels focusable inset flat>
							<v-expansion-panel
								v-for="(tab,m_idx) in $t('tab.sections1')"
								:key="'tab_'+m_idx"
							>
								<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
								{{tab.title}}
								</v-expansion-panel-header>
								<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-col>
					<v-col cols="4" class="pvw">
						<CustomerServices/>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="2" value="material"
        >
          <div>
            <template>
              <v-card>
				<v-row class="pa-0">
					<v-col  class="bgcard pvw" cols="8">
					<div class="page-title teradeli-medium pb-10">
						{{$t('material.subtitle')}}
					</div>
						<v-expansion-panels focusable inset flat>
							<v-expansion-panel
								v-for="(tab,m_idx) in $t('tab.sections2')"
								:key="'tab_'+m_idx"
							>
								<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
								{{tab.title}}
								</v-expansion-panel-header>
								<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-col>
					<v-col cols="4" class="pvw">
						<CustomerServices/>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="3" value="shipping"
        >
          <div>
            <template>
              <v-card>
				<v-row class="pa-0">
					<v-col  class="bgcard pvw" cols="8">
					<div class="page-title teradeli-medium pb-10">
						{{$t('shipping.subtitle')}}
					</div>
						<v-expansion-panels focusable inset flat>
							<v-expansion-panel
								v-for="(tab,m_idx) in $t('tab.sections3')"
								:key="'tab_'+m_idx"
							>
								<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
								{{tab.title}}
								</v-expansion-panel-header>
								<v-expansion-panel-content eager class="ma-10" style="font-size:0.9375rem" v-html="tab.text">
								</v-expansion-panel-content>
							</v-expansion-panel>
						</v-expansion-panels>
					</v-col>
					<v-col cols="4" class="pvw">
						<CustomerServices/>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
	  </v-tabs-items>
    </div>
    <div class="d-block d-md-none">
      <v-toolbar-bar class="menubar d-flex pa-0 filter-bar bg-white">
        <Backbutton/>
        <div class="pl-5 d-flex border-bottom-2">
          <div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
            {{$t('title')}}
          </div>
        </div>
      </v-toolbar-bar>
      <v-expansion-panels flat class="pvw">
        <v-expansion-panel>
          <v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
			<div class="d-block">
				<div class="teradeli-medium pb-1">
					{{$t('questions.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('questions.subtitle')}}
				</div>
			</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <v-expansion-panels flat>
              <v-expansion-panel
                v-for="(tab,m_idx) in $t('tab.sections1')"
                :key="'tab_'+m_idx"
              >
                <v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
                  {{tab.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
			<div class="d-block">
				<div class="teradeli-medium pb-1">
					{{$t('material.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('material.subtitle')}}
				</div>
			</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <v-expansion-panels flat>
              <v-expansion-panel
                v-for="(tab,m_idx) in $t('tab.sections2')"
                :key="'tab_'+m_idx"
              >
                <v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
                  {{tab.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header :expand-icon="svgPath3">
			<div class="d-block">
				<div class="teradeli-medium pb-1">
					{{$t('shipping.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('shipping.subtitle')}}
				</div>
			</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <v-expansion-panels flat>
              <v-expansion-panel
                v-for="(tab,m_idx) in $t('tab.sections3')"
                :key="'tab_'+m_idx"
              >
                <v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath4">
                  {{tab.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content eager class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text">
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
	  <div class="pvw">
		  <CustomerServices/>
	  </div>
    </div>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown, mdiPlus } from '@mdi/js'
    export default {
        name: 'legale',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
				svgPath4: mdiPlus,
                tab: "subscribe"
            }
        },
		computed: {
		tabs() {
				return [
				{ tabs: this.$t('tabs'), },
				];
			}
		},
		computed: {
			tabs() {
					return [
						{ 
							href: "#questions",
							id: "questions",
							menu: this.$i18n.t('questions.menu'),
							subtitle: this.$i18n.t('questions.subtitle'),
						},
						{ 
							href: "#material",
							id: "material",
							menu: this.$i18n.t('material.menu'),
							subtitle: this.$i18n.t('material.subtitle'),
						},
						{ 
							href: "#shipping",
							id: "shipping",
							menu: this.$i18n.t('shipping.menu'),
							subtitle: this.$i18n.t('shipping.subtitle'),
						}
					];
				}
		},
        head() {
            return {
            }
        }
    }

</script>

<i18n>
{
   "fr":{
      "customers":{
         "menu":"",
         "subtitle":""
      },
      "material":{
         "menu":"Matières et entretien",
         "subtitle":"Découvrez nos matières naturelles et préserver la beauté de votre article"
      },
      "questions":{
         "menu":"Produits",
         "subtitle":"En savoir plus sur nous et nos produits"
      },
      "shipping":{
         "menu":"Livraison, retour, commande",
         "subtitle":"Votre commande en toute simplicité"
      },
      "tab":{
         "menu":"",
         "sections1":[
            {
               "text":"Oui, tous nos produits sont entièrement fabriqués en France. C'est notre politique et nos valeurs.<br><br>\nPour avoir plus de visibilité sur la tracabilité francaise, vous pouvez utiliser l'application ORIGIN qui vous donnera tous les détails de nos produits.<br><br>",
               "title":"Les produits Warenghem sont-ils entierement fabriqués en France ?"
            },
            {
               "text":"Les sacs et la maroquinerie en cuir de vin Dionysos sont confectionnés aux Ateliers Saint Germain vers Angers, spécialisés en haute maroquinerie.<br>\nNous les avons sélectionné car ils travaillent également avec les plus grandes maisons en France, afin de fournir une finition haut de gamme.<br><br>\n\nLes boucles de ceinture sont réalisées sur mesure chez Les Ateliers de Mars proche de Romans sur Isère et sont en étain naturel certifié, recyclable à l'infini. Pourquoi nous l'avons sélectionné ? Pour son expérience et ses réalisations pour de grands noms.<br><br>\n\nLes souliers sont confectionnés au sein de la capitale francaise de la chaussure à Romans sur Isère chez In-Soft. Notre projet a été selectionné par le programme de développement économique local et l'association \"Romans Cuir\" pour la création des bottines Dionysos.<br><br>\n\nDans ces différents ateliers, le choix de matériaux naturels nobles et végétaux, l’œuvre d’artisans expérimentés et le soin extrême apporté à chacune des phases du processus de création de nos produits renforcent notre tradition de l’excellence et du raffinement.",
               "title":"Où se situent vos ateliers de fabrication ?"
            },
            {
               "text":"Oui, tous nos produits sont certifiés par l'organisme végane PETA, et ne contiennent donc aucune matière animale. <br><br>\n\nNos lins sont certifiés GOTS et OEKO-TEX®, ce qui signifie qu’ils sont exempts de produits toxiques pour le corps et l’environnement. GOTS est la certification \"agriculture biologique\" et OEKO-TEX® est le premier label visant à garantir les qualités humano-écologiques des textiles.<br><br>\n\nNos lin sont cultivés et tissés en France.<br><br>\n\nNos produits sont en audit pour être certifié origine France garantie. Mais le processus et malheuresement long et couteux. Nous vous tiendrons au courant de l'anancée de ce projet. En attendant, utilisez l'application ORIGIN qui trace l'intégralité de la fabrication depuis la matière première...",
               "title":"Est-ce que Warenghem possède des certifications véganes et écologiques ?"
            },
            {
               "text":"Warenghem ne propose pas de réductions ni de codes promo. Notre concept est de supprimer tous les intermédiaires couteux afin de vous proposer la meilleure qualité au meilleur prix. La plupart des acteurs de la mode gonflent artificiellement les prix afin de financer les opérations de promotions ponctuelles ou continues.",
               "title":"Est-ce que Warenghem proposent des codes promo ou des remises ?"
            },
            {
               "text":"Cliquez sur le lien Matières et Entretien des fiches produits pour obtenir l’ensemble des recommandations d’entretien.",
               "title":"Comment entretenir les produits Warenghem ?"
            },
            {
               "text":"Vous pourrez découvrir toutes les informations complémentaires sur nos collections sur notre site internet www.warenghem.com. Rendez-vous dans les pages produits pour découvrir l’ensemble des informations.<br>",
               "title":"Où trouver des informations complémentaires sur les produits Warenghem ?"
            },
            {
               "text":"En vous inscrivant à la Newsletter Warenghem, vous serez parmi les premiers à être informés des nouveautés produits, des événements et des actualités de la Maison.<br><br>\nVous pouvez également cliquer sur la section News afin de découvrir l’actualité de Warenghem.",
               "title":"Comment être informé(e) des actualités Warenghem ?"
            }
         ],
         "sections2":[
            {
               "text":"<div><p><strong>Contrairement au cuir animal, il ne demande pas d'entretien.</strong></p><p>Mais pour préserver au fil des ans la beauté de cet article, nous vous recommandons :</p><ul><li><p>De veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les finitions en cuir.</p></li><li><p>De protéger votre article de l’humidité excessive et de le maintenir à l’abri des sources directes de chaleur.</p></li><li><p>De nettoyer délicatement la toile avec un chiffon doux imbibé d’eau légèrement savonneuse.</p></li></ul><p>Pour toute question relative à votre article, veuillez prendre contact avec nous à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.</p></div>",
               "title":"Comment prendre soin des articles en cuir de vin Dionysos ?"
            },
            {
               "text":"Aucun entretien n'est requis pour cette matière.<br><br>\n\nNous avons utilisé un grammage élevé utilisé pour l'ameublement, ce qui lui confère plus de résistance.<br><br>\n\nDe plus, le lin utilisé est bio, cultivé, et tissé en France.<br><br>\n\nContrairement aux autres marques, Warenghem utilise une doublure en lin naturel (et non en polyester). Son aspect brut contraste avec l'allure moderne des produits. Le lin ne contient aucun produit chimique.",
               "title":"Comment s'entretient la doublure en lin ? "
            },
            {
               "text":"<div><p>Notre cuir de vin Dionysos® est produit grâce à un procédé innovant qui transforme les fibres du raisin en une matière écologique. </strong></p><p><strong>Il a été longuement testé afin qu'il ait les mêmes caractéristiques qu'un cuir traditionnel :</strong></p><ul><li><p><strong>Mécaniques : forte résistance et imperméabilité totale</strong></p></li><li><p><strong>Esthétiques : grain fin et harmonieux</strong></p></li><li><p><strong>Sensorielles : touché doux et agréable, sans odeur</p></li></ul></div>",
               "title":"Le cuir de vin Dionysos est-il résistant et durable ?"
            }
         ],
         "sections3":[
            {
               "subtitle":"",
               "text":"La livraison en France métropolitaine est offerte à partir de 100€ d'achat. En-dessous de ce montant, la livraison est de 5,90€ via Colissimo et de 4,50€ via Mondial Relay.<br><br>\n\nNous proposons également une livraison express via Chronopost. La livraison sera alors de 10€ quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.<br><br>\n\nPour les pays de l’Union européenne et les DOM-TOM, la livraison est de 10€. Le délai de livraison est de 4 à 6 jours ouvrés après expédition.",
               "title":"Combien coûte la livraison ?"
            },
            {
               "text":"Vos commandes sont préparées et expédiées dans les 24 heures après votre commande (hors week-end et jours fériés). <br><br>\n\nVous serez livrés en 2-3 jours ouvrés après expédition de votre commande pour une livraison en France via Colissimo, en 3 à 5 jours pour une livraison en points relais, et en 24h à 48h pour une livraison express via Chronopost.",
               "title":"Quels sont les délais de livraison ?"
            },
            {
               "text":"Quels modes de livraison proposez-vous ?<br>\nTous les produits Warenghem peuvent être expédiés par la Poste via Colissimo, en livraison express via Chronopost ou livrés en points relais via Mondial Relay.",
               "title":"Quels modes de livraison proposez-vous ?"
            },
            {
               "text":"Pas de panique, cela arrive à tout le monde ! Contactez-nous rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, pour que nous puissions faire le nécessaire. Si votre commande n’a pas encore été expédiée, nous ferons le maximum pour répondre à votre demande !",
               "title":"Je me suis trompé d’adresse de livraison, de produit ou de taille lors de ma commande."
            },
            {
               "text":"Oui, nous livrons vers les pays de l’Union européenne en 4 à 6 jours ouvrés après expédition de la commande. Les frais de livraison sont de 10€, quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.",
               "title":"Puis-je me faire livrer à l’étranger ?"
            },
            {
               "text":"Si vous n’êtes pas satisfait de vos produits Warenghem, aucun problème ! Vous avez 14 jours pour nous renvoyer vos produits. Envoyez un mail à à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour. Le remboursement s’effectue dans un délai de 15 jours et s’effectuera automatiquement sur le compte associé à la carte bancaire utilisée lors de l’achat ou sur le compte Paypal ayant servi au paiement. <br><br>\n\nNos conditions de remboursement ne s’appliquent qu’aux particuliers. Pour les entreprises, les produits ne sont ni repris ni échangés s’ils ont été lavés ou utilisés.",
               "title":"Quelle est la politique de retours de Warenghem ?"
            },
            {
               "text":"Vous vous êtes trompés de taille ou la couleur ne vous convient pas ? Nous acceptons les échanges de produits non lavés et non utilisés dans la limite des 14 jours suivant votre achat. Bien sûr, nous prenons en charge les frais de livraison. Envoyez un mail à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux. en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour.",
               "title":"Quelle est la politique d’échanges de Warenghem ?"
            },
            {
               "text":"Si les produits n'ont été ni utilisés ni lavés, nous les remettons tout simplement en stock. Dans le cas contraire, les produits qui ne peuvent être remis à la vente sont reconditionnés par nos équipes logistiques et/ou recyclés.",
               "title":"Que deviennent les produits qui vous sont retournés ?"
            },
            {
               "text":"Vos produits sont expédiés le lendemain de votre commande (hors week-end et jours fériés). Vous recevrez donc dans les 48h suivant votre commande un mail de confirmation d’envoi contenant un lien de suivi de livraison. Si vous ne recevez pas ce mail de confirmation dans les 72 heures, nous vous invitons à nous contacter à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.",
               "title":"Quel est le statut de ma commande ?"
            },
            {
               "text":"Vous vous êtes trompés dans la taille ou avez tout simplement changé d’avis ? Aucun problème, envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée. Si jamais elle déjà chez le facteur, vous aurez 14 jours pour nous la retourner gratuitement.",
               "title":"Comment puis-je annuler ma commande ?"
            },
            {
               "text":"Nous acceptons les paiements par carte bancaire et Paypal. Vous pouvez également payer votre commande en 3x dès 100€.",
               "title":"Quelles méthodes de paiement proposez-vous ?"
            },
            {
               "text":"Après avoir choisi vos produits et validé votre panier, vous aurez simplement à cliquer sur Payez en 3 fois dans l’étape du paiement, puis à cliquer sur \"Valider le paiement\".",
               "title":"Comment puis-je bénéficier du paiement en 3 fois ?"
            },
            {
               "text":"Toutes les transactions sont sécurisées. Le site Warenghem est pourvu d’un système de cryptage SSL visant à protéger les données personnelles et les données de paiement.<br><br>\nWarenghem s’engage à ne pas conserver vos coordonnées de carte bancaire.",
               "title":"Sécurité des paiements"
            },
            {
               "text":"Warenghem a mis en place des mesures de sécurité très strictes sur son site www.warenghem.com afin de garantir la protection de vos données personnelles.<br><br>\nLe site Warenghem est ainsi pourvu d’un système de cryptage SSL visant à protéger les données personnelles et de paiement.<br><br>\nWarenghem s’engage à ne pas conserver votre numéro de carte bancaire.",
               "title":"Le site www.warenghem.com est-il sécurisé / fiable ?"
            }
         ]
      },
      "title":"Vos questions"
   }
}
</i18n>