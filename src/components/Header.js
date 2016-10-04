import React, { Component } from 'react'
import { Dropdown, DropdownMenu, Button, NavItem, Arrow, Base } from 'rebass'
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
    this.setState({open: false})
  }

  signOut = () => {
    window.sessionStorage.removeItem('userId')
    window.sessionStorage.removeItem('userName')
    browserHistory.push('/')
  }

  render () {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '75px',
      marginTop: '10px'
    }
    return <div className='head1'>
      <Base
        backgroundColor='#006494'
        color='white'
        style={baseStyle}
        >
        <Dropdown>
          <Button
            backgroundColor='#006494'
            color='white'
            inverted
            rounded
            onMouseEnter={this.showDropDown}
            >
            Menu
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
              />
            <NavItem
              to='/contact'
              is={Link}
              children='Contact Us'
              />
            <NavItem
              to='/about'
              is={Link}
              children='About Us'
              />
          </DropdownMenu>
        </Dropdown>
        <div className='headlogo' />
        <FontAwesome
          className='fa fa-cog' name='cog' style={{backgroundColor: '#006494', color: 'white', marginRight: '15px'}} onClick={() =>
          browserHistory.push('/settings')}
          />
      </Base>
    </div>
  }
}
export default Header
