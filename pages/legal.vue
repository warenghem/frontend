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
          :key="1" value="protection"
        >
          <div>
            <template>
              <v-card class="bgcard">
                <v-tabs vertical class="pb-10">
                  <div class="page-subtitle teradeli-medium pl-3 py-10">
                    {{$t('tabs[0].subtitle')}}
                  </div>
                  <v-tab 
                    v-for="(tab,m_idx) in $t('tab.sections1')"
                    :key="'tab_'+m_idx"
                    style="text-transform: unset;white-space: normal;justify-content: unset;text-align:left"
                    class="my-1"
                  >
                      {{tab.title}}
                  </v-tab>
                  <v-tab-item
                    v-for="(tab,m_idx) in $t('tab.sections1')"
                    :key="'tab_'+m_idx"
                  >
                    <v-card color="bgcard" class="pvw" flat>
                      <v-card-text v-html="tab.text">
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="2" value="conditions"
        >
          <div>
            <template>
              <v-card class="bgcard">
                <v-tabs vertical class="pb-10">
                  <div class="page-subtitle teradeli-medium pl-3 py-10">
                    {{$t('tabs[1].subtitle')}}
                  </div>
                  <v-tab 
                    v-for="(tab,m_idx) in $t('tab.sections2')"
                    :key="'tab_'+m_idx"
                    style="text-transform: unset;white-space: normal;justify-content: unset;text-align:left"
                    class="my-1"
                  >
                      {{tab.title}}
                  </v-tab>
                  <v-tab-item
                    v-for="(tab,m_idx) in $t('tab.sections2')"
                    :key="'tab_'+m_idx"
                  >
                    <v-card color="bgcard" class="pvw" flat>
                      <v-card-text v-html="tab.text">
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </template>
          </div>
        </v-tab-item>
        <v-tab-item
          :key="3" value="mentions"
        >
          <div>
            <template>
              <v-card flat class="bgcard pvw"
                v-for="(tab,m_idx) in $t('tab.sections3')"
                :key="'tab_'+m_idx"
              >
                <div class="page-title teradeli-medium">
                  {{tab.title}}
                </div>
                <v-card-text v-html="tab.subtitle">
                </v-card-text>
                <div class="page-subtitle teradeli-medium pl-5 pb-5">
                  {{$t('tabs[2].subtitle')}}
                </div>
                <v-card-text class="bg-white pvw rounded-lg" v-html="tab.text">
                </v-card-text>
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
					{{$t('tabs[0].menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('tabs[0].subtitle')}}
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
					{{$t('tabs[1].menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('tabs[1].subtitle')}}
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
					{{$t('tabs[2].menu')}}
				</div>
				<div class="teradeli-light">
					{{$t('tabs[2].subtitle')}}
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
      </v-expansion-panels>
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
                tabs: this.$t('tabs'),
                tab: "subscribe"
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
		"tab": {
			"menu": "Data protection policy",
			"sections1": [
				{
					"text": "<div><p>This Data Protection Policy (the \"Policy\") describes how Gwez SAS, a company incorporated under French law with its registered office at 231, rue Saint Honoré, 75001 Paris, France, and / or its affiliated companies (\"Warenghem\") process, as data controller, the personal data of their customers and prospects (\"You\", \"Your\", \"Your\") in order to provide You with the best possible customer experience.</p><p>Warenghem and / or Your locally responsible Warenghem entity (\"We\", \"Our\", or \"Our\") collect, store, process, use and communicate personal data concerning you when You use the sites Internet and mobile applications Warenghem, Our connected products (if and when these are available), or when You visit Our pages on social networks, or You go to one of Our partner stores in&nbsp;Your country /region.</p></div>",
					"title": "General"
				},
				{
					"text": "<div><p>Warenghem collects the following categories of data, for the purposes described below in Our Policy:</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;Your identity and contact details (such as name, address, phone number or email address), when you decide to communicate them, for example to create an online account, participate in an event, make a purchase or complete a customer information form in store, make a return or exchange, as well as the information on your identity document when you request a tax refund or a \"click and collect\" service in store.</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;Payment information: for example credit card numbers, bank account numbers, PayPal account information or other payment information you need to provide to pay for the products or services you have ordered from Us.</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;Demographic information such as your gender and date of birth;</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;Preferences and areas of interest that you choose to communicate during your discussions or privileged meetings with Our sales advisers (such as your preferences on Our collections or other brands, your size, your lifestyle, or summary information on your family circle);</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;Information relating to a possible adverse effect caused by our cosmetic products, which may include health data;</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;Information that you communicate publicly, on Our social networks or Our websites, for example to give your opinion on a product;</p><p>g)&nbsp;&nbsp;&nbsp;&nbsp;Information relating to your online or in-store purchases (type, quantity of products purchased and their prices);</p><p>h)&nbsp;&nbsp;&nbsp;&nbsp;If you use Our websites: information about your browser and your surfing behavior;</p><p>i)&nbsp;&nbsp;&nbsp;&nbsp;If you use Our mobile applications: we collect your GPS position, with your consent if this is necessary, that the frequency with which you use the 'app and where you downloaded it. We also collect information about the browser you use and your surfing behavior.</p><p>j)&nbsp;&nbsp;&nbsp;&nbsp;If you use Our connected products, We collect information about your use of these products (such as which features of Our product you use the most. , or information on the battery level), as well as geolocation data if this is necessary to provide you with the service you have requested;</p><p>k)&nbsp;&nbsp;&nbsp;&nbsp;We also collect, on third party websites or social networks, information posted by people about Warenghem products or services, to the purposes described below.</p><p>We collect this data directly from you (when you create an account on Our sites / applications, make a purchase, or communicate with Our advisers), or passively (through the use of cookies or trackers browser), or indirectly from third parties (with regard to information about Warenghem products or services posted on social networks).</p><p>If you do not wish to submit data concerning you when it is necessary for the performance of a contract or a service that you request, or when it is required by law, you will not be able to receive the requested product or service.</p></div>",
					"title": "1. What categories of data do we collect?"
				},
				{
					"text": "<div><p>Your data is used for the purposes described below, which we will detail during collection:</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;better understand your interests and better understand how you use Our products and services: We use your data to improve Our website, Our applications and Our products. We also use your data to personalize your experience with Warenghem and tailor Our marketing activities to your needs and preferences, as it is in Our legitimate interest to better serve you and meet your expectations;</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;process your requests, answer your questions, manage any complaints: We use your data, in particular to deliver your orders. We use your data to send you the information you request, or to communicate with you about your account or Our relationship (for example to collect your impressions, or to inform you of changes to the Site or of this Policy or of updates. on duty). In this case, the processing of your information is intended for the execution of the contract concluded between you and Warenghem;</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;for security purposes: we process your data to protect Our company, Our customers, Our sites or our applications against the risk of fraud, theft or any wrongdoing that may affect our business because it is in Our legitimate interest to ensure the security of our business both online and offline;</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;fight against counterfeiting, and against sales of Warenghem products made in violation of our general conditions and in violation of our exclusive distribution network (in analyzing, in particular the quantities or frequency of purchases made) to the extent that the fight against counterfeiting and the protection of our distribution network are in our legitimate interest;</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;for marketing purposes: to contact you, with your consent where applicable, about new products and special offers that may be of interest to you;</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;for analysis and statistical purposes: We carry out analyzes on the e-reputation of Our company or Our products, and measure the 'effectiveness of Our campaigns or events both online and offline, as it is in our legitimate interest to preserve the image of Warenghem and improve our marketing campaigns;</p><p>g)&nbsp;&nbsp;&nbsp;&nbsp;other purposes: we keep a history of transactions and other commercial documents to meet legal and administrative requirements, the needs of our insurers, or for audit purposes.</p></div>",
					"title": "2. What do we use your data for?"
				},
				{
					"text": "<div><p>We only communicate or share your data in the following cases:</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;with companies of the Gwez group: only authorized personnel whose activity justifies access to information, for internal audit, administrative management or billing purposes, but also to ensure that you will benefit from the same quality of service&nbsp;whatever the country or region in which you make a purchase. You will find a list of our companies around the world with service providers acting on our behalf: for example, technical service providers in charge of sending emails to Us, or hosting our website. We may also share information about you with vendors who help us operate Our websites;</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;with certain business partners, with your agreement: for example, we will share your data with third parties who organize an event jointly with us;</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;with a third party in the context of a corporate restructuring or reorganization (including dissolution or liquidation). This includes any transfer, assignment or sale in whole or in part of Our business or Our assets as part of a merger.</p><p>d)&nbsp; &nbsp; when we are legally required to do so to comply with applicable law, to respond to a court decision, or more generally to satisfy any request from an authority empowered.</p></div>",
					"title": "3. Who do we share your data with?"
				},
				{
					"text": "",
					"title": "4. Cookies and trackers"
				},
				{
					"text": "<div><p>Your data is only kept, in a form that allows you to be identified, for the period reasonably necessary for the pursuit of the purposes described above, or for the storage period permitted by law. The retention period of your data is determined according to the following criteria:</p><p>●&nbsp;&nbsp;Your data is processed for the purposes described in article 2 for a period of</p><p>&nbsp; &nbsp; ○&nbsp;&nbsp;three (3) years from our last contact, if you are a prospect (i.e. if you have not made any purchase from Warenghem, but that you are interested in the news of our House<br></p><p>&nbsp; &nbsp; &nbsp;○&nbsp;&nbsp;ten (10) years following the end of our commercial relationship, if you are a customer (that is to say that you have purchased one of our products or services)</p><p>●&nbsp;&nbsp;Your data will then be archived, and can be used within the framework of a dispute, action or litigation, during the applicable limitation period. In the case of a legal action, the data may be kept until exhaustion of the remedies, and will then be deleted or archived in the limits pe rmised by law</p><p>Your data is then destroyed or anonymized.</p></div>",
					"title": "5. Retention period"
				},
				{
					"text": "<div><p>You can request access to the data concerning you that We hold. In this case, we will provide you with the information required by law on the purposes of the processing, the categories of data processed, the categories of recipients, the retention period of the data, etc.).</p><p>You can also obtain a copy of any information about you that We hold, in a compatible and structured format allowing you to exercise your right to data portability, for processing based on your consent or execution of a contract between Warenghem and you.</p><p>You can also provide your instructions on how you want your data to be handled after your death.</p><p>You can also ask Us to correct, modify, or delete, any information that is incomplete, out of date or inaccurate.&nbsp;</p><p>You can request the deletion of your data if (i) they are no longer necessary for the intended purpose, (ii) you have withdrawn your consent when the processing in question was based on this consent, (iii) you have objected to the processing (iv) the data processing is illegal, (v) the information must be erased in accordance with legal obligations applicable to Warenghem. Warenghem will take reasonable steps to notify other entities of the Warenghem group of such erasure.</p><p>You can request the limitation of processing (i) if you dispute the accuracy of your personal information, which will allow Warenghem to verify this accuracy, (ii) if you wish to limit the processing of your information instead that the deletion of these despite the fact that the processing is unlawful (iii) if you want Warenghem to keep your information because you need it for the establishment, exercise or defense of your legal rights (iv ) the time necessary for Warenghem to examine the merits of your opposition request.</p><p>You also have the right to lodge a complaint with the competent supervisory authority.</p><p>The contact details of our Data Protection Officer are: hello@warenghem.com.</p><p>When the processing of your data is based on consent (for example if you have agreed to receive commercial communications), you can withdraw this consent at any time, which will not affect the legitimacy of the operations of processing carried out before the withdrawal of your consent.</p><p>When the processing we carry out is based on our legitimate interest, you may object to such processing if it turns out that our interests or fundamental freedoms outweigh our legitimate interests.</p><p>To exercise these rights, you can contact: hello@warenghem.com</div>",
					"title": "6. Your rights"
				},
				{
					"text": "<div><p>We will ensure an adequate level of protection of your data and ensure that appropriate technical and organizational security measures (including awareness raising and training of personnel involved in processing operations) are in place to protect your data against accidental or unlawful destruction, accidental loss or alteration, unauthorized disclosure or access, and against all other forms of unlawful processing.</p><p>However, since the Internet is not completely secure, we cannot guarantee that your personal information stored or sent will be completely secure. We encourage you to exercise caution when using the Internet to access our websites, applications or social media.</p></div>",
					"title": "7. Protection of your personal data"
				},
				{
					"text": "<div><p>Our websites and applications are not intended for children. We do not knowingly collect information about children without the consent of a parent or guardian, except as permitted by law.</p><p>You must be at least sixteen years of age to provide us with your data, and eighteen years of age to transact in Our stores or on Our websites or applications. By entering into these transactions, you warrant that you are at least eighteen years of age and are fully able to enter into and be legally bound by such transactions.</p><p>If We are notified, or if We learn that a minor has submitted information about him / her through Our media or otherwise, We will delete that information.</p></div>",
					"title": "8. Children"
				},
				{
					"text": "<div><p>It is possible that links are made by third party sites or services that We do not control and which are governed by their own privacy policies. This Policy does not apply to these third party sites. We invite you to consult the privacy policies of the third-party sites that you visit to find out how they treat your personal data.</p></div>",
					"title": "9. Third party sites"
				},
				{
					"text": "<div><p>Our Policy is subject to change to reflect changes in the way we handle information about you. We will make sure you are informed of any material changes. We will also post an update to this Policy on the site.</p></div>",
					"title": "10. Modification of the policy"
				},
				{
					"text": "<div><p>If you would like Us to update the information We have about you or your preferences, or if you have any questions regarding the protection of your information, please&nbsp;contact Us by email at hello@warenghem.com</p><p>Update 04/01/2021</p></div>",
					"title": "11. Contact us"
				}
			],
			"sections2": [
				{
					"text": "<div><p>The company Gwez (hereinafter referred to as Gwez) markets Warenghem articles in France.</p><p>Anxious to always better meet the expectations of its customers, Warenghem wanted to set up, alongside the network of stores it operates, a distance selling network by telephone and electronically (Internet) of some of its products.</p><p>The system thus put in place, which supposes an active approach on the part of the customer, fully complies with the requirements for distance selling and, in particular, with Articles L. 111-1 , L.112-1 and L. 221-1 and following of the Consumer Code. The use of the distance selling process described in these General Conditions of Sale is reserved (i) only for consumers, within the meaning of the law and case law, acting exclusively for their personal needs and without direct connection with a commercial activity and (ii) for delivery in \"Metropolitan France\" (this term being understood as including Corsica and excluding the overseas departments and territories as well as Monaco).</p></div>",
					"title": "PRELIMINARY ARTICLE"
				},
				{
					"text": "",
					"title": "ARTICLE 1: SCOPE OF APPLICATION"
				},
				{
					"text": "<div><p>Gwez</p><p>SAS with a capital of 40,010 euros registered with the Marseille Trade and Companies Register under number 891678856</p><p>Headquarters: 231 rue saint honoré - 75001 Paris TVA : FR68891678856</p></div>",
					"title": "ARTICLE 2: IDENTIFICATION OF THE AUTHOR OF THE OFFER"
				},
				{
					"text": "<div><p>Information relating to all Warenghem items likely to be sold through Gwez Customer Service is available, with their references, in all Warenghem stores, as well as on the Site.</p></div>",
					"title": "ARTICLE 3: INFORMATION RELATING TO ARTICLES"
				},
				{
					"text": "<div><b>1. Orders by Internet&nbsp;</b></p><p>Orders can be placed by Internet on the merchant site accessible from the French version of the Site. The customer is responsible for the telecommunication costs when accessing the Internet and using the Site.</p><p>The photographs, graphics and descriptions of the products offered for sale are only indicative and do not commit Gwez. Customers have the possibility to obtain additional information by contacting Warenghem Customer Service.</span></p><p><span>In the event of a manifest error between the characteristics of the articles and their representation, Gwez cannot be held liable.</span></p><p><span>To be able to purchase a product, the customer must complete an order form specifying certain mandatory fields so that his selection can be taken into account by Gwez.</span></p><p><span>In the event of prolonged inactivity during the connection it is possible that the selection of the items chosen before this inactivity is no longer guaranteed. The customer will be invited to resume his selection of products from the start.</span></p><p><span>All the steps necessary for the sale will be specified on the Site in accordance with article 1369-1 of the civil code. Pursuant to the provisions of article 1369-4 of the Civil Code, the customer will have the possibility, before confirming his order definitively, to check the details of his order and its total price and to correct any errors, before confirming this to express his acceptance. From the moment the customer has validated his order, Gwez will acknowledge receipt of it without delay and electronically.</span></p><p><span>However, the sale will not be considered final until the customer has sent the order confirmation by Gwez, specifying the shipment of the items.</span></p><p><b><span>2. Rejection of orders</span></b></p><p>It is reminded that purchases made on the Site are reserved for consumers for their own use (or gifts) and not for resale. Consequently, Gwez only sells its products in quantities corresponding to the usual average needs of a household.</p></div>",
					"title": "ARTICLE 4: ORDERS OF ARTICLES"
				},
				{
					"text": "<div><p>The price of the items is inclusive of all taxes. Unless expressly stipulated otherwise when ordering on the Site, the delivery costs of the articles are borne by Gwez.</p><p>The price including VAT of each of the items that the customer wishes to acquire, as well as the amount of transport costs relating to their delivery (if these transport costs are not covered by Gwez), will be communicated to him. when connecting to the Site.</p><p>In accordance with the provisions of article L.221-11 of the Consumer Code, the customer will receive, at the latest upon delivery, for each item, written confirmation of the price paid detailing the price of the articles and the delivery costs, if applicable, charged to him.</p></div>",
					"title": "ARTICLE 5: PRICE OF ITEMS"
				},
				{
					"text": "<div><p>Payment for customer purchases can be made by bank card (cards from the CB, Visa, Eurocard / Mastercard network are accepted), issued on bank accounts domiciled within the European Union, the Norway or Switzerland, by bank transfer from a sender account in the name of the customer and domiciled in Metropolitan France, by Paypal from a verified account.</p><p>In the context of Internet payments, the control will be carried out online with the competent banking establishments and organizations, questioned via the system of the company STRIPE. This company, located in the United States, will store and process information relating to each order, including bank card details, in a secure environment for this purpose. The transfer of the customer's personal data to STRIPE has been authorized by the CNIL (deliberation DF-2011-251) and is governed by the standard contractual clauses established by the European Commission.</p><p>In addition, in order to fight against Internet fraud, Gwez implements processing relating to risk assessment and the prevention of payment fraud for purchases on the Site, for which the company Warenghem also calls on the company STRIPE. The data collected is intended only for authorized persons in charge of the fight against fraud within the company Warenghem. This processing has also been authorized by the CNIL.</p><p>In the event that, for any reason whatsoever (opposition, refusal of the issuing center, etc.), the debit of the sums due by the customer would prove to be impossible, the purchase process on the Internet would be canceled .</p><p>The provisions of article 1341 of the Civil Code are inapplicable to sales concluded at a distance by the company Gwez.</p></div>",
					"title": "ARTICLE 6: TERMS OF PAYMENT"
				},
				{
					"text": "<div><p>The customer has the option of having the items delivered to a natural person, for example as part of a gift.</p><p>It is understood that no delivery can be made to hotels, to business addresses, or to PO boxes. The delivery of the articles will take place after the payment of the amount of the order has been recorded.</p><p>In accordance with the provisions of the Consumer Code, the delivery of the items ordered will take place within the deadlines communicated by Gwez and, failing any indication, in any event no later than 30 days from the order, subject to full payment of the price.</p><p>Any deadlines communicated by Gwez will only be indicative. If, upon delivery, the exterior appearance of the package is not perfect, the customer will open it in the presence of the carrier to check the condition of the item. In the event of damage to the article, the customer will detail them precisely on the delivery note, the provisions of article 11 below remaining otherwise applicable.</p></div>",
					"title": "ARTICLE 7: DELIVERY"
				},
				{
					"text": "",
					"title": "ARTICLE 8: RIGHT OF WITHDRAWAL - REFUND AND EXCHANGE"
				},
				{
					"text": "",
					"title": "ARTICLE 9: CONFORMITY - GUARANTEE - AFTER-SALES SERVICE"
				},
				{
					"text": "<div><p>For any information, complaint or question relating to the Mail Order Conditions set up by the company Gwez or to the items themselves, customers should contact Warenghem Customer Service on the Site using the form \"Contact us by e-mail\", recalling their order number if necessary.</p></div>",
					"title": "ARTICLE 10: CLAIMS - INFORMATION"
				},
				{
					"text": "<div><p>The Warenghem brand, as well as all figurative and non-figurative brands and more generally all other brands, illustrations, images and logos appearing on Warenghem articles, their accessories or their packaging, whether registered or not, are and will remain the exclusive property of the company Gwez. Any total or partial reproduction, modification or use of these brands, illustrations, images and logos, for any reason and on any medium whatsoever, without the express prior consent of the company Warenghem, is strictly prohibited. The same applies to any combination or conjunction with any other brand, symbol, logo and more generally any distinctive sign intended to form a composite logo. The same will apply to all copyrights, designs and patents which are the property of the Gwez company.</p></div>",
					"title": "ARTICLE 11: INTELLECTUAL PROPERTY RIGHTS"
				},
				{
					"text": "<div><p>The performance by the company Gwez of all or part of its obligations will be suspended in the event of the occurrence of a fortuitous event or force majeure which would hamper or delay the performance.</p><p>Are considered as such, in particular, without this list being exhaustive, the war, the riots, the insurrection, the social disturbances, the strikes of all kinds and the supply problems of the company Gwez.</p><p>The company Gwez will inform the customer of such a fortuitous event or force majeure within seven (7) days of its occurrence. In the event that this suspension continues beyond a period of fifteen (15) days, the customer would then have the possibility of terminating the current order, and it would then be reimbursed under the conditions set out in article 8 of these General Conditions of Sale.</p></div>",
					"title": "ARTICLE 12: FORCE MAJEURE"
				},
				{
					"text": "<div><p>These General Conditions of Sale are subject to French law. In the event of a difficulty arising during the ordering or delivery of Warenghem articles, the customer will have the possibility, before any legal action, to seek an amicable solution and to have recourse to the CMAP - Center de Médiation et d 'Arbitrage de Paris, consumer mediator to which <a>the company Gwez</a></p><p>To submit a dispute to the mediator, the client can fill out the form on the CMAP website: www.cmap. fr tab “you are: a consumer”, send your request by regular or registered mail to CMAP Médiation Consommation, 39 avenue Franklin D. Roosevelt, 75008 PARIS, or send an e-mail to consumption@cmap.fr. Whatever the means used to enter the CMAP, the customer's request must contain the following elements to be processed quickly: his postal address, e-mail and telephone as well as the full name and address of Warenghem, a brief statement of the facts , and proof of the steps taken by the client with Warenghem prior to referral to CMAP.</p><p>In addition, the European Commission provides an online dispute resolution platform (ODR) within the framework of online sales or service contracts between a consumer residing in the European Union and a professional established in the European Union.</p><p>This platform is accessible at the following address: https://webgate.ec.europa.eu/odr/. Recourse to mediation is an alternative mechanism which is not a precondition for bringing legal action. Any dispute that may result from the interpretation or execution of these General Conditions of Sale and its consequences will be subject to the exclusive jurisdiction of the French courts.</p></div>",
					"title": "ARTICLE 13: DISPUTES - APPLICABLE LAW"
				},
				{
					"text": "<div><p>Notwithstanding the provisions of article 4 of the above General Conditions:</p><p>The order of personalized articles via the Personalization service can only be done via the Site, at the 'exclusion of any order by telephone to Customer Service. When using the personalization service on the Site, their creation choices are only remembered for the duration of their session. If the customer interrupts his session before finalizing his order, he will therefore be invited to resume his creation choices from the start when he connects again.</p><p>Once the order has been validated by the customer on the Site, the customer will be debited for the amount of his order. The customer will then receive an email notifying them of the shipment of the items.</p><p>The order of products made on demand from the line \"can be made with Customer Service or via the Site. Once the order has been placed, the customer will receive an email informing him of the processing of his order and will be debited for the total amount of his order. The customer will then receive an email notifying them of the shipment of the item.</p><p>The ordering of personalized items by “hot stamping” is done under the same conditions as those mentioned in the General Conditions above.</p></div>",
					"title": "ARTICLE 14: ORDER PROCEDURE"
				},
				{
					"text": "<div><p>Notwithstanding the provisions of article 7 of the General Conditions above:</p><ul><li>The delivery of personalized items ordered via the personalization service takes place at the latest within a period of twelve (12) weeks from the day following the order, subject to full payment of the price.</li><li>The delivery of personalized items by “hot stamping” takes place within the same period as that mentioned in the General Conditions above.</li></ul></div>",
					"title": "ARTICLE 15: DELIVERY"
				},
				{
					"text": "<div><p>(Please complete and return this form only if you wish to withdraw from the contract).</p><ul><li>For the attention of the Gwez Company - Customer Service - 231, rue saint honoré 75001 Paris, or via the \"Contact us by e-mail\" form available on the fr website. www.warenghem.com.</li><li>I / We [*] notify you / notify [*] hereby my / our [*] withdrawal from the contract for the sale of the property [*] / for the provision of service [*] here -dessous&nbsp;:</li><li>Good ___ [reference] _____________</li><li>Ordered on [*] / received on [*]: ______________</li><li>Name of consumer ( s)</li><li>Address of consumer (s)</li><li>Signature of consumer (s) (only if this form is notified on paper)</li><li>Date</li></ul><p>[*] Cross out where applicable.</p></div>",
					"title": "WITHDRAWAL FORM"
				}
			],
			"sections3": [
				{
					"subtitle": "<div><p>This site (the \"Site\") is published by Gwez, SAS with a capital of 40,010 euros, registered in the Marseille Trade and Companies Register under number 891 678 856, whose head office is located 231 rue saint honoré 75001 Paris.<br></p></div>",
					"text": "<div><p>This site (the \"Site\") is published by Gwez, SAS with a capital of 40,010 euros, registered in the Marseille trade and companies register under number 891 678 856, whose head office is located 231 rue saint honoré 75001 Paris.</p><p>The Site's Publishing Director is: Kevin Brosseau.<br><br>The Site is hosted by the company <b>Netlify</b>, a private equity company headquartered in San Francisco, California</p><p>Access to the Site as well that the use of its content are subject to the conditions of use described below. The fact of accessing and browsing the Site constitutes on the part of the visitor an unconditional acceptance of the following stipulations:<br><br>The Site is the exclusive property of the company Gwez, alone authorized to use and exploit the rights of intellectual property and personality rights attached to this site, in particular trademarks, designs and models copyright and image rights, as original or by the effect of an express authorization, patent and any right of intellectual property.<br><br>The use of all or part of the Site, in particular by downloading, reproduction, transmission or representation for purposes other than for personal and private use for non-commercial purposes is strictly prohibited.<br><br> Gwez informs the visitor that Warenghem® products are sold exclusively on their network and on the e-commerce section of the warenghem.com site accessible from certain countries only such as France and this as explained in the relevant sections.<br><br>Any purchase outside these points of sale will be made at the risk and peril of the purchaser, in particular as regards the authenticity of said products.<br><br> Gwez strives to ensure to the best of its ability the accuracy and updating of the information published on the Site, which it reserves the right to correct, at any time and without notice, the content.<br><br>Under the conditions provided for by law, Gwez incurs no liability:<br></p><ul><li>for any imprecision, inaccuracy, omission or for any damage resulting from an intrusion of '' a third party having led to a modification of the information made available on the Site.</li><li>in the event of damage caused by unauthorized third party access to the Site or making it impossible to access it.<br></li></ul><p><br>The visitor is informed that access to the Site may be interrupted at any time by Gwez for reasons of maintenance, security or any other technical constraint.<br></p><p>The creation of hypertext links to the Site can only be done with the prior written authorization of Gwez, which may be revoked at any time. Gwez declines all responsibility for the content of sites linked to the Site.<br><br> Gwez informs visitors to the Site that these conditions may be modified at any time. These modifications come into force as soon as they are put online and are deemed to have been accepted without reservation by any visitor who accesses the Site after they are put online. It is therefore up to all visitors before browsing the Site, to carefully read these conditions.<br><br>These conditions are governed by French law. French courts have territorial jurisdiction to hear any dispute relating to the use of the Site.<br></p></div>",
					"title": "Legal notice and conditions of use of the site"
				}
			]
		},
		"tabs": [
			{
				"href": "#protection",
				"id": "protection",
				"menu": "Data protection policy",
				"subtitle": "Updated on 01/04/2021"
			},
			{
				"href": "#conditions",
				"id": "conditions",
				"menu": "Terms and conditions",
				"subtitle": "Version 1.0"
			},
			{
				"href": "#mentions",
				"id": "mentions",
				"menu": "Legal Notice",
				"subtitle": "Version 1.0"
			}
		],
		"title": "Legal Notice"
	},
	"fr": {
		"tab": {
			"menu": "Politique de protection des données",
			"sections1": [
				{
					"text": "<div><p>Cette Politique de Protection des Données (la « Politique ») décrit comment Gwez SAS, société de droit français dont le siège social est situé 231, rue Saint Honoré, 75001 Paris, France, et/ou ses sociétés affiliées (« Warenghem ») traitent, en qualité de responsable de traitement, les données à caractère personnel de leurs clients et prospects (« Vous », « Votre », « Vos ») afin de Vous fournir la meilleur expérience client possible.</p><p>Warenghem et/ou Votre entité Warenghem responsable localement ( « Nous », « Notre », ou « Nos ») collecte, conserve, traite, utilise et communique des données à caractère personnel vous concernant lorsque Vous utilisez les sites internet et applications mobiles Warenghem, Nos produits connectés (si et lorsque celles-ci sont disponibles), ou lorsque Vous visitez Nos pages sur les réseaux sociaux, ou que Vous vous rendez dans l’un de Nos magasins partenaires dans&nbsp;Votre pays/région.</p></div>",
					"title": "Général"
				},
				{
					"text": "<div><p>Warenghem collecte les catégories de données suivantes, pour les finalités décrites ci-après dans Notre Politique:</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;Votre identité et vos coordonnées (tels que nom, adresse, numéro de téléphone ou adresse e-mail), lorsque vous décidez de les communiquer, par exemple pour créer un compte en ligne, participer à un événement, effectuer un achat ou remplir un formulaire d'information du client en magasin, effectuer un retour ou un échange, ainsi que les informations de votre pièce d’identité lorsque vous sollicitez une détaxe ou un service «click and collect» en magasin.</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;Informations de paiement: par exemple les numéros de carte bancaire, de compte bancaire, les informations du compte PayPal ou autres informations de paiement que vous devez fournir pour payer les produits ou services que vous avez commandés chez Nous.</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;Informations démographiques telles que votre sexe et votre date de naissance;</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;Préférences et centres d’intérêts que vous choisissez de communiquer lors de vos échanges ou rendez-vous privilégies avec Nos conseillers de vente (tels que vos préférences sur Nos collections ou autres marques, votre taille, vos habitudes de vie, ou des informations sommaires sur votre entourage familial);</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;Informations relatives à un éventuel effet indésirable provoqué par nos produits cosmétiques,pouvant inclure des données de santé;</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;Informations que vous communiquez publiquement, sur Nos réseaux sociaux ou Nos sites Web, par exemple pour donner votre avis sur un produit;</p><p>g)&nbsp;&nbsp;&nbsp;&nbsp;Informations relatives à vos achats en ligne ou en boutique (type, quantité de produits achetés et leurs prix);</p><p>h)&nbsp;&nbsp;&nbsp;&nbsp;Si vous utilisez Nos sites Web: des informations sur votre navigateur et votre comportement de navigation;</p><p>i)&nbsp;&nbsp;&nbsp;&nbsp;Si vous utilisez Nos applications mobiles: nous collectons votre position GPS, avec votre consentement si celui-ci est nécessaire, que la fréquence avec laquelle utilisez l'application et où vous l'avez téléchargée. Nous collecter également des informations sur le navigateur que vous utilisez et votre comportement de navigation.</p><p>j)&nbsp;&nbsp;&nbsp;&nbsp;Si vous utilisez Nos produits connectés, Nous collectons des informations concernant votre utilisation de ces produits (telles que les fonctionnalités de Notre produit que vous utilisez le plus, ou des informations sur le niveau de batterie), ainsi que des données de géolocalisation si celles-ci sont nécessaires pour vous fournir le service que vous avez requis;</p><p>k)&nbsp;&nbsp;&nbsp;&nbsp;Nous collectons également, sur des sites internet de tiers ou les réseaux sociaux, des informations publiées par des personnes à propos de produits ou services Warenghem, pour les finalités décrites ci-après.</p><p>Nous collectons ces données directement auprès de vous (lorsque vous créez un compte sur Nos sites/applications, effectuez un achat, ou communiquez avec Nos conseillers), ou de manière passive (via l'utilisation de cookies ou traceurs de navigateur), ou indirectement auprès de tiers (s’agissant des informations concernant les produits ou services Warenghem postées sur les réseaux sociaux).</p><p>Si vous ne souhaitez pas soumettre de données vous concernant alors que celles-ci sont nécessaires à l’exécution d’un contrat ou d’un service que vous sollicitez, ou lorsqu’elles sont requises par la loi, vous ne pourrez pas recevoir le produit ou le service demandé.</p></div>",
					"title": "1. Quelles categories de données collectons-nous ?"
				},
				{
					"text": "<div><p>Vos données sont utilisées pour les finalités décrites ci-après, que nous détaillerons lors de la collecte:</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;mieux comprendre vos intérêts et mieux comprendre comment vous utilisez Nos produits et services : Nous utilisons vos données pour améliorer Notre site Web, Nos applications et Nos produits. Nous utiliser également vos données pour vous personnaliser votre expérience avec Warenghem et adapter Nos activités marketing à vos besoins et préférences, car il est dans Notre intérêt légitime de mieux vous servir et répondre à vos attentes ;</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;traiter vos demandes, répondre à vos questions, gérer vos éventuelles réclamations : Nous utilisons vos données, notamment pour livrer vos commandes. Nous utilisons vos données pour vous transmettre les renseignements que vous demandez, ou communiquer avec vous à propos de votre compte ou de Notre relation (par exemple pour recueillir vos impressions, ou vous informer de modifications du Site ou de cette Politique ou des mises à jour de service). Dans ce cas, le traitement de vos informations a pour fin l’exécution du contrat conclu entre vous et Warenghem ;</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;à des fins de sécurité: nous traitons vos données pour protéger Notre société, Nos clients, Nos sites ou nos applications contre les risques de fraude, de vol ou tout acte répréhensible pouvant affecter notre activité car il est de Notre intérêt légitime d'assurer la sécurité de nos activité en ligne comme hors ligne ;</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;lutter contre la contrefaçon, et contre les ventes de produits Warenghem réalisées en violation de nos conditions générales et en violation de notre réseau de distribution exclusif (en analysant, notamment les quantités ou la fréquence des achats réalisés) dans la mesure où la lutte contre la contrefaçon et la protection de notre réseau de distribution ressortent de notre intérêt légitime ;</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;à des fins marketing : pour vous contacter, avec votre consentement le cas échéant, au sujet de nouveaux produits et offres spéciales susceptibles de vous intéresser ;</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;à des fins d'analyse et statistiques: Nous réalisons des analyses sur l'e-réputation de Notre société ou de Nos produits, et mesurons l'efficacité de Nos campagnes ou événements en ligne comme hors ligne, car il est dans notre intérêt légitime de préserver l’image de Warenghem et améliorer nos campagnes marketing ;</p><p>g)&nbsp;&nbsp;&nbsp;&nbsp;autres finalités : nous conservons un historique des transactions et autres documents commerciaux pour répondre à des exigences juridiques, administratives, aux besoins de nos assureurs, ou à des fins d'audit.</p></div>",
					"title": "2. À quelles fins utilisons-nous vos données ?"
				},
				{
					"text": "<div><p>Nous ne communiquons ou partageons vos données que dans les cas suivants :</p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;avec les sociétés du groupe Gwez: seul le personnel habilité dont l'activité justifie un accès aux informations, à des fins d'audit interne, de gestion administrative ou de facturation, mais également pour nous assurer que vous bénéficierez de la même qualité de service&nbsp;quel que soit le pays ou la région dans lequel/laquelle vous effectuez un achat. Vous trouverez la liste de nos sociétés à travers le monde avec les prestataires de services agissant pour notre compte: par exemple, les prestataires techniques en charge de l’envoi d’emails pour Nous, ou hébergeant notre site internet. Nous sommes également susceptibles de partager des informations vous concernant avec des fournisseurs qui nous aident à exploiter Nos sites Web;</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;avec certains partenaires commerciaux, moyennant votre accord: par exemple, nous partagerons vos données avec des tiers qui organisent un évènement conjointement avec nous ;</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;avec un tiers dans le cadre d'une restructuration ou d'une réorganisation d'entreprise (y compris la dissolution ou liquidation). Ce qui inclut tout transfert, cession ou vente en tout en en partie de Notre entreprise ou de Nos actifs dans le cadre d’une fusion.</p><p>d)&nbsp; &nbsp; lorsque nous sommes légalement tenus de le faire pour se conformer à la loi applicable, pour répondre à une décision de justice, ou plus généralement pour satisfaire à toute requête d’une autorité habilitée.</p></div>",
					"title": "3. Avec qui partageons-nous vos données ?"
				},
				{
					"text": "<div><p>Nous pouvons collecter certaines informations via des cookies, des balises Web et autres traceurs. Un cookie est un fichier texte enregistré sur le disque dur de votre terminal, par exemple lorsque vous visitez un site, lorsque vous lisez un e-mail ou lorsque vous installez une application mobile. Un cookie permet d'identifier l'appareil sur lequel il est enregistré, pendant la durée de validité du consentement, qui ne saurait excéder 13 mois.</p><p><b>Quels types de cookies nous utilisons ?</b></p><p>a)&nbsp;&nbsp;&nbsp;&nbsp;Les cookies de fonctionnement Nous permettent de faciliter votre navigation en enregistrant vos préférences linguistiques, vos identifiant de connexion, le contenu de votre panier ou votre « wish list ».</p><p>b)&nbsp;&nbsp;&nbsp;&nbsp;D'autres cookies collectent des informations relatives à votre comportement sur nos sites et applications en analysant les URLs (d'où viennent Nos visiteurs, sur quelles bannières ils ont cliqué, qui les a dirigés vers Notre site), les pages consultées, les horaires des visites. Ceci nous permet d'améliorer Nos sites Web et applications, de mieux comprendre les produits et services que vous préférez, et vous offrir des communications et/ou un contenu plus personnalisé sur Notre site Web et nos applications.</p><p>c)&nbsp;&nbsp;&nbsp;&nbsp;Nous utilisons également des cookies de statistiques anonymes pour mesurer l'activité des sites Web et déterminer les zones des sites les plus visitées, améliorant ainsi la visibilité de Notre contenu.</p><p>d)&nbsp;&nbsp;&nbsp;&nbsp;Nous utilisons des cookies pour assurer la sécurité des transactions/achats effectués en-ligne grâce à l’empreinte digitale du terminal, ce qui permet d'identifier certains aspects de l'équipement utilisé pour passer une commande en ligne.</p><p>e)&nbsp;&nbsp;&nbsp;&nbsp;Nos sites Web ou applications peuvent contenir des cookies émanant de tiers (agences publicitaires, fournisseurs d’outils d'analyses, etc.) leur permettant de collecter des informations de navigation sur vos appareils, notamment pour mesurer l'efficacité de Nos campagnes publicitaires sur des sites tiers. Les cookies tiers sont soumis aux politiques de confidentialité desdits tiers. Nous vous informons par la présente des fins de ces cookies et de la façon dont vous pouvez les gérer, dans la mesure où Nous en avons connaissance.</p><p>f)&nbsp;&nbsp;&nbsp;&nbsp;Nous incluons parfois, sur Notre site Web ou applications, des outils de tiers qui vous permettent de partager des contenus de notre Site avec d'autres personnes ou de faire connaître à ces autres personnes votre consultation ou votre opinion concernant un contenu de notre Site. Tel est notamment le cas des boutons Partager, J'aime, issus de réseaux sociaux (tels que &nbsp;« Facebook », « Twitter » etc).</p><p>Le réseau social fournissant un tel bouton applicatif peut vous identifier grâce à ce bouton, même si vous ne l'avez pas utilisé lors de votre consultation de Notre Site. En effet, ce type de bouton applicatif permet au réseau social de suivre votre navigation sur Notre Site, du seul fait que votre compte au réseau social concerné était actif sur votre terminal (session ouverte) lors de votre navigation sur Notre Site.</p><p>Nous n'avons aucun contrôle sur les procédés employés par ces réseaux sociaux pour collecter des informations relatives à votre navigation sur Notre Site. Nous vous invitons à consulter les politiques de confidentialité de ces réseaux sociaux pour savoir à quelles fins (notamment publicitaires) ils utilisent les informations de navigation qu'ils recueillent grâce à ces boutons applicatifs. Ces politiques de confidentialité doivent notamment vous informer sur la manière de gérer vos préférences sur votre compte de réseaux sociaux.</p><p><b>Acceptation des cookies</b></p><p>Sauf s’agissant des cookies de fonctionnement et de sécurité, l’enregistrement d’un cookie dans un terminal dépend des choix de l’utilisateur, que celui-ci peut exprimer et modifier librement à tout moment.</p><p>Vous pouvez paramétrer vos cookies par le biais de votre navigateur et ainsi accepter ou rejeter les cookies sur votre terminal, soit de manière globale soit cookie par cookie.&nbsp;Le fait de modifier vos paramètres sur votre navigateur peut impacter votre expérience sur le site, par exemple si nos partenaires ne peuvent plus reconnaitre la langue de votre navigateur ou le pays/région depuis lequel/laquelle vous vous connectez. Nous ne pouvons être tenus responsables des conséquences résultant de l'accès réduit à nos services suite à des cookies que vous avez précédemment supprimés ou rejetés.</p><p><b>Comment gérer les paramètres de cookies dans votre navigateur ?</b></p><p>Chaque navigateur possède son propre système de gestion des cookies, décrit dans le menu « Aide » de votre navigateur, où vous trouverez les informations nécessaires pour gérer vos préférences.</p><table><tbody><tr><td><p>Pour Internet Explorer 8.0 et plus :</p><p>Choisissez le menu « Outils », puis « Options Internet »</p><ol><li>Cliquez sur l'onglet « Confidentialité »</li><li>Sélectionnez le niveau de confidentialité souhaité.</li></ol></td><td>Pour Mozilla Firefox :<ol><li>Choisissez le menu « Outils » puis « Options ».</li><li>Cliquez sur l’icône « Vie privée ».</li><li>Repérez le menu « cookies » et sélectionnez les options qui vous conviennent.</li></ol></td></tr><tr><td>Pour Opéra<ol><li>Choisissez le menu « Fichier » puis « Préférences »</li><li>Cliquez sur l’icône «&nbsp;Vie privée&nbsp;».</li><li>Définissez vos paramètres.</li></ol></td><td>Pour Androïd<ol><li>Taper sur la Touche en haut à droite</li><li>Aller à « Réglages » puis « Confidentialité et sécurité »</li><li>Définir vos paramètres</li></ol></td></tr><tr><td>Pour Dolphin sur Androïd<ol><li>Dans le menu allez à «Plus» puis «Réglages»</li><li>Choisir le menu Confidentialité puis «&nbsp;Sécurité»</li><li>Définir vos paramètres dans le menu «Cookies ».</li></ol></td><td>Pour Safari sur iOS<ol><li>Dans l’application « Réglages » choisir « Safari »</li><li>Aller à « accepter les cookies » dans la rubrique « Confidentialité »</li><li>Définir vos paramètres.</li></ol></td></tr><tr><td>Pour Google Chrome :<ol><li>Cliquez sur le menu Chrome de la barre d’outils du navigateur</li><li>Choisissez le menu « Paramètres » puis cliquez sur « Affichez les paramètres avancés»</li><li>Aller au paragraphe «Confidentialité», cliquez sur « Paramètres du contenu »</li><li>Aller au paragraphe «&nbsp;Cookies&nbsp;», vous pouvez définir vos paramètres.</li></ol></td><td>&nbsp;</td></tr></tbody></table><p>Si votre terminal est utilisé par plusieurs personnes et lorsqu’un même terminal dispose de plusieurs navigateurs, nous ne pouvons nous assurer que les services et publicités censés correspondre à votre utilisation du terminal correspondent bien à votre propre utilisation et non à celle d'un autre utilisateur de ce terminal.</p></div>",
					"title": "4. Cookies et traceurs"
				},
				{
					"text": "<div><p>Vos données ne sont conservées, dans une forme permettant de vous identifier, que pour la durée raisonnablement nécessaire à la poursuite des finalités décrites ci-avant, ou pour la durée de conservation permise par la loi. La durée de conservation de vos données est déterminée selon les critères suivants :</p><p>●&nbsp;&nbsp;Vos données sont traitées pour les finalités décrites à l’article 2 pour une durée de</p><p>&nbsp; &nbsp; ○&nbsp;&nbsp;trois (3) ans à compter de notre dernier contact, si vous êtes un prospect (c’est-à-dire si vous n’avez effectué aucun achat auprès de Warenghem, mais que vous être intéressé par les actualités de notre Maison<br></p><p>&nbsp; &nbsp; &nbsp;○&nbsp;&nbsp;dix (10) ans suivant la fin de notre relation commerciale, si vous êtes client (c’est-à-dire que vous avez acheté l’un de nos produits ou services)</p><p>●&nbsp;&nbsp;Vos données seront ensuite archivées, et pourront être utilisées dans le cadre d’une contestation, action ou d’un contentieux, pendant la durée de prescription applicable. Dans le cas d’une action en justice, les données peuvent être conservées jusqu’à épuisement des voies de recours, et seront ensuite supprimées ou archivées dans les limites permises par la loi</p><p>Vos données sont ensuite détruites ou anonymisées.</p></div>",
					"title": "5. Durée de conservation"
				},
				{
					"text": "<div><p>Vous pouvez demander l'accès aux données vous concernant que Nous détenons. Dans ce cas, nous vous fournirons les informations requises par la loi sur les finalités du traitement, les catégories de données traitées, les catégories de destinataires, la durée de conservation des données, etc.).</p><p>Vous pouvez également obtenir copie de toute information vous concernant que Nous détenons, dans un format compatible et structuré vous permettant d'exercer votre droit à la portabilité des données, pour les traitements fondés sur votre consentement ou l’exécution d’un contrat entre Warenghem et vous.</p><p>Vous pouvez également fournir vos instructions sur la manière dont vous souhaitez que vos données soient traitées après votre mort.</p><p>Vous pouvez également Nous demander de corriger, modifier, ou effacer, toute information incomplète, obsolète ou inexacte.&nbsp;</p><p>Vous pouvez demander la suppression de vos données si (i) celles-ci ne sont plus nécessaires pour la finalité envisagée, (ii) vous avez retiré votre consentement alors que le traitement en question reposait sur ce consentement, (iii) vous vous êtes opposé au traitement (iv) le traitement des données est illégal, (v) les informations doivent être effacées en application d’obligations légales applicable à Warenghem. Warenghem prendra des mesures raisonnables pour informer les autres entités du groupe Warenghem d'un tel effacement.</p><p>Vous pouvez demander la limitation du traitement (i) si vous contestez l'exactitude de vos informations personnelles, ce qui permettra à Warenghem de vérifier cette exactitude, (ii) si vous souhaitez limiter le traitement de vos informations plutôt que l’effacement de celles-ci malgré le fait que le traitement soit illicite (iii) si vous souhaitez que Warenghem conserve vos informations parce que vous en avez besoin pour la constatation, l'exercice ou la défense de vos droits en justice (iv) le temps nécessaire à Warenghem pour l’examen du caractère fondé de votre demande d’opposition.</p><p>Vous avez également le droit de déposer une plainte auprès de l'autorité de contrôle compétente.</p><p>Les coordonnées de notre Délégué à la Protection des Données sont : hello@warenghem.com.</p><p>Lorsque le traitement de vos données repose sur le consentement (par exemple si vous avez accepté de recevoir des communications commerciales), vous pouvez retirer ce consentement à tout moment, ce qui n’affectera pas la légitimité des opérations de traitement effectuées avant que le retrait de votre consentement.</p><p>Lorsque les traitements que nous effectuons reposent sur notre intérêt légitime, vous pouvez vous opposez à un tel traitement s’il s’avère que nos vos intérêts ou libertés fondamentales prévalent sur nos intérêts légitimes.</p><p>Pour exercer ces droits, vous pouvez contacter : hello@warenghem.com</div>",
					"title": "6. Vos droits"
				},
				{
					"text": "<div><p>Nous assurerons un niveau de protection adéquat de vos données et veillerons à ce que des mesures de sécurité techniques et organisationnelles appropriées (y compris la sensibilisation et la formation du personnel participant aux opérations de traitement) soient mises en place pour protéger vos données contre toute destruction accidentelle ou illicite, perte ou altération accidentelle, divulgation ou accès non autorisés, et contre toutes les autres formes de traitement illicites.</p><p>Cependant, dans la mesure où Internet n'est pas complètement sécurisé, nous ne pouvons garantir que vos informations personnelles stockées ou envoyées seront totalement sécurisées. Nous vous encourageons à faire preuve de prudence lorsque vous utilisez Internet pour accéder à nos sites Web, applications ou médias sociaux.</p></div>",
					"title": "7. Protection de vos données personnelles"
				},
				{
					"text": "<div><p>Nos sites Web et applications ne sont pas destinés aux enfants. Nous ne collectons pas sciemment des informations concernant des enfants sans l’accord d'un parent ou tuteur, sauf si permis par la loi.</p><p>Vous devez être âgés d’au moins seize ans pour nous communiquer vos données, et dix-huit ans pour effectuer des transactions dans Nos boutiques ou sur Nos sites Web ou applications. En effectuant ces transactions, vous garantissez que vous êtes âgés d’au moins dix-huit ans et êtes pleinement en mesure de conclure et d'être légalement liés par de telles transactions.</p><p>Si Nous sommes informés, ou si Nous apprenons qu'un mineur nous a soumis des informations le concernant via Nos médias ou autrement, Nous supprimerons ces informations.</p></div>",
					"title": "8. Enfants"
				},
				{
					"text": "<div><p>Il est possible que des liens soient effectués par des sites ou services de tiers que Nous ne contrôlons pas et qui sont régis par leur propre politique de confidentialité. Cette Politique ne s'applique pas à ces sites tiers. Nous vous invitons à consulter les politiques de confidentialité de des sites tiers que vous visitez pour savoir comment ils traitent vos données personnelles.</p></div>",
					"title": "9. Sites tiers"
				},
				{
					"text": "<div><p>Notre Politique est susceptible d’être modifiée pour refléter les évolutions dans la manière dont nous traitons les informations vous concernant. Nous veillerons à ce que vous soyez informés de tout changement important. Nous publierons également une mise à jour de cette Politique sur le site.</p></div>",
					"title": "10. Modification de la politique"
				},
				{
					"text": "<div><p>Si vous souhaitez que Nous mettions à jour les informations que Nous avons sur vous ou vos préférences, ou si vous avez des questions concernant la protection des informations vous concernant, veuillez&nbsp;Nous contacter par e-mail à hello@warenghem.com</p><p>Mise à jour le 04/01/2021</p></div>",
					"title": "11. Nous contacter"
				}
			],
			"sections2": [
				{
					"text": "<div><p>La société Gwez (ci-après dénommée Gwez) commercialise les articles  Warenghem en France.</p><p>Soucieuse de toujours mieux répondre aux attentes de ses clients,  Warenghem a souhaité mettre en place, parallèlement au réseau de magasins qu'elle exploite, un réseau de vente à distance par voie téléphonique et par voie électronique (Internet) de certains de ses produits.</p><p>Le système ainsi mis en place, qui suppose une démarche active de la part du client, est en tout point conforme aux exigences requises en matière de vente à distance et, notamment, par les articles L. 111-1, L.112-1 et L. 221-1 et suivants du Code de la consommation. L'utilisation du processus de vente à distance décrit dans les présentes Conditions Générales de Vente est réservée (i) aux seuls consommateurs, au sens qu'en donnent la loi et la jurisprudence, agissant exclusivement pour leurs besoins personnels et sans rapport direct avec une activité commerciale et (ii) pour une livraison en « France Métropolitaine » (ce terme étant entendu comme incluant la Corse et excluant les départements et territoires d’outre-mer ainsi que Monaco).</p></div>",
					"title": "ARTICLE PRÉLIMINAIRE"
				},
				{
					"text": "<div><p>Ces Conditions Générales de Vente sont applicables à toutes les ventes d'articles Warenghem conclues soit par l'intermédiaire du service clients mis en place par la société Gwez (ci-après le «&nbsp;Service Clients&nbsp;»), soit via le&nbsp;Site, en vue d'une livraison en France Métropolitaine uniquement.</p><p><b>1. S'agissant de la vente par voie téléphonique</b>, toute vente d'articles Warenghem par l'intermédiaire du Service Clients mis en place par Gwez est conclue sous la condition résolutoire de l'acceptation des présentes Conditions Générales de Vente par le client.</p><p><b>2. S'agissant de la vente par voie électronique (Internet), </b>le client déclare avoir pris connaissance des présentes Conditions Générales de Vente avant la passation de sa commande. La validation de sa commande vaut donc acceptation sans restriction ni réserve des présentes Conditions Générales de Vente. Conformément aux dispositions de l'article 1369-4 du Code civil, les présentes Conditions Générales de Vente peuvent être conservées par toute personne visitant le Site, par le moyen d'un enregistrement informatique et peuvent être reproduites, par le moyen de leur impression ; les présentes Conditions Générales de Vente seront applicables tant qu'elles figureront sur le Site. Dans l'hypothèse où, postérieurement à la date de leur suppression du Site, les présentes Conditions Générales de Vente resteraient néanmoins accessibles au public via d'autres sites Internet ou par tout autre moyen, elles ne seraient cependant plus opposables à Gwez.</p><p><b>3.</b> Gwez se réserve le droit de modifier ces Conditions Générales de Vente à tout moment. Toutes les modifications à ces conditions seront affichées sur le Site. Les Conditions Générales de Vente en vigueur au moment de la conclusion du contrat de vente sont celles opposables au client.</p></div>",
					"title": "ARTICLE 1 : CHAMP D'APPLICATION"
				},
				{
					"text": "<div><p>Gwez</p><p>SAS au capital de 40.010 euros immatriculée au Registre du Commerce et des Sociétés de Marseille sous le numéro 891678856</p><p>Siège social : 231 rue saint honoré - 75001 Paris TVA : FR68891678856</p></div>",
					"title": "ARTICLE 2 : IDENTIFICATION DE L'AUTEUR DE L'OFFRE"
				},
				{
					"text": "<div><p>Les informations relatives à l'ensemble des articles Warenghem susceptibles d'être vendus par l'intermédiaire du Service Clients de la société Gwez sont disponibles, avec leurs références, dans l'ensemble des magasins  Warenghem, ainsi que sur le Site.</p></div>",
					"title": "ARTICLE 3 : INFORMATIONS RELATIVES AUX ARTICLES"
				},
				{
					"text": "<div><b>1. Commandes par Internet&nbsp;</b></p><p>Les commandes pourront être passées par Internet sur le site marchand accessible depuis la version française du Site. Le client conserve à sa charge les frais de télécommunication lors de l'accès à Internet et de l'utilisation du Site.</p><p>Les photographies, graphismes et descriptions des produits proposés à la vente ne sont qu'indicatifs et n'engagent nullement Gwez. Les clients ont la possibilité d'obtenir des renseignements complémentaires en contactant par le Service Clients Warenghem.</span></p><p><span>En cas d'erreur manifeste entre les caractéristiques des articles et leur représentation, la société Gwez ne saurait voir sa responsabilité engagée.</span></p><p><span>Le client devra, pour pouvoir acheter un produit, remplir un formulaire de commande précisant certains champs obligatoires afin que sa sélection puisse être prise en compte par Gwez.</span></p><p><span>En cas d'inactivité prolongée lors de la connexion il est possible que la sélection des articles choisis avant cette inactivité ne soit plus garantie. Le client sera invité à reprendre sa sélection de produits depuis le départ.</span></p><p><span>Toutes les étapes nécessaires à la vente seront précisées sur le Site conformément à l'article 1369-1 du code civil. En application des dispositions de l'article 1369-4 du Code civil, le client aura la possibilité, avant de valider définitivement sa commande, de vérifier le détail de sa commande et son prix total et de corriger d'éventuelles erreurs, avant de confirmer celle-ci pour exprimer son acceptation. A partir du moment où le client a validé sa commande, Gwez accusera réception de celle-ci sans délai et par voie électronique.</span></p><p><span>Toutefois, la vente ne sera considérée comme définitive qu'après l'envoi au client de la confirmation de la commande par Gwez, précisant l'expédition des articles.</span></p><p><b><span>2. Refus de commandes</span></b></p><p>Il est rappelé que les achats réalisés sur le Site sont réservés aux consommateurs pour leur usage propre (ou cadeaux) et non pour revente. En conséquence Gwez ne vend ses produits que dans des quantités correspondant aux besoins moyens habituels d'un foyer.</p></div>",
					"title": "ARTICLE 4 : COMMANDES DES ARTICLES"
				},
				{
					"text": "<div><p>Le prix des articles s'entend toutes taxes comprises. Sauf stipulation expresse contraire lors de la commande effectuée sur le Site, les frais de livraison des articles sont pris en charge par Gwez.</p><p>Le prix TTC de chacun des articles que souhaiterait acquérir le client, ainsi que le montant des frais de transport afférents à leur livraison (si ces frais de transport ne sont pas pris en charge par Gwez), lui seront communiqués lors de la connexion au Site.</p><p>Conformément aux dispositions de l'article L.221-11 du Code de la consommation, le client recevra, au plus tard lors de la livraison, pour chacun des articles, la confirmation écrite du prix payé détaillant le prix des articles et les frais de livraison le cas échéant mis à sa charge.</p></div>",
					"title": "ARTICLE 5 : PRIX DES ARTICLES"
				},
				{
					"text": "<div><p>Le règlement des achats du client peut s'effectuer par carte bancaire (sont acceptées les cartes du réseau CB, Visa, Eurocard/Mastercard), émises sur des comptes bancaires domiciliés au sein de l’Union Européenne, la Norvège ou la Suisse, par virement bancaire depuis un compte émetteur au nom du client et domicilié en France Métropolitaine, par Paypal depuis un compte verifié.</p><p>Dans le cadre des paiements par Internet, le contrôle s'effectuera en ligne auprès des établissements et organismes bancaires compétents, interrogés via le système de la société STRIPE. Cette société, située aux Etats-Unis, procèdera à cette fin au stockage et au traitement automatisé des informations relatives à chaque commande y compris les coordonnées de carte bancaire, dans un environnement sécurisé. Le transfert des données à caractère personnel du client à STRIPE a été autorisé par la CNIL (délibération DF-2011-251) et est encadré par les clauses contractuelles types établies par la Commission Européenne.</p><p>Par ailleurs, afin de lutter contre la fraude sur Internet, Gwez met en œuvre un traitement relatif à l’évaluation des risques et la prévention de la fraude au paiement des achats sur le Site, pour lequel la société  Warenghem fait également appel à la société STRIPE. Les données collectées sont destinées aux seules personnes habilitées en charge de la lutte contre la fraude au sein de la société  Warenghem. Ce traitement a également été autorisé par la CNIL.</p><p>Dans l'hypothèse où, pour quelque raison que ce soit (opposition, refus du centre émetteur…), le débit des sommes dues par le client s'avérerait impossible, le processus d'achat sur Internet serait annulé.</p><p>Les dispositions de l'article 1341 du Code Civil sont inapplicables aux ventes conclues à distance par la société Gwez.</p></div>",
					"title": "ARTICLE 6 : CONDITIONS DE PAIEMENT"
				},
				{
					"text": "<div><p>Le client dispose de la faculté de faire livrer les articles à une personne physique, par exemple dans le cadre d’un cadeau.</p><p>Il est entendu qu'aucune livraison ne pourra être effectuée dans des hôtels, à des adresses professionnelles, ou à des boîtes postales. La livraison des articles interviendra après que le règlement du montant de la commande aura été enregistré.</p><p>Conformément aux dispositions du Code de la consommation, la livraison des articles commandés interviendra dans les délais communiqués par Gwez et, à défaut d’indication, en tout état de cause au plus tard dans les 30 jours à compter de la commande, sous réserve du paiement complet du prix.</p><p>Les délais éventuellement communiqués par Gwez ne le seront qu'à titre indicatif. Si, lors de la livraison, l'aspect extérieur du colis n'est pas parfait, le client procédera à son ouverture en présence du transporteur afin de vérifier l'état de l'article. En cas de dommages à l'article, le client les détaillera précisément sur le bon de livraison, les dispositions de l'article 11 ci-dessous restant par ailleurs applicables.</p></div>",
					"title": "ARTICLE 7 : LIVRAISON"
				},
				{
					"text": "<div><p><b>1. Droit de rétractation</b></p><p>Le client bénéficie d’un droit de rétractation légal qu’il peut exercer dans un délai de 14 jours suivant la réception du bien, dans les conditions prévues aux articles L. 221-18 et L. 221-20 du Code de la consommation, s’il remplit les conditions posées par ces dispositions, sans avoir à motiver sa décision ni à payer de pénalités.</p><p>Dans le cadre d’une rétractation portant sur une commande incluant plusieurs produits livrés séparément, le point de départ de ce délai sera la prise de possession par le client du dernier produit livré. Passé ce délai, le client ne pourra plus exercer son droit de rétractation.</p><p>Le droit de rétractation ne peut être exercé pour les commandes portant sur :</p><ul><li>la fourniture de biens confectionnés selon les spécifications du consommateur ou nettement personnalisés ;</li><li>la fourniture de biens scellés (parfums, boucles d’oreilles, maillots de bain, etc.) qui ont été descellés par le consommateur après livraison et qui ne peuvent être renvoyés pour des raisons d'hygiène ou de protection de la santé.</li></ul><p>Pour notifier sa décision de rétractation, le client peut utiliser le formulaire de rétractation figurant au bas des présentes Conditions Générales de Vente, ou toute autre déclaration dénuée d’ambiguïté.</p><p><b>2. Retour des articles</b></p><p>Pour restituer les articles qu’il aurait déjà reçus le client peut, selon son choix, procéder comme suit :</p><p>Dans tous les cas (remboursement ou échange), le client doit retourner les articles livrés dans leur emballage d’origine et complets (boîtes, accessoires, protections, étiquettes, livrets, etc.). Les articles retournés incomplets, abîmés, endommagés, détériorés, salis ou dans tout autre état qui laisserait raisonnablement penser qu’ils ont été utilisés ou portés, ne seront ni remboursés ni échangés et lui seront retournés. Ainsi, s’agissant des souliers, la semelle devra, elle aussi, être intacte : à ce titre, il est vivement recommandé d’essayer les souliers  Warenghem sur une surface de type moquette ou tapis. S’agissant des parfums, tout parfum qui ne serait pas retourné dans son emballage original et intact (le film cristal recouvrant l’étui du parfum devant être toujours scellé) sera refusé. Les articles personnalisés ne pourront être retournés.</p><p><b>3. Remboursement</b></p><p>Le remboursement des sommes versées pour le(s) article(s) retourné(s) interviendra dans les quatorze (14) jours suivant la date à laquelle le client aura notifié à Gwez sa rétractation (ou dans les quatorze (14) jours suivant la réception des articles par Gwez, si le client choisit de renvoyer les articles par voie postale plutôt que de bénéficier du service d’enlèvement).</p><p>Le remboursement s'effectuera, selon le mode de paiement des articles, par crédit sur le compte bancaire du client correspondant à la carte bancaire ayant servi au paiement ou par virement sur le compte bancaire du client. En application de l’article L.221-24 du Code de la consommation, les frais supplémentaires payés par le client et liés au choix d’un mode spécifique de livraison ne lui seront pas remboursés.</p><p>Par ailleurs, dans le cas d’un cadeau, le droit de rétractation reste au bénéfice exclusif du client et ne peut en aucun cas être exercé par le destinataire du cadeau.</p><p><b>4. Échange</b></p><p>Gwez offre à ses clients la possibilité en se connectant à leur compte My Warenghem, d'échanger les articles livrés dans un délai de trente (14) jours suivant leur réception. Le client pourra alors retourner les articles concernés dans les conditions visées au paragraphe «&nbsp;Retour des Articles » ci-dessus.</p><p>En cas d'échange d'articles, la vente initiale sera résolue. Le paiement de la nouvelle vente s'effectuera par compensation avec le montant de la vente précédente, étant entendu que tout trop perçu fera l'objet : soit d’un avoir soit d’un remboursement), soit d'un re-crédit sur la carte bancaire, ou sur le compte bancaire du client.</p><p>Dans le cas d’un cadeau, la faculté d'échange pourra être exercée par le destinataire du cadeau,aucun remboursement ne pourra être effectué en faveur du destinataire du cadeau en cas de différence de prix.</p><p>En cas d'échange d'articles via le Service Clients, la nouvelle vente sera soumise aux présentes Conditions Générales de Vente.</p><p>Dans le cadre de la politique commerciale d’échange proposée au titre du présent article, Gwez se réserve la possibilité de refuser un échange au-delà de deux (2) demandes successives. Par ailleurs, les frais de livraison payés le cas échéant par le client ne lui seront pas remboursés.</p></div>",
					"title": "ARTICLE 8 : DROIT DE RÉTRACTATION - REMBOURSEMENT ET ÉCHANGE"
				},
				{
					"text": "<div><p>Le client doit s'assurer que les articles qui lui ont été livrés correspondent à sa commande. Dans l'hypothèse où les articles livrés ne seraient pas conformes à sa commande, le client devra en informer  le Service Clients  Warenghem et retourner les articles en cause dans les conditions énoncées à l'article 8 des Conditions Générales de Vente.</p><p>Nonobstant les conditions de garantie spécifique remises au client avec l'article livré, les articles  Warenghem sont soumis aux conditions de garantie prévues par la loi.</p><p>Rappel des articles L.217-4, L.217-5 et L.217-12 du Code de la consommation et des articles 1641 et 1648, premier alinéa, du Code civil :</p><p>Article L.217-4 du Code de la consommation : Le vendeur livre un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance. Il répond également des défauts de conformité résultant de l'emballage, des instructions de montage ou de l'installation lorsque celle-ci a été mise à sa charge par le contrat ou a été réalisée sous sa responsabilité.</p><p>Article L.217-5 du Code de la consommation :</p><p>Pour être conforme au contrat, le bien doit :</p><p>1. S'il est propre à l'usage habituellement attendu d'un bien semblable et, le cas échéant :</p><ul><li>s'il correspond à la description donnée par le vendeur et possède les qualités que celui-ci a présentées à l'acheteur sous forme d'échantillon ou de modèle ;</li><li>s'il présente les qualités qu'un acheteur peut légitimement attendre eu égard aux déclarations publiques faites par le vendeur, par le producteur ou par son représentant, notamment dans la publicité ou l'étiquetage ;</li></ul><p>2. Ou s'il présente les caractéristiques définies d'un commun accord par les parties ou est propre à tout usage spécial recherché par l'acheteur, porté à la connaissance du vendeur et que ce dernier a accepté. »</p><p>Article L.217-12 : L'action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien.</p><p>Article 1641 du Code civil : Le vendeur est tenu de la garantie à raison des défauts cachés de la chose vendue qui la rendent impropre à l'usage auquel on la destine, ou qui diminuent tellement cet usage, que l'acheteur ne l'aurait pas acquise, ou n'en aurait donné qu'un moindre prix, s'il les avait connus.</p><p>Article 1648 du Code civil, premier alinéa : L'action résultant des vices rédhibitoires doit être intentée par l'acquéreur dans un délai de deux ans à compter de la découverte du vice.</p><p>La réparation des conséquences du défaut caché, lorsqu'il aura été prouvé, comporte selon la jurisprudence :</p><ul><li><b></b>&nbsp;soit la réparation totalement gratuite de l'article, y compris les frais de main d'œuvre,</li><li>soit son remplacement ou le remboursement total ou partiel de son prix au cas où l'article serait totalement inutilisable,</li><li>et l'indemnisation du dommage éventuellement causé aux personnes et aux biens par le défaut de l'article.</li></ul></div>",
					"title": "ARTICLE 9 : CONFORMITÉ – GARANTIE – SERVICE APRÈS-VENTE"
				},
				{
					"text": "<div><p>Pour toute information, réclamation ou question relative aux Conditions de Vente par correspondance mises en place par la société Gwez ou aux articles eux-mêmes, les clients devront s'adresser au Service Clients  Warenghem sur le Site via le formulaire « Contactez-nous par e-mail », en rappelant le cas échéant leur numéro de commande.</p></div>",
					"title": "ARTICLE 10 : RÉCLAMATIONS - INFORMATIONS"
				},
				{
					"text": "<div><p>La marque Warenghem, ainsi que l'ensemble des marques figuratives ou non et plus généralement toutes les autres marques, illustrations, images et logotypes figurant sur les articles  Warenghem, leurs accessoires ou leurs emballages, qu'ils soient déposés ou non, sont et demeureront la propriété exclusive de la société Gwez . Toute reproduction totale ou partielle, modification ou utilisation de ces marques, illustrations, images et logotypes, pour quelque motif et sur quelque support que ce soit, sans accord exprès et préalable de la société  Warenghem , est strictement interdite. Il en est de même de toute combinaison ou conjonction avec toute autre marque, symbole, logotype et plus généralement tout signe distinctif destiné à former un logo composite. Il en ira de même pour tous droits d'auteur, dessins et modèles, brevets qui sont la propriété de la société Gwez .</p></div>",
					"title": "ARTICLE 11 : DROITS DE PROPRIÉTÉ INTELLECTUELLE"
				},
				{
					"text": "<div><p>L'exécution par la société Gwez de tout ou partie de ses obligations sera suspendue en cas de survenance d'un cas fortuit ou de force majeure qui en gênerait ou en retarderait l'exécution.</p><p>Sont considérés comme tels, notamment, sans que cette liste soit limitative, la guerre, les émeutes, l'insurrection, les troubles sociaux, les grèves de toute nature et les problèmes d'approvisionnement de la société Gwez.</p><p>La société Gwez informera le client d'un semblable cas fortuit ou de force majeure dans les sept (7) jours de sa survenance. Au cas où cette suspension se poursuivrait au-delà d'un délai de quinze (15) jours, le client aurait alors la possibilité de résilier la commande en cours, et il serait alors procédé à son remboursement dans les conditions énoncées à l'article 8 des présentes Conditions Générales de Vente.</p></div>",
					"title": "ARTICLE 12 : FORCE MAJEURE"
				},
				{
					"text": "<div><p>Ces Conditions Générales de Vente sont soumises au droit français. En cas de difficulté survenant à l'occasion de la commande ou de la livraison des articles  Warenghem, le client aura la possibilité, avant toute action en justice, de rechercher une solution amiable et d’avoir recours au CMAP – Centre de Médiation et d’Arbitrage de Paris, médiateur de la consommation dont relève <a>la société Gwez</a></p><p>Pour soumettre un litige au médiateur, le client peut remplir le formulaire sur le site internet du CMAP : www.cmap.fr onglet « vous êtes : un consommateur », envoyer sa demande par courrier simple ou recommandé au CMAP Médiation Consommation, 39 avenue Franklin D. Roosevelt, 75008 PARIS, ou envoyer un e-mail à consommation@cmap.fr. Quel que soit le moyen utilisé pour saisir le CMAP, la demande du client doit contenir les éléments suivants pour être traitée avec rapidité : ses coordonnées postales, e-mail et téléphoniques ainsi que les nom et adresse complets de  Warenghem, un exposé succinct des faits, et la preuve des démarches effectuées par le client auprès de  Warenghem préalablement à la saisine du CMAP.</p><p>Par ailleurs, la Commission européenne met à disposition une plateforme de règlement en ligne des litiges (RLL) dans le cadre de contrats de vente ou de service en ligne entre un consommateur résidant dans l'Union européenne et un professionnel établi dans l'Union européenne.</p><p>Cette plateforme est accessible à l'adresse suivante : https://webgate.ec.europa.eu/odr/. Le recours à la médiation est un mécanisme alternatif qui ne constitue pas une condition préalable à l'exercice d'une action en justice. Tout litige susceptible de résulter de l'interprétation ou de l'exécution des présentes Conditions Générales de Vente et de ses suites sera soumis à la compétence exclusive des tribunaux français.</p></div>",
					"title": "ARTICLE 13 : LITIGES - DROIT APPLICABLE"
				},
				{
					"text": "<div><p>Par dérogation aux dispositions de l’article 4 des Conditions Générales ci-dessus :</p><p>La commande d’articles personnalisés via le service Personnalisation ne peut s’effectuer que via le Site, à l’exclusion de toute commande par téléphone au Service Clients. Lors de son utilisation du service de personnalisation sur le Site, ses choix de création ne sont mémorisés que pendant la durée de sa session. Si le client interrompt sa session avant d’avoir finalisé sa commande, il sera donc invité à reprendre ses choix de création depuis le départ lors de sa nouvelle connexion.</p><p>Une fois la commande validée par le client sur le Site, le client sera débité du montant de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition des articles.</p><p>La commande de produits confectionnés sur demande de la ligne «peut s’effectuer auprès du Service Clients ou via le Site. Une fois la commande placée, le client recevra un courrier électronique l’informant du traitement de sa commande et sera débité du montant total de sa commande. Le client recevra ensuite un courrier électronique l’informant de l’expédition de l’article.</p><p>La commande des articles personnalisés par « marquage à chaud » se fait dans les mêmes conditions que celles mentionnées aux Conditions Générales ci-dessus.</p></div>",
					"title": "ARTICLE 14 : PROCÉDÉ DE COMMANDE"
				},
				{
					"text": "<div><p>Par dérogation aux dispositions de l’article 7 des Conditions Générales ci-dessus :</p><ul><li>La livraison des articles personnalisés commandés via le service personnalisation intervient au plus tard dans un délai de douze (12) semaines à compter du jour suivant la commande, sous réserve du complet paiement du prix.</li><li>La livraison des articles personnalisés par « marquage à chaud » intervient dans le même délai que celui mentionné aux Conditions Générales ci-dessus.</li></ul></div>",
					"title": "ARTICLE 15 : LIVRAISON"
				},
				{
					"text": "<div><p>(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat).</p><ul><li>À l’attention de la Société Gwez - Service Clients - 231, rue saint honoré 75001 Paris, ou via le formulaire « Contactez-nous par e-mail » accessible sur le site Internet fr. www.warenghem.com.</li><li>Je/Nous [*] vous notifie/notifions [*] par la présente ma/notre [*] rétractation du contrat portant sur la vente du bien [*]/pour la prestation de service [*] ci-dessous&nbsp;:</li><li>Bien ___[référence]_____________</li><li>Commandé le [*]/reçu le [*] : ______________</li><li>Nom du (des) consommateur(s)</li><li>Adresse du (des) consommateur(s)</li><li>Signature du (des) consommateur(s) (uniquement en cas de notification du présent formulaire sur papier)</li><li>Date</li></ul><p>[*] Biffez la mention inutile.</p></div>",
					"title": "FORMULAIRE DE RÉTRACTATION"
				}
			],
			"sections3": [
				{
					"subtitle": "<div><p>Le présent site (le « Site ») est édité par Gwez , SAS au capital de 40.010 euros, immatriculée au registre du commerce et des sociétés de Marseille sous le numéro 891 678 856, dont le siège social est situé 231 rue saint honoré 75001 Paris.<br></p></div>",
					"text": "<div><p>Le présent site (le « Site ») est édité par Gwez, SAS au capital de 40.010 euros, immatriculée au registre du commerce et des sociétés de Marseille sous le numéro 891 678 856, dont le siège social est situé 231 rue saint honoré 75001 Paris.</p><p>Le Directeur de la publication du Site est : Kevin Brosseau.<br><br>L’hébergement du Site est assuré par la société <b>Netlify</b>, société à capitaux privés dont le siège social est à San Francisco, Californie</p><p>L’accès au Site ainsi que l’utilisation de son contenu sont soumis aux conditions d’utilisation décrites ci-après. Le fait d’accéder et de naviguer sur le Site constitue de la part du visiteur une acceptation sans réserve des stipulations suivantes :<br><br>Le Site est la propriété exclusive de la société Gwez , seule habilitée à utiliser et exploiter les droits de propriété intellectuelle et droits de la personnalité attachés à ce site, notamment les marques, dessins et modèles droits d’auteur et droit à l’image, à titre originaire ou par l’effet d’une autorisation expresse, brevet et tout droit de propriété intellectuelle.<br><br>L’usage de tout ou partie du Site, notamment par téléchargement, reproduction, transmission ou représentation à d’autres fins que pour usage personnel et privé dans un but non commercial est strictement interdit.<br><br> Gwez informe le visiteur que les produits  Warenghem® sont vendus exclusivement sont réseau et sur la section e-commerce du site warenghem.com accessible depuis certains pays seulement tels que la France et ce comme explicité dans les sections concernées.<br><br>Tout achat en dehors de ces lieux de vente se fera aux risques et périls de l’acheteur notamment quant à l’authenticité desdits produits.<br><br> Gwez s’efforce d’assurer au mieux de ses possibilités l’exactitude et la mise à jour des informations diffusées sur le Site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.<br><br>Dans les conditions prévues par la loi, Gwez n’encourt aucune responsabilité :<br></p><ul><li>pour toute imprécision, inexactitude, omission ou pour tous dommages résultant d’une intrusion d’un tiers ayant entrainé une modification des informations mises à disposition sur le Site.</li><li>en cas de dommages provoqués à raison de l’accès d’un tiers non autorisé sur le Site ou rendant impossible son accès.<br></li></ul><p><br>Le visiteur est informé que l’accès au Site pourra être interrompu à tout moment par Gwez pour des raisons de maintenance, sécurité ou toute autre contrainte technique.<br></p><p>La création des liens hypertextes vers le Site ne peut être faite qu’avec l’autorisation écrite et préalable de Gwez  qui pourra être révoquée à tout moment. Gwez décline toute responsabilité concernant le contenu des sites liés au Site.<br><br> Gwez informe les visiteurs du Site que les présentes conditions peuvent être modifiées à tout moment. Ces modifications entrent en vigueur dès leur mise en ligne et sont réputées acceptées sans réserve par tout visiteur qui accède au Site postérieurement à leur mise en ligne. Il appartient donc à tout visiteur avant de naviguer sur le Site, de lire attentivement ces conditions.<br><br>Les présentes conditions sont régies par le droit français. Les juridictions françaises sont territorialement compétentes pour connaître de tout litige afférent à l’utilisation du Site.<br></p></div>",
					"title": "Notice légale et conditions d'utilisation du site"
				}
			]
		},
		"tabs": [
			{
				"href": "#protection",
				"id": "protection",
				"menu": "Politique de protection des données",
				"subtitle": "Mis à jour le 04/01/2021"
			},
			{
				"href": "#conditions",
				"id": "conditions",
				"menu": "Conditions générales de ventes",
				"subtitle": "Version 1.0"
			},
			{
				"href": "#mentions",
				"id": "mentions",
				"menu": "Mentions Légales",
				"subtitle": "Version 1.0"
			}
		],
		"title": "Mentions Légales"
	}
}
</i18n>