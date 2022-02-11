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
      <current-weather-header v-if="currentWeather" :weather="currentWeather" />
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
import CurrentWeatherHeader from "@/components/CurrentWeatherHeader.vue";
import WeatherService from "@/services/weather.service";
import { CurrentWeather } from "@/interfaces/weather.interface";
import { Coordinates } from "@/interfaces/coordinates.interface";

export default {
  components: {
    CurrentWeatherHeader,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      currentWeather: null,
    };
  },
  async mounted() {
    this.currentWeather = await this.getCurrentWeather() as CurrentWeather;
  },
  methods: {
    async getCurrentWeather(): Promise<CurrentWeather> {
      const coordinates = {
        latitude: 50.293197,
        longitude: 2.7424531,
      } as Coordinates;
      const currentWeather: CurrentWeather =
        await WeatherService.getCurrentWeather(coordinates);
      return currentWeather;
    },
  },
};
</script>