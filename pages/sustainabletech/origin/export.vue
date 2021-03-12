<template dark>
  <div class="py-5 px-3 px-md-5 mb-10">
    <v-expansion-panels v-model="panel" focusable popout>
      <v-expansion-panel>
        <v-expansion-panel-header ripple>
          <v-card-title>Product whole informations</v-card-title>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="4"
                md="3"
              >
                <v-autocomplete
                  v-model="value"
                  dense
                  filled
                  label="Product name"
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="3"
              >
                <v-select
                  :items="sku"
                  label="SKU"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="3"
              >
                <v-text-field
                  label="Brand"
                  disabled
                  value="Warenghem"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="3"
              >
                <v-select
                  :items="category"
                  label="Category"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  name="input-7-1"
                  label="Description"
                  hint="Hint text"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Awards</p>
                <v-checkbox
                  v-model="ex4"
                  label="Vegan"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="GOTS"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Made in France"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
        <v-expansion-panel-content>
          <v-container>
            <v-row v-for="(supplier,idx) in suppliers" :key="'supply'+idx">
              <v-col cols="12">
                <h3 class="info--text">Supplier {{idx+1}}</h3>
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
                     <Geolocation v-model="supplier.address"/>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <Datetime/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Claims</p>
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
                ></v-select>
                <v-checkbox
                  v-model="supplier.vegan.is"
                  label="Vegan"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
                <v-checkbox
                  v-model="supplier.gots.is"
                  label="GOTS"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
                <v-checkbox
                  v-model="supplier.france.is"
                  label="Made in France"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
                <v-checkbox
                  v-model="supplier.audited_working.is"
                  label="Audited working conditions"
                  color="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn class="btn-theme float-right" @click="addSupplier">Add Supplier</v-btn>
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
        <v-expansion-panel-content>
          <v-container>
             <v-row v-for="(manufacture,idx) in manufactures" :key="'manufucture'+idx">
              <v-col cols="12">
                <h3 class="info--text">Manufacturer {{idx+1}}</h3>
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
                    <Geolocation v-model="manufacture.address"/>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <Datetime/>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Claims</p>
                <v-checkbox
                  v-model="ex4"
                  label="Care for environment"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Recycle"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Plastic free"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Organic"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Locally sourced"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Local employer"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
                ></v-checkbox>
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
                ></v-select>
                <v-checkbox
                  v-model="manufacture.gots.is"
                  label="GOTS"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
                <v-checkbox
                  v-model="manufacture.audited_working.is"
                  label="Audited working conditions"
                  color="lightbugattiblue"
                  value="lightbugattiblue"
                  hide-details
                  :on-icon="svgPath6"
                  :off-icon="svgPath5"
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
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn class="btn-theme float-right" @click="addManufacturer">Add Manufacturer</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="text-center py-3">
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
            >
              <v-icon>{{ svgPath4 }}</v-icon>
            </v-btn>
          </template>
          <span>Refresh form</span>
        </v-tooltip>
      </v-slide-x-reverse-transition>
      <v-btn
        rounded="lg"
        large
        class="btn-theme mx-auto"
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
        mdiCheckboxMarked
    } from '@mdi/js'

    export default {
        layout: 'app',
        // page component definitions
        name: 'export',
        data: () => ({
            svgPath1: mdiAlertCircle,
            svgPath2: mdiCalendar,
            svgPath3: mdiCheck,
            svgPath4: mdiRefresh,
            svgPath5: mdiCheckboxBlankOutline,
            svgPath6: mdiCheckboxMarked,
            panel: [1, 0, 0],
            category: ['Bag', 'Wallet', 'Belt', 'Shoes'],
            supplierproducttype: ['Grappe Leather', 'Linen'],
            manufacturerproducttype: ['Shoes', 'Bag', 'Leather Goods'],
            certificationmethod: ['Audited & verified certification', 'Audited from us'],
            countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
            errorMessages: '',
            name: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false,
            menu2: false,
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
                    address: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: [],
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

                }
            ],
            manufactures: [
                {
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    address: '',
                    date: '',
                    certification_method: '',
                    renewalDate: '',
                    claims: [],
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

                }
            ],
        }),
        computed: {
            form() {
                return {
                    name: this.name,
                    address: this.address,
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
            addressCheck() {
                this.errorMessages = this.address && !this.name
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
            submit() {
                this.formHasErrors = false

                Object.keys(this.form).forEach(f => {
                    if (!this.form[f]) this.formHasErrors = true

                    this.$refs[f].validate(true)
                })
            },
            addSupplier() {
                this.suppliers.push({
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    address: '',
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
            addManufacturer(){
                this.manufactures.push({
                    type: null,
                    brand: '',
                    name: '',
                    quantity: 0,
                    address: '',
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
            }
        },

    }
</script>

<style lang="scss" scoped>
</style>
