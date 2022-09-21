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

export interface PokemonDetailsProps {
    closeModal: () => void;
    url: string;
    isOpen: boolean;
}

export interface PokemonProps {
    name: string;
    url: string;
    openDetails: () => void;
}

export interface PokemonSummaryProps {
    id?: number;
    height?: number;
    weight?: number;
    order?: number;
    baseExperience?: number;

}


export interface Stat {
    name: string;
    url: string;
}

export interface PokemonStatsResponse {
    base_stat: number;
    effort: number;
    stat: Stat;

}

export interface Type {
    name: string;
    url: string;
}

export interface Ability {
    name: string;
    url: string;
}

export interface PokemonTypesResponse {
    slot: number;
    type: Type;

}

export interface PokemonAbilityResponse {
    is_hidden: boolean;
    slot: number;
    ability: Ability;

}

export interface PokemonDetailsApiResponse {
    abilities: PokemonAbilityResponse[];
    base_experience: number;
    height: number;
    weight: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    stats: PokemonStatsResponse[];
    types: PokemonTypesResponse[];

}



