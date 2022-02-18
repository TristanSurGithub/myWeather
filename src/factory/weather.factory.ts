import { CurrentWeather, HourForecast } from "@/interfaces/weather.interface"
import weatherHelper from '../helpers/weather.helper';

export default {
    formatRawWeatherToWeather(rawWeather: Readonly<any>): CurrentWeather {
        return {
            city: rawWeather.name,
            weather: {
                name: rawWeather.weather[0].name,
                description: rawWeather.weather[0].description,
                icon: rawWeather.weather[0].icon
            },
            temperature: rawWeather.main.temp

        } as CurrentWeather
    },
    formatRawForecastToHourForecast(rawForecast: Readonly<any>): Array<HourForecast> {
        const hourForecast: Array<HourForecast> = rawForecast.hourly.map((hourlyForecast: Readonly<any>) => ({
            hour: `${weatherHelper.convertUnixTimestampToHours(hourlyForecast.dt)}H`,
            temperature: `${Math.round(hourlyForecast.temp)}°`,
            weather: {
                name: hourlyForecast.weather[0].name,
                description: hourlyForecast.weather[0].description,
                icon: hourlyForecast.weather[0].icon
            }
        }))
        return hourForecast.slice(0, 24);
    }
}