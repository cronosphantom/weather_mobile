<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weathered</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <span class="karma">
        <router-link to="/karma-buy-start">
          <ion-button>Karma</ion-button>
        </router-link>
      </span>
      <p class="weekday">Saturday</p>
      <h1 class="date">05-MAR-77</h1>
      <p>Newport News, Virginia</p>
      <h3>HIGH: 75</h3>
      <h3>LOW: 67</h3>
      <ion-item lines="none">
        <ion-icon class="weather-icon" :icon="sunny"></ion-icon>
      </ion-item>
      <router-link to="/avg-result">
        <div class="new-search">
          <ion-button shape="round">New Search</ion-button>
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
} from "@ionic/vue";
import { sunny } from "ionicons/icons";
export default {
  name: "HistoryResult",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    return {
      sunny,
    };
  },
};
</script>

<style scoped>
.content {
  text-align: center;
}
.karma {
  position: absolute;
  top: 12px;
  right: 12px;
}
.weekday {
  margin-top: 60px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
.weather-icon {
  margin: auto;
  zoom: 5;
  color: #ffec65;
}
.new-search {
  margin-top: 30px;
}
</style>