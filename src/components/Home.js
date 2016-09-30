import React, { Component } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import { Flex } from 'reflexbox'
import { Button, Heading, Text, Space, Block } from 'rebass'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'

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
  componentDidMount () {
    const head = document.querySelector('.head1')
    head.style.display = 'none'
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
      backgroundColor: '#006494',
      minHeight: `40vh`,
      minWidth: '100%'
    }
    const headingStyle = {
      textAlign: 'center',
      margin: '-100px auto 0 auto',
      fontFamily: 'Raleway',
      fontSize: '2.5em',
      color: '#F9F2FC',
      textShadow: '1px 1px 1px #006494'
    }

    return <div className='landing'>
      <div className='home' style={homeStyle}>
        <Flex
          align='center'
          justify='center'
          flexColumn
        >
          {/* <h1 style={h1Style} className='welcome'>Welcome To StreamLine</h1>
          <h6 style={h1Style} className='manage'>Manage Your Free Time</h6> */}
          <div className='train' />
        </Flex>
      </div>
      <div className='signIn'>
        <Heading
          children='Welcome to StreamLine'
          style={headingStyle} />
        <Text style={{margin: '100px 0 25px 0', textAlign: 'center', fontFamily: 'Roboto', fontSize: '1.25em'}}>
          At StreamLine, we know your time is valuable. Let us help you manage it.
        </Text>
        <Flex justify='center' align='center'>
          <Button onClick={() => window.location.assign('https://sleepy-mountain-24094.herokuapp.com/oauth2authorize')}>
            <Flex align='center' justify='center'>
              <FontAwesome
                className='fa-google'
                name='fa-google'
                size='2x'
                />
              <Space x={2} />
              Sign In With Google
            </Flex>
          </Button>
        </Flex>
      </div>
      <SignInModal setUser={this.props.setUser} signIn={this.state.signIn} toggleOverlay={this.toggleOverlay} />
      <SignUpModal setUser={this.props.setUser} signUp={this.state.signUp} toggleOverlay={this.toggleOverlay} />
    </div>
  }
}
export default Home
