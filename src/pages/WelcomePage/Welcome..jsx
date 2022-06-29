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
// import Categories from "../CategoriesPage/Categories";

const Welcome = () => {
  const [username, setUsername] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  const navigate = useNavigate();

  console.log(difficulty);

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
            value={difficulty}
            onClick={() => {
              setDifficulty("easy");
              console.log(difficulty);
            }}
          />
          <Button
            text="Medium"
            value={difficulty}
            background="#D1A56D"
            onClick={() => setDifficulty("medium")}
          />
          <Button
            text="Hard"
            value={difficulty}
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
