import React, { Component } from 'react'
import { Select, Button } from 'rebass'
import { browserHistory } from 'react-router'
import { Box } from 'reflexbox'

class AskForTask extends Component {
  constructor () {
    super()
    this.state = {
      duration: 0
    }
  }
  static propTypes = {
    userId: React.PropTypes.number,
    userName: React.PropTypes.string,
    getAssignedTask: React.PropTypes.func
  }

  getTask = () => {
    let duration = document.querySelector("select[name='duration']")
    console.log('SELECT', duration.value)
    window.fetch(` https://sleepy-mountain-24094.herokuapp.com/tasks/scheduled?user_id=${this.props.userId}&time_block=${duration.value}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      this.props.getAssignedTask(data)
      browserHistory.push('/currentTask')
    })
  }

  render () {
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(http://il5.picdn.net/shutterstock/videos/14941777/thumb/1.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingBottom: '200px'
    }

    const selectStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }

    const questionStyle = {
      textAlign: 'center'
    }

    const hStyle = {
      h1: {
        fontSize: '2.5em',
        textShadow: '2px 2px 2px white'
      },
      h2: {
        textShadow: '2px 2px 2px white'
      }
    }

    return <div className='main' style={mainStyle}>
      <h1 style={hStyle.h1}>Ready to Work?</h1>
      <br />
      <div className='question' style={questionStyle}>
        <h3>How much</h3>
        <h2 style={hStyle.h2}>FREE TIME</h2>
        <h3>do you have?</h3>
      </div>
      <div className='input-container'>
        <Select
          style={selectStyle}
          label=''
          message=''
          name='duration'
          options={[{children: '15m', value: 15}, {children: '30m', value: 30}, {children: '45m', value: 45}, {children: '1h', value: 60}, {children: '1h 30m', value: 90}, {children: '2h', value: 120}]}
          rounded
          backgroundColor='white'
        />
        <Box flexColumn flex col={12} align='center'>
          <Button
            theme='secondary'
            children='Tell Me What To Do'
            onClick={this.getTask}
            />
        </Box>
      </div>
    </div>
  }
}
export default AskForTask
