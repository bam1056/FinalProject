import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Input,
  Button
} from 'rebass'

class SignUpModal extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      email: '',
      password: ''
    }
  }

  static propTypes = {
    setUser: React.PropTypes.func,
    toggleOverlay: React.PropTypes.func,
    signUp: React.PropTypes.bool
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
      this.props.toggleOverlay('up', false)
    })
  }

  setName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  setEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  setPass = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    return <div className='modal signUp'>
      <Overlay
        open={this.props.signUp}
        dark
        >
        <Panel theme='secondary'>
          <PanelHeader>
            <Flex
              align='center'
              justify='space-between'
              col={12}
              >
              Welcome New User!
              <Close onClick={() => this.props.toggleOverlay('up', false)} />
            </Flex>
          </PanelHeader>
          <Input
            key='Username2'
            placeholder='Username'
            label='Username'
            name='Username'
            onChange={this.setName}
            />
          <Input
            key='Email'
            placeholder='Email'
            label='Email'
            name='Email'
            onChange={this.setEmail}
            />
          <Input
            key='Password'
            placeholder='Password'
            label='Password'
            name='Password'
            onChange={this.setPass}
            />
          <Button onClick={this.handleClick}>
            Sign Up
          </Button>
        </Panel>
      </Overlay>
    </div>
  }
}
export default SignUpModal
