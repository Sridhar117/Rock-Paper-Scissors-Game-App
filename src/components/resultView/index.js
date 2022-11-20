import GameContext from '../../context/gameContext'

import {
  OptionsDiv,
  Option,
  YouPara,
  ResultPara,
  Button,
  Image,
  PlayAgainButton,
} from './styledComponents'

const ResultView = () => (
  <GameContext.Consumer>
    {value => {
      const {you, opponent, restartGame, result} = value

      const onRestart = () => {
        restartGame()
      }

      return (
        <>
          <OptionsDiv>
            <Option>
              <YouPara>YOU</YouPara>
              <Button>
                <Image src={you.imageUrl} alt="your choice" />
              </Button>
            </Option>
            <Option>
              <YouPara>OPPONENT</YouPara>
              <Button>
                <Image src={opponent.imageUrl} alt="opponent choice" />
              </Button>
            </Option>
          </OptionsDiv>
          <ResultPara>{result}</ResultPara>
          <PlayAgainButton type="button" onClick={onRestart}>
            Play Again
          </PlayAgainButton>
        </>
      )
    }}
  </GameContext.Consumer>
)

export default ResultView
