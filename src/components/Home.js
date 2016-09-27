import React, { Component } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import { Flex } from 'reflexbox'
import { Button, Heading, Text } from 'rebass'

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

  // setUser = (id, name) => {
  //   this.setState({
  //     userName: name,
  //     userId: id
  //   })
  // }

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
    const trainStyle = {
      backgroundImage: `url(http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-transport-travel/036494-3d-transparent-glass-icon-transport-travel-transportation-train4.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100px',
      width: '100px',
      transform: 'rotateY(180deg)'
    }
    return <div className='landing'>
      <div className='home' style={homeStyle}>
        <Flex
          align='center'
          justify='center'
          flexColumn
        >
          <h1 style={h1Style}>StreamLine</h1>
          <h6 style={h1Style}>Optimize Your Time</h6>
          <div style={trainStyle} />
        </Flex>
      </div>
      <div className='signIn'>
        <Heading
          children='SignIn or SignUp'
          style={{textAlign: 'center', margin: '10px auto'}} />
        <hr />
        <Text style={{margin: '0 25px', textAlign: 'center'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            onClick={() => this.setState({signIn: true})}
          >
            Sign In
          </Button>
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
