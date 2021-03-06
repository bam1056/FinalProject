import React, { Component } from 'react'
import {
  Overlay,
  Panel,
  PanelHeader
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
      textShadow: '2px 2px 2px black',
      fontFamily: 'Roboto'
    }

    return <div className='congratsModal'>
      <Overlay
        style={overlayStyle}
        open={this.props.open}
        dark
        >
        <Panel theme='primary'>
          <PanelHeader style={{fontFamily: 'Roboto'}}>
              Congrats! You Finished a Task
          </PanelHeader>
          <div style={modalStyle} className='trBG'>
              Now we're picking up steam!
          </div>
        </Panel>
      </Overlay>
    </div>
  }
}
export default CongratsModal
