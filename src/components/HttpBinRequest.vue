<template>
  <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="getRequest()"
    >
      GET
      <v-icon right dark>mdi-console-line</v-icon>
    </v-btn> 
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HttpBinRequest extends Vue {

  private origin: string = '';

  async getRequest() {
    const response = await this.$http.get('/get');
    this.origin = await response.data.origin;
    console.log('origin -> ' + this.origin);
  }
}
</script>
