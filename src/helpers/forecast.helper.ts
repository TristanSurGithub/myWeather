export default {
    formatToDate(unixDate: number) :number{
        const date = new Date(1000 * unixDate);
        return date.getHours();
    }
}