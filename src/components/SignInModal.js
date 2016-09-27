import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import { browserHistory } from 'react-router'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Input,
  Button
} from 'rebass'

class SignInModal extends Component {
  constructor () {
    super()
    this.state = {
      userName: ''
    }
  }

  static propTypes = {
    setUser: React.PropTypes.func,
    toggleOverlay: React.PropTypes.func,
    signIn: React.PropTypes.bool
  }

  handleClick = (event) => {
    window.fetch('https://sleepy-mountain-24094.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          name: this.state.userName
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      this.props.setUser(data.id, data.name)
      this.props.toggleOverlay('in', false)
      browserHistory.push('/get-task')
    })
  }

  setName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render () {
    return <div className='modal signIn'>
      <Overlay
        open={this.props.signIn}
        dark
        >
        <Panel theme='secondary'>
          <PanelHeader>
            <Flex
              align='center'
              justify='space-between'
              col={12}
              >
              Welcome Returning User
              <Close onClick={() => this.props.toggleOverlay('in', false)} />
            </Flex>
          </PanelHeader>
          <Input
            key='Username'
            placeholder='Username'
            label='Username'
            name='Username'
            onChange={this.setName}
            />
          <Button onClick={this.handleClick}>
            Sign In
          </Button>
        </Panel>
      </Overlay>
    </div>
  }
}
export default SignInModal
