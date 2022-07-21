<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weathered</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item>
        <ion-label position="fixed">Date:</ion-label>
        <ion-datetime :max="today"></ion-datetime>
      </ion-item>
      <ion-radio-group value="location">
        <ion-item>
          <ion-label>Enter Location</ion-label>
          <ion-radio slot="start" value="location"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-label>Use Current</ion-label>
          <ion-radio slot="start" value="current"></ion-radio>
        </ion-item>
      </ion-radio-group>
      <ion-item>
        <ion-label position="fixed">Location:</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <router-link to="/history-result">
        <div style="text-align: center; margin-top: 20px">
          <ion-button style="width: 124px" shape="round">Lookup</ion-button>
        </div>
      </router-link>
      <router-link to="/avg-result">
        <div style="text-align: center; margin-top: 20px">
          <ion-button shape="round" fill="outline">Find Avg</ion-button>
        </div>
      </router-link>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRadio,
} from "@ionic/vue";

export default {
  name: "Home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonRadio,
  },
  setup() {
    const today = new Date().toISOString();
    return {
      today,
    };
  },
};
</script>

<style scoped>
</style>