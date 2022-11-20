import {Component} from 'react'
import GameContext from '../../context/gameContext'
import PlayingView from '../playingView/index'
import ResultView from '../resultView/index'
import RulesPopup from '../RulesPopup/index'

import {
  GameContainer,
  ScoreContainer,
  Heading,
  Score,
  ScorePara,
  ScoreValue,
} from './styledComponents'

class Game extends Component {
  state = {score: 0, resultShow: false, you: {}, opponent: {}, result: ''}

  youChoose = id => {
    const randomNumber = Math.floor(Math.random() * 3)
    const {choicesList} = this.props

    const opponentValue = choicesList[randomNumber]
    const yourValue = choicesList.filter(eachItem => eachItem.id === id)[0]

    if (yourValue.id === opponentValue.id) {
      this.setState({
        you: yourValue,
        opponent: opponentValue,
        resultShow: true,
        result: 'IT IS DRAW',
      })
    } else if (yourValue.id === 'PAPER' && opponentValue.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        opponent: opponentValue,
        you: yourValue,
        resultShow: true,
      }))
    } else if (yourValue.id === 'PAPER' && opponentValue.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        opponent: opponentValue,
        result: 'YOU LOSE',
        you: yourValue,
        resultShow: true,
      }))
    } else if (yourValue.id === 'ROCK' && opponentValue.id === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        opponent: opponentValue,
        result: 'YOU WON',
        you: yourValue,
        resultShow: true,
      }))
    } else if (yourValue.id === 'ROCK' && opponentValue.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        opponent: opponentValue,
        you: yourValue,
        result: 'YOU LOSE',
        resultShow: true,
      }))
    } else if (yourValue.id === 'SCISSORS' && opponentValue.id === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        opponent: opponentValue,
        you: yourValue,
        result: 'YOU LOSE',
        resultShow: true,
      }))
    } else if (yourValue.id === 'SCISSORS' && opponentValue.id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        opponent: opponentValue,
        you: yourValue,
        result: 'YOU WON',
        resultShow: true,
      }))
    }
  }

  restartGame = () => {
    this.setState({resultShow: false})
  }

  renderScore = () => {
    const {score} = this.state

    return (
      <ScoreContainer>
        <div>
          <Heading>ROCK</Heading>
          <Heading>PAPER</Heading>
          <Heading>SCISSORS</Heading>
        </div>
        <Score>
          <ScorePara>Score</ScorePara>
          <ScoreValue>{score}</ScoreValue>
        </Score>
      </ScoreContainer>
    )
  }

  render() {
    const {resultShow, you, opponent, result} = this.state
    const {choicesList} = this.props

    return (
      <GameContext.Provider
        value={{
          choicesList,
          result,
          youChoose: this.youChoose,
          restartGame: this.restartGame,
          you,
          opponent,
        }}
      >
        <GameContainer>
          {this.renderScore()}
          {resultShow ? <ResultView /> : <PlayingView />}
          <RulesPopup />
        </GameContainer>
      </GameContext.Provider>
    )
  }
}

export default Game
