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
						<div>
							<h3 class="page-title teradeli-medium pb-10">
								Partagez avec nous
							</h3>
							<div>
								<p class="page-subtitle teradeli-medium pb-10">Contactez-nous par WhatsApp pour des conseils personnalisés.</p>
								<a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
								Contactez-nous par WhatsApp
								</a>
							</div>
						</div>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="2" value="shipping"
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
						<div>
							<h3 class="page-title teradeli-medium pb-10">
								{{$t('contact')}}
							</h3>
							<div>
								<p class="page-subtitle teradeli-medium pb-10">{{$t('contactsubtitle')}}</p>
								<div>
									<a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
										<v-icon color="lightbugattiblue">{{ svgPath5 }}</v-icon><span class="pl-3">WhatsApp</span>
									</a>
								</div>
								<div>
									<a class="text-center w-100" target="_blank" href="https://m.me/warenghem.studios">
										<v-icon color="lightbugattiblue">{{ svgPath7 }}</v-icon><span class="pl-3">Facebook Messenger</span>
									</a>
								</div>
									<a class="text-center w-100" target="_blank" href="https://www.instagram.com/warenghem.studios/">
										<v-icon color="lightbugattiblue">{{ svgPath8 }}</v-icon><span class="pl-3">Instagram</span>
									</a>
								<div>
									<a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
										<v-icon color="lightbugattiblue">{{ svgPath6 }}</v-icon><span class="pl-3">Email</span>
									</a>
								</div>
							</div>
						</div>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="3" value="material"
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
						<div>
							<h3 class="page-title teradeli-medium pb-10">
								Partagez avec nous
							</h3>
							<div>
								<p class="page-subtitle teradeli-medium pb-10">Contactez-nous par WhatsApp pour des conseils personnalisés.</p>
								<a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
								Contactez-nous par WhatsApp
								</a>
							</div>
						</div>
					</v-col>
				</v-row>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="3" value="material"
        >
          <div>
            <template>
              <v-card>
				<v-row class="pa-0">
					<v-col  class="bgcard pvw" cols="8">
					<div class="page-title teradeli-medium pb-10">
						{{$t('customers.subtitle')}}
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
						<div>
							<h3 class="page-title teradeli-medium pb-10">
								Partagez avec nous
							</h3>
							<div>
								<p class="page-subtitle teradeli-medium pb-10">Contactez-nous par WhatsApp pour des conseils personnalisés.</p>
								<a class="text-center w-100" target="_blank" href="https://wa.me/%2B33442718968?text=">
								Contactez-nous par WhatsApp
								</a>
							</div>
						</div>
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
					{{$t('protection.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('protection.subtitle')}}
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
					{{$t('conditions.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('conditions.subtitle')}}
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
					{{$t('mentions.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('mentions.subtitle')}}
				</div>
			</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <v-card flat class="bgcard pvw"
              v-for="(tab,m_idx) in $t('tab.sections3')"
              :key="'tab_'+m_idx"
            >
              <v-card-text>
                {{tab.title}}
              </v-card-text>
              <v-card-text v-html="tab.subtitle">
              </v-card-text>
              <v-card-text>
                Version 1.0
              </v-card-text>
              <v-card-text class="bg-white" v-html="tab.text">
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header :expand-icon="svgPath3">
			<div class="d-block">
				<div class="teradeli-medium pb-1">
					{{$t('mentions.menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('mentions.subtitle')}}
				</div>
			</div>
          </v-expansion-panel-header>
          <v-expansion-panel-content eager>
            <v-card flat class="bgcard pvw"
              v-for="(tab,m_idx) in $t('tab.sections4')"
              :key="'tab_'+m_idx"
            >
              <v-card-text>
                {{tab.title}}
              </v-card-text>
              <v-card-text v-html="tab.subtitle">
              </v-card-text>
              <v-card-text>
                Version 1.0
              </v-card-text>
              <v-card-text class="bg-white" v-html="tab.text">
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown, mdiPlus, mdiWhatsapp, mdiEmail, mdiFacebookMessenger, mdiInstagram } from '@mdi/js'
    export default {
        name: 'legale',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
				svgPath4: mdiPlus,
				svgPath5: mdiWhatsapp,
				svgPath6: mdiEmail,
				svgPath7: mdiFacebookMessenger,
				svgPath8: mdiInstagram,
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
   "en":{
      "customers":{
         "menu":"",
         "subtitle":""
      },
      "material":{
         "menu":"",
         "subtitle":""
      },
      "questions":{
         "menu":"",
         "subtitle":""
      },
      "shipping":{
         "menu":"",
         "subtitle":""
      },
      "tab":{
         "menu":"",
         "sections1":[
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            }
         ],
         "sections2":[
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            }
         ],
         "sections3":[
            {
               "subtitle":"",
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            }
         ],
         "sections4":[
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            },
            {
               "text":"",
               "title":""
            }
         ]
      },
      "title":""
   },
   "fr":{
	"contact":"Contactez nous",
	"contactsubtitle":"Des conseils personnalisés? Une question particulière? Des conseils à nous donner? Nous sommes à votre écoute, nous répondons en quelques minutes...",
      "material":{
         "menu":"Matières et entretien",
         "subtitle":"Préserver la beauté de votre article"
      },
      "questions":{
         "menu":"Produits",
         "subtitle":"En savoir plus sur le studio"
      },
      "shipping":{
         "menu":"Livraison, retours, commande",
         "subtitle":"Votre commande en toute simplicité"
      },
      "tab":{
         "menu":"",
         "sections1":[
            {
               "text":"Oui, tous nos produits sont certifiés par l'organisme végane PETA, et ne contienne donc aucune matière animale. <br><br>\n\nNos lins sont certifiés GOTS et OEKO-TEX®, ce qui signifie qu’ils sont exempts de produits toxiques pour le corps et l’environnement. GOTS est la certification \"agriculture biologique\" et OEKO-TEX® est le premier label visant à garantir les qualités humano-écologiques des textiles.<br><br>\n\nNos lin sont cultivés et tissés en France.<br><br>\n\nNos produits sont en audit pour être certifié origine France garantie. Mais le processus et malheuresement long et couteux. Nous vous tiendrons au courant de l'anancée de ce projet. En attendant, utilisez l'application ORIGIN qui trace l'intégralité de la fabrication depuis la matière première...",
               "title":"Les produits Warenghem sont ils complètement fabriqués en France ?"
            },
            {
               "text":"C'est notre politique... Toutes ce qui est fabriquable en France doit l'être !\nSi vous utilisez l'appliction ORIGIN, vous aurez tous les détails de vos produits.<br><br>\n\nLes sacs et la maroquinerie en cuir de vin Dionysos sont confectionnés aux Ateliers Saint Germain vers Angers, spécialisé en haute maroquinerie. Nous l’avons sélectionné car il travaille également avec les plus grandes maisons en France afin de fournir une finition haut de gamme.<br><br>\n\nLes boucles de ceinture sont réalisées sur mesure chez Les Ateliers de Mars proche de Romans sur Isère en Etain naturel certifié, recyclable à l'infini... Pourquoi nous l'avons selectionné ? Pour son expérience et ses réalisations pour de grands noms.<br><br>\n\nLes souliers sont confectionnés au sein de la capitale francaise de la chaussure à Romans sur Isère chez In-Soft. Notre projet a été selectionné par le programme de développement économique local et l'association \"Romans Cuir\" pour la création des bottines Dionysos.",
               "title":"Est-ce que Warenghem possède des certifications végane et écologiques ?"
            },
            {
               "text":"Warenghem ne propose pas de réductions ni de codes promo. Notre concept est de supprimer tous les intermédiaires couteux afin de vous proposer la meilleure qualité au meilleur prix. La plupart des acteurs de la mode gonflent artificiellement les prix afin de financer les opérations de promotions ponctuelles ou continues.",
               "title":"Est-ce que Warenghem proposent des codes promo ou des remises ?"
            },
            {
               "text":"Cette matière ",
               "title":"3. Avec qui partageons-nous vos données ?"
            },
            {
               "text":"<div><p>Nous pouvons collecter certaines informations via des cookies, des balises Web et autres traceurs. Un cookie est un fichier texte enregistré sur le disque dur de votre terminal, par exemple lorsque vous visitez un site, lorsque vous lisez un e-mail ou lorsque vous installez une application mobile. Un cookie permet d'identifier l'appareil sur lequel il est enregistré, pendant la durée de validité du consentement, qui ne saurait excéder 13 mois.</p><p><b>Quels types de cookies nous utilisons ?</b></p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;Les cookies de fonctionnement Nous permettent de faciliter votre navigation en enregistrant vos préférences linguistiques, vos identifiant de connexion, le contenu de votre panier ou votre « wish list ».</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;D'autres cookies collectent des informations relatives à votre comportement sur nos sites et applications en analysant les URLs (d'où viennent Nos visiteurs, sur quelles bannières ils ont cliqué, qui les a dirigés vers Notre site), les pages consultées, les horaires des visites. Ceci nous permet d'améliorer Nos sites Web et applications, de mieux comprendre les produits et services que vous préférez, et vous offrir des communications et/ou un contenu plus personnalisé sur Notre site Web et nos applications.</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;Nous utilisons également des cookies de statistiques anonymes pour mesurer l'activité des sites Web et déterminer les zones des sites les plus visitées, améliorant ainsi la visibilité de Notre contenu.</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;Nous utilisons des cookies pour assurer la sécurité des transactions/achats effectués en-ligne grâce à l’empreinte digitale du terminal, ce qui permet d'identifier certains aspects de l'équipement utilisé pour passer une commande en ligne.</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;Nos sites Web ou applications peuvent contenir des cookies émanant de tiers (agences publicitaires, fournisseurs d’outils d'analyses, etc.) leur permettant de collecter des informations de navigation sur vos appareils, notamment pour mesurer l'efficacité de Nos campagnes publicitaires sur des sites tiers. Les cookies tiers sont soumis aux politiques de confidentialité desdits tiers. Nous vous informons par la présente des fins de ces cookies et de la façon dont vous pouvez les gérer, dans la mesure où Nous en avons connaissance.</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;Nous incluons parfois, sur Notre site Web ou applications, des outils de tiers qui vous permettent de partager des contenus de notre Site avec d'autres personnes ou de faire connaître à ces autres personnes votre consultation ou votre opinion concernant un contenu de notre Site. Tel est notamment le cas des boutons Partager, J'aime, issus de réseaux sociaux (tels que &nbsp;« Facebook », « Twitter » etc).</p><p>Le réseau social fournissant un tel bouton applicatif peut vous identifier grâce à ce bouton, même si vous ne l'avez pas utilisé lors de votre consultation de Notre Site. En effet, ce type de bouton applicatif permet au réseau social de suivre votre navigation sur Notre Site, du seul fait que votre compte au réseau social concerné était actif sur votre terminal (session ouverte) lors de votre navigation sur Notre Site.</p><p>Nous n'avons aucun contrôle sur les procédés employés par ces réseaux sociaux pour collecter des informations relatives à votre navigation sur Notre Site. Nous vous invitons à consulter les politiques de confidentialité de ces réseaux sociaux pour savoir à quelles fins (notamment publicitaires) ils utilisent les informations de navigation qu'ils recueillent grâce à ces boutons applicatifs. Ces politiques de confidentialité doivent notamment vous informer sur la manière de gérer vos préférences sur votre compte de réseaux sociaux.</p><p><b>Acceptation des cookies</b></p><p>Sauf s’agissant des cookies de fonctionnement et de sécurité, l’enregistrement d’un cookie dans un terminal dépend des choix de l’utilisateur, que celui-ci peut exprimer et modifier librement à tout moment.</p><p>Vous pouvez paramétrer vos cookies par le biais de votre navigateur et ainsi accepter ou rejeter les cookies sur votre terminal, soit de manière globale soit cookie par cookie.&nbsp;Le fait de modifier vos paramètres sur votre navigateur peut impacter votre expérience sur le site, par exemple si nos partenaires ne peuvent plus reconnaitre la langue de votre navigateur ou le pays/région depuis lequel/laquelle vous vous connectez. Nous ne pouvons être tenus responsables des conséquences résultant de l'accès réduit à nos services suite à des cookies que vous avez précédemment supprimés ou rejetés.</p><p><b>Comment gérer les paramètres de cookies dans votre navigateur ?</b></p><p>Chaque navigateur possède son propre système de gestion des cookies, décrit dans le menu « Aide » de votre navigateur, où vous trouverez les informations nécessaires pour gérer vos préférences.</p><table><tbody><tr><td><p>Pour Internet Explorer 8.0 et plus :</p><p>Choisissez le menu « Outils », puis « Options Internet »</p><ol><li>Cliquez sur l'onglet « Confidentialité »</li><li>Sélectionnez le niveau de confidentialité souhaité.</li></ol></td><td>Pour Mozilla Firefox :<ol><li>Choisissez le menu « Outils » puis « Options ».</li><li>Cliquez sur l’icône « Vie privée ».</li><li>Repérez le menu « cookies » et sélectionnez les options qui vous conviennent.</li></ol></td></tr><tr><td>Pour Opéra<ol><li>Choisissez le menu « Fichier » puis « Préférences »</li><li>Cliquez sur l’icône «&nbsp;Vie privée&nbsp;».</li><li>Définissez vos paramètres.</li></ol></td><td>Pour Androïd<ol><li>Taper sur la Touche en haut à droite</li><li>Aller à « Réglages » puis « Confidentialité et sécurité »</li><li>Définir vos paramètres</li></ol></td></tr><tr><td>Pour Dolphin sur Androïd<ol><li>Dans le menu allez à «Plus» puis «Réglages»</li><li>Choisir le menu Confidentialité puis «&nbsp;Sécurité»</li><li>Définir vos paramètres dans le menu «Cookies ».</li></ol></td><td>Pour Safari sur iOS<ol><li>Dans l’application « Réglages » choisir « Safari »</li><li>Aller à « accepter les cookies » dans la rubrique « Confidentialité »</li><li>Définir vos paramètres.</li></ol></td></tr><tr><td>Pour Google Chrome :<ol><li>Cliquez sur le menu Chrome de la barre d’outils du navigateur</li><li>Choisissez le menu « Paramètres » puis cliquez sur « Affichez les paramètres avancés»</li><li>Aller au paragraphe «Confidentialité», cliquez sur « Paramètres du contenu »</li><li>Aller au paragraphe «&nbsp;Cookies&nbsp;», vous pouvez définir vos paramètres.</li></ol></td><td>&nbsp;</td></tr></tbody></table><p>Si votre terminal est utilisé par plusieurs personnes et lorsqu’un même terminal dispose de plusieurs navigateurs, nous ne pouvons nous assurer que les services et publicités censés correspondre à votre utilisation du terminal correspondent bien à votre propre utilisation et non à celle d'un autre utilisateur de ce terminal.</p></div>",
               "title":"4. Cookies et traceurs"
            },
            {
               "text":"<div><p>Vos données ne sont conservées, dans une forme permettant de vous identifier, que pour la durée raisonnablement nécessaire à la poursuite des finalités décrites ci-avant, ou pour la durée de conservation permise par la loi. La durée de conservation de vos données est déterminée selon les critères suivants :</p><p>●&nbsp;&nbsp;Vos données sont traitées pour les finalités décrites à l’article 2 pour une durée de</p><p>&nbsp; &nbsp; ○&nbsp;&nbsp;trois (3) ans à compter de notre dernier contact, si vous êtes un prospect (c’est-à-dire si vous n’avez effectué aucun achat auprès de Warenghem, mais que vous être intéressé par les actualités de notre Maison<br></p><p>&nbsp; &nbsp; &nbsp;○&nbsp;&nbsp;dix (10) ans suivant la fin de notre relation commerciale, si vous êtes client (c’est-à-dire que vous avez acheté l’un de nos produits ou services)</p><p>●&nbsp;&nbsp;Vos données seront ensuite archivées, et pourront être utilisées dans le cadre d’une contestation, action ou d’un contentieux, pendant la durée de prescription applicable. Dans le cas d’une action en justice, les données peuvent être conservées jusqu’à épuisement des voies de recours, et seront ensuite supprimées ou archivées dans les limites permises par la loi</p><p>Vos données sont ensuite détruites ou anonymisées.</p></div>",
               "title":"5. Durée de conservation"
            },
            {
               "text":"<div><p>Vous pouvez demander l'accès aux données vous concernant que Nous détenons. Dans ce cas, nous vous fournirons les informations requises par la loi sur les finalités du traitement, les catégories de données traitées, les catégories de destinataires, la durée de conservation des données, etc.).</p><p>Vous pouvez également obtenir copie de toute information vous concernant que Nous détenons, dans un format compatible et structuré vous permettant d'exercer votre droit à la portabilité des données, pour les traitements fondés sur votre consentement ou l’exécution d’un contrat entre Warenghem et vous.</p><p>Vous pouvez également fournir vos instructions sur la manière dont vous souhaitez que vos données soient traitées après votre mort.</p><p>Vous pouvez également Nous demander de corriger, modifier, ou effacer, toute information incomplète, obsolète ou inexacte.&nbsp;</p><p>Vous pouvez demander la suppression de vos données si (i) celles-ci ne sont plus nécessaires pour la finalité envisagée, (ii) vous avez retiré votre consentement alors que le traitement en question reposait sur ce consentement, (iii) vous vous êtes opposé au traitement (iv) le traitement des données est illégal, (v) les informations doivent être effacées en application d’obligations légales applicable à Warenghem. Warenghem prendra des mesures raisonnables pour informer les autres entités du groupe Warenghem d'un tel effacement.</p><p>Vous pouvez demander la limitation du traitement (i) si vous contestez l'exactitude de vos informations personnelles, ce qui permettra à Warenghem de vérifier cette exactitude, (ii) si vous souhaitez limiter le traitement de vos informations plutôt que l’effacement de celles-ci malgré le fait que le traitement soit illicite (iii) si vous souhaitez que Warenghem conserve vos informations parce que vous en avez besoin pour la constatation, l'exercice ou la défense de vos droits en justice (iv) le temps nécessaire à Warenghem pour l’examen du caractère fondé de votre demande d’opposition.</p><p>Vous avez également le droit de déposer une plainte auprès de l'autorité de contrôle compétente.</p><p>Les coordonnées de notre Délégué à la Protection des Données sont : hello@warenghem.com.</p><p>Lorsque le traitement de vos données repose sur le consentement (par exemple si vous avez accepté de recevoir des communications commerciales), vous pouvez retirer ce consentement à tout moment, ce qui n’affectera pas la légitimité des opérations de traitement effectuées avant que le retrait de votre consentement.</p><p>Lorsque les traitements que nous effectuons reposent sur notre intérêt légitime, vous pouvez vous opposez à un tel traitement s’il s’avère que nos vos intérêts ou libertés fondamentales prévalent sur nos intérêts légitimes.</p><p>Pour exercer ces droits, vous pouvez contacter : hello@warenghem.com</div>",
               "title":"6. Vos droits"
            },
            {
               "text":"<div><p>Nous assurerons un niveau de protection adéquat de vos données et veillerons à ce que des mesures de sécurité techniques et organisationnelles appropriées (y compris la sensibilisation et la formation du personnel participant aux opérations de traitement) soient mises en place pour protéger vos données contre toute destruction accidentelle ou illicite, perte ou altération accidentelle, divulgation ou accès non autorisés, et contre toutes les autres formes de traitement illicites.</p><p>Cependant, dans la mesure où Internet n'est pas complètement sécurisé, nous ne pouvons garantir que vos informations personnelles stockées ou envoyées seront totalement sécurisées. Nous vous encourageons à faire preuve de prudence lorsque vous utilisez Internet pour accéder à nos sites Web, applications ou médias sociaux.</p></div>",
               "title":"7. Protection de vos données personnelles"
            },
            {
               "text":"<div><p>Nos sites Web et applications ne sont pas destinés aux enfants. Nous ne collectons pas sciemment des informations concernant des enfants sans l’accord d'un parent ou tuteur, sauf si permis par la loi.</p><p>Vous devez être âgés d’au moins seize ans pour nous communiquer vos données, et dix-huit ans pour effectuer des transactions dans Nos boutiques ou sur Nos sites Web ou applications. En effectuant ces transactions, vous garantissez que vous êtes âgés d’au moins dix-huit ans et êtes pleinement en mesure de conclure et d'être légalement liés par de telles transactions.</p><p>Si Nous sommes informés, ou si Nous apprenons qu'un mineur nous a soumis des informations le concernant via Nos médias ou autrement, Nous supprimerons ces informations.</p></div>",
               "title":"8. Enfants"
            },
            {
               "text":"<div><p>Il est possible que des liens soient effectués par des sites ou services de tiers que Nous ne contrôlons pas et qui sont régis par leur propre politique de confidentialité. Cette Politique ne s'applique pas à ces sites tiers. Nous vous invitons à consulter les politiques de confidentialité de des sites tiers que vous visitez pour savoir comment ils traitent vos données personnelles.</p></div>",
               "title":"9. Sites tiers"
            },
            {
               "text":"<div><p>Notre Politique est susceptible d’être modifiée pour refléter les évolutions dans la manière dont nous traitons les informations vous concernant. Nous veillerons à ce que vous soyez informés de tout changement important. Nous publierons également une mise à jour de cette Politique sur le site.</p></div>",
               "title":"10. Modification de la politique"
            },
            {
               "text":"<div><p>Si vous souhaitez que Nous mettions à jour les informations que Nous avons sur vous ou vos préférences, ou si vous avez des questions concernant la protection des informations vous concernant, veuillez&nbsp;Nous contacter par e-mail à hello@warenghem.com</p><p>Mise à jour le 04/01/2021</p></div>",
               "title":"11. Nous contacter"
            }
         ],
         "sections2":[
            {
               "text":"<div><p><strong>Notre cuir de vin Dionysos® est produit grâce à un procédé innovant qui transforme les fibres du raisin en une matière écologique. </strong></p><p><strong>Il a été longuement testé afin qu'il ait les mêmes caractéristiques qu'un cuir traditionnel :</strong></p><ul><li><p><strong>Mécaniques : forte résistance et imperméabilité totale</strong></p></li><li><p><strong>Esthétiques : grain fin et harmonieux</strong></p></li><li><p><strong>Sensorielles : touché doux et agréable, sans odeur</strong></p></li></ul><p><strong>Contrairement au cuir animal, il ne demande pas d'entretien.</strong></p><p>Mais pour préserver au fil des ans la beauté de cet article, nous vous recommandons :</p><ul><li><p>De veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les finitions en cuir.</p></li><li><p>De protéger votre article de l’humidité excessive et de le maintenir à l’abri des sources directes de chaleur.</p></li><li><p>De nettoyer délicatement la toile avec un chiffon doux imbibé d’eau légèrement savonneuse.</p></li></ul><p>Pour toute question relative à votre article, veuillez prendre contact avec nous à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.</p></div>",
               "title":"Comment prendre soin des articles en cuir de vin Dionysos ?"
            },
            {
               "text":"Contrairement aux autres marques, Warenghem utilise un doublure en lin naturel (et non en polyester). Il est brute, apportant un contraste avec l'allure moderne des produit. Il ne contient aucun produit chimique.<br><br>\n\nAucun entretient n'est requis pour cette matière, nous avons utilisé un grammage élevé utilisé pour l'ammeublement. Il devrait durer éternellement...\n\nEt en bonus, le lin est bio, cultivé, et tissé en France. What else ?...\n\n",
               "title":"Comment s'entretient la doublure en lin ?  "
            },
            {
               "text":"<div><p>Gwez</p><p>SAS au capital de 40.010 euros immatriculée au Registre du Commerce et des Sociétés de Marseille sous le numéro 891678856</p><p>Siège social : 231 rue saint honoré - 75001 Paris TVA : FR68891678856</p></div>",
               "title":"ARTICLE 2 : IDENTIFICATION DE L'AUTEUR DE L'OFFRE"
            },
            {
               "text":"<div><p>Les informations relatives à l'ensemble des articles Warenghem susceptibles d'être vendus par l'intermédiaire du Service Clients de la société Gwez sont disponibles, avec leurs références, dans l'ensemble des magasins  Warenghem, ainsi que sur le Site.</p></div>",
               "title":"ARTICLE 3 : INFORMATIONS RELATIVES AUX ARTICLES"
            },
            {
               "text":"<div><b>1. Commandes par Internet&nbsp;</b></p><p>Les commandes pourront être passées par Internet sur le site marchand accessible depuis la version française du Site. Le client conserve à sa charge les frais de télécommunication lors de l'accès à Internet et de l'utilisation du Site.</p><p>Les photographies, graphismes et descriptions des produits proposés à la vente ne sont qu'indicatifs et n'engagent nullement Gwez. Les clients ont la possibilité d'obtenir des renseignements complémentaires en contactant par le Service Clients Warenghem.</span></p><p><span>En cas d'erreur manifeste entre les caractéristiques des articles et leur représentation, la société Gwez ne saurait voir sa responsabilité engagée.</span></p><p><span>Le client devra, pour pouvoir acheter un produit, remplir un formulaire de commande précisant certains champs obligatoires afin que sa sélection puisse être prise en compte par Gwez.</span></p><p><span>En cas d'inactivité prolongée lors de la connexion il est possible que la sélection des articles choisis avant cette inactivité ne soit plus garantie. Le client sera invité à reprendre sa sélection de produits depuis le départ.</span></p><p><span>Toutes les étapes nécessaires à la vente seront précisées sur le Site conformément à l'article 1369-1 du code civil. En application des dispositions de l'article 1369-4 du Code civil, le client aura la possibilité, avant de valider définitivement sa commande, de vérifier le détail de sa commande et son prix total et de corriger d'éventuelles erreurs, avant de confirmer celle-ci pour exprimer son acceptation. A partir du moment où le client a validé sa commande, Gwez accusera réception de celle-ci sans délai et par voie électronique.</span></p><p><span>Toutefois, la vente ne sera considérée comme définitive qu'après l'envoi au client de la confirmation de la commande par Gwez, précisant l'expédition des articles.</span></p><p><b><span>2. Refus de commandes</span></b></p><p>Il est rappelé que les achats réalisés sur le Site sont réservés aux consommateurs pour leur usage propre (ou cadeaux) et non pour revente. En conséquence Gwez ne vend ses produits que dans des quantités correspondant aux besoins moyens habituels d'un foyer.</p></div>",
               "title":"ARTICLE 4 : COMMANDES DES ARTICLES"
            },
            {
               "text":"<div><p>Le prix des articles s'entend toutes taxes comprises. Sauf stipulation expresse contraire lors de la commande effectuée sur le Site, les frais de livraison des articles sont pris en charge par Gwez.</p><p>Le prix TTC de chacun des articles que souhaiterait acquérir le client, ainsi que le montant des frais de transport afférents à leur livraison (si ces frais de transport ne sont pas pris en charge par Gwez), lui seront communiqués lors de la connexion au Site.</p><p>Conformément aux dispositions de l'article L.221-11 du Code de la consommation, le client recevra, au plus tard lors de la livraison, pour chacun des articles, la confirmation écrite du prix payé détaillant le prix des articles et les frais de livraison le cas échéant mis à sa charge.</p></div>",
               "title":"ARTICLE 5 : PRIX DES ARTICLES"
            },
            {
               "text":"<div><p>Le règlement des achats du client peut s'effectuer par carte bancaire (sont acceptées les cartes du réseau CB, Visa, Eurocard/Mastercard), émises sur des comptes bancaires domiciliés au sein de l’Union Européenne, la Norvège ou la Suisse, par virement bancaire depuis un compte émetteur au nom du client et domicilié en France Métropolitaine, par Paypal depuis un compte verifié.</p><p>Dans le cadre des paiements par Internet, le contrôle s'effectuera en ligne auprès des établissements et organismes bancaires compétents, interrogés via le système de la société STRIPE. Cette société, située aux Etats-Unis, procèdera à cette fin au stockage et au traitement automatisé des informations relatives à chaque commande y compris les coordonnées de carte bancaire, dans un environnement sécurisé. Le transfert des données à caractère personnel du client à STRIPE a été autorisé par la CNIL (délibération DF-2011-251) et est encadré par les clauses contractuelles types établies par la Commission Européenne.</p><p>Par ailleurs, afin de lutter contre la fraude sur Internet, Gwez met en œuvre un traitement relatif à l’évaluation des risques et la prévention de la fraude au paiement des achats sur le Site, pour lequel la société  Warenghem fait également appel à la société STRIPE. Les données collectées sont destinées aux seules personnes habilitées en charge de la lutte contre la fraude au sein de la société  Warenghem. Ce traitement a également été autorisé par la CNIL.</p><p>Dans l'hypothèse où, pour quelque raison que ce soit (opposition, refus du centre émetteur…), le débit des sommes dues par le client s'avérerait impossible, le processus d'achat sur Internet serait annulé.</p><p>Les dispositions de l'article 1341 du Code Civil sont inapplicables aux ventes conclues à distance par la société Gwez.</p></div>",
               "title":"ARTICLE 6 : CONDITIONS DE PAIEMENT"
            },
            {
               "text":"<div><p>Le client dispose de la faculté de faire livrer les articles à une personne physique, par exemple dans le cadre d’un cadeau.</p><p>Il est entendu qu'aucune livraison ne pourra être effectuée dans des hôtels, à des adresses professionnelles, ou à des boîtes postales. La livraison des articles interviendra après que le règlement du montant de la commande aura été enregistré.</p><p>Conformément aux dispositions du Code de la consommation, la livraison des articles commandés interviendra dans les délais communiqués par Gwez et, à défaut d’indication, en tout état de cause au plus tard dans les 30 jours à compter de la commande, sous réserve du paiement complet du prix.</p><p>Les délais éventuellement communiqués par Gwez ne le seront qu'à titre indicatif. Si, lors de la livraison, l'aspect extérieur du colis n'est pas parfait, le client procédera à son ouverture en présence du transporteur afin de vérifier l'état de l'article. En cas de dommages à l'article, le client les détaillera précisément sur le bon de livraison, les dispositions de l'article 11 ci-dessous restant par ailleurs applicables.</p></div>",
               "title":"ARTICLE 7 : LIVRAISON"
            },
            {
               "text":"<div><p><b>1. Droit de rétractation</b></p><p>Le client bénéficie d’un droit de rétractation légal qu’il peut exercer dans un délai de 14 jours suivant la réception du bien, dans les conditions prévues aux articles L. 221-18 et L. 221-20 du Code de la consommation, s’il remplit les conditions posées par ces dispositions, sans avoir à motiver sa décision ni à payer de pénalités.</p><p>Dans le cadre d’une rétractation portant sur une commande incluant plusieurs produits livrés séparément, le point de départ de ce délai sera la prise de possession par le client du dernier produit livré. Passé ce délai, le client ne pourra plus exercer son droit de rétractation.</p><p>Le droit de rétractation ne peut être exercé pour les commandes portant sur :</p><ul><li>la fourniture de biens confectionnés selon les spécifications du consommateur ou nettement personnalisés ;</li><li>la fourniture de biens scellés (parfums, boucles d’oreilles, maillots de bain, etc.) qui ont été descellés par le consommateur après livraison et qui ne peuvent être renvoyés pour des raisons d'hygiène ou de protection de la santé.</li></ul><p>Pour notifier sa décision de rétractation, le client peut utiliser le formulaire de rétractation figurant au bas des présentes Conditions Générales de Vente, ou toute autre déclaration dénuée d’ambiguïté.</p><p><b>2. Retour des articles</b></p><p>Pour restituer les articles qu’il aurait déjà reçus le client peut, selon son choix, procéder comme suit :</p><p>Dans tous les cas (remboursement ou échange), le client doit retourner les articles livrés dans leur emballage d’origine et complets (boîtes, accessoires, protections, étiquettes, livrets, etc.). Les articles retournés incomplets, abîmés, endommagés, détériorés, salis ou dans tout autre état qui laisserait raisonnablement penser qu’ils ont été utilisés ou portés, ne seront ni remboursés ni échangés et lui seront retournés. Ainsi, s’agissant des souliers, la semelle devra, elle aussi, être intacte : à ce titre, il est vivement recommandé d’essayer les souliers  Warenghem sur une surface de type moquette ou tapis. S’agissant des parfums, tout parfum qui ne serait pas retourné dans son emballage original et intact (le film cristal recouvrant l’étui du parfum devant être toujours scellé) sera refusé. Les articles personnalisés ne pourront être retournés.</p><p><b>3. Remboursement</b></p><p>Le remboursement des sommes versées pour le(s) article(s) retourné(s) interviendra dans les quatorze (14) jours suivant la date à laquelle le client aura notifié à Gwez sa rétractation (ou dans les quatorze (14) jours suivant la réception des articles par Gwez, si le client choisit de renvoyer les articles par voie postale plutôt que de bénéficier du service d’enlèvement).</p><p>Le remboursement s'effectuera, selon le mode de paiement des articles, par crédit sur le compte bancaire du client correspondant à la carte bancaire ayant servi au paiement ou par virement sur le compte bancaire du client. En application de l’article L.221-24 du Code de la consommation, les frais supplémentaires payés par le client et liés au choix d’un mode spécifique de livraison ne lui seront pas remboursés.</p><p>Par ailleurs, dans le cas d’un cadeau, le droit de rétractation reste au bénéfice exclusif du client et ne peut en aucun cas être exercé par le destinataire du cadeau.</p><p><b>4. Échange</b></p><p>Gwez offre à ses clients la possibilité en se connectant à leur compte My Warenghem, d'échanger les articles livrés dans un délai de trente (14) jours suivant leur réception. Le client pourra alors retourner les articles concernés dans les conditions visées au paragraphe «&nbsp;Retour des Articles » ci-dessus.</p><p>En cas d'échange d'articles, la vente initiale sera résolue. Le paiement de la nouvelle vente s'effectuera par compensation avec le montant de la vente précédente, étant entendu que tout trop perçu fera l'objet : soit d’un avoir soit d’un remboursement), soit d'un re-crédit sur la carte bancaire, ou sur le compte bancaire du client.</p><p>Dans le cas d’un cadeau, la faculté d'échange pourra être exercée par le destinataire du cadeau,aucun remboursement ne pourra être effectué en faveur du destinataire du cadeau en cas de différence de prix.</p><p>En cas d'échange d'articles via le Service Clients, la nouvelle vente sera soumise aux présentes Conditions Générales de Vente.</p><p>Dans le cadre de la politique commerciale d’échange proposée au titre du présent article, Gwez se réserve la possibilité de refuser un échange au-delà de deux (2) demandes successives. Par ailleurs, les frais de livraison payés le cas échéant par le client ne lui seront pas remboursés.</p></div>",
               "title":"ARTICLE 8 : DROIT DE RÉTRACTATION - REMBOURSEMENT ET ÉCHANGE"
            },
            {
               "text":"<div><p>Le client doit s'assurer que les articles qui lui ont été livrés correspondent à sa commande. Dans l'hypothèse où les articles livrés ne seraient pas conformes à sa commande, le client devra en informer  le Service Clients  Warenghem et retourner les articles en cause dans les conditions énoncées à l'article 8 des Conditions Générales de Vente.</p><p>Nonobstant les conditions de garantie spécifique remises au client avec l'article livré, les articles  Warenghem sont soumis aux conditions de garantie prévues par la loi.</p><p>Rappel des articles L.217-4, L.217-5 et L.217-12 du Code de la consommation et des articles 1641 et 1648, premier alinéa, du Code civil :</p><p>Article L.217-4 du Code de la consommation : Le vendeur livre un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa charge par le contrat ou a été réalisée sous sa responsabilité.</p><p>Article L.217-5 du Code de la consommation :</p><p>Pour être conforme au contrat, le bien doit :</p><p>1. S'il est propre à l'usage habituellement attendu d'un bien semblable et, le cas échéant :</p><ul><li>s'il correspond à la description donnée par le vendeur et possède les qualités que celui-ci a présentées à l'acheteur sous forme d'échantillon ou de modèle ;</li><li>s'il présente les qualités qu'un acheteur peut légitimement attendre eu égard aux déclarations publiques faites par le vendeur, par le producteur ou par son représentant, notamment dans la publicité ou l'étiquetage ;</li></ul><p>2. Ou s'il présente les caractéristiques définies d'un commun accord par les parties ou est propre à tout usage spécial recherché par l'acheteur, porté à la connaissance du vendeur et que ce dernier a accepté. »</p><p>Article L.217-12 : L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.</p><p>Article 1641 du Code civil : Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage, que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.</p><p>Article 1648 du Code civil, premier alinéa : L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur dans un délai de deux ans à compter de la découverte du vice.</p><p>La réparation des conséquences du défaut caché, lorsqu'il aura été prouvé, comporte selon la jurisprudence :</p><ul><li><b></b>&nbsp;soit la réparation totalement gratuite de l'article, y compris les frais de main d'œuvre,</li><li>soit son remplacement ou le remboursement total ou partiel de son prix au cas où l'article serait totalement inutilisable,</li><li>et l'indemnisation du dommage éventuellement causé aux personnes et aux biens par le défaut de l'article.</li></ul></div>",
               "title":"ARTICLE 9 : CONFORMITÉ – GARANTIE – SERVICE APRÈS-VENTE"
            },
            {
               "text":"<div><p>Pour toute information, réclamation ou question relative aux Conditions de Vente par correspondance mises en place par la société Gwez ou aux articles eux-mêmes, les clients devront s'adresser au Service Clients  Warenghem sur le Site via le formulaire « Contactez-nous par e-mail », en rappelant le cas échéant leur numéro de commande.</p></div>",
               "title":"ARTICLE 10 : RÉCLAMATIONS - INFORMATIONS"
            },
            {
               "text":"<div><p>La marque Warenghem, ainsi que l'ensemble des marques figuratives ou non et plus généralement toutes les autres marques, illustrations, images et logotypes figurant sur les articles  Warenghem, leurs accessoires ou leurs emballages, qu'ils soient déposés ou non, sont et demeureront la propriété exclusive de la société Gwez . Toute reproduction totale ou partielle, modification ou utilisation de ces marques, illustrations, images et logotypes, pour quelque motif et sur quelque support que ce soit, sans accord exprès et préalable de la société  Warenghem , est strictement interdite. Il en est de même de toute combinaison ou conjonction avec toute autre marque, symbole, logotype et plus généralement tout signe distinctif destiné à former un logo composite. Il en ira de même pour tous droits d'auteur, dessins et modèles, brevets qui sont la propriété de la société Gwez .</p></div>",
               "title":"ARTICLE 11 : DROITS DE PROPRIÉTÉ INTELLECTUELLE"
            },
            {
               "text":"<div><p>L'exécution par la société Gwez de tout ou partie de ses obligations sera suspendue en cas de survenance d'un cas fortuit ou de force majeure qui en gênerait ou en retarderait l'exécution.</p><p>Sont considérés comme tels, notamment, sans que cette liste soit limitative, la guerre, les émeutes, l'insurrection, les troubles sociaux, les grèves de toute nature et les problèmes d'approvisionnement de la société Gwez.</p><p>La société Gwez informera le client d'un semblable cas fortuit ou de force majeure dans les sept (7) jours de sa survenance. Au cas où cette suspension se poursuivrait au-delà d'un délai de quinze (15) jours, le client aurait alors la possibilité de résilier la commande en cours, et il serait alors procédé à son remboursement dans les conditions énoncées à l'article 8 des présentes Conditions Générales de Vente.</p></div>",
               "title":"ARTICLE 12 : FORCE MAJEURE"
            },
            {
               "text":"<div><p>Ces Conditions Générales de Vente sont soumises au droit français. En cas de difficulté survenant à l'occasion de la commande ou de la livraison des articles  Warenghem, le client aura la possibilité, avant toute action en justice, de rechercher une solution amiable et d’avoir recours au CMAP – Centre de Médiation et d’Arbitrage de Paris, médiateur de la consommation dont relève <a>la société Gwez</a></p><p>Pour soumettre un litige au médiateur, le client peut remplir le formulaire sur le site internet du CMAP : www.cmap.fr onglet « vous êtes : un consommateur », envoyer sa demande par courrier simple ou recommandé au CMAP Médiation Consommation, 39 avenue Franklin D. Roosevelt, 75008 PARIS, ou envoyer un e-mail à consommation@cmap.fr. Quel que soit le moyen utilisé pour saisir le CMAP, la demande du client doit contenir les éléments suivants pour être traitée avec rapidité : ses coordonnées postales, e-mail et téléphoniques ainsi que les nom et adresse complets de  Warenghem, un exposé succinct des faits, et la preuve des démarches effectuées par le client auprès de  Warenghem préalablement à la saisine du CMAP.</p><p>Par ailleurs, la Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) dans le cadre de contrats de vente ou de service en ligne entre un consommateur résidant dans l'Union européenne et un professionnel établi dans l'Union européenne.</p><p>Cette plateforme est accessible à l'adresse suivante : https://webgate.ec.europa.eu/odr/. Le recours à la médiation est un mécanisme alternatif qui ne constitue pas une condition préalable à l'exercice d'une action en justice. Tout litige susceptible de résulter de l'interprétation ou de l'exécution des présentes Conditions Générales de Vente et de ses suites sera soumis à la compétence exclusive des tribunaux français.</p></div>",
               "title":"ARTICLE 13 : LITIGES - DROIT APPLICABLE"
            },
            {
               "text":"<div><p>Par dérogation aux dispositions de l’article 4 des Conditions Générales ci-dessus :</p><p>La commande d’articles personnalisés via le service Personnalisation ne peut s’effectuer que via le Site, à l’exclusion de toute commande par téléphone au Service Clients. Lors de son utilisation du service de personnalisation sur le Site, ses choix de création ne sont mémorisés que pendant la durée de sa session. Si le client interrompt sa session avant d’avoir finalisé sa commande, il sera donc invité à reprendre ses choix de création depuis le départ lors de sa nouvelle connexion.</p><p>Une fois la commande validée par le client sur le Site, le client sera débité du montant de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition des articles.</p><p>La commande de produits confectionnés sur demande de la ligne «peut s’effectuer auprès du Service Clients ou via le Site. Une fois la commande placée, le client recevra un courrier électronique l’informant du traitement de sa commande et sera débité du montant total de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition de l’article.</p><p>La commande des articles personnalisés par « marquage à chaud » se fait dans les mêmes conditions que celles mentionnées aux Conditions Générales ci-dessus.</p></div>",
               "title":"ARTICLE 14 : PROCÉDÉ DE COMMANDE"
            },
            {
               "text":"<div><p>Par dérogation aux dispositions de l’article 7 des Conditions Générales ci-dessus :</p><ul><li>La livraison des articles personnalisés commandés via le service personnalisation intervient au plus tard dans un délai de douze (12) semaines à compter du jour suivant la commande, sous réserve du complet paiement du prix.</li><li>La livraison des articles personnalisés par « marquage à chaud » intervient dans le même délai que celui mentionné aux Conditions Générales ci-dessus.</li></ul></div>",
               "title":"ARTICLE 15 : LIVRAISON"
            },
            {
               "text":"<div><p>(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat).</p><ul><li>À l’attention de la Société Gwez - Service Clients - 231, rue saint honoré 75001 Paris, ou via le formulaire « Contactez-nous par e-mail » accessible sur le site Internet fr. www.warenghem.com.</li><li>Je/Nous [*] vous notifie/notifions [*] par la présente ma/notre [*] rétractation du contrat portant sur la vente du bien [*]/pour la prestation de service [*] ci-dessous&nbsp;:</li><li>Bien ___[référence]_____________</li><li>Commandé le [*]/reçu le [*] : ______________</li><li>Nom du (des) consommateur(s)</li><li>Adresse du (des) consommateur(s)</li><li>Signature du (des) consommateur(s) (uniquement en cas de notification du présent formulaire sur papier)</li><li>Date</li></ul><p>[*] Biffez la mention inutile.</p></div>",
               "title":"FORMULAIRE DE RÉTRACTATION"
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
               "text":"<div><p>L'exécution par la société Gwez de tout ou partie de ses obligations sera suspendue en cas de survenance d'un cas fortuit ou de force majeure qui en gênerait ou en retarderait l'exécution.</p><p>Sont considérés comme tels, notamment, sans que cette liste soit limitative, la guerre, les émeutes, l'insurrection, les troubles sociaux, les grèves de toute nature et les problèmes d'approvisionnement de la société Gwez.</p><p>La société Gwez informera le client d'un semblable cas fortuit ou de force majeure dans les sept (7) jours de sa survenance. Au cas où cette suspension se poursuivrait au-delà d'un délai de quinze (15) jours, le client aurait alors la possibilité de résilier la commande en cours, et il serait alors procédé à son remboursement dans les conditions énoncées à l'article 8 des présentes Conditions Générales de Vente.</p></div>",
               "title":"ARTICLE 12 : FORCE MAJEURE"
            },
            {
               "text":"<div><p>Ces Conditions Générales de Vente sont soumises au droit français. En cas de difficulté survenant à l'occasion de la commande ou de la livraison des articles  Warenghem, le client aura la possibilité, avant toute action en justice, de rechercher une solution amiable et d’avoir recours au CMAP – Centre de Médiation et d’Arbitrage de Paris, médiateur de la consommation dont relève <a>la société Gwez</a></p><p>Pour soumettre un litige au médiateur, le client peut remplir le formulaire sur le site internet du CMAP : www.cmap.fr onglet « vous êtes : un consommateur », envoyer sa demande par courrier simple ou recommandé au CMAP Médiation Consommation, 39 avenue Franklin D. Roosevelt, 75008 PARIS, ou envoyer un e-mail à consommation@cmap.fr. Quel que soit le moyen utilisé pour saisir le CMAP, la demande du client doit contenir les éléments suivants pour être traitée avec rapidité : ses coordonnées postales, e-mail et téléphoniques ainsi que les nom et adresse complets de  Warenghem, un exposé succinct des faits, et la preuve des démarches effectuées par le client auprès de  Warenghem préalablement à la saisine du CMAP.</p><p>Par ailleurs, la Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) dans le cadre de contrats de vente ou de service en ligne entre un consommateur résidant dans l'Union européenne et un professionnel établi dans l'Union européenne.</p><p>Cette plateforme est accessible à l'adresse suivante : https://webgate.ec.europa.eu/odr/. Le recours à la médiation est un mécanisme alternatif qui ne constitue pas une condition préalable à l'exercice d'une action en justice. Tout litige susceptible de résulter de l'interprétation ou de l'exécution des présentes Conditions Générales de Vente et de ses suites sera soumis à la compétence exclusive des tribunaux français.</p></div>",
               "title":"ARTICLE 13 : LITIGES - DROIT APPLICABLE"
            },
            {
               "text":"<div><p>Par dérogation aux dispositions de l’article 4 des Conditions Générales ci-dessus :</p><p>La commande d’articles personnalisés via le service Personnalisation ne peut s’effectuer que via le Site, à l’exclusion de toute commande par téléphone au Service Clients. Lors de son utilisation du service de personnalisation sur le Site, ses choix de création ne sont mémorisés que pendant la durée de sa session. Si le client interrompt sa session avant d’avoir finalisé sa commande, il sera donc invité à reprendre ses choix de création depuis le départ lors de sa nouvelle connexion.</p><p>Une fois la commande validée par le client sur le Site, le client sera débité du montant de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition des articles.</p><p>La commande de produits confectionnés sur demande de la ligne «peut s’effectuer auprès du Service Clients ou via le Site. Une fois la commande placée, le client recevra un courrier électronique l’informant du traitement de sa commande et sera débité du montant total de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition de l’article.</p><p>La commande des articles personnalisés par « marquage à chaud » se fait dans les mêmes conditions que celles mentionnées aux Conditions Générales ci-dessus.</p></div>",
               "title":"ARTICLE 14 : PROCÉDÉ DE COMMANDE"
            },
            {
               "text":"<div><p>Par dérogation aux dispositions de l’article 7 des Conditions Générales ci-dessus :</p><ul><li>La livraison des articles personnalisés commandés via le service personnalisation intervient au plus tard dans un délai de douze (12) semaines à compter du jour suivant la commande, sous réserve du complet paiement du prix.</li><li>La livraison des articles personnalisés par « marquage à chaud » intervient dans le même délai que celui mentionné aux Conditions Générales ci-dessus.</li></ul></div>",
               "title":"ARTICLE 15 : LIVRAISON"
            },
            {
               "text":"<div><p>(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat).</p><ul><li>À l’attention de la Société Gwez - Service Clients - 231, rue saint honoré 75001 Paris, ou via le formulaire « Contactez-nous par e-mail » accessible sur le site Internet fr. www.warenghem.com.</li><li>Je/Nous [*] vous notifie/notifions [*] par la présente ma/notre [*] rétractation du contrat portant sur la vente du bien [*]/pour la prestation de service [*] ci-dessous&nbsp;:</li><li>Bien ___[référence]_____________</li><li>Commandé le [*]/reçu le [*] : ______________</li><li>Nom du (des) consommateur(s)</li><li>Adresse du (des) consommateur(s)</li><li>Signature du (des) consommateur(s) (uniquement en cas de notification du présent formulaire sur papier)</li><li>Date</li></ul><p>[*] Biffez la mention inutile.</p></div>",
               "title":"FORMULAIRE DE RÉTRACTATION"
            }
         ]
      },
      "title":"FAQ"
   }
}
</i18n>