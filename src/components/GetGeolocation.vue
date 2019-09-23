<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs4>
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="currentLocation()"
        >
          Position bestimmen
          <v-icon right dark>mdi-map-marker-question</v-icon>
        </v-btn>
      </v-flex>

      <v-flex xs8>
        Lat: {{lat}} Lng: {{lng}}
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class GetGeolocation extends Vue {

  private lat: any;
  private lng: any;

  currentLocation(): void {
    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude)
        this.lat = position.coords.latitude
        this.lng = position.coords.longitude
      })
    } else {
    }
  }
}
</script>

