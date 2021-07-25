import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
import { categories } from "./App.style";
// Components
import QuestionCard from "./components/QuestionCard";
import Loader from "./components/Loader";
// Types
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, AppWrapper } from "./App.style";
// Utils
import { capitalize } from "./utils";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState(
    localStorage.getItem("quizDifficultyLevel") || "medium"
  );
  const [backgroundImageId, setBackgroundImageId] = useState(0);

  const startTrivia = async (categoryId: number) => {
    setLoading(true);
    setGameOver(false);

    // Make decent Error handling afterwards
    let NewQuestions;
    try {
      NewQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        categoryId,
        Difficulty[difficulty.toUpperCase() as keyof typeof Difficulty]
      );
      await setBackgroundImageId(categoryId);
    } catch (err) {
      console.log(err);
    }

    setQuestions(NewQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = answer === questions[number].correct_answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) setGameOver(true);
    setNumber(nextQuestion);
  };

  const chooseDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (difficulty === e.currentTarget) return;
    localStorage.setItem("quizDifficultyLevel", value);
    setDifficulty(value);
  };

  const endTrivia = () => {
    if (!gameOver) {
      setGameOver(true);
      setBackgroundImageId(0); // set default background image
    }
  };

  const difficultyLevels: string[] = ["easy", "medium", "hard"];

  return (
    <>
      <GlobalStyle backgroundImageId={backgroundImageId} />
      <AppWrapper className="App">
        <h1>Simple Trivia</h1>
        {gameOver && (
          <div className="gameOptions">
            <div className="difficultyLevel">
              {difficultyLevels.map((level) => (
                <>
                  <input
                    type="radio"
                    name="difficulty"
                    value={level}
                    onChange={(e) => chooseDifficulty(e)}
                    id={level}
                    checked={difficulty === level}
                  />
                  <label htmlFor={level}>{capitalize(level)}</label>
                </>
              ))}
            </div>
            <div className="categories">
              {categories.map((category) => {
                return (
                  <div
                    className="category"
                    key={category[1]}
                    data-name={category[1]}
                    onClick={() => startTrivia(category[0])}
                  >
                    {capitalize(category[1])}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <Loader />}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        <div className="quizButtons">
          {!gameOver && (
            <button className="endQuiz" onClick={endTrivia}>
              End trivia
            </button>
          )}
          {!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1 && (
              <button className="nextQuestion" onClick={nextQuestion}>
                Next question
              </button>
            )}
        </div>
      </AppWrapper>
    </>
  );
};

export default App;
