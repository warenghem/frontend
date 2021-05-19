<template>
  <v-container class="py-5 px-3 px-md-5 mb-10">
    <div style="width: 30vw;max-width: 200px;min-width: 150px;" class="svglogo ma-auto my-10 py-10" v-html="require(`~/assets/images/Origin.svg?raw`)" />
    <div class="text-center teradeli-medium home-title pb-10">Lock your stories in the chain</div>
    <v-expansion-panels  focusable inset flat v-model="panel" popout>
      <v-expansion-panel>
        <v-expansion-panel-header class="border-bottom-2" ripple>
          <v-card-title class="justify-center">Product whole informations</v-card-title>
        </v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <v-container class="pvw">
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <div class="text-center pb-3">Please select your product item</div>
                <v-autocomplete
                  v-model="selectedProduct"
                  filled
                  :items="productsItem"
                  item-text="name"
                  item-value="name"
                  label="Product name"
                  @change="productSelect"
                  chip
                  return-object
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      @click="data.select"
                      @click:close="remove(data.item)"
                    >
                      <v-avatar color="white" left>
                        <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-20,ar-1-1/Products/'+ data.item.image[0].src">
                      </v-avatar>
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template v-slot:item="data">
                      <v-list-item-avatar color="white">
                        <img :src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-40,ar-1-1/Products/'+ data.item.image[0].src">
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-html="data.item.name"></v-list-item-title>
                      </v-list-item-content>
                  </template>
                </v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="text-center"
              >
                <div class="pb-3">Or</div>
                <v-btn rounded color="lightbugattiblue" elevation="0" dark @click="addNewProduct" x-large>Add New
                  Product
                </v-btn>
              </v-col>
            </v-row>
            <v-expand-transition>
              <v-row v-if="isLoading">
                <v-col cols="12" class="text-center">
                  <v-progress-linear
                    indeterminate
                    color="lightbugattiblue"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-expand-transition>
            <v-expand-transition>
              <v-row v-if="isResult">
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="product.name"
                    :disabled="!productAddMode"
                    label="Product name"
                    filled
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="product.api"
                    :disabled="!productAddMode"
                    label="Product api"
                    filled
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="product.sku"
                    :disabled="!productAddMode"
                    label="Product sku"
                    filled
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Brand"
                    :disabled="!productAddMode"
                    v-model="product.brand"
                    filled
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-textarea
                    v-html="product.description"
                    label="Description"
                    hint="Hint text"
                    :disabled="!productAddMode"
                    filled
                    rounded
                  ></v-textarea>
                </v-col>
                <Awards v-model="product.awards"/>
              </v-row>
            </v-expand-transition>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="border-bottom-2" ripple>
          <v-card-title class="justify-center">Providers</v-card-title>
        </v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <v-container class="pvw" v-for="(supplier,idx) in suppliers" :key="'supply'+idx">
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <div class="text-center pb-3">Please select your provider</div>
                <v-autocomplete
                  v-model="selectedProvider[idx]"
                  filled
                  :items="providersItem"
                  label="Provider name"
                  item-text="name"
                  @change="providerSelect(idx)"
                  v-on:change="changeItem"
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="text-center"
              >
                <div class="pb-3">Or</div>
                <v-btn rounded color="lightbugattiblue" elevation="0" dark @click="addNewProvider(idx)" x-large>Add New
                  Provider
                </v-btn>
              </v-col>
            </v-row>
            <v-expand-transition>
              <v-row v-if="providerAddMode">
                <v-col cols="12">
                  <h3 class="info--text text-center">Providers {{idx+1}}</h3>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-select
                    :items="providersItem"
                    item-text="type"
                    label="Provider type"
                    v-model="supplier.type"
                    filled
                    rounded
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-select
                    :items="providersItem"
                    item-text="product"
                    label="Product type"
                    v-model="supplier.product"
                    filled
                    rounded
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Brand"
                    :items="productsItem.brand"
                    v-model="supplier.brand"
                    filled
                    rounded
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-autocomplete
                    v-model="supplier.name"
                    filled
                    rounded
                    :items="providerType"
                    dense
                    label="Product name"
                    :item-text="providerTypeName"
                    v-on:change="changeItem"
                  ></v-autocomplete>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Quantity"
                    type="number"
                    v-model="supplier.quantity"
                    filled
                    rounded
                  ></v-text-field>
                </v-col> 
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-select
                    :items="unit_type"
                    item-text="unit"
                    label="Product unit"
                    v-model="supplier.unit"
                    filled
                    rounded
                  ></v-select>
                </v-col> 
                <v-col
                  cols="12"
                >
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <div class="pb-5">Location</div>
                      <Geolocation v-model="supplier.location"/>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <div class="pb-10">Date</div>
                      <Datetime v-model="supplier.date"/>
                    </v-col>
                  </v-row>
                </v-col>
                <Awards v-model="supplier.awards"/>
              </v-row>
              <v-row  v-if="providerAddMode">
                <v-col cols="12">
                  <v-btn rounded color="lightbugattiblue" elevation="0" dark class="d-flex ma-auto"
                        @click="addSupplier">Add Provider
                  </v-btn>
                </v-col>
              </v-row>
            </v-expand-transition>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="border-bottom-2" ripple>
          <v-card-title class="justify-center">Transits</v-card-title>
        </v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <v-container
            class="pvw"
            v-for="(transit,idx) in transits" :key="'supply2'+idx"
          >
              <v-row>
                  <v-col cols="12">
                    <h3 class="info--text text-center">Transit {{idx+1}}</h3>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      :items="providersItem"
                      item-text="name"
                      label="From"
                      v-model="transit.from"
                      filled
                      rounded
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      :items="providersItem"
                      item-text="name"
                      label="To"
                      v-model="transit.to"
                      filled
                      rounded
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <div class="pb-10">Date</div>
                    <Datetime v-model="transit.date"/>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    class="pt-10"
                  >
                    <v-select
                      :items="transit_type"
                      label="Method"
                      v-model="transit.type"
                      filled
                      rounded
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    class="pt-10"
                  >
                    <v-select
                      :items="transit_type"
                      label="Product type"
                      v-model="transit.goods"
                      multiple
                      filled
                      rounded
                    ></v-select>
                  </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn rounded color="lightbugattiblue" elevation="0" dark class="d-flex ma-auto"
                        @click="addTransit">Add Transit
                  </v-btn>
                </v-col>
              </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="text-center py-10">
      <v-slide-x-reverse-transition>
        <v-tooltip
          v-if="formHasErrors"
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              large
              class="btn-theme mx-auto"
              v-bind="attrs"
              @click="resetForm"
              v-on="on"
              rounded color="lightbugattiblue" elevation="0" dark
            >
              <v-icon>{{ svgPath4 }}</v-icon>
            </v-btn>
          </template>
          <span>Refresh form</span>
        </v-tooltip>
      </v-slide-x-reverse-transition>
      <v-btn
        large
        rounded color="lightbugattiblue" elevation="0" dark class="d-flex ma-auto"
        @click="submit"
      >
        Submit
      </v-btn>
    </div>
    <v-row justify="center" align="center" class="ma-auto">
      <v-col cols="12" class="text-center pt-5 pb-0">Powered by</v-col>
      <div style="width: 30vw;max-width: 180px;min-width: 150px;" class="svglogo pa-5" v-html="require(`~/assets/images/WA-mif-vf.svg?raw`)">
      </div>
      <div style="width: 30vw;max-width: 200px;min-width: 150px;" class="svglogo pa-5" v-html="require(`~/assets/images/ethereum.svg?raw`)">
      </div>
    </v-row>
  </v-container>
