<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weathered</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <router-link to="/karma-buy-start">
        <span class="cancel">
          <ion-button>Cancel</ion-button>
        </span>
      </router-link>
      <h1 class="date">05-MAR</h1>
      <p>Newport News, Virginia</p>
      <h2>Select Amount</h2>
      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <div class="amounts">
              <h1>$1.00</h1>
              <h1>1 × K</h1>
            </div>
          </ion-col>
          <ion-col size="6">
            <div class="amounts">
              <h1>$1.00</h1>
              <h1>1 × K</h1>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <div class="amounts">
              <h1>$1.00</h1>
              <h1>1 × K</h1>
            </div>
          </ion-col>
          <ion-col size="6">
            <div class="amounts">
              <h1>$1.00</h1>
              <h1>1 × K</h1>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div class="start">
        <ion-button shape="round">Start</ion-button>
      </div>
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
  name: "KarmaBuy",
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
.cancel {
  position: absolute;
  top: 12px;
  right: 12px;
}
.start {
  margin-top: 12px;
}
.amounts {
  border: 1px solid #848484;
  height: 140px;
  margin: 15px 30px;
}
</style>