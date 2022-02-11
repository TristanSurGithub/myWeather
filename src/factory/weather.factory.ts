import { CurrentWeather } from "@/interfaces/weather.interface"

export default {
    formatRawWeatherToWeather(rawWeather: Readonly<any>): CurrentWeather {
        return {
            city: rawWeather.name,
                weather: {
                    name: rawWeather.weather[0].name,
                    description: rawWeather.weather[0].description,
                    icon: rawWeather.weather[0].icon
            },
            temperature: rawWeather.main.feels_like

        } as CurrentWeather
    }
}