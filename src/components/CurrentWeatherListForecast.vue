<template>
  <div id="container">
    <ion-card id="weather-list-forecast-card">
      <ion-card-header>
        <ion-card-subtitle class="subtitle"
          >Prévisions sur 24H</ion-card-subtitle
        >
      </ion-card-header>
      <ion-card-content id="content-weather-card">
        <ion-list
          class="item-list"
          v-for="(forecast, index) in forecasts"
          :key="index"
        >
          <ion-item class="item">
            <ion-avatar slot="start">
              <img
                :src="`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`"
              />
            </ion-avatar>
            <ion-label>
              <h2>{{ forecast.hour }}</h2>
              <h3>{{ forecast.temperature }}</h3>
              <p>{{ forecast.weather.description }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentWeatherListForecast",
  props: {
    forecasts: Array,
  },
};
</script>

<style scoped>
#weather-list-forecast-card {
  background: #4391f7;
}

#weather-list-forecast-card .subtitle {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
}

#content-weather-card .item-list {
  color: #ffffff;
  border-radius: 10px;
  margin-bottom: 8px;
}
</style>