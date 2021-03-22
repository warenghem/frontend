<template dark>
  <div class="py-5 px-3 px-md-5 mb-10">
    <v-expansion-panels v-model="panel" focusable popout>
      <v-expansion-panel>
        <v-expansion-panel-header ripple>
          <v-card-title>Product whole informations</v-card-title>
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
                  rounded
                  :items="productsItem"
                  dense
                  label="Product name"
                  item-text="name"
                  @change="productSelect"
                  return-object
                ></v-autocomplete>
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
            <v-row v-if="isLoading">
              <v-col cols="12" class="text-center">
                <v-progress-linear
                  indeterminate
                  color="lightbugattiblue"
                ></v-progress-linear>
              </v-col>
            </v-row>
            <v-row v-if="isResult">
              <v-col
                cols="12"
                sm="4"
                md="3"
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
                sm="4"
                md="3"
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
                sm="4"
                md="3"
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
                sm="4"
                md="3"
              >
                <v-select
                  v-model="product.category"
                  :disabled="!productAddMode"
                  multiple
                  :items="category"
                  label="Category"
                  filled
                  rounded
                ></v-select>
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
              <v-col
                cols="12"
              >
                <p>Awards</p>
                <v-checkbox
                  v-model="product.awards"
                  label="Vegan"
                  color="lightbugattiblue"
                  value="Vegan"
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  hide-details
                  :disabled="!productAddMode"
                ></v-checkbox>
                <v-checkbox
                  v-model="product.awards"
                  label="GOTS"
                  color="lightbugattiblue"
                  value="GOTS"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  :disabled="!productAddMode"
                ></v-checkbox>
                <v-checkbox
                  v-model="product.awards"
                  label="Made in France"
                  color="lightbugattiblue"
                  value="Made in France"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  :disabled="!productAddMode"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header ripple>
          <v-card-title>Suppliers</v-card-title>
          <template v-slot:actions>
            <v-icon color="error">
              {{ svgPath1 }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <v-container class="pvw">
            <v-row v-for="(supplier,idx) in suppliers" :key="'supply'+idx">
              <v-col cols="12">
                <h3 class="info--text text-center">Supplier {{idx+1}}</h3>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="supplierproducttype"
                  label="Product type"
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
                <v-text-field
                  label="Brand"
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
                <v-text-field
                  label="Product name"
                  v-model="supplier.name"
                  filled
                  rounded
                ></v-text-field>
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
              >
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <div>Location</div>
                    <Geolocation v-model="supplier.location"/>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <div class="pb-10">Date</div>
                    <Datetime v-model="supplier.date"/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
              >
                <p class="pt-5">Claims</p>
                <div v-for="claim in claims_options" :key="claim.value">
                  <v-checkbox
                    v-model="supplier.claims"
                    color="lightbugattiblue"
                    hide-details
                    :label="claim.label"
                    :value="claim.value"
                    :on-icon="svgPath6"
                    :off-icon="svgPath5"
                  ></v-checkbox>
                </div>

              </v-col>
              <v-col
                cols="12"
              >
                <p>Verified Claims</p>
                <v-checkbox
                  v-model="supplier.vegan.is"
                  label="Vegan"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="supplier.vegan.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="supplier.vegan.renewalDate"
                      label="Picker without buttons"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="supplier.vegan.renewalDate"
                    @input="supplier.vegan.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="supplier.vegan.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-file-input
                  v-model="myFile"
                  outlined
                  placeholder="Click to upload file"
                  @change="fileInput"
                  :disabled="processing"
                  filled
                  rounded
                >
                  <template v-slot:append-outer>
                    <v-progress-circular
                      v-if="processing"
                      color="grey"
                      indeterminate
                      small
                    />
                  </template>
                </v-file-input>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="supplier.vegan.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-checkbox
                  v-model="supplier.gots.is"
                  label="GOTS"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="supplier.gots.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="supplier.gots.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="supplier.gots.renewalDate"
                    @input="supplier.gots.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="supplier.gots.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-checkbox
                  v-model="supplier.france.is"
                  label="Made in France"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="supplier.france.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="supplier.france.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="supplier.france.renewalDate"
                    @input="supplier.france.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="supplier.france.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-checkbox
                  v-model="supplier.audited_working.is"
                  label="Audited working conditions"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="supplier.audited_working.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="supplier.audited_working.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="supplier.audited_working.renewalDate"
                    @input="supplier.audited_working.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="supplier.audited_working.certification_method"
                  filled
                  rounded
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn rounded color="lightbugattiblue" elevation="0" dark class="d-flex ma-auto"
                       @click="addSupplier">Add Supplier
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header ripple>
          <v-card-title>Manufacturers</v-card-title>
          <template v-slot:actions>
            <v-icon color="teal">
              {{ svgPath2 }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content eager>
          <v-container class="pvw">
            <v-row v-for="(manufacture,idx) in manufactures" :key="'manufucture'+idx">
              <v-col cols="12">
                <h3 class="info--text tect-center">Manufacturer {{idx+1}}</h3>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  :items="manufacturerproducttype"
                  label="Product type"
                  v-model="manufacture.type"
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
                  v-model="manufacture.brand"
                  filled
                  rounded
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Manufacture first name"
                  v-model="manufacture.name"
                  filled
                  rounded
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Quantity"
                  type="number"
                  v-model="manufacture.quantity"
                  filled
                  rounded
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Location</p>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <Geolocation v-model="manufacture.location"/>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <Datetime v-model="manufacture.location"/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Claims</p>
                <div v-for="claim in claims_options" :key="claim.value">
                  <v-checkbox
                    v-model="manufacture.claims"
                    color="lightbugattiblue"
                    hide-details
                    :label="claim.label"
                    :value="claim.value"
                    :on-icon="svgPath6"
                    :off-icon="svgPath5"
                    class="pb-3"
                  ></v-checkbox>
                </div>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Verified Claims</p>
                <v-checkbox
                  v-model="manufacture.vegan.is"
                  label="Vegan"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-menu
                  v-model="manufacture.vegan.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="manufacture.vegan.renewalDate"
                      label="Picker without buttons"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                      class="pb-3"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="manufacture.vegan.renewalDate"
                    @input="manufacture.vegan.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="manufacture.vegan.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-checkbox
                  v-model="manufacture.gots.is"
                  label="GOTS"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="manufacture.gots.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="manufacture.gots.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="manufacture.gots.renewalDate"
                    @input="manufacture.gots.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="manufacture.gots.certification_method"
                ></v-select>
                <v-checkbox
                  v-model="manufacture.france.is"
                  label="Made in France"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="manufacture.france.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="manufacture.france.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="manufacture.france.renewalDate"
                    @input="manufacture.france.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="manufacture.france.certification_method"
                  filled
                  rounded
                ></v-select>
                <v-checkbox
                  v-model="manufacture.audited_working.is"
                  label="Audited working conditions"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  class="pb-3"
                ></v-checkbox>
                <v-menu
                  v-model="manufacture.audited_working.menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="manufacture.audited_working.renewalDate"
                      label="Renewal Date"
                      :prepend-icon="svgPath2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      filled
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="manufacture.audited_working.renewalDate"
                    @input="manufacture.audited_working.menu = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                  v-model="manufacture.audited_working.certification_method"
                  filled
                  rounded
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn rounded color="lightbugattiblue" elevation="0" dark class="d-flex ma-auto"
                       @click="addManufacturer">Add Manufacturer
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
  </div>
</template>

<script>
    import {
        mdiAlertCircle,
        mdiCalendar,
        mdiCheck,
        mdiRefresh,
        mdiCheckboxBlankOutline,
        mdiCheckboxMarked,
        mdiPaperclip
    } from '@mdi/js'
    import {FirebaseStorage} from "@/plugins/firebase.js";

    export default {
        layout: 'app',
        // page component definitions
        name: 'export',
        async asyncData(context) {
            const {$content, app} = context;
            const lang_path = app.i18n.locale.split('-')[0] === 'en' ? 'en-us' : 'fr-fr';
            const productsItem = await $content(`${lang_path}/shop`).fetch();
            return {
                productsItem,
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
            panel: [1, 0, 0],
            category: ['Bags', 'Wallet', 'Belt', 'Shoes'],
            supplierproducttype: ['Grappe Leather', 'Linen'],
            manufacturerproducttype: ['Shoes', 'Bag', 'Leather Goods'],
            certificationmethod: ['Audited & verified certification', 'Audited from us'],
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            errorMessages: '',
            name: null,
            location: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false,
            menu2: false,
            selectedProduct: null,
            productAddMode: false,
            product: {
                id: '',
                name: '',
                sku: '',
                brand: '',
                category: [],
                description: '',
                awards: []
            },
            isLoading: false,
            isResult: false,
            claims_options: [
                {label: 'Care for environment', value: 1},
                {label: 'Recycle', value: 2},
                {label: 'Plastic free', value: 3},
                {label: 'Organic', value: 4},
                {label: 'Locally sourced', value: 5},
                {label: 'Local employer', value: 6},
            ],
            suppliers: [
                {
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    location: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: [],
                    vegan: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    gots: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    france: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    audited_working: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },

                }
            ],
            manufactures: [
                {
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    location: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: [],
                    vegan: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    gots: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    france: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },
                    audited_working: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        upload_file: '',
                        menu: false
                    },

                }
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
            async submit() {
                // this.formHasErrors = false
                //
                // Object.keys(this.form).forEach(f => {
                //     if (!this.form[f]) this.formHasErrors = true
                //     this.$refs[f].validate(true)
                // })
                try {
                    const data = {
                        "recipients": [{"name": this.product.name, "email": "warenghem3@yahoo.com"}],
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
                            "product": {
                                "sku": this.product.sku,
                                "name": this.product.name,
                                "product": this.product.brand,
                                "category": this.product.category.toString(),
                                "description": this.product.description,
                                "location": "Via gaudenzio fantioli 15/16, Milano, 20138 Italy",
                                "date": new Date(),
                                "Awards": this.product.awards
                            },
                            "suppliers": this.suppliers,
                            "manufacturers": this.manufacturers,
                            "tree": res.data.trees
                        };
                        this.$axios.setHeader('Authorization', '')
                        const product_res = await this.$axios.post('http://15.188.65.163:40080/api/products',
                            productData, { useCredentails: true,      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin', });
                        console.log(product_res)
                    }

                } catch (e) {
                    console.log(e)
                }

            },
            addSupplier() {
                this.suppliers.push({
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    location: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: null,
                    vegan: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    gots: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    france: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    audited_working: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },

                })
            },
            addManufacturer() {
                this.manufactures.push({
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    location: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: null,
                    vegan: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    gots: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    france: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },
                    audited_working: {
                        is: false,
                        renewalDate: '',
                        certification_method: null,
                        menu: false
                    },

                })
            },
            productSelect() {
                this.productAddMode = false;
                this.isLoading = true;
                this.isResult = false;
                this.product.id = this.selectedProduct.id;
                this.product.sku = this.selectedProduct.sku;
                this.product.description = this.selectedProduct.description;
                this.product.name = this.selectedProduct.name;
                this.product.brand = this.selectedProduct.brand ? this.selectedProduct.brand.name : '';
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
            }
        },

    }
</script>

<style lang="scss" scoped>
</style>
