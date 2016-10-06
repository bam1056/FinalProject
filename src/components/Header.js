import React, { Component } from 'react'
import {
  Dropdown,
  DropdownMenu,
  Button,
  NavItem,
  Arrow,
  Base,
  Space
} from 'rebass'
import { Flex } from 'reflexbox'
import { Link, browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }
  static propTypes = {
    setUser: React.PropTypes.func
  }

  showDropDown = (event) => {
    this.setState({open: true})
  }

  dismissDropDown = (event) => {
    console.log('DISMISS')
    this.setState({open: false})
  }

  signOut = () => {
    window.sessionStorage.removeItem('userId')
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('token')
    browserHistory.push('/')
  }

  render () {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '75px',
      marginTop: '10px'
    }
    const settingStyle = {
      backgroundColor: '#006494',
      color: 'white',
      marginRight: '15px',
      fontSize: '1.4em',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '10px',
      fontWeight: 'normal'
    }

    const spanStyle = {
      fontFamily: 'Roboto',
      fontWeight: 'light'
    }

    return <div className='head1'>
      <Base
        backgroundColor='#006494'
        color='white'
        style={baseStyle}
        >
        <Flex col={10} justify='space-between' align='center'>
          <Dropdown>
            <Button
              backgroundColor='#006494'
              color='white'
              inverted
              rounded
              onMouseEnter={this.showDropDown}
              style={{fontFamily: 'FontAwesome', fontWeight: 'light', fontSize: '1.4em'}}
              >
              <span style={spanStyle}>Menu</span>
              <Arrow direction='down' />
            </Button>
            <DropdownMenu
              open={this.state.open}
              onMouseLeave={this.dismissDropDown}
              >
              <NavItem
                to='/'
                is={Link}
                children='Home'
                onTouchStart={() => setTimeout(this.dismissDropDown, 300)}
                />
              <NavItem
                to='/contact'
                is={Link}
                children='Contact Us'
                onTouchStart={() => setTimeout(this.dismissDropDown, 300)}
                />
              <NavItem
                to='/about'
                is={Link}
                children='About Us'
                onTouchStart={() => setTimeout(this.dismissDropDown, 300)}
                />
              <NavItem
                to='/profile'
                is={Link}
                children='Profile'
                onTouchStart={() => setTimeout(this.dismissDropDown, 300)}
                />
              <NavItem
                children='SignOut'
                onTouchStart={this.signOut}
                />
            </DropdownMenu>
          </Dropdown>
          <div className='headlogo' />
          <FontAwesome
            className='fa fa-cog'
            name='cog'
            style={settingStyle}
            onClick={() => browserHistory.push('/settings')}
            ><Space x={2} /><span style={spanStyle}>Settings</span></FontAwesome>
        </Flex>
      </Base>
    </div>
  }
}
export default Header
