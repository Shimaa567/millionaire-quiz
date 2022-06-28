import styled from "styled-components";
import bg from "../../assets/start.jpg";
import { styled as MuiStyled } from "@mui/material";
import { Box, TextField } from "@mui/material";

export const StyledContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #202020) center;
  background-image: url(${bg});
  height: 100vh;
  width: 1440px;
  display: flex;
  margin: auto;
`;

export const StyledCard = MuiStyled(Box)`
    height: 250px;
    width: 300px;
    margin: 400px auto auto;
    text-align: center;
    background-color: transparent;
`;

export const StyledInput = MuiStyled(TextField)`
    background-color: white;
    border-radius:10px;
    margin-bottom: 30px;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
