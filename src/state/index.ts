import {configureStore} from "@reduxjs/toolkit";
import pokemonDetailsReducer from "./slices/pokemonDetails/slice";
import createSagaMiddleware from "redux-saga";
import pokemonDetailsSaga from "./sagas/pokemonDetailsSaga";

export const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        pokemonDetailsReducer: pokemonDetailsReducer,

    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({thunk: false}), sagaMiddleware];
    },
});
sagaMiddleware.run(pokemonDetailsSaga);

