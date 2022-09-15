import React from "react";
import {render} from "@testing-library/react";
import Pokemon from "./Pokemon";
import {screen} from "@testing-library/react";
import {POKEMON_BALL_ICON_URL} from "../../utils/constant";
import userEvent from "@testing-library/user-event";

describe("Pokemon", () => {
    // fixtures
    const pokemonName = "Pikachu";
    const pokemonImageUrl = "url";

    test("should render Pokemon", () => {
        render(<Pokemon name={pokemonName} imageUrl={pokemonImageUrl}/>);
        expect(screen.getByText(pokemonName)).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
        const images = screen.getAllByRole("img");
        expect(images).toHaveLength(2);
        expect(images[0]).toHaveAttribute("src", "url");
        expect(images[1]).toHaveAttribute("src", POKEMON_BALL_ICON_URL);
    });

    test("renders the modal of pokemon details", async () => {
        const user = userEvent.setup()
        render(<Pokemon name={pokemonName} imageUrl={pokemonImageUrl}/>);
        const button = screen.getByRole("button");
        await user.click(button);
        // TODO: add assertions
    });

    test("should match snapshot", async () => {
        const container = render(<Pokemon name={pokemonName} imageUrl={pokemonImageUrl}/>);
        expect(container).toMatchSnapshot()
    });
});
