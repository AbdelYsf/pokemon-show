import {Box, CircularProgress, Grid} from "@mui/material";
import Pokemon from "../../components/Pokemon";
import {usePokemons} from "../../hooks/usePokemons";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import PokemonDetails from "../../components/PokemonDetails";
import {useDispatch} from "react-redux";
import {getPokemonDetails} from "../../state/slices/pokemonDetails/slice";
import PokemonDetailsLoader from "../../components/shared/PokemonDetailsLoader";

const Pokemonpage = () => {
    const apiResponse = usePokemons();
    const {ref, inView} = useInView()
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = (name: string) => {
        dispatch(getPokemonDetails(name));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (inView) {
            apiResponse.fetchNextPage()
        }
    }, [inView, apiResponse])
    const content = apiResponse?.data?.pages.map((page: any) => {
        return page.results.map((ele: any, index: number) => {
            return (
                <Grid item key={index}>

                    <Pokemon
                        name={ele.name}
                        url={ele.url}
                        openDetails={() => {
                            handleClickOpen(ele.name)
                        }}
                    />
                </Grid>
            );
        });
    });
    return (
        <Box sx={{overflow: "none"}}>
            <Grid container justifyContent="center" gap="15px" data-cy="pokemon-page">
                {apiResponse.isLoading ? (
                    <CircularProgress/>
                ) : apiResponse.error ? (
                    <div>error.. </div>
                ) : (

                    content
                )}
            </Grid>
            {
                apiResponse.hasNextPage && <PokemonDetailsLoader ref={ref}/>
            }
            <PokemonDetails url="test" closeModal={handleClose} isOpen={open}></PokemonDetails>

        </Box>
    );
};

export default Pokemonpage;
