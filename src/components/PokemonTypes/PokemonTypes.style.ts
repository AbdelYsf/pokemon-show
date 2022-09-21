import {styled} from "@mui/material/styles";
import {Card, Chip, Stack} from "@mui/material";

export const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 10px;
  box-shadow: none;
  margin-top: 10px;

`;

export const StyleChip = styled(Chip)`
  padding: 2px;
  margin: 3px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  background-color: crimson;
` as typeof Chip;

export const StyleStack = styled(Stack)`
  max-width: inherit;
  margin: 2px;
` as typeof Stack;



