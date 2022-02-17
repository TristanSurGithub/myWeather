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
      <hour-forecast-container v-if="hoursForecasts" :hoursForecasts="hoursForecasts"/>
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
//import WeatherForecast from "@/components/WeatherForecast.vue";
import WeatherService from "@/services/weather.service";
import { CurrentWeather, HourForecast } from "@/interfaces/weather.interface";
import { Coordinates } from "@/interfaces/coordinates.interface";
import HourForecastContainer from "@/components/HourForecastContainer.vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    CurrentWeatherHeader,
    HourForecastContainer,
  },

  data() {
    return {
      currentWeather: null,
      hoursForecasts: null,
    };
  },
  
  async mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        this.currentWeather = (await this.getCurrentWeather(
          latitude,
          longitude
        )) as CurrentWeather;
        this.hoursForecasts = (await this.getWeatherForecast(
          latitude,
          longitude
        )) as Promise<Array<HourForecast>>
      });
    } else {
      throw new Error("Geolocation is not available");
    }
  },
  methods: {
    async getCurrentWeather(
      latitude: number,
      longitude: number
    ): Promise<CurrentWeather> {
      const coordinates = { latitude, longitude } as Coordinates;
      const currentWeather: CurrentWeather =
        await WeatherService.getCurrentWeather(coordinates);
      return currentWeather;
    },

    async getWeatherForecast(
      latitude: number,
      longitude: number
    ): Promise<Array<HourForecast>> {
      const coordinates = { latitude, longitude } as Coordinates;
      return await WeatherService.getWeatherForecast(coordinates);
    },
  },
};
</script>