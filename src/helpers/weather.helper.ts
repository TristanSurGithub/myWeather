export default {
    convertUnixTimestampToHours(timestamp: number): number {
        return new Date(1000 * timestamp).getHours();
    }
}