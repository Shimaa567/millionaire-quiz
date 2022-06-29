import React from "react";
import {
  StyledCategoryButton,
  StyledContainer,
  StyledHeader,
} from "./Categories.styled";
// import { useNavigate } from "react-router-dom";

const Categories = ({ difficulty }) => {
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);

  const [selectedCategory, setSelectedCategory] = React.useState("");

  //   const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
        setLoading(false);
      });
  }, []);

  const startGame = (id) => {
    setSelectedCategory(id);
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=easy`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <StyledContainer>
          <StyledHeader>Choose the Category & Let's have Fun!</StyledHeader>
          {categories.map((cat) => (
            <StyledCategoryButton
              key={cat.id}
              variant="contained"
              onClick={() => {
                startGame(cat.id);
              }}
            >
              {cat.name}
            </StyledCategoryButton>
          ))}
        </StyledContainer>
      )}
    </>
  );
};

export default Categories;
