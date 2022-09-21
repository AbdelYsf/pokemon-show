import React from "react";
import Pokemon from "./Pokemon";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {OFFICIAL_ARTWORK, POKEMON_BALL_ICON_URL, URL_ID} from "../../utils/constant";

describe("Pokemon", () => {
    // fixtures
    const pokemonName = "Pikachu";
    const url = "//https://pokeapi.co/api/v2/pokemon/2/";
    const mockedHandleOpen = jest.fn();

    test("should render Pokemon", () => {
        render(<Pokemon name={pokemonName} url={url} openDetails={mockedHandleOpen}/>);
        expect(screen.getByText(pokemonName)).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        const images = screen.getAllByRole("img");

        expect(images).toHaveLength(2);
        expect(images[0]).toHaveAttribute("src", OFFICIAL_ARTWORK.replace(URL_ID, "2"));
        expect(images[1]).toHaveAttribute("src", POKEMON_BALL_ICON_URL);
    });

    test("should call open details", async () => {
        const user = userEvent.setup()
        render(<Pokemon name={pokemonName} url={url} openDetails={mockedHandleOpen}/>);
        const button = screen.getByRole("button");
        await user.click(button);
        expect(mockedHandleOpen).toHaveBeenCalledTimes(1);

    });

    test("should match snapshot", async () => {
        const container = render(<Pokemon name={pokemonName} url={url} openDetails={mockedHandleOpen}/>);
        expect(container).toMatchSnapshot()
    });
});
