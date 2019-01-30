<template>
  <v-app :dark="layoutSettings.theme.dark.value">
    <v-navigation-drawer v-model="drawer" app fixed>
      <v-toolbar :flat="layoutSettings.toolbar.flat.value">
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
    <v-toolbar app fixed :flat="layoutSettings.toolbar.flat.value">
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
      <hello-world/>
    </v-content>
    <v-footer app></v-footer>
    <div class="settings hidden-md-and-down">
      <v-card id="settings-card" min-width="400px">
        <v-card-title primary-title>
          <div class="headline">Application Settings</div>
        </v-card-title>
        <v-form>
          <v-container>
            <v-layout row>
              <h4 class="subheading">Theme</h4>
              <v-switch
                :label="layoutSettings.theme.dark.label"
                v-model="layoutSettings.theme.dark.value"
              ></v-switch>
              <v-switch
                :label="layoutSettings.toolbar.flat.label"
                v-model="layoutSettings.toolbar.flat.value"
              ></v-switch>
            </v-layout>
          </v-container>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/sections/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  title: string = "Let's Try this Framework !";
  drawer: boolean = false;
  appDescriptions: any[] = [
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

  layoutSettings: any = {
    theme: {
      dark: {
        label: "Dark Theme",
        value: false
      }
    },
    toolbar: {
      flat: {
        label: "Flat Style",
        value: true
      }
    }
  };

  public someMethod() {}
}
</script>

<style>
div.settings {
  position: fixed;
  right: 30px;
  bottom: 50px;
}
</style>
