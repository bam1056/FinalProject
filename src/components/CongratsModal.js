import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close
} from 'rebass'

class CongratsModal extends Component {
  static propTypes = {
    toggle: React.PropTypes.func,
    open: React.PropTypes.bool
  }

  render () {
    const overlayStyle = {
      width: '75vw'
    }

    const modalStyle = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      margin: '0 auto',
      fontSize: '2em',
      fontWeight: 'bold',
      textShadow: '2px 2px 2px black'
    }

    return <div className='congratsModal'>
      <Overlay
        style={overlayStyle}
        open={this.props.open}
        dark
        >
        <Panel theme='primary'>
          <PanelHeader>
            <Flex
              align='center'
              justify='space-between'
              col={12}
              >
              Congratulations!
              <Close onClick={() => this.props.toggle(false)} />
            </Flex>
          </PanelHeader>
          <div style={modalStyle} className='trBG'>
            Well Done<br /> You finished a task <br />
            <br />
            Let's keep the StreamLine rolling!
          </div>
        </Panel>
      </Overlay>
    </div>
  }
}
export default CongratsModal
