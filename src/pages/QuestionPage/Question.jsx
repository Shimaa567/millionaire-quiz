import React from "react";

const Question = ({ category }) => {
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState([]);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [score, setScore] = React.useState(false);

  React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=15&difficulty=easy`)
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        setResults(results);
        console.log();
        setLoading(false);
      });
  }, []);

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
      {loading ? (
        <p>Loading ...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Question;
