<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" app fixed>
       <v-toolbar flat >
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
    <v-toolbar app fixed flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="appDesc in appDescriptions" :key="appDesc.id" :to="{path: '/'+appDesc.routerLink}">
          {{ appDesc.title }} <v-icon>{{appDesc.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <hello-world />
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/sections/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },

})
export default class Home extends Vue {
  title: string = 'Let\'s Try this Framework !';
  drawer :boolean = false;
  appDescriptions: any[] = [
  {
    id: 0,
    title: 'Home',
    description: 'Nothing to say right now.',
    routerLink: '',
    icon: 'mdi-home'
  },{
    id: 1,
    title: 'Blog App',
    description: 'Nothing to say right now.',
    routerLink: 'blog',
    icon: 'mdi-open-in-new'
  },{
    id: 2,
    title: 'Admin App',
    description: 'Nothing to say right now.',
    routerLink: 'admin',
    icon: 'mdi-open-in-new'
  },{
    id: 3,
    title: 'Demo App',
    description: 'Nothing to say right now.',
    routerLink: 'demo',
    icon: 'mdi-open-in-new'
  },]
}
</script>
