<template>
  <!-- Tutorial : https://medium.com/js-dojo/vue-js-google-maps-api-getting-user-location-f22ad96115ef -->
  <span
  >
        <v-text-field
          type="text"
          placeholder="Enter your address"
          v-model="address"
          ref="autocomplete"
          label="Address Line"
          required
          @change="$emit('input',address)"
        ></v-text-field>
        <v-text-field
          type="text"
          placeholder="Latitude"
          v-model="latitude"
          required
          @change="$emit('input',latitude)"
        ></v-text-field>
        <v-text-field
          type="text"
          placeholder="Longitude"
          v-model="longitude"
          required
          @change="$emit('input',longitude)"
        ></v-text-field>
        <v-btn rounded color="lightbugattiblue" elevation="0" dark @click="locatorButtonPressed">
          Get address
        </v-btn>
    </span>
</template>
<script>
    export default {
        data() {
            return {
                address: '',
                latitude: '',
                longitude: ''
            }
        },
        methods: {
            async getStreetAddressFrom(lat, long) {
                try {
                    var {data} = await this.$axios.get(
                        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
                        lat +
                        "," +
                        long +
                        "&key=AIzaSyAtiUqcIHFfJNPN7Rz0njbvjlKJavDkVxE"
                    );
                    if (data.error_message) {
                        console.log(data.error_message)
                    } else {
                        this.address = data.results[0].formatted_address;
                        this.latitude = lat;
                        this.longitude = long;
                    }
                } catch (error) {
                    console.log(error.message);
                }
            },

            locatorButtonPressed() {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude)
                    },
                    error => {
                        console.log('error');
                    }
                );
            },
        },

    }
</script>
<style scoped lang="scss">
</style>
