import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../index";


// best to use create selector (memoization)
const selfSelect = (state: RootState) => state

export const isLoadingSelector = createSelector(selfSelect, (state: RootState) => {
    return state.pokemonDetailsReducer.isLoading;
})

export const errorSelector = createSelector(selfSelect, (state: RootState) => {
    return state.pokemonDetailsReducer.error;
})

export const activePokemonSelector = createSelector(selfSelect, (state: RootState) => {
    return state.pokemonDetailsReducer.activePokemon;
})






