import { Coordinates } from "@/interfaces/coordinates.interface";
import { OPEN_WEATHER_MAP_HOST, OPEN_WEATHER_MAP_API_KEY } from '../../api-constants';

export default {
    async getCurrentWeather(coordinates: Coordinates): Promise<Readonly<any>> {
        const { latitude, longitude } = coordinates;
        try {
            const httpRequest = await fetch(`${OPEN_WEATHER_MAP_HOST}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY
                }&units=metric&lang=fr_fr`)
            const rawWeatherData = await httpRequest.json();
            return rawWeatherData
        }
        catch (httpException: any) {
            return httpException
        }
    },
    async getWeatherForecast(coordinates: Coordinates): Promise<Readonly<any>> {
        const { latitude, longitude } = coordinates;
        try {
            const httpRequest = await fetch(`${OPEN_WEATHER_MAP_HOST}/onecall?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY
                }&units=metric&lang=fr_fr`)
            const rawWeatherForecast = await httpRequest.json();
            return rawWeatherForecast;
        }
        catch (httpException: any) {
            return httpException
        }
    }
}