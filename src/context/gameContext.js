import React from 'react'

const GameContext = React.createContext({
  choicesList: [],
  youChoose: () => {},
  restartGame: () => {},
  you: {},
  opponent: {},
  result: '',
})

export default GameContext
