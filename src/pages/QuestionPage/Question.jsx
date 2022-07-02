import React from "react";
import { QuestionsContext } from "../../context/QuestionsContext";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [score, setScore] = React.useState(false);
  const { questions: results } = React.useContext(QuestionsContext);
  const handleNext = (answerOption) => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < results.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(true);
    }
  };

  return (
    <div>
      <>
        <p>{results[currentQuestion].question}</p>

        <div>
          <button onClick={() => handleNext()}>
            {results[currentQuestion].correct_answer}
          </button>
          {results[currentQuestion].incorrect_answers.map((ans) => (
            <button onClick={() => handleNext()}>{ans}</button>
          ))}
        </div>
      </>
    </div>
  );
};

export default Question;
