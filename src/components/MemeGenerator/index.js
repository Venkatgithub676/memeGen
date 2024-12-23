import {Component} from 'react'
import {
  GeneratorHeading,
  MemeCon,
  FormCon,
  Input,
  InputHeading,
  GenerateBtn,
  SelectOptions,
  Options,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {}

  render() {
    return (
      <MemeCon>
        <GeneratorHeading>Meme Generator</GeneratorHeading>
        <FormCon type="submit" onClick={this.onSubmitBtn}>
          <InputHeading htmlFor="url">Image URL</InputHeading>
          <Input id="url" />
          <InputHeading htmlFor="top-text">Top Text</InputHeading>
          <Input id="top-text" />
          <InputHeading htmlFor="bottom-text">Bottom Text</InputHeading>
          <Input id="bottom-text" />
          <InputHeading htmlFor="font-size">Font Size</InputHeading>
          <SelectOptions id="font-size">
            <Options>Hi</Options>
          </SelectOptions>
          <GenerateBtn>Generate</GenerateBtn>
        </FormCon>
      </MemeCon>
    )
  }
}

export default MemeGenerator
