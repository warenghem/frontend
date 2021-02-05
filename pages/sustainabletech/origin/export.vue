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
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Brand"
                  disabled
                  value="Warenghem"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Product name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
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
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="GOTS"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Made in France"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
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
              mdi-alert-circle
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-select
                  :items="supplierproducttype"
                  label="Product type"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Brand"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Product name"
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
                      <Geolocation/>
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
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Recycle"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Plastic free"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Organic"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Locally sourced"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Local employer"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Verified Claims</p>
                <v-checkbox
                  v-model="ex4"
                  label="Vegan"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="GOTS"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="Made in France"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="Audited working conditions"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
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
              mdi-check
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-select
                  :items="manufacturerproducttype"
                  label="Product type"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Brand"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-text-field
                  label="Manufacturer's first name"
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
                      <Geolocation/>
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
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Recycle"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Plastic free"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Organic"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Locally sourced"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  label="Local employer"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
              >
                <p>Verified Claims</p>
                <v-checkbox
                  v-model="ex4"
                  label="Vegan"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="GOTS"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="Made in France"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
                <v-checkbox
                  v-model="ex4"
                  label="Audited working conditions"
                  color="blue darken-3"
                  value="blue darken-3"
                  hide-details
                ></v-checkbox>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Renewal date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
                <v-select
                  :items="certificationmethod"
                  label="Certification Method"
                ></v-select>
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
              rounded="lg"
              large
              class="btn-theme mx-auto"
              v-bind="attrs"
              @click="resetForm"
              v-on="on"
            >
              <v-icon>mdi-refresh</v-icon>
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
  export default {
    layout: 'app',
    // page component definitions
    name: 'export',
    data: () => ({
      panel: [1, 0, 0],
      category: ['Bag', 'Wallet', 'Belt', 'Shoes'],
      supplierproducttype: ['Grappe Leather', 'Linen'],
      manufacturerproducttype: ['Shoes', 'Bag','Leather Goods'],
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
    }),
    computed: {
      form () {
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
      name () {
        this.errorMessages = ''
      },
    },
    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },

  }
</script>

<style lang="scss" scoped>
</style>