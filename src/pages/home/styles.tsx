import styled, { keyframes } from "styled-components"
import { ColorProps } from "./interface"

export const defaultColor = "#c9c8d3"

export const ColorContainer = styled.section<ColorProps>`
  height: 45vh;

  background-color: ${(props) => props.color || defaultColor};
`

export const ColorPickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -60%);
`

export const TextContainer = styled.section`
  height: 55vh;
  background: #f8f9fa;

  display: flex;
  justify-content: center;
`
export const TextContent = styled.div<Partial<ColorProps>>`
  height: 100%;

  margin-top: 2%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  p {
    visibility: "visible";
    animation: fadeIn 1s linear;
    transition: visibility 2s linear;
  }

  p.text__question {
    color: ${(props) => props.color};

    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 0.65rem;
  }

  p.text__congratulations {
    color: #a8b5d3;
    font-weight: bold;

    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.65rem;

    margin-bottom: 16px;
  }

  p.text__hint {
    color: #64718d;

    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: 0.65rem;

    b {
      font-weight: 600;
    }
  }
`
