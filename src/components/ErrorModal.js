import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import { browserHistory } from 'react-router'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Text,
  Button
} from 'rebass'

class ErrorModal extends Component {
  static propTypes = {
    toggleErrorModal: React.PropTypes.func,
    error: React.PropTypes.bool,
    userName: React.PropTypes.string
  }

  render () {
    const overlayStyle = {
      width: '75vw'
    }
    return <div className='errorModal'>
      <Overlay
        style={overlayStyle}
        open={this.props.error}
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
              <Close onClick={() => this.props.toggleErrorModal(false)} />
            </Flex>
          </PanelHeader>
          <Text style={{textAlign: 'center', marginBottom: '10px'}}>
            Hey {this.props.userName}! Your TODO list doesn't include a task that fits in the selected time frame. Please select a longer block of time or consider adding some new tasks to your TODO list.
          </Text>
          <Button
            onClick={() => browserHistory.push('/todolist')}
            style={{width: '45%', margin: '3px 5px'}}
            >
            Go To TODO list
          </Button>
          <Button
            onClick={() => this.props.toggleErrorModal(false)}
            style={{width: '45%', margin: '3px 5px'}}
            >
            New Duration
          </Button>
        </Panel>
      </Overlay>
    </div>
  }
}
export default ErrorModal
