import styled from "styled-components";
// Styling Variables
import { colors } from "../styled-variables";

const {
  mainHeaderShadow,
  questionCorrectFrom,
  questionCorrectTo,
  questionDefaultFrom,
  questionDefaultTo,
  questionInorrectFrom,
  questionInorrectTo,
} = colors;

export const QuestionCardWrapper = styled.div`
  margin: 20px;
  width: 800px;
  max-width: 800px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid ${mainHeaderShadow};
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }

  .questionNumber {
    text-decoration: underline;
  }

  .answers {
    width: 100%;
    margin: 1rem 0 0;
    display: inline-grid;
    grid-gap: 1rem;
    grid-template-areas:
      "button button"
      "button button";
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

const correctAnswerColors = `linear-gradient(90deg, ${questionCorrectFrom}, ${questionCorrectTo})`;
const incorrectAnswerColors = `linear-gradient(90deg, ${questionInorrectFrom}, ${questionInorrectTo})`;
const noAnswerColors = `linear-gradient(90deg, ${questionDefaultFrom}, ${questionDefaultTo})`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  grid-area: "button";
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    margin: 0;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? correctAnswerColors
        : !correct && userClicked
        ? incorrectAnswerColors
        : noAnswerColors};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
