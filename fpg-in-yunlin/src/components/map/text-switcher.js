import { checkIfCINextToIInData } from '../../utils/is-near-current'
import map from 'lodash.map'
import mapTextData from '../../data/map-text'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import TextBox from './text'

const _ = {
  map,
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`

class TextSwitcher extends React.Component {
  static propTypes = {
    currentIndex: PropTypes.number,
  }
  static defaultProps = {
    currentIndex: 0,
  }
  constructor(props) {
    super(props)
    this._buildTextBox = this._buildTextBox.bind(this)
  }
  shouldComponentUpdate(nextProps) {
    const { currentIndex } = nextProps
    return mapTextData.some(checkIfCINextToIInData(currentIndex))
  }
  _buildTextBox(data) {
    const {
      description,
      index,
    } = data
    return (
      <TextBox
        key={`${index}-map-text`}
        currentIndex={this.props.currentIndex}
        description={description}
        index={index}
      />
    )
  }
  render() {
    return (
      <Container>
        {_.map(mapTextData, this._buildTextBox)}
      </Container>
    )
  }
}

export default TextSwitcher
