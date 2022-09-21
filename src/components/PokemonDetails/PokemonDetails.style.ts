import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import AppBar from "@mui/material/AppBar";

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
` as typeof Typography;


export const StyledAppBar = styled(AppBar)`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  position: relative;
` as typeof AppBar;