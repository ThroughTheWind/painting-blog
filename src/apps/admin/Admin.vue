<template>
  <v-app>
    <h1>Admin App</h1>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Admin extends Vue {}
</script>