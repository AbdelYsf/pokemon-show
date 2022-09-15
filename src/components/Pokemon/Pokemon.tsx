import { Avatar, Button } from "@mui/material";
import { PokemonProps } from "../../types";
import {
  StyledCard,
  StyledCardActions,
  StyledCardMedia,
  StyledTypography,
} from "./Pokemon.style";
import { POKEMON_BALL_ICON_URL } from "../../utils/constant";

const Pokemon = (props: PokemonProps) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        height="260"
        image={props.imageUrl}
        alt={props.name}
      />
      <StyledCardActions>
        <StyledTypography
          gutterBottom
          variant="h4"
          component="div"
          fontFamily="Rampart One"
        >
          {props.name}
        </StyledTypography>
      </StyledCardActions>
      <StyledCardActions>
        <Button
          size="large"
          startIcon={<Avatar src={POKEMON_BALL_ICON_URL}></Avatar>}
        ></Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Pokemon;
