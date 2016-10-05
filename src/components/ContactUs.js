import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import { Text, Space } from 'rebass'

class Contact extends Component {
  render () {
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '25px',
      flexWrap: 'wrap'
    }
    return <div style={mainStyle} className='contact container'>
      <Flex flexColumn col={12} wrap>
        <h1 style={{fontFamily: 'Raleway'}}
        >Contact Us<Space x={2} /><small>We appreciate your patronage</small><hr />
        </h1>
        <Text style={{fontFamily: 'Roboto'}}>
          Thanks for your interest in StreamLine. You can reach our founders in the following ways:
        </Text>
        <h3 style={{fontFamily: 'Raleway'}}>Brett Macy:</h3>
        <a href='mailto:brett.macy.codes@gmail.com'>Email</a> <br />
        <a href='https://github.com/bam1056'>GitHub</a>
        <h3 style={{fontFamily: 'Raleway'}}>Alan Kebert:</h3>
        <a href='mailto:adkebert@yahoo.com'>Email</a> <br />
        <a href='https://github.com/ADKebert'>GitHub</a>
      </Flex>
    </div>
  }
}
export default Contact
