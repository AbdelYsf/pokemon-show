import axios, {AxiosResponse} from "axios";
import {PokemonAPiResponse} from "../types";
import {POKEMON_API_ROOT_URL} from "../utils/constant";
import {useInfiniteQuery} from "@tanstack/react-query";

export const usePokemons = () => {
    const apiResponse = useInfiniteQuery<PokemonAPiResponse>(
        ["pokemons"],
        async ({pageParam = `${POKEMON_API_ROOT_URL}/pokemon?limit=20&offset=0`}) => {
            const response: AxiosResponse<PokemonAPiResponse> =
                await axios.get<PokemonAPiResponse>(
                    pageParam
                );
            return response.data;
        },
        {
            getNextPageParam: (lastPage) => {
                return lastPage.next;
            },
        }
    );

    return apiResponse;
};
