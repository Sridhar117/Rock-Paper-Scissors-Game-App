import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    padding: 5%;
  }
`

export const ScoreContainer = styled.div`
  background-color: #223a5f;
  border: 2px solid white;
  padding: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: white;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 0px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const Score = styled.div`
  background-color: white;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 18%;
  }
`

export const ScorePara = styled.p`
  font-family: 'Bree Serif';
  font-weight: 400;
  color: #223a5f;
  font-size: 20px;
  margin-bottom: 0px;
`
export const ScoreValue = styled(ScorePara)`
  font-size: 38px;
  margin-top: 0px;
  margin-bottom: 5px;
  font-family: 'Roboto';
  font-weight: 500;
`
