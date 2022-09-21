import React from "react";
import {CircularProgress} from "@mui/material";

type Ref = HTMLDivElement
const PokemonDetailsLoader = React.forwardRef<Ref, any>((props, ref) => {
    return (
        <div ref={ref} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",

        }}>
            <CircularProgress thickness={8} size={23}/>

        </div>
    );
});

export default PokemonDetailsLoader;