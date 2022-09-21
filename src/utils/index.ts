export const getPokemonIdFromUrl = (url: string) => {
    const result = url.split("/")
    return result[result.length - 2]
}

export const convertDmToCm = (value?: number) => {
    // convert decimeter to centimeter
    return value ? value * 10 : 0
}

export const convertHgToKg = (value?: number) => {
    // convert hectogramme to kilogramme
    return value ? value / 10 : 0
}