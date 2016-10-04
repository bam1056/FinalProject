import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import { Text, Space } from 'rebass'

class Contact extends Component {
  render () {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', flexWrap: 'wrap'}}className='contact'>
      <Flex flexColumn col={10} wrap>
        <h1 style={{
          fontFamily: 'Raleway'
        }}
        >Contact Us<Space x={2} /><small>We appreciate your patronage</small><hr />
        </h1>
        <Text style={{fontFamily: 'Roboto'}}>
          Thanks for your interest in StreamLine. You can reach our founders in the following ways:
        </Text>
        <h3 style={{
          fontFamily: 'Raleway'
        }}>Brett Macy:</h3> brett.macy.codes@gmail.com <br />
        <a href='https://github.com/bam1056'>GitHub</a>
        <h3 style={{
          fontFamily: 'Raleway'
        }}>Alan Kebert:</h3>
        alan.kebert@gmail.com <br />
        <a href='https://github.com/ADKebert'>GitHub</a>

      </Flex>
    </div>
  }
}
export default Contact
