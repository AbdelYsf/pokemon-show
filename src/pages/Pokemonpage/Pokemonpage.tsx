import {Box, CircularProgress, Grid} from "@mui/material";
import Pokemon from "../../components/Pokemon";
import {usePokemon} from "../../hooks/usePokemon";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

const Pokemonpage = () => {
    const apiResponse = usePokemon();
    const {ref, inView} = useInView()
    useEffect(() => {
        if (inView) {
            apiResponse.fetchNextPage()
        }
    }, [inView])
    const content = apiResponse?.data?.pages.map((page: any) => {
        return page.results.map((ele: any, index: number) => {
            return (
                <Grid item key={index}>

                    <Pokemon
                        name={ele.name}
                        url={ele.url}
                    />
                </Grid>
            );
        });
    });
    return (
        <Box sx={{overflow: "auto"}}>
            <Grid container justifyContent="center" gap="15px">
                {apiResponse.isLoading ? (
                    <CircularProgress/>
                ) : apiResponse.error ? (
                    <div>error.. </div>
                ) : (

                    content
                )}
            </Grid>
            {
                apiResponse.hasNextPage && <div ref={ref}/>
            }

        </Box>
    );
};

export default Pokemonpage;
