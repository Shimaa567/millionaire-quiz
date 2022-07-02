import React from "react";

export const QuestionsContext = React.createContext({
  questions: null,
  setQuestions: () => {},
});

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = React.useState(null);
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
