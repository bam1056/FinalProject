import React, { Component } from 'react'
import { Flex } from 'reflexbox'

class Home extends Component {
  showMenu = () => {
    return null
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
    const trainStyle = {
      backgroundImage: `url(http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-transport-travel/036494-3d-transparent-glass-icon-transport-travel-transportation-train4.png)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100px',
      width: '100px',
      transform: 'rotateY(180deg)'
    }
    return <div className='home' style={homeStyle}>
      <Flex
        align='center'
        justify='center'
        flexColumn
      >
        <h1 style={h1Style}>StreamLine</h1>
        <h6 style={h1Style}>Maximize Your Time</h6>
        <div style={trainStyle} />
      </Flex>
    </div>
  }
}
export default Home
// Some possible component choices
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import IconButton from 'material-ui/IconButton'
// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
// {/* <MuiThemeProvider>
//   <AppBar
//     title='Main Menu'
//     onLeftIconButtonTouchTap={this.showMenu}
//     iconElementLeft={
//       <IconMenu
//         iconButtonElement={
//           <IconButton >
//             <MoreVertIcon />
//           </IconButton>
//         }
//         targetOrigin={{horizontal: 'left', vertical: 'top'}}
//         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//         >
//         <MenuItem primaryText='Home' />
//         <MenuItem primaryText='Main' />
//         <MenuItem primaryText='Sign out' />
//       </IconMenu>
//     }
//     />
// </MuiThemeProvider> */}
