import React, {FC} from "react";
import {StyledCard} from "./PokemonStats.style";
import {Divider, Grid, Typography} from "@mui/material";
import {PokemonStatsResponse} from "../../types";
import PokemonStat from "../PokemonStat";
import {cleanStatName} from "./PokemonStats.service";

export interface PokemonStatProps {
    stats: PokemonStatsResponse[];
}

const PokemonStats: FC<PokemonStatProps> = (props: PokemonStatProps) => {
    return (
        <StyledCard>
            <Typography variant="h5" fontFamily="Hahmlet" align="center">
                Stats
            </Typography>
            <Divider variant="middle"/>
            <Grid container direction="row" spacing={2} justifyContent="space-evenly" flexWrap="wrap">
                {
                    props.stats.map((ele, index) =>
                        <PokemonStat name={cleanStatName(ele.stat.name)} baseStat={ele.base_stat} key={index}/>
                    )
                }
                <Divider variant="middle" orientation="vertical"/>
            </Grid>


        </StyledCard>
    );
};

export default PokemonStats;