import {Card, CardActions, CardMedia, styled, Typography,} from "@mui/material";

export const StyledCardActions = styled(CardActions)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledCard = styled(Card)`
  background-color: #faebec;
  margin: 20px;
  width: 260px;
  border-radius: 25px;

  :hover {
    transform: scale(1.03);
  }

  transition: all 0.2s;
`;

export const StyledCardMedia = styled(CardMedia)`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
` as typeof CardMedia;

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
` as typeof Typography;
