<template>
  <div>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Les prochaines prévision</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content class="custom-weather-hour-forecast-container">
        <div v-for="(hourForecast,index) in hoursForecasts " :key="index" class="previson-container">
          <v-card class="forecast-container">
            <v-card-text class="forecast-card">
              <v-row>
                {{ hourForecast.hour }}h
              </v-row>
              <v-row>
                  <img
                      width="24"
                      height="24"
                      :src="`http://openweathermap.org/img/wn/${hourForecast.weather.icon}.png`"
                      alt="weather_icon"/>
              </v-row>
              <v-row>
                  {{ hourForecast.temperature }}°C
              </v-row>
              <v-row>
                  {{ hourForecast.weather.description }}
              </v-row>
            </v-card-text>

          </v-card>

        </div>

      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>

export default {
  name: "HourForecastContainer",
  props: {
    hoursForecasts: Array,
  },
}
</script>

<style scoped>

.custom-weather-hour-forecast-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow: scroll;
  text-align: center;
}
.forecast-container{
  display: flex;
  margin: 8px;
}
.forecast-card{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-between;
  align-items: center;
}
</style>