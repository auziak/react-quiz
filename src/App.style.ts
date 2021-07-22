import styled, { createGlobalStyle } from "styled-components";
// Images
import BGImage from "./images/kids.jpg";
import generalKnowledge from "./images/roll-safe.jpg";
import mythology from "./images/herakles.jpg";
import geography from "./images/geography.jpg";
import history from "./images/history.jpg";
import films from "./images/films.jpg";
import music from "./images/music.jpg";
// Styling Variables
import { colors, shadow } from "./styled-variables";

const {
  mainHeader,
  mainHeaderShadow,
  menuButtons,
  menuButtonsBorder,
  questionDefaultFrom,
} = colors;
const { boxShadow } = shadow;
const categoryRectSide = "200px";

type Category = [number, string, null | string];

export const categories: Category[] = [
  [9, "general knowledge", generalKnowledge],
  [20, "mythology", mythology],
  [22, "geography", geography],
  [23, "history", history],
  [11, "films", films],
  [12, "music", music],
];
const categoryImages = [music];

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
  }

  .App {
    display: flex;
    justify-content: center;
    background-image: url(${BGImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
  }

  * {
    box-sizing: border-box;
    font-family: "Noto Sans JP", sans-serif;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > p {
    color: fff;
  }

  .score {
    color: ${mainHeaderShadow};
    font-size: 2rem;
    margin: 0.5rem 0;
    text-shadow: ${questionDefaultFrom} 2px 2px 2px;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, ${mainHeader});
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px ${mainHeaderShadow});
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .gameOptions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .difficultyLevel {
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: ${boxShadow};
  }
  .difficultyLevel input {
    width: 18px;
    height: 18px;
    margin-right: 0.3rem;
  }
  .difficultyLevel label {
    margin-right: 1rem;
  }

  .categories {
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    flex-wrap: wrap;
    margin: 1rem 0;
  }
  .category {
    min-height: ${categoryRectSide};
    min-width: ${categoryRectSide};
    height: ${categoryRectSide};
    width: ${categoryRectSide};
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    border-radius: 0.5rem;
    border: solid #fff 2px;
    box-shadow: ${boxShadow};
    color: #fff;
    text-shadow: 1px 1px 2px black;
    font-size: 1.5rem;
    word-break: normal;
    text-align: center;
    cursor: pointer;
  }
  .category:hover {
    transform: scale(1.05);
  }
  ${categories.map((category) => {
    return (
      '.category[data-name="' +
      category[1] +
      '"] { background-image:url(' +
      category[2] +
      ");}"
    );
  })}

  // buttons wrapper
  .quizButtons {
    display: flex;
    justify-content: center;
  }

  // buttons
  .nextQuestion,
  .endQuiz {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, ${menuButtons});
    border: 2px solid ${menuButtonsBorder};
    box-shadow: ${boxShadow};
    border-radius: 10px;
    height: 3rem;
    margin: 1rem;
    padding: 0 40px;
    width: 220px;
  }
`;
