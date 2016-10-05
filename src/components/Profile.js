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
        mt={2}
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
            src='http://media.gettyimages.com/photos/shouting-mixed-race-businessman-picture-id136801997' style={{maxWidth: 150}}
            />
          <Heading
            level={2}
            size={3}
            style={{fontFamily: 'Raleway', fontSize: '2em'}}
            >
            {this.props.userName}
          </Heading>
          <Panel style={{fontFamily: 'Roboto'}}>
            <Text>
              <strong>Email:</strong> <small>example@email.com</small>
            </Text>
          </Panel>
          <Panel style={{fontFamily: 'Roboto'}}>
            <Text>
              <strong>Company:</strong> <small>My Favorite Company, LLC</small>
            </Text>
          </Panel>
          <Panel style={{fontFamily: 'Roboto'}}>
            <Text>
              <strong>Bio:</strong> <small>A funloving person with a love for all things code related</small>
            </Text>
          </Panel>
        </Card>
      </Box>
    </div>
  }
}
export default Profile
