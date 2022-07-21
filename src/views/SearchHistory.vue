<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weathered</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="content">
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>05-MAR-77</p></ion-col>
          <ion-col size="6"><p>Newport News, Virginia</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>28-NOV-86</p></ion-col>
          <ion-col size="6"><p>Bucharest, Romania</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>24-JUL-99</p></ion-col>
          <ion-col size="6"><p>Cincinnati, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>20-FEB-00</p></ion-col>
          <ion-col size="6"><p>Akron, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>29-MAR-04</p></ion-col>
          <ion-col size="6"><p>Clifton, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>29-MAR-04</p></ion-col>
          <ion-col size="6"><p>Clifton, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>23-OCT-08</p></ion-col>
          <ion-col size="6"><p>Cincinnati, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
      <ion-grid>
        <ion-row>
          <ion-col size="4"><p>30-NOV-14</p></ion-col>
          <ion-col size="6"><p>Fairfield, Ohio</p></ion-col>
          <ion-col class="eye-col"
            ><ion-icon class="eye" :icon="eyeOutline"></ion-icon
          ></ion-col>
        </ion-row>
      </ion-grid>
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
import { eyeOutline } from "ionicons/icons";
export default {
  name: "SearchHistroy",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    return {
      eyeOutline,
    };
  },
};
</script>

<style scoped>
.content {
  text-align: center;
}
.new-search {
  margin-top: 30px;
}
.eye-col {
  display: flex;
}
.eye {
  margin: auto;
  zoom: 1.6;
}
</style>