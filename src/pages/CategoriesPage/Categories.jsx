import React from "react";
import {
  StyledCategoryButton,
  StyledContainer,
  StyledHeader,
} from "./Categories.styled";
import { useNavigate } from "react-router-dom";
import { QuestionsContext } from "../../context/QuestionsContext";
// import Question from "../QuestionPage/Question";
// import { useQuery } from "react-query";

const Categories = ({ difficulty }) => {
  const [loading, setLoading] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const { setQuestions } = React.useContext(QuestionsContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.trivia_categories);
        setLoading(false);
      });
  }, []);

  const requestQuestions = (category) => {
    fetch(
      `https://opentdb.com/api.php?amount=3&category=${category}&difficulty=easy`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        setQuestions(results);
      })
      .finally(() => {
        navigate("/questions");
      });
  };

  const startGame = (id) => {
    setSelectedCategory(id);
    requestQuestions(id);
  };

  return (
    <>
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <StyledContainer>
          <StyledHeader>Choose the Category & Let's have Fun!</StyledHeader>
          {selectedCategory}
          {categories.map((cat) => (
            <StyledCategoryButton
              key={cat.id}
              variant="contained"
              onClick={() => startGame(cat.id)}
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
