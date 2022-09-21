import React, {FC} from "react";
import {StyleChip, StyledCard, StyleStack} from "./PokemonTypes.style";
import {Divider, Typography} from "@mui/material";
import {PokemonTypesResponse} from "../../types";
import {colorMap} from "./PokemonTypes.service";

interface PokemonTypesProps {
    types: PokemonTypesResponse[];
}

const PokemonTypes: FC<PokemonTypesProps> = (props: PokemonTypesProps) => {
    return (
        <StyledCard>
            <Typography variant="h5" fontFamily="Hahmlet" align="center">
                Types
            </Typography>
            <Divider variant="middle"/>
            <StyleStack direction="row" sx={{margin: 1}} justifyContent="space-evenly" flexWrap="wrap">
                {
                    props.types.map((ele, index) =>
                        <StyleChip label={ele.type.name} variant="filled" key={index}
                                   sx={{backgroundColor: colorMap[ele.type.name]}}/>)
                }
            </StyleStack>

        </StyledCard>
    );
};

export default PokemonTypes;