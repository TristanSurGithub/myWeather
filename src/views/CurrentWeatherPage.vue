<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Météo locale</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Méteo locale</ion-title>
        </ion-toolbar>
      </ion-header>
      <current-weather
        v-if="latitude && longitude"
        :latitude="latitude"
        :longitude="longitude"
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
  IonContent,
  toastController,
} from "@ionic/vue";
import { Coordinates } from "@/interfaces/coordinates.interface";
import CurrentWeather from "@/components/CurrentWeather.vue";

export default {
  components: {
    IonHeader,
    CurrentWeather,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      latitude: "",
      longitude: "",
    };
  },
  async mounted() {
    if ("geolocation" in navigator) {
      await this.showGeolocationNotAvailable();
      navigator.geolocation.getCurrentPosition(async (position) => {
        const coordinates = position.coords as Coordinates;
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
      });
    } else {
      throw new Error("Geolocation is not available");
    }
  },
  methods: {
    async showGeolocationNotAvailable() {
      navigator.permissions.query({ name: "geolocation" }).then(async () => {
        const toast = await toastController.create({
          message: `La géolocalisation n'est pas disponible sur votre support.`,
          duration: 2000,
        });
        return toast.present();
      });
    },
  },
};
</script>