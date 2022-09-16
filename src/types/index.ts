export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonAPiResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonResult>;
}
