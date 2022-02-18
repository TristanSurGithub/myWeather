import coordinatesFactory from "@/factory/coordinates.factory";
import { Coordinates } from "@/interfaces/coordinates.interface";
import coordinatesRepository from "@/repository/coordinates.repository";

export default {
    async getCoordinatesByCityName(name: string): Promise<Coordinates> {
        const rawCoordinates = await coordinatesRepository.getCoordinatesByCityName(name);
        const coordinates: Coordinates = coordinatesFactory.formatRawCoordinatesToCoordinates(rawCoordinates);
        return coordinates;
    }
}