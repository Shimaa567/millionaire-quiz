import React from "react";
import { styled as MuiStyled } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

const Button = ({ text, background, variant, ...props }) => {
  /* {userName:"",
  street:"dsds",
dddsDS:"",

} */

  /* const ({street,building,...data})=>{axios.post("cxcxcx",{address: ,...data})} */

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
  return (
    <StyledButton {...props} variant={variant}>
      {text}
    </StyledButton>
  );
};

export default Button;
