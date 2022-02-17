<template>
  <div>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle
          >Prévisions sur les prochains jours</ion-card-subtitle
        >
        <ion-card-title> sur 7 jours</ion-card-title>
      </ion-card-header>
      <ion-card-content class="custom-weather-forecast-card">
      </ion-card-content>
    </ion-card>
  </div>
</template>


<script>
export default {
  name: "WeatherForecast",
  props: {
    weather: Object,
  },
};
</script>

<style scoped>
</style>