import React from "react";
import { Route, Routes } from "react-router";
import Categories from "./pages/CategoriesPage/Categories";
import Question from "./pages/QuestionPage/Question";
import Welcome from "./pages/WelcomePage/Welcome.";

function App() {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/categories" element={<Categories />} />
      <Route exact path="/questions" element={<Question />} />
    </Routes>
  );
  return <>{routes}</>;
}

export default App;
