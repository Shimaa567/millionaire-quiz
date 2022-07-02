import React from "react";
import { Route, Routes } from "react-router";
import { QuestionProvider } from "./context/QuestionsContext";
import Categories from "./pages/CategoriesPage/Categories";
import Question from "./pages/QuestionPage/Question";
import Welcome from "./pages/WelcomePage/Welcome.";

function App() {
  // to share state between two or more components we chave two methods
  // 1- raise the state to the parent components of these two components
  // 2- context api
  // 3- redux

  // method 1
  const [username, setUsername] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const state = { username, setUsername, difficulty, setDifficulty };

  let routes = (
    /* method 2 */
    <QuestionProvider>
      <Routes>
        <Route exact path="/" element={<Welcome {...state} />} />
        <Route exact path="/categories" element={<Categories {...state} />} />
        <Route exact path="/questions" element={<Question />} />
      </Routes>
    </QuestionProvider>
  );
  return <>{routes}</>;
}

export default App;
