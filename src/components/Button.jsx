import React from "react";
import { styled as MuiStyled } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

const Button = ({ text, background, variant }) => {
  const StyledButton = MuiStyled(MuiButton)`
    width: 40px;
    height: 40px;
    border: 1px solid transparent;
    border-radius: 10px;
    color: white;
    margin: 10px;
    background-color: ${background};
    &:hover{
        background-color: ${background};
    }

`;
  return <StyledButton variant={variant}>{text}</StyledButton>;
};

export default Button;
