
import { Coordinates } from "@/interfaces/coordinates.interface";
import { GEO_CODE_API_KEY } from "../../api-constants";

export default {
    async getCoordinatesByCityName(name: string): Promise<Coordinates> {
        try {
            const httpCall = await fetch(`https://geocode.xyz/${name}?json=1&auth=${GEO_CODE_API_KEY}`)
            const rawCoordinates = await httpCall.json()
            return rawCoordinates;
        }
        catch (httpException) {
            throw new Error(`An error happened during the http call`);
        }

    }
}