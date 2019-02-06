<template>
  <v-container v-if="active && appSettings" class="settings-container " fluid>
    <v-layout row align-center justify-end fill-height>
      <v-flex xs12 sm6 mb4>
        <v-card v-if="toggledSettings" class="settings-card">
          <v-layout row wrap>
            <v-flex xs12>
              <v-card-title primary-title>
                <div class="headline">Application Settings</div>
              </v-card-title>
            </v-flex>
            <v-flex xs12 offset-xs1>
              <h4 class="subheading">Theme</h4>
              <v-switch
                :label="appSettings.themeSettings.darkTheme.label"
                v-model="appSettings.themeSettings.darkTheme.value"
              ></v-switch>
              <h4 class="subheading">Toolbar</h4>
              <v-switch
                :label="appSettings.layoutSettings.flatStyle.label"
                v-model="appSettings.layoutSettings.flatStyle.value"
              ></v-switch>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="accent" v-on:click="reset()">Reset settings
              <v-icon right>mdi-replay</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm1>
        <v-layout row justify-end>
          <v-flex mb6 xs10 sm12>
            <v-btn left fab color="pink" v-on:click="toggleSettings()">
              <v-icon dark>mdi-settings</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { getDefaultAppSettings } from "./AppSettings";
import { appSettingsService } from './app-settings.service';

@Component({
  name: "app-settings",
  components: {}
})
export default class AppSettings extends Vue {
  public appSettings: any = {};
  public toggledSettings: boolean = false;
  public active: boolean = true;

  constructor() {
    super();
    this.appSettings = appSettingsService.appSettings;
  }

  public toggleSettings() {
    this.toggledSettings = !this.toggledSettings;
  }

  public reset() {
    appSettingsService.reset();
  }
}
</script>

<style>
.settings-container {
  position: fixed;
  height: 100%;
}
</style>