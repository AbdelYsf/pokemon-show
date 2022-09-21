import React, {FC} from "react";
import {StyledTypography} from "../PokemonStats/PokemonStats.style";
import CircularProgressWithLabel from "../shared/CircularProgressWithLabel";
import {normalizePercentage} from "../shared/CircularProgressWithLabel/CircularProgressWithLabel.service";
import {colorMap} from "../PokemonStats/PokemonStats.service";
import {StyleStack} from "../PokemonTypes/PokemonTypes.style";
import {Grid} from "@mui/material";


interface PokemonStatProps {
    name: string;
    baseStat: number;
}

const PokemonStat: FC<PokemonStatProps> = (props: PokemonStatProps) => {
    return (
        <Grid item md={6} lg={4} sm={6} xs={8}>

            <StyleStack direction="column" gap={2} alignItems="center"
                        justifyContent="center" minWidth="100%" minHeight="100%">
                <StyledTypography>{props.name}  </StyledTypography>
                <CircularProgressWithLabel value={normalizePercentage(props.baseStat)}
                                           color={colorMap[props.name]}
                />
            </StyleStack>
        </Grid>
    );
};

export default PokemonStat;