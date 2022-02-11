import { Coordinates } from "@/interfaces/coordinates.interface";
import { OPEN_WEATHER_MAP_HOST, OPEN_WEATHER_MAP_API_KEY } from '../../api-constants';

export default {
    async getCurrentWeather(coordinates: Coordinates): Promise<Readonly<any>> {
        try {
            const { latitude, longitude } = coordinates;
            const httpRequest = await fetch(`${OPEN_WEATHER_MAP_HOST}?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_MAP_API_KEY
                }`)
            const rawWeatherData = await httpRequest.json();
            return rawWeatherData
        }
        catch (httpException: any) {
            return httpException
        }

    },
}