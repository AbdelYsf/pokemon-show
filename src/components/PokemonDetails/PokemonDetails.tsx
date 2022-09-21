import Dialog from '@mui/material/Dialog';
import {PokemonDetailsProps} from "../../types";
import React, {FC} from "react";
import {StyledAppBar, StyledTypography} from "./PokemonDetails.style";
import {IconButton, Stack} from "@mui/material";
import PokemonSummary from "../PokemonSummary";
import PokemonAbilities from "../PokemonAbilities";
import PokemonStats from "../PokemonStats";
import PokemonTypes from "../PokemonTypes";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {activePokemonSelector, errorSelector, isLoadingSelector} from "../../state/slices/pokemonDetails/selectors";
import {useDispatch, useSelector} from "react-redux";
import {getPokemonDetailsById} from "../../state/slices/pokemonDetails/slice";
import PokemonDetailsLoader from "../shared/PokemonDetailsLoader";
import PokemonAlert from "../shared/PokemonAlert";

const PokemonDetails: FC<PokemonDetailsProps> = (props: PokemonDetailsProps) => {

    const activePokemon = useSelector(activePokemonSelector)
    const error: any = useSelector(errorSelector)
    const isLoading: boolean = useSelector(isLoadingSelector)
    const dispatch = useDispatch();
    const onNext = () => {
        console.log("next")
        dispatch(getPokemonDetailsById(activePokemon!.id + 1));
    }
    const onPrevious = () => {
        if (activePokemon!.id <= 1) return;
        dispatch(getPokemonDetailsById(activePokemon!.id - 1));
    }

    return (
        <>

            <Dialog
                maxWidth="xl"
                data-cy="pokemonDetailsModal"
                open={props.isOpen}
                onClose={props.closeModal}
            >
                <div style={{minHeight: "80vh", minWidth: "70vw"}}>

                    <StyledAppBar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={onPrevious}

                        >
                            <ArrowBackIosNewIcon/>
                        </IconButton>
                        <StyledTypography
                            gutterBottom
                            variant="h2"
                            component="div"
                            fontFamily="Rampart One"
                            align="center"
                        >
                            {activePokemon?.name}
                        </StyledTypography>

                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={onNext}
                            aria-label="close"
                        >
                            <ArrowForwardIosIcon/>
                        </IconButton>


                    </StyledAppBar>
                    <Stack direction="row" flexWrap="wrap">

                        {

                            isLoading ? <PokemonDetailsLoader/> : error ? <PokemonAlert
                                    severity="error"
                                    title="something went wrong"
                                    description={error.message}
                                /> :
                                <>
                                    <PokemonSummary id={activePokemon?.id}
                                                    baseExperience={activePokemon?.base_experience}
                                                    height={activePokemon?.height} order={activePokemon?.order}
                                                    weight={activePokemon?.weight}></PokemonSummary>
                                    <Stack direction="column" justifyContent="space-evenly">
                                        {
                                            activePokemon?.types && <PokemonTypes types={activePokemon?.types}/>
                                        }
                                        {
                                            activePokemon?.stats && <PokemonStats stats={activePokemon.stats}/>
                                        }

                                        {
                                            activePokemon?.abilities &&
                                            <PokemonAbilities abilities={activePokemon.abilities}/>
                                        }


                                    </Stack>
                                </>

                        }
                    </Stack>
                </div>
            </Dialog>

        </>
    );
};

export default PokemonDetails;