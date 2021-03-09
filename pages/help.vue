<template>
  <div class="bgcard h-100">
	<v-toolbar-bar class="menubar d-flex pa-0 filter-bar">
		<Backbutton class="border-bottom-2"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100">
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
			class="border-bottom-2 d-none d-md-block w-100"
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
    <article class="wa-magazine">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay blackoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
	<v-row class="pa-0 ma-0">
		<v-col cols="12" md="8" class="bgcard pvw">
			<div class="d-none d-md-block">	
				<v-tabs-items v-model="tab">
					<v-tab-item
					:key="1" value="questions"
					>
					<div>
						<template>
							<v-card class="bgcard">
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
							<div class="page-title teradeli-medium pb-10 bgcard">
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
							<div class="page-title teradeli-medium pb-10 bgcard">
								{{$t('shipping.subtitle')}}
							</div>
							<v-expansion-panels focusable inset flat>
								<div class="teradeli-medium page-subtitle pt-10 pb-5">{{$t('tab.sections3.shippingtitle')}}</div>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections3.shipping')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<div class="ma-10" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
								<div class="teradeli-medium page-subtitle pt-10 pb-5">{{$t('tab.sections3.ordertitle')}}</div>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections3.order')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
									{{tab.title}}
									</v-expansion-panel-header>
									<v-expansion-panel-content eager>
										<div class="ma-10" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
								<div class="teradeli-medium page-subtitle pt-10 pb-5">{{$t('tab.sections3.paymenttitle')}}</div>
								<v-expansion-panel
									v-for="(tab,m_idx) in $t('tab.sections3.payment')"
									:key="'tab_'+m_idx"
								>
									<v-expansion-panel-header class="border-bottom-2 py-6" :expand-icon="svgPath3">
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
				</v-tabs-items>
			</div>
			<div class="d-block d-md-none">
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
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<!--fait chier*/-->
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
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
					<!--fait chier*/-->
					<v-expansion-panel>
						<v-expansion-panel-header class="border-bottom-2" :expand-icon="svgPath3">
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
									<v-expansion-panel-content eager>
										<div class="bgcard pa-3" style="font-size:0.9375rem" v-html="tab.text"></div>
									</v-expansion-panel-content>
								</v-expansion-panel>
							</v-expansion-panels>
						</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
			</div>
		</v-col>
		<v-col col="12" md="4" class="pvw bg-white">
			<CustomerServices/>
		</v-col>
	</v-row>
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
					"text": "<p>Since the birth of Warenghem, we have worked hand in hand with French family businesses. From knitting cotton threads to making up including design and packaging, all stages of production are Made in France. Making French is the assurance of continuing to support our fine French companies, our genuine traditional know-how and offering you quality products.</p>Dionysos wine leather bags and leather goods are made at Ateliers Saint Germain near Angers, specializing in fine leather goods.<br>We have selected them because they also work with the largest houses in France, in order to provide a high-end finish.<br><br>\nThe belt buckles are made to measure at Les Ateliers de Mars near Romans sur Isère and are made of certified natural pewter, infinitely recyclable. Why did we select it? For his experience and his achievements for big names.<br><br>\nThe shoes are made in the French shoe capital in Romans sur Isère at In-Soft. Our project was selected by the local economic development program and the \"Romans Cuir\" association for the creation of Dionysos boots.<br><br>\nIn these different workshops, the choice of noble natural materials and plants, the work of experienced craftsmen and the extreme care taken in each phase of the process of creating our products reinforce our tradition of excellence and refinement.",
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
			],
			"sections3": {
				"shippingtitle": "Delivery and return",
				"shipping": [
					{
						"text": "<div> <p> Orders are prepared and shipped within 48 hours of placing your order (excluding end of year holidays and weekends and public holidays) </p> <p> Your parcel is shipped the day of the order if it is placed before 12 noon (excluding weekends and holidays). In periods of high activity, the preparation of the order can take up to 48 / 72h. </ p > <p> You will be notified by e-mail as soon as your package has been shipped and you will receive the tracking number of your order to be kept informed of the proper delivery of your package. &nbsp; </p> <h3 class = ' text-center pb-3 '> Free delivery in France from € 100 excluding express delivery </h3> <p> Delivery to a relay point via Mondial Relay in 4/5 working days (Mainland France excluding Corsica): 4.50 € TTC, free for purchases over € 100. From 8/12 to 25/12, delivery via Mondial Relay is no longer offered to avoid delivery delays. </p> <p> Home delivery via Colissimo, without signature, in 48 / 72h (Metropolitan France except Corsica): &nbsp; 6 € TTC, free from 100 € of purchase. </p> <p> Delivery &nbsp; via DHL in 48 hours (Metropolitan France except Corsica, working days only): 9.90 € TTC <br> Delivery is against signature. You will receive an e-mail from DHL if you wish to change the delivery day or if you prefer to have it dropped off at a relay point. <br> It will be carried out between 8 a.m. and 10 p.m. in Paris and Ile-de-France and between 8 a.m. and 8 p.m. in the rest of the country. &nbsp; </p> <h3 class = 'text-center pb-3'> Delivery to Germany, Austria, Belgium, the Netherlands, Luxembourg, the united kingdom, italy, spain, ireland and portugal free from 100 € excluding express delivery </h3> <p> Delivery in relay point in 4 to 7 working days (only for Belgium and Luxembourg): 4.50 € TTC, free from 100 € of purchase </p> <p> Home delivery in 4 to 7 working days: 6.00 € TTC, free from 100 € of purchase </p> <p> Express home delivery via DHL: 9.90 € TTC </p> <h3 class = 'text-center pb-3'> Free delivery to other countries of the European Union from 100 € excluding express delivery </h3> <p> Home delivery in 4 to 7 working days depending on the destination: € 9.60 including tax, free from 100 € of purchase </p> <p> Express home delivery via DHL: 9.90 € TTC &nbsp; </p> <h3 class = 'text-center pb-3'> Delivery to the rest of the world and dom tom offered from 150 € </h3> <p> Home delivery within 4 to 10 working days depending on the destination: 20 € HT, free from 150 € of purchase </p> <p> For delivery outside the European Union, customs fees may be applied and are the responsibility of the customer, the products being invoiced excluding tax. Except in Switzerland, for this country, the customs fees are fully covered by Warenghem! </p> </div> ",
						"title": "What are the costs and delivery times?"
					},
					{
						"text": "<div class='d-block'>Don't panic, it happens to everyone! Contact us quickly at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media, so that we can do what is necessary. If your order has not yet been shipped, we will do our best to accommodate your request!</div>",
						"title": "I made the wrong delivery address, product or size when ordering."
					},
					{
						"text": "Yes, we deliver to countries in the European Union within 4 to 6 working days after the order has been shipped. The delivery costs are 10 €, whatever the amount of your order.<br><br>\nFor Belgium, delivery is free from 100 € of purchase. Below this amount, Mondial Relay shipping is € 5.90 for home delivery, and € 4.50 for delivery to a relay point. Express delivery is provided by DHL at € 15, regardless of the amount of the order.",
						"title": "Can I have it delivered abroad?"
					},
					{
						"text": "<div class='d-block'>If you are not happy with your Warenghem products, no problem! You have 14 days to return your products to us. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks, specifying your order number and we will send you the procedure to print your return slip. The refund is made within 15 days and will be made automatically on the account associated with the credit card used during the purchase or on the Paypal account used for payment. <br><br>\nOur refund conditions apply only to individuals. For businesses, products are not returned or exchanged if they have been washed or used.</div>",
						"title": "What is Warenghem's return policy?"
					},
					{
						"text": "Did you get the wrong size or did the color not suit you? We accept exchanges of unwashed and unused products within 14 days of your purchase. Of course, we take care of the delivery costs. Send an email to <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social networks. specifying your order number and we will send you the procedure to print your return slip.",
						"title": "What is Warenghem's trading policy?"
					},
					{
						"text": "<p>To remedy this, I therefore invite you to perform the classic return procedure previously inserted",
						"title": "What can I do, my product is defective? (Order placed within 14 days)"
					},
					{
						"text": "<div><p>You placed an order more than a month ago and your item has a defect.</p><p>As a first step, we invite you to send us an email to the address <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> with one or more photo (s) of your item, your order number as well as the maintenance conditions (washing / drying) used for the product?</p><p>If the defect is confirmed by our teams, a Colissimo voucher will be sent to you and you&nbsp;will allow you to return the product to us at our expense.&nbsp;</p><p>Please attach the delivery slip, if you still have it in your possession, indicating the defect encountered on the article. Otherwise, please indicate, on plain paper, your order number and the defect encountered on the item.</p><p>Upon receipt, we will send you the same product (subject to availability), brand new, beautiful</p></div>",
						"title": "What can I do, my product is defective? (Order outside the 14-day deadline)"
					},
					{
						"text": "If the products have not been used or washed, we simply put them back into stock. Otherwise, products that cannot be put back for sale are repackaged by our logistics teams and / or recycled.",
						"title": "What happens to the products that are returned to you?"
					},
					{
						"text": "<p>The subject is serious and divides our clients. You should already know that our packaging has been designed to be recyclable (see compostable) and low consumption of. Most of you like boxes. And some, including you, find the packaging to be too much. We are actively working on this subject. We are considering in particular the possibility of choosing to have a product packaged or not, with returnable packaging.</p>",
						"title": "What if I do not want to receive boxes when ordering?"
					},
					{
						"text": "Your products are shipped the day after your order (excluding weekends and public holidays). You will therefore receive within 48 hours of your order a shipment confirmation email containing a delivery tracking link. do not receive this confirmation email within 72 hours, we invite you to contact us at <a href=\"mailto:hello@warenghem.com\"> hello@warenghem.com </a> or on social networks. <p> We cross France and the world to come to you thanks to three delivery methods: Colissimo, Mondial Relay and DHL. <br> To find out where your order is, nothing could be simpler, you just need to click on the link below corresponding to your chosen delivery method and enter the order tracking number (indicated on your dispatch email) to find out where the delivery is. <br> <br> Colissimo (section follow my Parcel): &nbsp; <a href='http://www.colissimo.fr/particuliers/home.jsp'> http://www.colissimo.fr/particuliers/home.jsp </a> <br > M ondial Relay: &nbsp; <a href='http://www.mondialrelay.fr/suivi-de-colis/'> http://www.mondialrelay.fr/suivi-de-colis/ </a> <br > DHL: &nbsp; <a href='https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html'> https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html </a> </p> ",
						"title": "Where is my order ?"
					},
					{
						"text": "<div><p>It happens!</p>send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped.<p>For a size or product error, you can request a return, free of charge (for France and most of the European Union) once it has been received, from your customer account</p></div>",
						"title": "I made the wrong address, model, size when ordering, what should I do?"
					},
					{
						"text": "<div class='d-block'>Did you get the wrong size or just changed your mind? No problem, send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped. If it is already with the postman, you will have 14 days to return it to us free of charge.</div>",
						"title": "How can I cancel my order?"
					}
				],
				"ordertitle": "Order",
				"order": [
					{
						"text": "<p>The subject is serious and divides our clients. You should already know that our packaging has been designed to be recyclable (see compostable) and low consumption of. Most of you like boxes. And some, including you, find the packaging to be too much. We are actively working on this subject. We are considering in particular the possibility of choosing to have a product packaged or not, with returnable packaging.</p>",
						"title": "What if I do not want to receive boxes when ordering?"
					},
					{
						"text": "Your products are shipped the day after your order (excluding weekends and public holidays). You will therefore receive within 48 hours of your order a shipment confirmation email containing a delivery tracking link. do not receive this confirmation email within 72 hours, we invite you to contact us at <a href=\"mailto:hello@warenghem.com\"> hello@warenghem.com </a> or on social networks. <p> We cross France and the world to come to you thanks to three delivery methods: Colissimo, Mondial Relay and DHL. <br> To find out where your order is, nothing could be simpler, you just need to click on the link below corresponding to your chosen delivery method and enter the order tracking number (indicated on your dispatch email) to find out where the delivery is. <br> <br> Colissimo (section follow my Parcel): &nbsp; <a href='http://www.colissimo.fr/particuliers/home.jsp'> http://www.colissimo.fr/particuliers/home.jsp </a> <br > M ondial Relay: &nbsp; <a href='http://www.mondialrelay.fr/suivi-de-colis/'> http://www.mondialrelay.fr/suivi-de-colis/ </a> <br > DHL: &nbsp; <a href='https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html'> https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html </a> </p> ",
						"title": "Where is my order ?"
					},
					{
						"text": "<div><p>It happens!</p>send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped.<p>For a size or product error, you can request a return, free of charge (for France and most of the European Union) once it has been received, from your customer account</p></div>",
						"title": "I made the wrong address, model, size when ordering, what should I do?"
					},
					{
						"text": "<div class='d-block'>Did you get the wrong size or just changed your mind? No problem, send us a quick email at <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> or on social media. We will cancel your order if it has not already been shipped. If it is already with the postman, you will have 14 days to return it to us free of charge.</div>",
						"title": "How can I cancel my order?"
					}
				],
				"paymenttitle": "Payment and security",
				"payment": [
					{
						"text": "We accept payments by credit card and Paypal (no need to create an account and no fees). You can also pay for your order in 3x from 100 €.",
						"title": "What payment methods do you offer?"
					},
					{
						"text": "Payments by bank card are handled by our partner Stripe, an organization approved by the Prudential Control Authority and member of the GIE bank card. At no time is Warenghem in possession of your bank details thanks to the SSL encryption process.<br><br>Paypal is the leading electronic wallet system, recognized worldwide for its reliability.",
						"title": "Are your payment systems regulated?"
					},
					{
						"text": "After choosing your products and validating your basket, you will simply have to click on Pay in 3 times in the payment step, then click on \"Validate payment\".",
						"title": "How can I benefit from the payment in 3 installments?"
					},
					{
						"text": "<div> <p> Your order appears as a \"payment error\"on our site. </p> <p> This is because it has not been registered and you have not have not been debited. </p> <p> This is due to a problem with the payment method you are using to pay for your order. </p> <p> <ul> <li> the card numbers have been returned incorrectly </li> </ul> <ul> <li> the validity of the card has expired </li> </ul> <ul> <li> A payment limit has been reached on your account </ li > </ul> <ul> <li> The code received by your bank has expired </li> </ul> <ul> <li> your banking organization refuses or suspects a fraudulent payment </li> </ul> </p> <p> Unfortunately, we can only invite you to try with another means of payment, or another bank card, or contact your banking organization to see what is blocking. </p> <p> </p> <p> For information, 3 payment methods are available to pay for your order: </p> <p> </p> <p> - Payment by credit card (Visa, Master Card)</p><p> - Payment by Paypal </p> </div> ",					
						"title": "Your order is in Payment Error"
					},
					{
						"text": "All transactions are secure. The Warenghem site is equipped with an SSL encryption system to protect personal data and payment data.<br><br>Warenghem undertakes not to keep your credit card details.",
						"title": "Payment security"
					},
					{
						"text": "Warenghem has implemented very strict security measures on its site www.warenghem.com in order to guarantee the protection of your personal data.<br><br>The Warenghem site is therefore equipped with an SSL encryption system aimed at protecting personal and payment data.<br><br>Warenghem undertakes not to keep your credit card number.",
						"title": "Is the www.warenghem.com site secure / reliable?"
					}
				]
			}
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
					"text": "<p>Depuis la naissance de Warenghem nous travaillons main dans la main avec des entreprises familiales françaises. Du tricotage des fils de coton à la confection en passant par le design et le packaging, toutes les étapes de fabrication sont Made in France. Fabriquer français c’est l’assurance de continuer à faire vivre nos belles entreprises françaises, nos véritables savoir-faire traditionnels et de vous proposer des produits de qualité.</p>Les sacs et la maroquinerie en cuir de vin Dionysos sont confectionnés aux Ateliers Saint Germain vers Angers, spécialisés en haute maroquinerie.<br>\nNous les avons sélectionné car ils travaillent également avec les plus grandes maisons en France, afin de fournir une finition haut de gamme.<br><br>\n\nLes boucles de ceinture sont réalisées sur mesure chez Les Ateliers de Mars proche de Romans sur Isère et sont en étain naturel certifié, recyclable à l'infini. Pourquoi nous l'avons sélectionné ? Pour son expérience et ses réalisations pour de grands noms.<br><br>\n\nLes souliers sont confectionnés au sein de la capitale francaise de la chaussure à Romans sur Isère chez In-Soft. Notre projet a été selectionné par le programme de développement économique local et l'association \"Romans Cuir\" pour la création des bottines Dionysos.<br><br>\n\nDans ces différents ateliers, le choix de matériaux naturels nobles et végétaux, l’œuvre d’artisans expérimentés et le soin extrême apporté à chacune des phases du processus de création de nos produits renforcent notre tradition de l’excellence et du raffinement.",
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
					"title": "Est-ce que Warenghem proposent des codes promo ou des remises ?"
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
			],
			"sections3": {
				"shippingtitle": "Livraison et retour",
				"shipping": [
					{
						"text": "<div><p>Les Commandes sont préparées et expédiées dans les 48H suivant votre commande (hors période de fêtes de fin d'année et hors week-end et jours fériés)</p><p>Votre colis est expédié le jour de la commande si celle-ci est passée avant 12h (hors week-end et jours fériés). Dans les périodes de forte activité, la préparation de la commande peut prendre jusqu'à 48/72h.</p><p>Vous serez prévenu par e-mail dès l’expédition de votre colis et vous recevrez le numéro de suivi de votre commande pour être tenu informé du bon acheminement de votre colis.&nbsp;</p><h3 class='text-center pb-3'>Livraison en france offerte à partir de 100€ hors livraison express</h3><p>Livraison en point relais via Mondial Relay en 4/5 jours ouvrés (France Métropolitaine hors Corse) : 4,50€ TTC, offert à partir de 100€ d'achat. Du 8/12 au 25/12, la livraison via Mondial Relay n'est plus proposée pour&nbsp;éviter les retards de livraison.</p><p>Livraison à domicile via Colissimo, sans signature, en 48/72h (France Métropolitaine hors Corse) :&nbsp;6€ TTC, offert à partir de 100€ d’achat.</p><p>Livraison&nbsp;via DHL en 48h (France Métropolitaine hors Corse, jours ouvrés uniquement) : 9.90€ TTC<br>La livraison se fait contre signature. Vous recevrez un e-mail de la part de DHL si vous souhaitez modifier le jour de livraison ou si vous préférez le faire déposer dans un point relais.<br>Elle sera effectuée entre 8h et 22h à Paris et Ile-de-France et entre 8h et 20h sur le reste du territoire.&nbsp;</p><h3 class='text-center pb-3'>Livraison vers l'allemagne, l'autriche, la belgique, les pays-bas, le luxembourg, le royaume-uni, l'italie, l'espagne, l'irlande et le portugal offerte à partir de 100€ hors livraison express</h3><p>Livraison en point relais en 4 à 7 jours ouvrés (uniquement pour Belgique et Luxembourg): 4.50€ TTC, offert à partir de 100€ d'achat</p><p>Livraison à domicile en 4 à 7 jours ouvrés : 6.00€ TTC, offert à partir de 100€ d’achat</p><p>Livraison express à domicile via DHL: 9.90€ TTC</p><h3 class='text-center pb-3'>Livraison vers les autres pays de l'union européenne offerte à partir de 100€ hors livraison express</h3><p>Livraison à domicile en 4 à 7 jours ouvrés selon la destination: 9,60€ TTC, offert à partir de 100€ d’achat</p><p>Livraison express à domicile via DHL : 9.90€ TTC&nbsp;</p><h3 class='text-center pb-3'>Livraison dans le reste du monde et les dom tom offerte à partir de 150€</h3><p>Livraison à domicile sous 4 à 10 jours ouvrés selon la destination: 20€ HT, offert à partir de 150€ d’achat</p><p>Pour la livraison hors de l'Union Européenne, des frais de douanes peuvent être appliqués et sont à la charge du client, les produits étant facturés hors taxe. Sauf en Suisse, pour ce pays, les frais de douane sont entièrement pris en charge par Warenghem !</p></div>",
						"title": "Quels sont les coûts et délais de livraison ?"
					},
					{
						"text": "<div class='d-block'>Pas de panique, cela arrive à tout le monde ! Contactez-nous rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, pour que nous puissions faire le nécessaire. Si votre commande n’a pas encore été expédiée, nous ferons le maximum pour répondre à votre demande !</div>",
						"title": "Je me suis trompé d’adresse de livraison, de produit ou de taille lors de ma commande."
					},
					{
						"text": "Oui, nous livrons vers les pays de l’Union européenne en 4 à 6 jours ouvrés après expédition de la commande. Les frais de livraison sont de 10€, quel que soit le montant de votre commande.<br><br>\n\nPour la Belgique, la livraison est offerte dès 100€ d'achat. En-dessous de ce montant, l’expédition Mondial Relay est de 5,90€ pour une livraison à domicile, et de 4,50€ pour une livraison en point relais. La livraison express est assurée par DHL à 15€, quel que soit le montant de la commande.",
						"title": "Puis-je me faire livrer à l’étranger ?"
					},
					{
						"text": "<div class='d-block'>Si vous n’êtes pas satisfait de vos produits Warenghem, aucun problème ! Vous avez 14 jours pour nous renvoyer vos produits. Envoyez un mail à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux, en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour. Le remboursement s’effectue dans un délai de 15 jours et s’effectuera automatiquement sur le compte associé à la carte bancaire utilisée lors de l’achat ou sur le compte Paypal ayant servi au paiement. <br><br>\n\nNos conditions de remboursement ne s’appliquent qu’aux particuliers. Pour les entreprises, les produits ne sont ni repris ni échangés s’ils ont été lavés ou utilisés.</div>",
						"title": "Quelle est la politique de retours de Warenghem ?"
					},
					{
						"text": "Vous vous êtes trompés de taille ou la couleur ne vous convient pas ? Nous acceptons les échanges de produits non lavés et non utilisés dans la limite des 14 jours suivant votre achat. Bien sûr, nous prenons en charge les frais de livraison. Envoyez un mail à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux. en précisant votre numéro de commande et nous vous enverrons la procédure pour imprimer votre bon de retour.",
						"title": "Quelle est la politique d’échanges de Warenghem ?"
					},
					{
						"text": "<p>Pour y remédier, je vous invite donc à effectuer la procédure retour classique insiqué précédemment",
						"title": "Comment faire, mon produit est défectueux ? (Commande passée sous 14 jours)"
					},
					{
						"text": "<div><p>Vous avez passé commande il y a plus d'un mois et votre article présente un défaut.</p><p>Dans un premier temps, nous vous invitons à nous transmettre un mail à l'adresse <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> avec une ou plusieurs photo(s) de votre article, votre numéro de commande ainsi que les conditions d'entretien (lavage/séchage) utilisées pour le produit ?</p><p>Si le défaut est confirmé par nos équipes, un bon Colissimo vous sera transmis en retour et vous&nbsp;permettra de nous renvoyer le produit à nos frais.&nbsp;</p><p>Merci d'y joindre le bon de livraison, si vous l'avez encore en votre possession, en indiquant le défaut rencontré sur l'article. Sinon, merci d'indiquer, sur papier libre, votre numéro de commande et le défaut rencontré sur l'article.</p><p>Dès réception, nous vous renverrons le même produit (sous réserve de disponibilité) tout beau, tout neuf</p></div>",
						"title": "Comment faire, mon produit est défectueux ? (Commande hors délai des 14 jours)"
					},
					{
						"text": "Si les produits n'ont été ni utilisés ni lavés, nous les remettons tout simplement en stock. Dans le cas contraire, les produits qui ne peuvent être remis à la vente sont reconditionnés par nos équipes logistiques et/ou recyclés.",
						"title": "Que deviennent les produits qui vous sont retournés ?"
					}
				],
				"ordertitle": "Commande",
				"order": [
					{
						"text": "<p>Le sujet est sérieux et divise nos clients. Sachez déjà que nos emballages ont été étudiés pour être recyclables (voir compostables) et peu consommateur de. La plupart d'entre vous apprécient les boîtes. Et certains, dont vous, trouvent que l'emballage est de trop. Nous travaillons activement sur ce sujet. Nous réfléchissons notamment à la possibilité de choisir d'avoir un produit emballé ou non, de packaging retournable.</p>",
						"title": "Comment faire si je ne veux pas recevoir de boites lors de ma commande ?"
					},
					{
						"text": "Vos produits sont expédiés le lendemain de votre commande (hors week-end et jours fériés). Vous recevrez donc dans les 48h suivant votre commande un mail de confirmation d’envoi contenant un lien de suivi de livraison. Si vous ne recevez pas ce mail de confirmation dans les 72 heures, nous vous invitons à nous contacter à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.<p>Nous traversons l’hexagone et le monde pour venir jusqu’à vous grâce à trois modes de livraison : Colissimo, Mondial Relay et DHL.<br>Pour savoir où se trouve votre commande rien de plus simple, il vous suffit de cliquer sur le lien ci-dessous correspondant à votre mode de livraison choisi et de rentrer le numéro de suivi (indiqué sur votre mail d’expédition) de commande pour savoir où en est l’acheminement.<br><br>Colissimo (rubrique suivre mon Colis) :&nbsp;<a href='http://www.colissimo.fr/particuliers/home.jsp'>http://www.colissimo.fr/particuliers/home.jsp</a><br>Mondial Relay :&nbsp;<a href='http://www.mondialrelay.fr/suivi-de-colis/'>http://www.mondialrelay.fr/suivi-de-colis/</a><br>DHL :&nbsp;<a href='https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html'>https://www.dhl.fr/exp-fr/dhl_express/suivi_expedition.html</a></p>",
						"title": "Où en est ma commande ?"
					},
					{
						"text": "<div><p>Cela arrive !</p>envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée.<p>Pour une erreur de taille ou de produit, vous pourrez demander un retour, gratuitement (pour la France et la majeure partie de l'Union Européenne) une fois celle-ci reçue, depuis votre compte client</p></div>",
						"title": "Je me suis trompé(e) d’adresse, de modèle, de taille lors de ma commande, que faire ?"
					},
					{
						"text": "<div class='d-block'>Vous vous êtes trompés dans la taille ou avez tout simplement changé d’avis ? Aucun problème, envoyez-nous un mail rapidement à <a href=\"mailto:hello@warenghem.com\">hello@warenghem.com</a> ou sur les réseaux sociaux.. Nous annulerons votre commande si celle-ci n’a pas déjà été expédiée. Si jamais elle est déjà chez le facteur, vous aurez 14 jours pour nous la retourner gratuitement.</div>",
						"title": "Comment puis-je annuler ma commande ?"
					}
				],
				"paymenttitle": "Paiement et sécurité",
				"payment": [
					{
						"text": "Nous acceptons les paiements par carte bancaire et Paypal (sans avoir besoin de créer un compte et sans frais). Vous pouvez également payer votre commande en 3x dès 100€.",
						"title": "Quelles méthodes de paiement proposez-vous ?"
					},
					{
						"text": "Les paiements par carte bancaire sont assurés par notre partenaire Stripe, organisme agréé par l'Autorité de Contrôle Prudentiel et membre du GIE carte bancaire. A aucun moment, Warenghem n'est en possession de vos coordonnées bancaires grâce au processus de cryptage SSL.<br><br>Paypal est le système leader de porte-monnaie électronique, reconnu dans le monde entier pour sa fiabilité.",
						"title": "Vos systèmes de paiement sont ils reglementés ?"
					},
					{
						"text": "Après avoir choisi vos produits et validé votre panier, vous aurez simplement à cliquer sur Payez en 3 fois dans l’étape du paiement, puis à cliquer sur \"Valider le paiement\".",
						"title": "Comment puis-je bénéficier du paiement en 3 fois ?"
					},
					{
						"text": "<div><p>Votre commande apparaît en \"erreur de paiement\" sur notre site.</p><p>C'est que celle-ci n'a pas été enregistrée et vous n'avez pas été débité.</p><p>Cela provient d'un problème avec le moyen de paiement que vous utilisez pour régler votre commande .</p><p><ul><li>les numéros de cartes ont été mal rentrés</li></ul><ul><li>la validité de la carte a expiré</li></ul><ul><li>Un plafond de paiement a été atteint sur votre compte</li></ul><ul><li>Le code reçu par votre banque a expiré</li></ul><ul><li>votre organisme bancaire refuse ou suspecte un paiement frauduleux</li></ul></p><p>Nous ne pouvons, malheureusement, que vous inviter à essayer avec un autre moyen de paiement, ou une autre carte bancaire, ou contacter votre organisme bancaire afin de voir ce qui bloque.</p><p></p><p>Pour information, 3 moyens de paiement vous sont proposés pour régler votre commande :</p><p></p><p>- Le paiement par carte bancaire (Visa, Master Card)</p><p></p><p>- Le paiement par Paypal</p></div>",
						"title": "Votre commande est en Erreur de Paiement"
					},
					{
						"text": "Toutes les transactions sont sécurisées. Le site Warenghem est pourvu d’un système de cryptage SSL visant à protéger les données personnelles et les données de paiement.<br><br>\nWarenghem s’engage à ne pas conserver vos coordonnées de carte bancaire.",
						"title": "Sécurité des paiements"
					},
					{
						"text": "Warenghem a mis en place des mesures de sécurité très strictes sur son site www.warenghem.com afin de garantir la protection de vos données personnelles.<br><br>\nLe site Warenghem est ainsi pourvu d’un système de cryptage SSL visant à protéger les données personnelles et de paiement.<br><br>\nWarenghem s’engage à ne pas conserver votre numéro de carte bancaire.",
						"title": "Le site www.warenghem.com est-il sécurisé / fiable ?"
					}
				]
			}
		},
		"title": "Vos questions"
	}
}
</i18n>