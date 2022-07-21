<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="search"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/search-history">
          <ion-icon :icon="timerOutline"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { search, timerOutline } from "ionicons/icons";

export default {
  name: "Layout",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      search,
      timerOutline,
    };
  },
};
</script>