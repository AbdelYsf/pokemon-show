import {createSlice} from "@reduxjs/toolkit";
import {PokemonDetailsApiResponse} from "../../../types";


interface PokemonDetailsSliceState {
    activePokemon: PokemonDetailsApiResponse | null,
    isLoading: boolean,
    error: any,
}

const initialState: PokemonDetailsSliceState = {
    activePokemon: null,
    isLoading: false,
    error: null,
}

export const pokemonDetailsSlice = createSlice({
    name: "pokemonDetailsSlice",
    initialState,
    reducers: {
        getPokemonDetails: (state, action) => {
            console.log("getPokemonDetails");
            console.log(action);
            state.isLoading = true;
            state.error = null

        },
        pokemonDetailsSuccess: (state, action) => {
            console.log("pokemonDetailsSuccess");
            console.log(action);
            state.activePokemon = action.payload;
            state.isLoading = false;
            state.error = null;

        },
        pokemonDetailsFailure: (state, action) => {
            console.log("pokemonDetailsFailure");
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;

        },
        getPokemonDetailsById: (state, action) => {
            console.log("getNextPokemonDetails");
            console.log(action);
            console.log(action.payload);
            state.isLoading = true;
            state.error = null
        }


    }

});

export const {
    getPokemonDetails,
    pokemonDetailsSuccess,
    pokemonDetailsFailure,
    getPokemonDetailsById
} = pokemonDetailsSlice.actions;

export default pokemonDetailsSlice.reducer;


// Omit , Pick , ReturnType, Partial, Required, ReadOnly