</template>

<script>
    import {
        mdiAlertCircle,
        mdiCalendar,
        mdiCheck,
        mdiRefresh,
        mdiCheckboxBlankOutline,
        mdiCheckboxMarked,
        mdiPaperclip,
        mdiClose
    } from '@mdi/js'
    import {FirebaseStorage} from "@/plugins/firebase.js";

    export default {
        layout: 'app',
        // page component definitions
        name: 'export',
        head () {
          return {
            meta: [
              { hid: 'robots', name: 'robots', content: 'noindex' }
            ]
          }
        },
        async asyncData(context) {
            const {$content, app} = context;
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productsItem = await $content(`router/${lang_path}/shop`).fetch();
            const providersItem = await $content(`api/${lang_path}/providers`).fetch();
            return {
                productsItem,
                providersItem,
            }
        },
        data: () => ({
            svgPath1: mdiAlertCircle,
            svgPath2: mdiCalendar,
            svgPath3: mdiCheck,
            svgPath4: mdiRefresh,
            svgPath5: mdiCheckboxBlankOutline,
            svgPath6: mdiCheckboxMarked,
            svgPath7: mdiPaperclip,
            svgPath8: mdiClose,
            panel: [1, 0, 0],
            transit_type: ['Plane', 'Train', 'Road', 'Walk'],
            unit_type: ['unity', 'linear meter'],
            certificationmethod: ['Audited & verified certification', 'Audited from us'],
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            errorMessages: '',
            name: null,
            location: null,
            latitude: null,
            longitude: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false,
            menu2: false,
            selectedProduct: null,
            productAddMode: false,
            product: {
                name: '',
                api: '',
                sku: '',
                brand: '',
                category: [],
                description: '',
                awards: {}
            },
            isLoading: false,
            isResult: false,
            selectedProvider: [null],
            suppliers: [
                {
                    type: null,
                    product: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    unit: '',
                    location: {
                        address: '',
                        latitude: '',
                        longitude: ''
                    },
                    date: new Date().toISOString().substr(0, 10),
                    awards: {}
                }
            ],
            transits: [
              { 
                from: null, 
                to: null, 
                date: new Date().toISOString().substr(0, 10),
                type: null, 
                goods: []
              },
            ],
            myFile: null,
            processing: false,
            fileURL: null,
        }),
        computed: {
            form() {
                return {
                    name: this.name,
                    location: this.location,
                    city: this.city,
                    state: this.state,
                    zip: this.zip,
                    country: this.country,
                }
            },
        },
        watch: {
            name() {
                this.errorMessages = ''
            },
        },
        methods: {
            async fileInput(file) {
                try {
                    if (file && file.name) {
                        this.processing = true;

                        const fr = new FileReader();
                        fr.readAsDataURL(file);
                        fr.addEventListener("load", () => {
                            // this is to load image on the UI
                            // .. not related to file upload :)
                            this.fileURL = fr.result;
                        });
                        const imgData = new FormData();
                        imgData.append("image", this.myFile);
                        const filePath = `mypath/${Date.now()}-${file.name}`;
                        const metadata = {contentType: this.myFile.type};

                        await FirebaseStorage.ref()
                            .child(filePath)
                            .put(this.myFile, metadata);
                        console.log("filePath: ", filePath);
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    this.processing = false;
                }
            },
            addressCheck() {
                this.errorMessages = this.location && !this.name
                    ? `Hey! I'm required`
                    : ''

                return true
            },
            resetForm() {
                this.errorMessages = []
                this.formHasErrors = false

                Object.keys(this.form).forEach(f => {
                    this.$refs[f].reset()
                })
            },
            changeItem(selected) {
              this.providerAddMode = true;
              var type = selected.type;
              if (type.includes("Finished product")) {
                  this.providerType = this.productsItem;
                  this.providerTypeName = "name"
              } else {
                  this.providerType = this.providersItem;
                  this.providerTypeName = "product"
              }
            },
            async submit() {
                // this.formHasErrors = false
                //
                // Object.keys(this.form).forEach(f => {
                //     if (!this.form[f]) this.formHasErrors = true
                //     this.$refs[f].validate(true)
                // })
                try {
                    const data = {
                        "recipients": [{"name": this.product.name, "email": "test@test.com"}],
                        "planter_id": 148537,
                        "species_id": 727,
                        "quantity": 1,
                        "language": "fr"
                    };
                    this.$axios.setHeader('Authorization', 'Bearer M5ISDlbYDkO68Idip6u0Ny0yULAigugsTdvcQDMX0ofSwTByv180UjVmuz2cMFXw')
                    const res = await this.$axios.post('http://youcannevertestenough.tree-nation.com/api/plant',
                        data
                    );
                    if (res.data.status === 'ok') {
                        const productData = {
                            "name": this.product.api,
                            "description": this.product.name,
                            "latitude": "0",
                            "longitude": "0",
                              "custom": {
                                "version": "1",
                                "providers": this.suppliers,
                                "transits": this.transits,
                                "tree": res.data.trees
                            }
                        };
                        this.$axios.setHeader('Content-Type', 'application/json')
                        const product_res = await this.$axios.post('http://15.188.65.163:40080/api/products',
                            productData);
                    }

                } catch (e) {
                    console.log(e)
                }

            },
            addSupplier() {
                this.selectedProvider.push(null);
                this.suppliers.push({
                    type: null,
                    product: null,
                    selectedProvider: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    unit: '',
                    location: '',
                    latitude: '',
                    longitude: '',
                    date: new Date().toISOString().substr(0, 10),
                    certification_method: '',
                    renewalDate: '',
                    claims: [],
                    verifiedclaims: {
                      vegan: {
                          is: false,
                          renewalDate: '',
                          certification_method: null,
                          menu: false
                      },
                      gots: {
                          is: false,
                          renewalDate: new Date().toISOString().substr(0, 10),
                          certification_method: null,
                          menu: false
                      },
                      france: {
                          is: false,
                          renewalDate: new Date().toISOString().substr(0, 10),
                          certification_method: null,
                          menu: false
                      },
                      audited_working: {
                          is: false,
                          renewalDate: new Date().toISOString().substr(0, 10),
                          certification_method: null,
                          menu: false
                      }
                    }
                })
            },
            addTransit() {
                this.transits.push({
                  from: null, 
                  to: null, 
                  date: new Date().toISOString().substr(0, 10),
                  type: null, 
                  goods: []
                })
            },
            productSelect() {
                this.productAddMode = false;
                this.isLoading = true;
                this.isResult = false;
                this.product.sku = this.selectedProduct.sku;
                this.product.api = this.selectedProduct.slug;
                this.product.description = this.selectedProduct.description;
                this.product.name = this.selectedProduct.name;
                this.product.brand = this.selectedProduct.brand;
                this.product.awards = [];
                this.product.category = [];
                this.selectedProduct.award.forEach(award => {
                        this.product.awards.push(award.name)
                    }
                );
                this.selectedProduct.categories.forEach(cat => {
                        this.product.category.push(cat.name)
                    }
                );
                setTimeout(() => {
                    this.isLoading = false;
                    this.isResult = true;
                }, 2000)

            },
            providerSelect() {
                this.isLoading = true;
                this.isResult = false;
                setTimeout(() => {
                    this.isLoading = false;
                    this.isResult = true;
                }, 2000)

            },
            addNewProduct() {
                this.productAddMode = true;
                this.product = {
                    id: '',
                    name: '',
                    sku: '',
                    brand: '',
                    category: [],
                    description: '',
                    awards: []
                };
                this.isResult = true;
            },
            addNewProvider() {
                this.providerAddMode = true;
                // this.suppliers = {
                //     brand: '',
                //     name: '',
                //     location: '',
                // };
                this.isResult = true;
            }
        },
    }
</script>