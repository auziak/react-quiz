import styled from "styled-components";
import { colors } from "../styled-variables";

const { mainHeader } = colors;

export const LoaderWrapper = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: purple;
  display: flex;
  align-items: flex-end;
  line-height: 1;

  span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${mainHeader};
    margin-left: 1rem;
    transform: translateY(0.6rem);
    animation: bounce ease-out 0.6s infinite alternate;
    animation-delay: 0s;
  }
  span:nth-child(1) {
    animation-delay: 0.4s;
  }
  span:nth-child(2) {
    background-color: purple;
    animation-delay: 0.2s;
  }

  @keyframes bounce {
    to {
      transform: translate3d(0, -0.8rem, 0);
    }
  }
`;
