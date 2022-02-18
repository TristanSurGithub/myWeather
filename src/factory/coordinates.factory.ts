import { Coordinates } from "@/interfaces/coordinates.interface";

export default {
    formatRawCoordinatesToCoordinates(rawGeocoding: Readonly<any>): Coordinates {
        return {
            latitude: rawGeocoding.latt,
            longitude: rawGeocoding.longt
        }
    }
}