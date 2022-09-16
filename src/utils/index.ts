export const getPokemonIdFromUrl = (url: string) => {
    const result = url.split("/")
    return result[result.length - 2]
}