<template>
  <span>{{msg}}</span>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class Sample extends Vue {
  private msg: string = 'Hello World';
}
</script>
