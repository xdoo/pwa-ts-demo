<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex xs12>
        <v-file-input
          label="File input"
          filled
          prepend-icon="mdi-camera"
        ></v-file-input>
      </v-flex>

      <v-flex xs12>
        <sample></sample>
      </v-flex>

      <v-flex xs12>
        <get-geolocation></get-geolocation>
      </v-flex>

      <v-flex xs12>
        <http-bin-request></http-bin-request>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sample from '@/components/Sample.vue';
import GetGeolocation from '@/components/GetGeolocation.vue';
import HttpBinRequest from '@/components/HttpBinRequest.vue';

@Component({
  components: {
    Sample,
    GetGeolocation,
    HttpBinRequest,
  },
})
export default class HelloWorld extends Vue {
}
</script>
