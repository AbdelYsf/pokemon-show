import {call, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {PokemonDetailsApiResponse} from "../../types";
import {POKEMON_API_ROOT_URL} from "../../utils/constant";
import {pokemonDetailsFailure, pokemonDetailsSuccess} from "../slices/pokemonDetails/slice";


const api = (name: string) => {
    return axios.get<PokemonDetailsApiResponse>(
        `${POKEMON_API_ROOT_URL}/pokemon/${name}`
    );
}

const api2 = (id: number) => {
    return axios.get<PokemonDetailsApiResponse>(
        `${POKEMON_API_ROOT_URL}/pokemon/${id}`
    );
}

function* workerGetPokemonDetails(value: any): Generator<any> {
    console.log("inside saga");
    console.log(value);
    try {
        const response: any = yield call(api, value.payload)
        console.log(response)
        console.log(response.data)
        yield put(pokemonDetailsSuccess(response.data))
    } catch (e) {
        yield put(pokemonDetailsFailure("error asi"))
    }


}

function* workerGetPokemonDetailsById(value: any): Generator<any> {
    console.log("inside workerGetPokemonDetailsById saga");
    console.log(value);
    try {
        const response: any = yield call(api2, value.payload)
        console.log(response)
        console.log(response.data)
        yield put(pokemonDetailsSuccess(response.data))
    } catch (e) {
        yield put(pokemonDetailsFailure("error asi"))
    }


}


export default function* pokemonDetailsSaga() {
    yield takeEvery("pokemonDetailsSlice/getPokemonDetails", workerGetPokemonDetails)
    yield takeEvery("pokemonDetailsSlice/getPokemonDetailsById", workerGetPokemonDetailsById)
}