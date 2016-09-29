import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import staff from './staff.json'
import { Avatar, Heading, Text } from 'rebass'

class About extends Component {
  render () {
    const staffCards = staff.staff.map((staff, i) => {
      return <Box flex flexColumn key={i} style={{width: '30%', margin: '5px 5px'}}>
        <Box flexColumn flex align='center' justify='center'>
          <Avatar circle size={70} src={staff.photoUrl} />
          <Heading>{staff.name}</Heading>
        </Box>
        <Text>Personal Quote: {staff.quote}</Text>
        <Text>Skills:<ul>{staff.skills.map((skill, j) => <li key={j}>{skill}</li>)}</ul></Text>
      </Box>
    })
    return <div>
      <Flex flex wrap align='center' justify='center'>
        {staffCards}
      </Flex>
    </div>
  }
}
export default About
