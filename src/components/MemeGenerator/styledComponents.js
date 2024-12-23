// Style your components here

import styled from 'styled-components'

export const MemeCon = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NewImage = styled.div`
  background-image: url(${props => props.url});
  height: 50vh;
  width: 60%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: ${props => props.size}px;
  color: #ffffff;
  text-align: center;
`

export const BigMeme = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;

  @media screen and (min-width: 768px) {
    align-items: center;
    width: 80%;
  }
`
export const OuterForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const GeneratorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #35469c;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
`

export const FormCon = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  align-self: flex-start;
  height: 30px;
  font-family: Roboto;
  padding-left: 10px;
  outline: none;
  border: 2px solid #d7dfe9;
  color: #1e293b;
`

export const InputHeading = styled.label`
  font-size: 15px;
  color: #7e858e;
  font-family: 'Roboto';
  align-self: flex-start;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const SelectOptions = styled.select`
  width: 100%;
  max-width: 500px;
  align-self: flex-start;
  outline: none;
  height: 30px;
  border: 2px solid #d7dfe9;
  padding-left: 10px;
`

export const Options = styled.option``

export const GenerateBtn = styled.button`
  width: 100px;
  align-self: flex-start;
  background-color: #0b69ff;
  color: #ffffff;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`

export const NewImage1 = styled.div`
  background-image: url(${props => props.url});
  height: 450px;
  width: 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
