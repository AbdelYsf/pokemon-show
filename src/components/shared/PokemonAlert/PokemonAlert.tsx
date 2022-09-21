import {FC} from "react";
import {Alert, AlertTitle} from "@mui/material";

interface Props {
    severity: "error" | "success" | "info" | "warning";
    title: string;
    description?: string;
}

const PokemonAlert: FC<Props> = (props: Props) => {
    return (
        <Alert severity={props.severity}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.description}
        </Alert>
    );
};

export default PokemonAlert;