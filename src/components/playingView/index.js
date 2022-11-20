import GameContext from '../../context/gameContext'

import OptionsButton from '../optionsButton/index'
import {OptionsDiv} from './styledComponents'

const PlayingView = () => (
  <GameContext.Consumer>
    {value => {
      const {choicesList} = value

      return (
        <OptionsDiv>
          {choicesList.map(eachItem => (
            <OptionsButton key={eachItem.id} details={eachItem} />
          ))}
        </OptionsDiv>
      )
    }}
  </GameContext.Consumer>
)

export default PlayingView
