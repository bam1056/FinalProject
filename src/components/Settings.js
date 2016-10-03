import React, { Component } from 'react'
import { Select } from 'rebass'
import { Flex } from 'reflexbox'

class Settings extends Component {

  render () {
    const headStyle = {
      fontFamily: 'Raleway',
      fontSize: '3em'
    }

    return <Flex
      align='center'
      justify='center'
      col={6}
      style={{width: '300px', margin: '25px auto'}}
      >
      <Flex
        align='flex-start'
        justify='center'
        flexColumn col={8}
        >
        <h1 style={headStyle}>Settings</h1>
        <Select
          style={{width: '200px'}}
          label='DownTime'
          name='lag'
          message='How much time do you want to schedule between tasks?'
          options={[
            {children: '5', value: 5},
            {children: '10', value: 10},
            {children: '15', value: 15},
            {children: '20', value: 20},
            {children: '25', value: 25},
            {children: '30', value: 30}]}
          rounded
          />
        <Select
          style={{width: '200px'}}
          label='Application Color Theme'
          name='theme'
          message='Color theme for app and dialog boxes'
          options={[
            {children: 'Primary', value: '#006494'},
            {children: 'Secondary', value: '#006123'},
            {children: 'Formal', value: 'black'}]}
          rounded
          />
        <Select
          style={{width: '200px'}}
          label='Language'
          name='language'
          message='Language preference'
          options={[
            {children: 'English', value: 'english'},
            {children: 'Spanish', value: 'spanish'},
            {children: 'Chinese', value: 'chinese'}]}
          rounded
          />
      </Flex>
    </Flex>
  }
}
export default Settings
