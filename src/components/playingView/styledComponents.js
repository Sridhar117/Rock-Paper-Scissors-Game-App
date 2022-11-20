import styled from 'styled-components'

export const OptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6%;
  margin-bottom: 6%;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60vh;
  flex-grow: 0;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50%;
  margin-bottom: 0px;
  margin-top: 0px;
`

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
