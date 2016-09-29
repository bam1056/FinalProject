import React, { Component } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import { Flex } from 'reflexbox'
import { Button, Heading, Text } from 'rebass'
import { browserHistory } from 'react-router'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      signIn: false,
      signUp: false,
      userName: '',
      userId: ''
    }
  }
  componentWillMount () {
    if (window.sessionStorage.userName) browserHistory.push('/get-task')
  }
  static propTypes = {
    userName: React.PropTypes.string,
    userId: React.PropTypes.number,
    setUser: React.PropTypes.func
  }

  toggleOverlay = (modal, bool) => {
    switch (modal) {
      case 'in': this.setState({signIn: false})
        break
      case 'up': this.setState({signUp: false})
        break
      default: console.error('Error In Modal Tasks')
    }
  }

  render () {
    const homeStyle = {
      backgroundImage: `url('http://wallpapercave.com/wp/a1hexCn.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: `40vh`,
      minWidth: '100%'
    }
    const h1Style = {
      textShadow: '2px 2px 2px white',
      margin: '5px 0'
    }

    return <div className='landing'>
      <div className='home' style={homeStyle}>
        <Flex
          align='center'
          justify='center'
          flexColumn
        >
          <h1 style={h1Style} className='welcome'>Welcome To StreamLine</h1>
          <h6 style={h1Style} className='manage'>Manage Your Free Time</h6>
          <div className='train' />
        </Flex>
      </div>
      <div className='signIn'>
        <Heading
          children='Welcome to StreamLine...'
          style={{textAlign: 'center', margin: '10px auto'}} />
        <hr />
        <Text style={{margin: '0 25px', textAlign: 'center'}}>
          At StreamLine, we know your time is valuable. Let us help you manage it.
        </Text>
        <Flex
          align='center'
          justify='center'
          flexColumn
          >
          <Button
            backgroundColor='black'
            color='white'
            style={{margin: '10px'}}
            onClick={() => this.setState({signIn: true}, console.log('click', this.state.signIn))}
          >
            Sign In
          </Button>
          OR
          <Button
            backgroundColor='black'
            color='white'
            style={{margin: '10px'}}
            onClick={() => this.setState({signUp: true})}
          >
            Sign Up
          </Button>
        </Flex>
      </div>
      <SignInModal setUser={this.props.setUser} signIn={this.state.signIn} toggleOverlay={this.toggleOverlay} />
      <SignUpModal setUser={this.props.setUser} signUp={this.state.signUp} toggleOverlay={this.toggleOverlay} />
    </div>
  }
}
export default Home
