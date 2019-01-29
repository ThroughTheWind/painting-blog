<template>
  <v-app>
    <h1>Demo App</h1>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Demo extends Vue {}
</script>
