<template>
  <div class="bgcard h-100">
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<Backbutton class="border-bottom-2 h-100"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100 h-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
			{{$t('title')}}
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
    <article class="wa-magazine">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2500w,'" 
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/WA_spray_abstract_grey.png 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
	<v-row class="pa-0 ma-0">
		<v-col cols="12" md="8" class="bgcard pa-0">
			<v-toolbar dense class="menubar d-none d-md-flex pa-0 w-100 elevation-0">
				<v-tabs
					v-model="tab"
					right
					center-active
					show-arrows
					:prev-icon="svgPath2"
					:next-icon="svgPath1"
					class="border-bottom-2 w-100 ma-0 border-right-2"
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
			</v-toolbar>
			<div class="d-none d-md-block pvw">	
				<v-tabs-items v-model="tab">
					<v-tab-item
					:key="1" value="questions"
					>
					<div>
						<template>
							<v-card class="bgcard">
								<div class="home-title teradeli-medium pb-10">
									{{$t('questions.subtitle')}}
								</div>
								<v-expansion-panels focusable inset flat>
									<v-expansion-panel
										v-for="(tab,m_idx) in $t('tab.sections1')"
										:key="'tab_'+m_idx"
									>
										<v-expansion-panel-header ripple class="border-bottom-2 py-6" :expand-icon="svgPath3">
										{{tab.title}}
										</v-expansion-panel-header>
										<v-expansion-panel-content eager>
											<div class="ma-10" style="font-size:0.9375rem" v-html="tab.text"></div>
										</v-expansion-panel-content>
									</v-expansion-panel>
								</v-expansion-panels>
							</v-card>
						</template>
					</div>
					</v-tab-item>
					<v-tab-item
					:key="2" value="material"
					>
					<div>
						<template>
						<v-card class="bgcard">
							<div class="home-title teradeli-medium pb-10 bgcard">
								{{$t('material.subtitle')}}
							</div>
							<v-expansion-panels focusable inset flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections2')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header ripple class="border-bottom-2 py-6" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<div class="ma-10" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-card>
						</template>
					</div>
					</v-tab-item>
					<v-tab-item
					:key="3" value="shipping"
					>
					<div>
						<template>
						<v-card class="bgcard">
							<div class="home-title teradeli-medium bgcard pb-5">
								{{$t('shipping.subtitle')}}
							</div>
							<v-expansion-panels focusable inset flat>
								<Shipping class="pt-5"/>
								<Payments class="pt-5"/>
							</v-expansion-panels>
						</v-card>
						</template>
					</div>
					</v-tab-item>
				</v-tabs-items>
			</div>
			<div class="d-block d-md-none pvw">
				<v-expansion-panels focusable inset flat class="pvw">
					<v-expansion-panel>
						<v-expansion-panel-header ripple class="border-bottom-2" :expand-icon="svgPath3">
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
							<v-expansion-panels focusable inset flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections1')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header ripple class="border-bottom-2" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<v-expansion-panel>
						<v-expansion-panel-header ripple class="border-bottom-2" :expand-icon="svgPath3">
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
							<v-expansion-panels focusable inset flat>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections2')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header ripple class="border-bottom-2" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<v-expansion-panel>
						<v-expansion-panel-header ripple class="border-bottom-2" :expand-icon="svgPath3">
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
							<Shipping class="pt-5"/>
							<Payments class="pt-5"/>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div>
		</v-col>
		<v-col col="12" md="4" class="pvw bg-white">
			<CustomerServicesLayout/>
		</v-col>
	</v-row>
  </div>
</template>

