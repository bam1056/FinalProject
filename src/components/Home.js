import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import { Button, Heading, Text, Space } from 'rebass'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signIn: false,
      signUp: false,
      userName: '',
      userId: ''
    }
    if (this.props.location.query.token) {
      this.state.token = this.props.location.query.token
      window.sessionStorage.setItem('token', this.props.location.query.token)
      this.props.setUser(this.props.location.query.user_name)
      console.log(this.state.token, this.props.userName)
    }
  }

  static propTypes = {
    userName: React.PropTypes.string,
    userId: React.PropTypes.number,
    setUser: React.PropTypes.func,
    location: React.PropTypes.object
  }

  componentDidMount () {
    const head = document.querySelector('.head1')
    head.style.display = 'none'
    if (window.sessionStorage.token) browserHistory.push('/get-task')
  }

  componentWillUnmount () {
    const head = document.querySelector('.head1')
    head.style.display = 'block'
  }

  handleAuthorization = () => {
    window.location.assign('https://sleepy-mountain-24094.herokuapp.com/oauth2authorize')
  }

  render () {
    const homeStyle = {
      backgroundColor: '#006494',
      minHeight: `40vh`,
      minWidth: '100%'
    }
    const headingStyle = {
      textAlign: 'center',
      margin: '-60px auto 0 auto',
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
          <div className='train' />
        </Flex>
      </div>
      <div className='signIn'>
        <Heading
          children='Welcome to StreamLine'
          style={headingStyle} />
        <Text style={{margin: '100px 10px 25px 10px', textAlign: 'center', fontFamily: 'Roboto', fontSize: '1.25em'}}>
          At StreamLine, we know your time is valuable. Let us help you manage it.
        </Text>
        <Flex
          justify='center'
          align='center'
          >
          <Button
            className='auth-button'
            style={{marginTop: '25px', boxShadow: '2px 2px 2px #006498', backgroundColor: '#006494'}}
            onClick={this.handleAuthorization}
            >
            <Flex
              align='center'
              justify='center'
              >
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
    </div>
  }
}
export default Home
