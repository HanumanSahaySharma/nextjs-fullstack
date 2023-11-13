export const makeCapitalize = (str: string) => {
    const strToArray = str.split(' ');
    return strToArray.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    });
}