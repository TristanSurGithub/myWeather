import weatherFactory from "@/factory/weather.factory";
import { Coordinates } from "@/interfaces/coordinates.interface";
import { CurrentWeather, HourForecast } from "@/interfaces/weather.interface";
import weatherRepository from "@/repository/weather.repository";

export default {
    async getCurrentWeather(coordinates: Coordinates): Promise<CurrentWeather> {
        const rawCurrentWeather: Awaited<Readonly<any>> = await weatherRepository.getCurrentWeather(coordinates);
        const weather: CurrentWeather = weatherFactory.formatRawWeatherToWeather(rawCurrentWeather);
        return weather;
    },

    async getWeatherForecast(coordinates: Coordinates): Promise<Array<HourForecast>> {
        const rawWeatherForecast: Awaited<Readonly<any>> = await weatherRepository.getWeatherForecast(coordinates);
        const forecast: Array<HourForecast> = weatherFactory.formatRawForecastToHourForecast(rawWeatherForecast);
        return forecast;
    }

}