<template>
  <div id="container">
    <ion-card id="header-weather-card">
      <ion-card-header>
        <ion-card-subtitle class="subtitle">{{
          weather.city
        }}</ion-card-subtitle>
        <ion-card-title class="title"
          >{{ temperatureWithoutDecimals }}°</ion-card-title
        >
      </ion-card-header>
      <ion-card-content id="content-weather-card">
        <img
          width="100"
          height="100"
          :src="`http://openweathermap.org/img/wn/${weather.weather.icon}.png`"
        />
        {{ weather.weather.description }}
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "CurrentWeather",
  props: {
    weather: Object,
  },
  computed: {
    temperatureWithoutDecimals() {
      return this.weather.temperature.toFixed(0);
    },
  },
};
</script>

<style scoped>
#container a {
  text-decoration: none;
}

#container #header-weather-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #4391f7;
}

#header-weather-card .title,
#header-weather-card .subtitle {
  color: #ffffff;
}

#content-weather-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
}

#content-weather-card img {
  width: 50px;
  height: auto;
}
</style>