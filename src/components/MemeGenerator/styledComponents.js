// Style your components here

import styled from 'styled-components'

export const GeneratorHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #35469c;
`

export const MemeCon = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

export const InputHeading = styled.label`
  font-size: 25px;
  font-family: 'Roboto';
  align-self: flex-start;
`

export const SelectOptions = styled.select`
  width: 100%;
  max-width: 500px;
  align-self: flex-start;
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
`
