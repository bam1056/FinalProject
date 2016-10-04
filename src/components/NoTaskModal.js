import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Text
} from 'rebass'

class NoTaskModal extends Component {
  static propTypes = {
    toggle: React.PropTypes.func,
    open: React.PropTypes.bool
  }

  render () {
    const overlayStyle = {
      width: '75vw'
    }
    return <div className='errorModal'>
      <Overlay
        style={overlayStyle}
        open={this.props.open}
        dark
        >
        <Panel theme='warning'>
          <PanelHeader>
            <Flex
              align='center'
              justify='space-between'
              col={12}
              >
              Error!
              <Close onClick={() => this.props.toggle(false)} />
            </Flex>
          </PanelHeader>
          <Text style={{textAlign: 'center', marginBottom: '10px'}}>
            Hello fellow Streamliner! You do not have any current tasks. Please continue to your todo list to add more tasks or request a task from this awesome app!
          </Text>
        </Panel>
      </Overlay>
    </div>
  }
}
export default NoTaskModal