<script>
    import { mdiChevronRight, mdiChevronLeft, mdiChevronDown } from '@mdi/js'
    export default {
        name: 'legale',
        data() {
            return {
				svgPath1: mdiChevronRight,
				svgPath2: mdiChevronLeft,
				svgPath3: mdiChevronDown,
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
	"en": {
		"material": {
			"menu": "Materials and maintenance",
			"subtitle": "Discover our natural materials and preserve the beauty of your item"
		},
		"questions": {
			"menu": "We and our products",
			"subtitle": "Learn more about us and our products"
		},
		"shipping": {
			"menu": "Delivery, return, order",
			"subtitle": "Your order made easy"
		},
		"tab": {
			"menu": "",
			"sections1": [
				{
					"text": "Yes, all of our products are entirely made in France. This is our policy and our values.<br><br>To have more visibility on French traceability, you can use the ORIGIN application which will give you all the details of our products.",
					"title": "Are Warenghem products entirely made in France?"
				},
				{
					"text": "<p>Since the birth of Warenghem, we have worked hand in hand with French family businesses. From knitting linen threads to making up including design and packaging, all stages of production are Made in France. Making French is the assurance of continuing to support our fine French companies, our genuine traditional know-how and offering you quality products.</p>Dionysos wine leather bags and leather goods are made at Ateliers Saint Germain near Angers, specializing in fine leather goods.<br>We have selected them because they also work with the largest houses in France, in order to provide a high-end finish.<br><br>\nThe belt buckles are made to measure at Les Ateliers de Mars near Romans sur Isère and are made of certified natural pewter, infinitely recyclable. Why did we select it? For his experience and his achievements for big names.<br><br>\nThe shoes are made in the French shoe capital in Romans sur Isère at In-Soft. Our project was selected by the local economic development program and the \"Romans Cuir\" association for the creation of Dionysos boots.<br><br>\nIn these different workshops, the choice of noble natural materials and plants, the work of experienced craftsmen and the extreme care taken in each phase of the process of creating our products reinforce our tradition of excellence and refinement.",
					"title": "Where are your manufacturing workshops located?"
				},
				{
					"text": "<p>Warenghem is committed to manufacturing its entire collection entirely in France. From knitting to the way and even to the finishes such as the packaging, everything is entirely made in France. Such a commitment implies at least the doubling of our industrial production costs. In our prices, you pay for a quality product that has style but above all you pay for our commitment to environmentally friendly manufacturing processes such as the Oeko-Tex label for our dyes and the men who produce them in our workshops. .<br>At Warenghem we want to change the world and reinvent the way we consume. We can imagine and manufacture entirely in France the essentials of our cloakrooms while weaving a true, local and authentic link between our partner workshops and our customers committed to ethical consumption. A virtuous circle looking to the future.&nbsp;<br>This is why we are all year round as close as possible to the&nbsp;fair price</a>&nbsp;and that&nbsp;make promotions, with aggressive reduction rates, this is not is not not-easy, it is impossible.&nbsp;</p>",
					"title": "How much does the made in France cost?"
				},
				{
					"text": "Yes, all our products are certified by the vegan organization PETA, and therefore do not contain any animal matter. <br><br>\nOur linens are GOTS and OEKO-TEX® certified, which means that they are free from toxic products for the body and the environment. GOTS is the \"organic farming\" certification and OEKO-TEX® is the first label aimed at guaranteeing the human-ecological qualities of textiles.<br><br>\nOur linen is grown and woven in France.<br><br>\nOur products are audited to be certified of guaranteed French origin. But the process is unfortunately long and expensive. We will keep you posted on the progress of this project. In the meantime, use the ORIGIN application which traces the entire production from the raw material ...",
					"title": "Does Warenghem have vegan and ecological certifications?"
				},
				{
					"text": "Warenghem does not offer discounts or promo codes. Our concept is to eliminate all expensive intermediaries in order to offer you the best quality at the best price. Most fashion players artificially inflate prices in order to finance one-off or continuous promotional operations.",
					"title": "Does Warenghem offer promo codes or discounts?"
				},
				{
					"text": "Click on the Materials and Maintenance link on the product sheets for all maintenance recommendations.",
					"title": "How to maintain Warenghem products?"
				},
				{
					"text": "You can discover all the additional information on our collections on our website www.warenghem.com. Go to the product pages to discover all the information.<br>",
					"title": "Where can I find additional information on Warenghem products?"
				},
				{
					"text": "By subscribing to the Warenghem Newsletter, you will be among the first to be informed of new products, events and news from the House.<br><br>You can also click on the News section to find out about Warenghem news.",
					"title": "How to be informed of Warenghem news?"
				},
				{
					"text": "<p>If you are a brand or a reseller you can contact us at the address: <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><p>If you are a photographer, model or influencer you can contact us at the same address</p><div>Remember to tell us a bit about who you are, specify your universe, the address of your premises, and provide links to your social networks (Instagram, Facebook ...)</div><p>Our teams will then come back , quickly to you!</p></p></p>",
					"title": "What if we partnered together?"
				},
				{
					"text": "<div><p>Contact us at <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><div>Remember to tell us a little about who you are, specify your universe of your newspaper / blog or other, the address of your local, and provide links to your social networks (Instagram, Facebook ...)</div> Our teams will then get back to you quickly!</p></p></p></div>",
					"title": "Do you want to communicate about us?"
				},
				{
					"text": "<div><p>Nothing could be simpler!</p><p><span> Write to us at </span><a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a> </span></p><div>Remember to tell us a little about who you are, to specify your universe of brand, the address of your store, attach one or two photos if you have any, and provide links to your social networks (Instagram, Facebook ...)</div> Our teams will then come back to you quickly!</p></p></p></div>",
					"title": "Become a Reseller"
				}
			],
			"sections2": [
				{
					"text": "<div><p><strong>Unlike animal leather, it does not require maintenance.</strong></p><p>But to preserve the beauty of this item over the years, we recommend that you:</p><ul><li><p>Be careful not to scratch or rub your item against abrasive surfaces, especially leather finishes.</p></li><li><p>Protect your item from excessive moisture and keep it away from direct sources of heat.</p></li><li><p>Gently clean the canvas with a soft cloth dampened with slightly soapy water.</p></li></ul><p>For any questions regarding your article, please contact us at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media.</p></div>",
					"title": "How to take care of leather goods from Dionysus wine?"
				},
				{
					"text": "No maintenance is required for this material.<br><br>\nWe have used a heavy weight used for furniture, which gives it more resistance.<br><br>\nIn addition, the linen used is organic, cultivated and woven in France.<br><br>\nUnlike other brands, Warenghem uses a natural linen (not polyester) lining. Its raw appearance contrasts with the modern look of the products. Flax does not contain any chemicals.",
					"title": "How is the linen lining taken care of?"
				},
				{
					"text": "<p>The linen we use comes from the north of France. All the stages in the transformation of this yarn, such as dyeing or knitting, are carried out entirely in France. This guarantees us full compliance with European standards. We thus minimize the environmental impact of our products.<br>To dye certain colors, the components used are now of plant origin which allows to have Reach (environmental protection) and Oeko-tex (skin protection) certifications but implies lower strengths of some colors and fading over time faster.&nbsp;<br>In addition, all our partners have signed a charter prohibiting their suppliers from producing cotton in territories in a state of war or ruled by dictators and from having the cotton collected by miners.<br>Warenghem attaches real importance to the manufacture of its products, to comfort and softness, all this while respecting ethical values which are close to our hearts.</p>",
					"title": "Where does the linen used by Warenghem come from?"
				},
				{
					"text": "<div><p>Our Dionysos® wine leather is produced using an innovative process that transforms the fibers of the grape into an ecological material.</p><p>It has been extensively tested so that it has the same characteristics as a traditional leather:</p><ul><li><p>Mechanical: high resistance and total waterproofness</p></li><li><p>Aesthetics: fine and harmonious grain</p></li><li><p>Sensory: soft and pleasant to the touch, odorless</p></li></ul></div>",
					"title": "Is Dionysus wine leather strong and durable?"
				}
			]
		},
		"title": "Your questions"
	},
	"fr": {
		"material": {
			"menu": "Matières et entretien",
			"subtitle": "Découvrez nos matières naturelles et préserver la beauté de votre article"
		},
		"questions": {
			"menu": "Nous et nos produits",
			"subtitle": "En savoir plus sur nous et nos produits"
		},
		"shipping": {
			"menu": "Livraison, retour, commande",
			"subtitle": "Votre commande en toute simplicité"
		},
		"tab": {
			"menu": "",
			"sections1": [
				{
					"text": "Oui, tous nos produits sont entièrement fabriqués en France. C'est notre politique et nos valeurs.<br><br>\nPour avoir plus de visibilité sur la tracabilité francaise, vous pouvez utiliser l'application ORIGIN qui vous donnera tous les détails de nos produits.",
					"title": "Les produits Warenghem sont-ils entierement fabriqués en France ?"
				},
				{
					"text": "<p>Depuis la naissance de Warenghem nous travaillons main dans la main avec des entreprises familiales françaises. Du tricotage des fils de lin à la confection en passant par le design et le packaging, toutes les étapes de fabrication sont Made in France. Fabriquer français c’est l’assurance de continuer à faire vivre nos belles entreprises françaises, nos véritables savoir-faire traditionnels et de vous proposer des produits de qualité.</p>Les sacs et la maroquinerie en cuir de vin Dionysos sont confectionnés aux Ateliers Saint Germain vers Angers, spécialisés en haute maroquinerie.<br>\nNous les avons sélectionné car ils travaillent également avec les plus grandes maisons en France, afin de fournir une finition haut de gamme.<br><br>\n\nLes boucles de ceinture sont réalisées sur mesure chez Les Ateliers de Mars proche de Romans sur Isère et sont en étain naturel certifié, recyclable à l'infini. Pourquoi nous l'avons sélectionné ? Pour son expérience et ses réalisations pour de grands noms.<br><br>\n\nLes souliers sont confectionnés au sein de la capitale francaise de la chaussure à Romans sur Isère chez In-Soft. Notre projet a été selectionné par le programme de développement économique local et l'association \"Romans Cuir\" pour la création des bottines Dionysos.<br><br>\n\nDans ces différents ateliers, le choix de matériaux naturels nobles et végétaux, l’œuvre d’artisans expérimentés et le soin extrême apporté à chacune des phases du processus de création de nos produits renforcent notre tradition de l’excellence et du raffinement.",
					"title": "Où se situent vos ateliers de fabrication ?"
				},
				{
					"text": "<p>Warenghem s’engage à entièrement fabriquer en France toute sa collection. Du tricotage à la façon et même aux finitions comme le packaging, tout est intégralement fabriqué en France. Un tel engagement implique au minimum le doublement de nos coûts de revient industriels. Dans nos prix, vous payez un produit de qualité qui a du style mais vous payez surtout notre engagement envers les procédés de fabrication respectueux de l’environnement comme le label Oeko-Tex pour nos teintures et les hommes qui les produisent au sein de nos ateliers.<br>Chez Warenghem nous avons une envie de changer le monde et de réinventer la façon dont nous consommons. On peut imaginer et fabriquer entièrement en France les indispensables de nos vestiaires tout en tissant un lien vrai, local et authentique entre nos ateliers partenaires et nos clients engagés pour une consommation éthique. Un cercle vertueux tourné vers l’avenir.&nbsp;<br>C'est pourquoi nous sommes toute l'année au plus près du&nbsp;juste prix</a>&nbsp;et que&nbsp;faire des promotions, avec des taux de réduction agressifs, ce n'est pas pas-facile, c'est impossible.&nbsp;</p>",
					"title": "Combien coûte le made in France"
				},
				{
					"text": "Oui, tous nos produits sont certifiés par l'organisme végane PETA, et ne contiennent donc aucune matière animale. <br><br>\n\nNos lins sont certifiés GOTS et OEKO-TEX®, ce qui signifie qu’ils sont exempts de produits toxiques pour le corps et l’environnement. GOTS est la certification \"agriculture biologique\" et OEKO-TEX® est le premier label visant à garantir les qualités humano-écologiques des textiles.<br><br>\n\nNos lin sont cultivés et tissés en France.<br><br>\n\nNos produits sont en audit pour être certifié origine France garantie. Mais le processus et malheuresement long et couteux. Nous vous tiendrons au courant de l'anancée de ce projet. En attendant, utilisez l'application ORIGIN qui trace l'intégralité de la fabrication depuis la matière première...",
					"title": "Est-ce que Warenghem possède des certifications véganes et écologiques ?"
				},
				{
					"text": "Warenghem ne propose pas de réductions ni de codes promo. Notre concept est de supprimer tous les intermédiaires couteux afin de vous proposer la meilleure qualité au meilleur prix. La plupart des acteurs de la mode gonflent artificiellement les prix afin de financer les opérations de promotions ponctuelles ou continues.",
					"title": "Est-ce que Warenghem propose des codes promo ou des remises ?"
				},
				{
					"text": "Cliquez sur le lien Matières et Entretien des fiches produits pour obtenir l’ensemble des recommandations d’entretien.",
					"title": "Comment entretenir les produits Warenghem ?"
				},
				{
					"text": "Vous pourrez découvrir toutes les informations complémentaires sur nos collections sur notre site internet www.warenghem.com. Rendez-vous dans les pages produits pour découvrir l’ensemble des informations.<br>",
					"title": "Où trouver des informations complémentaires sur les produits Warenghem ?"
				},
				{
					"text": "En vous inscrivant à la Newsletter Warenghem, vous serez parmi les premiers à être informés des nouveautés produits, des événements et des actualités de la Maison.<br><br>\nVous pouvez également cliquer sur la section News afin de découvrir l’actualité de Warenghem.",
					"title": "Comment être informé(e) des actualités Warenghem ?"
				},
				{
					"text": "<p>Si vous êtes une marque ou un revendeur vous pouvez nous contacter à l’adresse : <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><p>Si vous êtes photographe, mannequin ou influenceur vous pouvez nous contacter à la même adresse</p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers, l'adresse de vos locaux, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div><p>Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p>",
					"title": "Et si nous réalisions un partenariat ensemble ?"
				},
				{
					"text": "<div><p>Contactez nous à l’adresse : <a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a></p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers de votre journal/blog ou autres, l'adresse de vos locaux, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div> Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p></div>",
					"title": "Vous souhaitez communiquer sur nous ?"
				},
				{
					"text": "<div><p>Rien de plus simple !</p><p><span> Ecrivez-nous à </span><a href=\"mailto:administration@warenghem.com\">administration@warenghem.com</a> </span></p><div>Pensez à nous raconter un peu qui vous êtes, préciser votre univers de marque, l'adresse de votre boutique, joindre une ou deux photos si vous en avez, et donner des liens vers vos réseaux sociaux (Instagram, Facebook...)</div> Nos équipes reviendront ensuite, rapidement vers vous !</p></p></p></div>",
					"title": "Devenir Revendeur"
				}
			],
			"sections2": [
				{
					"text": "<div><p><strong>Contrairement au cuir animal, il ne demande pas d'entretien.</strong></p><p>Mais pour préserver au fil des ans la beauté de cet article, nous vous recommandons :</p><ul><li><p>De veillez à ne pas érafler ou frotter votre article contre des surfaces abrasives, en particulier les finitions en cuir.</p></li><li><p>De protéger votre article de l’humidité excessive et de le maintenir à l’abri des sources directes de chaleur.</p></li><li><p>De nettoyer délicatement la toile avec un chiffon doux imbibé d’eau légèrement savonneuse.</p></li></ul><p>Pour toute question relative à votre article, veuillez prendre contact avec nous à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.</p></div>",
					"title": "Comment prendre soin des articles en cuir de vin Dionysos ?"
				},
				{
					"text": "Aucun entretien n'est requis pour cette matière.<br><br>\n\nNous avons utilisé un grammage élevé utilisé pour l'ameublement, ce qui lui confère plus de résistance.<br><br>\n\nDe plus, le lin utilisé est bio, cultivé, et tissé en France.<br><br>\n\nContrairement aux autres marques, Warenghem utilise une doublure en lin naturel (et non en polyester). Son aspect brut contraste avec l'allure moderne des produits. Le lin ne contient aucun produit chimique.",
					"title": "Comment s'entretient la doublure en lin ? "
				},
				{
					"text": "<p>Le lin que nous utilisons provient du nord de la France. Toutes les étapes de transformation de ce fil comme sa teinture ou son tricotage sont entièrement réalisées en France. Cela nous garantit un parfait respect des normes européennes. Nous minimisons ainsi l’impact environnemental de nos produits.<br>Pour teindre certains coloris, les composants utilisés sont maintenant d'origine végétale ce qui permet d'avoir des certifications Reach (protection de l'environnement) et Oeko-tex (protection de la peau) mais implique des solidités moins importantes de certaines couleurs et une décoloration dans le temps plus rapide.&nbsp;<br>De plus, tous nos partenaires ont signé une charte interdisant leurs fournisseurs de produire du coton sur les territoires en état de guerre ou dirigés par des dictateurs et de faire ramasser le coton par des mineurs.<br>Warenghem accorde une réelle importance à la fabrication de ses produits, au confort, à la douceur tout cela en respectant des valeurs éthiques nous tenant à cœur.</p>",
					"title": "D'ou provient le lin utilisé par Warenghem ? "
				},
				{
					"text": "<div><p>Notre cuir de vin Dionysos® est produit grâce à un procédé innovant qui transforme les fibres du raisin en une matière écologique.</p><p>Il a été longuement testé afin qu'il ait les mêmes caractéristiques qu'un cuir traditionnel :</p><ul><li><p>Mécaniques : forte résistance et imperméabilité totale</p></li><li><p>Esthétiques : grain fin et harmonieux</p></li><li><p>Sensorielles : touché doux et agréable, sans odeur</p></li></ul></div>",
					"title": "Le cuir de vin Dionysos est-il résistant et durable ?"
				}
			]
		},
		"title": "Vos questions"
	}
}
</i18n>