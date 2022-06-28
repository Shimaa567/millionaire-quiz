import React from "react";
import Button from "../../components/Button";
import {
  StyledContainer,
  StyledCard,
  StyledInput,
  StyledButtonGroup,
} from "./Welcome.styled";
import { Button as MuiButton } from "@mui/material";
import { Redirect } from "react-router-dom";
import Categories from "../CategoriesPage/Categories";

const Welcome = () => {
  const [username, setUsername] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const StartGame = () => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
      });
  };

  return (
    <StyledContainer>
      <StyledCard>
        <StyledInput
          id="outlined-basic"
          label="Enter your name"
          required
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <StyledButtonGroup>
          <Button text="Easy" background="#71C863" />
          <Button text="Medium" background="#D1A56D" />
          <Button text="Hard" background="#E1625B" />
        </StyledButtonGroup>

        <MuiButton variant="outlined" onClick={StartGame}>
          Start
        </MuiButton>
      </StyledCard>
    </StyledContainer>
  );
};

export default Welcome;
