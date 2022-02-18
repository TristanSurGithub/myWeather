<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Rechercher une ville</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Rechercher une ville</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-input v-model="city" clear-input value=""></ion-input>
      <ion-button @click="searchWeather()" expand="block"
        >Rechercher</ion-button
      >
      <current-weather
        v-if="coordinates"
        :latitude="coordinates.latitude"
        :longitude="coordinates.longitude"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonContent,
} from "@ionic/vue";
import coordinatesService from "../services/coordinates.service";
import CurrentWeather from "../components/CurrentWeather.vue";
import { Coordinates } from "@/interfaces/coordinates.interface";

export default {
  components: {
    CurrentWeather,
    IonHeader,
    IonInput,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      city: "",
      coordinates: null,
    };
  },
  methods: {
    async searchWeather(): Promise<void> {
      this.coordinates = null;
      const coordinates = await coordinatesService.getCoordinatesByCityName(
        this.city
      );
      this.coordinates = coordinates as Coordinates;
    },
  },
};
</script>