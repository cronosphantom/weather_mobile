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
      <h1 class="date">05-MAR</h1>
      <p>Newport News, Virginia</p>
      <h2>AVG HIGH: 75</h2>
      <h2>AVG LOW: 67</h2>
      <h2>Record LOW: -3</h2>
      <h2>Record HIGH: 83</h2>
      <p>Chance of Parcipation</p>
      <h2>35%</h2>
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

export default {
  name: "AvgResult",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    return {};
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
.date {
  margin-top: 100px;
}
.new-search {
  margin-top: 30px;
}
</style>