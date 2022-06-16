import { useState } from "react"
import { ChromePicker, ColorResult } from "react-color"
import Confetti from "react-confetti"

import Layout from "../../components/layout"
import { ColorProps } from "./interface"
import * as S from "./styles"

const colorAnswer = "#8395bc"

const QuestionContent = ({ color }: ColorProps) => (
  <S.TextContent color={color}>
    <p className="text__question">Qual a cor?</p>
  </S.TextContent>
)

const SuccessContent = () => (
  <S.TextContent>
    <p className="text__congratulations">Você acertou!</p>

    <p className="text__hint">
      A próxima dica é: <b>Leia Tiago (NVT)</b>
    </p>
  </S.TextContent>
)

function HomePage() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [color, setColor] = useState<string>(S.defaultColor)

  const handleChangeBackground = (newColor: ColorResult) => {
    setColor(newColor.hex)
  }

  const handleChangeComplete = (newColor: ColorResult) => {
    if (newColor.hex === colorAnswer) {
      setIsSuccess(true)
    }
  }

  return (
    <Layout>
      <Confetti
        run={isSuccess}
        opacity={0.7}
        tweenDuration={6000}
        numberOfPieces={3000}
        recycle={false}
      />

      <S.ColorContainer color={color}></S.ColorContainer>

      <S.ColorPickerWrapper>
        <ChromePicker
          color={color}
          onChange={handleChangeBackground}
          onChangeComplete={handleChangeComplete}
          disableAlpha
        />
      </S.ColorPickerWrapper>

      <S.TextContainer>
        {isSuccess ? <SuccessContent /> : <QuestionContent color={color} />}
      </S.TextContainer>
    </Layout>
  )
}

export default HomePage
