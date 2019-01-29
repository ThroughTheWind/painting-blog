<template>
  <v-app>
    <h1>Blog App</h1>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Blog extends Vue {}
</script>