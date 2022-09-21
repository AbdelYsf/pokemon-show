import {styled} from "@mui/material/styles";
import {Card, Typography} from "@mui/material";

export const StyledCard = styled(Card)`
  margin: 20px;
  min-width: 540px;
  border-radius: 10px;
  box-shadow: none

`;


export const StyledTypography = styled(Typography)`
  font-family: "Fjalla One";
  font-size: 20px;
  text-transform: capitalize;
` as typeof Typography;