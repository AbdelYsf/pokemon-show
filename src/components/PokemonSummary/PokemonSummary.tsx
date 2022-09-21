import React, {FC} from "react";
import {PokemonSummaryProps} from "../../types";
import {StyledCard, StyledCardMedia, StyledTypography} from "./PokemonSummary.style";
import {Divider, Stack} from "@mui/material";
import {convertDmToCm, convertHgToKg} from "../../utils";

const PokemonSummary: FC<PokemonSummaryProps> = (props: PokemonSummaryProps) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`
    return (
        <StyledCard>
            <StyledCardMedia
                component="img"
                height="500"

                image={imageUrl}
                onError={(e: any) => {
                    e.target.src = "https://cdn.dribbble.com/users/1081076/screenshots/2832850/pokemongo.gif";
                }}
            />


            <Stack direction="column">
                <Stack direction="row">
                    <StyledTypography>
                        Height :
                    </StyledTypography>
                    <StyledTypography>
                        {convertDmToCm(props.height)} cm
                    </StyledTypography>

                </Stack>
            </Stack>
            <Divider variant="middle"/>
            <Stack direction="column">
                <Stack direction="row">
                    <StyledTypography>
                        Weight :
                    </StyledTypography>
                    <StyledTypography>
                        {convertHgToKg(props.weight)} kg
                    </StyledTypography>

                </Stack>
            </Stack>
            <Divider variant="middle"/>
            <Stack direction="column">
                <Stack direction="row">
                    <StyledTypography>
                        Base Experience :
                    </StyledTypography>
                    <StyledTypography>
                        {props.baseExperience}
                    </StyledTypography>

                </Stack>
            </Stack>
            <Divider variant="middle"/>
            <Stack direction="column">
                <Stack direction="row">
                    <StyledTypography>
                        Order :
                    </StyledTypography>
                    <StyledTypography>
                        {props.order}
                    </StyledTypography>

                </Stack>
            </Stack>

        </StyledCard>
    );
};

export default PokemonSummary;