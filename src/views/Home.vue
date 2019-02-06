<template>
  <v-app :dark="appSettings().themeSettings.darkTheme.value">
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-toolbar color="primary" :flat="appSettings().layoutSettings.flatStyle.value">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>mdi-apps</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Les applications</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="appDesc in appDescriptions"
          :key="appDesc.id"
          :to="{path: '/'+appDesc.routerLink}"
        >
          <v-list-tile-action>
            <v-icon>{{ appDesc.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ appDesc.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed :flat="appSettings().layoutSettings.flatStyle.value">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="appDesc in appDescriptions"
          :key="appDesc.id"
          :to="{path: '/'+appDesc.routerLink}"
          flat
        >
          {{appDesc.title}}
          <v-icon right>{{appDesc.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-xl="true">
        <v-layout row wrap justify-center>
          <v-flex mb-4 xs12 text-xs-center>
            <h1 class="display-2 font-weight-bold mb-3">
              Our Apps
            </h1>
            <p class="subheading font-weight-regular">
              Check out the app examples we developed using VueJs and 
              <br>Vuetify Material CSS framework !
            </p>
          </v-flex>
          <v-flex v-for="appDesc in appDescriptions" :key="appDesc.id" xs3>
            <v-card ripple>
              <v-layout column fill-height justify-center align-space-around>
                <v-flex xs10>
                  <v-card-title primary-title>
                    <div class="headline">{{ appDesc.title }}</div>
                    
                  </v-card-title>
                </v-flex>
                <v-flex xs10>
                  <p class="pa-5">
                      {{appDesc.description}}
                  </p>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>      
        </v-layout>
      </v-container>
      <hello-world/>
    </v-content>
    <v-footer app>Built By ThroughTheWind</v-footer>

    <app-settings/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/sections/HelloWorld.vue"; // @ is an alias to /src
import AppSettings from "@/components/ui/app-settings/AppSettings.vue"; // @ is an alias to /src
import { appSettingsService } from "@/components/ui/app-settings/app-settings.service"; // @ is an alias to /src
import RandomSection from "@/components/sections/RandomSection.vue";

import { getDefaultAppSettings } from "@/components/ui/app-settings/AppSettings";

@Component({
  components: {
    HelloWorld,
    RandomSection,
    AppSettings,
  },
})
export default class Home extends Vue {
  public title: string = "Let's Try this Framework !";
  public drawer: boolean = false;
  public appDescriptions: any[] = [
    {
      id: 0,
      title: "Home",
      description: "Nothing to say right now.",
      routerLink: "",
      icon: "mdi-home"
    },
    {
      id: 1,
      title: "Blog App",
      description: "Nothing to say right now.",
      routerLink: "blog",
      icon: "mdi-open-in-new"
    },
    {
      id: 2,
      title: "Admin App",
      description: "Nothing to say right now.",
      routerLink: "admin",
      icon: "mdi-open-in-new"
    },
    {
      id: 3,
      title: "Demo App",
      description: "Nothing to say right now.",
      routerLink: "demo",
      icon: "mdi-open-in-new"
    }
  ];

  constructor() {
    super();
  }

  public appSettings() {
    return appSettingsService.appSettings;
  }

  public someMethod() {}
}
</script>


