<template>
  <v-row align="center">
    <v-col
      cols="12"
    >
      <p class="pt-5">Claims</p>
      <div v-for="claim in claims_options" :key="claim.value">
        <v-checkbox
          v-model="claims"
          color="lightbugattiblue"
          hide-details
          :label="claim.label"
          :value="claim.label"
          :on-icon="svgPath6"
          :off-icon="svgPath5"
        ></v-checkbox>
      </div>

    </v-col>
    <v-col
      cols="12"
    >
      <p>Verified Claims</p>
      <div v-for="verifiedclaim in verifiedclaims_options" :key="verifiedclaim.value">
        <v-checkbox
          v-model="verifiedclaims[verifiedclaim.name].is"
          :label="verifiedclaim.label"
          color="lightbugattiblue"
          hide-details
          :on-icon="svgPath6"
          :off-icon="svgPath5"
          class="pb-3"
        ></v-checkbox>
        <div v-if="verifiedclaims[verifiedclaim.name].is">
          <v-menu
            v-model="verifiedclaims[verifiedclaim.name].menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="verifiedclaims[verifiedclaim.name].renewalDate"
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
              v-model="verifiedclaims[verifiedclaim.name].renewalDate"
              @input="verifiedclaims[verifiedclaim.name].menu = false"
            ></v-date-picker>
          </v-menu>
          <v-select
            :items="certificationmethod"
            label="Certification Method"
            v-model="verifiedclaims[verifiedclaim.name].certification_method"
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
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
  import {
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
  } from '@mdi/js'
  export default {
    data () {
      return {
        svgPath5: mdiCheckboxBlankOutline,
        svgPath6: mdiCheckboxMarked,
        claims_options: [
            {label: 'Care for environment', value: 1},
            {label: 'Recycle', value: 2},
            {label: 'Plastic free', value: 3},
            {label: 'Organic', value: 4},
            {label: 'Locally sourced', value: 5},
            {label: 'Local employer', value: 6},
        ],
        verifiedclaims_options: [
            {name: 'vegan', label: 'Vegan'},
            {name: 'gots', label: 'GOTS'},
            {name: 'france', label: 'Made in France'},
            {name: 'audited_working', label: 'Audited working conditions'},
        ],
        claims: [],
        verifiedclaims: {
          vegan: {
              is: false,
              renewalDate: new Date().toISOString().substr(0, 10),
              certification_method: null,
              upload_file: '',
              menu: false
          },
          gots: {
              is: false,
              renewalDate: new Date().toISOString().substr(0, 10),
              certification_method: null,
              upload_file: '',
              menu: false
          },
          france: {
              is: false,
              renewalDate: new Date().toISOString().substr(0, 10),
              certification_method: null,
              upload_file: '',
              menu: false
          },
          audited_working: {
              is: false,
              renewalDate: new Date().toISOString().substr(0, 10),
              certification_method: null,
              upload_file: '',
              menu: false
          },
      }
      }
    },
  }
</script>
