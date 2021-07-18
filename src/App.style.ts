import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/kids.jpg";
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

  .start,
  .nextQuestion,
  .chooseCategory {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, ${menuButtons});
    border: 2px solid ${menuButtonsBorder};
    box-shadow: ${boxShadow};
    border-radius: 10px;
    height: 3rem;
    margin: 16px 0;
    padding: 0 40px;
    width: 220px;
  }
`;
