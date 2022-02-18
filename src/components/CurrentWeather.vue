<template>
  <current-weather-header v-if="currentWeather" :weather="currentWeather" />
  <current-weather-list-forecast
    v-if="forecastWeather"
    :forecasts="forecastWeather"
  />
</template>

<script lang="ts">
import { loadingController, toastController } from "@ionic/vue";
import CurrentWeatherHeader from "@/components/CurrentWeatherHeader.vue";
import CurrentWeatherListForecast from "@/components/CurrentWeatherListForecast.vue";
import WeatherService from "@/services/weather.service";
import { CurrentWeather } from "@/interfaces/weather.interface";
import { Coordinates } from "@/interfaces/coordinates.interface";

export default {
  components: {
    CurrentWeatherHeader,
    CurrentWeatherListForecast,
  },
  props: {
    latitude: Number,
    longitude: Number,
  },
  data() {
    return {
      currentWeather: null,
      forecastWeather: null,
    };
  },
  async mounted() {
    if ("geolocation" in navigator) {
      await this.getCurrentWeatherByLocation();
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
      console.log(coordinates);
      const currentWeather: CurrentWeather =
        await WeatherService.getCurrentWeather(coordinates);
      return currentWeather;
    },
    async getCurrentWeatherByLocation() {
      const loading = await loadingController.create({
        message: "Synchronisation des données en cours, veuillez patienter",
      });
      loading.present();
      this.currentWeather = (await this.getCurrentWeather(
        this.latitude,
        this.longitude
      )) as CurrentWeather;
      this.forecastWeather = await this.getWeatherForecast(
        this.latitude,
        this.longitude
      );
      loading.dismiss();
    },
    async getWeatherForecast(
      latitude: number,
      longitude: number
    ): Promise<any> {
      const coordinates = { latitude, longitude } as Coordinates;
      const weatherForecast = await WeatherService.getWeatherForecast(
        coordinates
      );
      return weatherForecast;
    },
  },
};
</script>