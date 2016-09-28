import React, { Component } from 'react'
import { Box } from 'reflexbox'
import { Text } from 'rebass'

class About extends Component {
  render () {
    return <div>
      <Box flex flexColumn align='center' justify='center'>
        <Text>
          Thank you for your interest in StreamLine.
          We are a young company, interested in improving our customers lives through programming.
        </Text>
        <Text>
          What are you doing that requires our product?
        </Text>
      </Box>
    </div>
  }
}
export default About
