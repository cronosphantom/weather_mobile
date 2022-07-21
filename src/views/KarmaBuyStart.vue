<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weathered</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <router-link to="/home">
        <span class="cancel">
          <ion-button>Cancel</ion-button>
        </span>
      </router-link>
      <h1 class="date">05-MAR</h1>
      <p>Newport News, Virginia</p>
      <h2 class="question">Would you like to add Karma this Date?</h2>
      <p class="description">
        You’ll be able to share this on Social Media and with friends to get
        more Karma.
      </p>
      <router-link to="/karma-buy">
        <div class="start">
          <ion-button shape="round">Start</ion-button>
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
  name: "KarmaBuyStart",
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
.date {
  margin-top: 100px;
}
.question {
  margin: auto;
  width: 50%;
}
.description {
  margin: 20px auto 0;
  width: 64%;
}
.cancel {
  position: absolute;
  top: 12px;
  right: 12px;
}
.start {
  margin-top: 30px;
}
</style>