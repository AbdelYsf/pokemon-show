import React, {FC} from "react";
import {StyledCard} from "./PokemonAbilities.style";
import {Divider, Typography} from "@mui/material";
import {PokemonAbilityResponse} from "../../types";
import {StyleChip, StyleStack} from "../PokemonTypes/PokemonTypes.style";


interface PokemonAbilitiesPorps {
    abilities: PokemonAbilityResponse[];
}

const PokemonAbilities: FC<PokemonAbilitiesPorps> = (props: PokemonAbilitiesPorps) => {
    return (
        <StyledCard>
            <Typography variant="h5" fontFamily="Hahmlet" align="center">
                Abilities
            </Typography>
            <Divider variant="middle" sx={{marginBottom: 2}}/>

            <StyleStack direction="row"
                        justifyContent="space-evenly"
                        flexWrap="wrap">
                {
                    props?.abilities?.map((ele, index) =>
                        <StyleChip label={ele.ability.name} variant="filled" key={index}
                        />)
                }
            </StyleStack>


        </StyledCard>
    );
};

export default PokemonAbilities;