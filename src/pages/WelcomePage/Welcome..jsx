import React from "react";
import Button from "../../components/Button";
import {
  StyledContainer,
  StyledCard,
  StyledInput,
  StyledButtonGroup,
} from "./Welcome.styled";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Categories from "../CategoriesPage/Categories";

const Welcome = ({ username, setUsername, difficulty, setDifficulty }) => {
  const navigate = useNavigate();

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
          <Button
            text="Easy"
            background="#71C863"
            onClick={() => {
              setDifficulty("easy");
            }}
          />
          <Button
            text="Medium"
            background="#D1A56D"
            onClick={() => setDifficulty("medium")}
          />
          <Button
            text="Hard"
            background="#E1625B"
            onClick={() => setDifficulty("hard")}
          />
        </StyledButtonGroup>

        <MuiButton
          variant="outlined"
          onClick={() => {
            navigate("/categories");
            <Categories difficulty={difficulty} />;
          }}
        >
          Start
        </MuiButton>
      </StyledCard>
    </StyledContainer>
  );
};

export default Welcome;
