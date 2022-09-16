import {Avatar, Button} from "@mui/material";
import {PokemonResult} from "../../types";
import {StyledCard, StyledCardActions, StyledCardMedia, StyledTypography,} from "./Pokemon.style";
import {OFFICIAL_ARTWORK, POKEMON_BALL_ICON_URL, URL_ID} from "../../utils/constant";
import React from "react";
import {getPokemonIdFromUrl} from "../../utils";

const Pokemon = React.forwardRef((props: PokemonResult) => {


    const imageUrl = OFFICIAL_ARTWORK.replace(URL_ID, getPokemonIdFromUrl(props.url) + "")
    return (
        <StyledCard>
            <StyledCardMedia
                component="img"
                height="260"
                image={imageUrl}
                alt={props.name}
                onError={(e: any) => {
                    e.target.src = "https://cdn.dribbble.com/users/1081076/screenshots/2832850/pokemongo.gif";
                }}
            />
            <StyledCardActions>
                <StyledTypography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontFamily="Rampart One"
                >
                    {props.name}
                </StyledTypography>
            </StyledCardActions>
            <StyledCardActions>
                <Button
                    size="large"
                    startIcon={<Avatar src={POKEMON_BALL_ICON_URL}></Avatar>}
                ></Button>
            </StyledCardActions>
        </StyledCard>
    );
});

export default Pokemon;
