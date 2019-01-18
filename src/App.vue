<template>
  <v-app id="painting-blog">
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
      <v-container fluid>
        <v-layout column>
          <v-flex xs12 align-center>
            <div style="text-align:center">
              <v-avatar
                color="grey lighten-4"
                size="120px"
              >
                <img src="https://i.ytimg.com/vi/bgs1hWVPQ2E/hqdefault.jpg" title="Marc Dancre">
              </v-avatar>
              <div class="headline">Marc <span style="font-weight:bold">Dancre</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">
                Né le 14 janvier 1955<br/>
                Peintre, écrivain et père de famille.<br/>
                Vous présente ses oeuvres d'art, réalisées tout au long de sa vie.
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar app  clipped-left color="teal">
      <v-toolbar-title class="headline text-uppercase">
        <span>Marc DANCRE </span>
        <span class="font-weight-light">Blog d'un artiste méconnu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer color="teal" app absolute>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      
    }
  }
}
</script>
