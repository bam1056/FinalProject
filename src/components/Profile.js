import React, { Component } from 'react'
import { Box } from 'reflexbox'
import {
  Card,
  CardImage,
  Heading,
  Text,
  Panel
} from 'rebass'

class Profile extends Component {
  static propTypes = {
    userName: React.PropTypes.string
  }
  render () {
    return <div className='profile'>
      <Box
        style={{}}
        mt={4}
        flex
        flexColumn
        align='center'
        justify='center'
        >
        <Card
          rounded
          width={300}
          >
          <CardImage
            src='https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png' style={{maxWidth: 150}}
            />
          <Heading
            level={2}
            size={3}
            >
            {this.props.userName}
          </Heading>
          <Panel>
            <Text>
              <strong>Email:</strong>
            </Text>
          </Panel>
          <Panel>
            <Text>
              <strong>Company:</strong>
            </Text>
          </Panel>
          <Panel>
            <Text>
              <strong>Bio:</strong>
            </Text>
          </Panel>
        </Card>
      </Box>
    </div>
  }
}
export default Profile
