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
  Text,
  NewImage,
  NewImage1,
  BigMeme,
  OuterForm,
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
  state = {
    url: '',
    topText: '',
    bottomText: '',
    size: '',
    generated: false,
    imgObj: {url: '', topText: '', bottomText: '', size: ''},
  }

  onChangeImg = event => {
    this.setState({url: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({size: event.target.value})
  }

  onSubmitBtn = event => {
    event.preventDefault()
    const {size, topText, bottomText, url} = this.state
    this.setState({imgObj: {size, bottomText, topText, url}, generated: true})
  }

  render() {
    const {url, topText, bottomText, size, generated, imgObj} = this.state
    console.log(generated)
    return (
      <MemeCon>
        {generated && (
          <NewImage url={imgObj.url} data-testid="meme">
            <Text size={imgObj.size}>{imgObj.topText}</Text>
            <Text size={imgObj.size}>{imgObj.bottomText}</Text>
          </NewImage>
        )}
        <BigMeme>
          <OuterForm>
            <GeneratorHeading>Meme Generator</GeneratorHeading>
            <FormCon onSubmit={this.onSubmitBtn}>
              <InputHeading htmlFor="url">Image URL</InputHeading>
              <Input
                id="url"
                placeholder="Enter the Image URL"
                onChange={this.onChangeImg}
                value={url}
              />
              <InputHeading htmlFor="top-text">Top Text</InputHeading>
              <Input
                id="top-text"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTop}
                value={topText}
              />
              <InputHeading htmlFor="bottom-text">Bottom Text</InputHeading>
              <Input
                id="bottom-text"
                onChange={this.onChangeBottom}
                placeholder="Enter the Bottom Text"
                value={bottomText}
              />
              <InputHeading htmlFor="font-size">Font Size</InputHeading>
              <SelectOptions
                value={size}
                id="font-size"
                onChange={this.onChangeSelect}
              >
                {fontSizesOptionsList.map(each => (
                  <Options key={each.optionId} value={each.displayText}>
                    {each.displayText}
                  </Options>
                ))}
              </SelectOptions>
              <GenerateBtn type="submit">Generate</GenerateBtn>
            </FormCon>
          </OuterForm>
          {generated && (
            <NewImage1 url={imgObj.url} data-testid="meme">
              <Text size={imgObj.size}>{imgObj.topText}</Text>
              <Text size={imgObj.size}>{imgObj.bottomText}</Text>
            </NewImage1>
          )}
        </BigMeme>
      </MemeCon>
    )
  }
}

export default MemeGenerator
