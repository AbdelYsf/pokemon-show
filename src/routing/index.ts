import {paths} from "./routePaths";
import Pokemonpage from "../pages/Pokemonpage";
import {FC} from "react";


export interface RouteDetails {
  path: string;
  component: FC ;
}

export const ROUTES: Record<string, RouteDetails> = {
  pokemons: {
    path: paths.pokemons,
    component: Pokemonpage,
  }
};
