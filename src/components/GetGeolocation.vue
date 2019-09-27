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
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class GetGeolocation extends Vue {

  private lat: number = 0.0;
  private lng: number = 0.0;

  private currentLocation(): void {
    if ('geolocation' in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
}
</script>

