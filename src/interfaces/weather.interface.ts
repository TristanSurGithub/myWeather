export interface CurrentWeather {
    city: string,
    weather: Weather,
    temperature: number,
    hourForecast?: Array<HourForecast>
    dailyForecast?: Array<DailyForecast>
}

export interface HourForecast {
    hour: string,
    temperature: number,
    weather: Weather
}

export interface DailyForecast {
    date: string,
    weather: string, 
    minTemperature: number,
    maxTemperature: number
}

export interface Weather {
    name?: string, 
    description?: string, 
    icon?: string
}