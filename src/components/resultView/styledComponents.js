import styled from 'styled-components'

export const OptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 60vh;

  @media screen and (min-width: 768px) {
  }
`

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const YouPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
`

export const ResultPara = styled(YouPara)`
  font-size: 25px;
  margin-bottom: 0px;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  color: #223a5f;
  font-family: 'Bree Serif';
  width: 120px;
  height: 35px;
  border-radius: 14px;
  margin-top: 0px;
  margin-bottom: 4%;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 40px;
    font-size: 18px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
