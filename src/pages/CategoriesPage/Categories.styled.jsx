import styled from "styled-components";
import { styled as MuiStyled } from "@mui/material";
import { Box, Button } from "@mui/material";

export const StyledContainer = MuiStyled(Box)`
    margin: auto;
    background-color: #020230 ;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), #020230);
    height: 75vh;
    padding-top: 100px;

`;
export const StyledHeader = styled.p`
  font-size: 40px;
  line-height: 20px;
  color: #f1f1f1;
  text-align: center;
`;
export const StyledCategoryButton = MuiStyled(Button)`
    margin: 10px;
    border-radius: 10px;
`;
