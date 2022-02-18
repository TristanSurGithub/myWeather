<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/currentWeather">
          <ion-label>Météo locale</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/searchWeather">
          <ion-label>Chercher une ville</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/favoritesWeather">
          <ion-label>Liste des favoris</ion-label>
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
  IonLabel,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ellipse, square, triangle } from "ionicons/icons";

export default {
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    };
  },
};
</script>