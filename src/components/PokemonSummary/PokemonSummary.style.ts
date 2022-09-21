import {styled} from "@mui/material/styles";
import {Card, CardMedia, Typography} from "@mui/material";

export const StyledCard = styled(Card)`
  margin: 20px;
  min-width: 340px;
  border-radius: 10px;
  box-shadow: none

`;

export const StyledCardMedia = styled(CardMedia)`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  min-width: 400px;
` as typeof CardMedia;

export const StyledTypography = styled(Typography)`
  margin: 1px;
  padding-left: 19px;
  font-family: "Chonburi";
` as typeof Typography;