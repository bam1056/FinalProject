import React, { Component } from 'react'
import { Select, Button } from 'rebass'
import { browserHistory } from 'react-router'
import ErrorModal from './ErrorModal'
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
    window.fetch(` https://sleepy-mountain-24094.herokuapp.com/tasks/scheduled?time_block=${duration.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => {
      this.props.getAssignedTask(data)
      console.log('these are tasks', data)
      if (data.length === 0) this.toggleErrorModal(true)
      else browserHistory.push('/currentTask')
    })
  }

  toggleErrorModal = (bool) => {
    this.setState({ error: bool })
  }

  render () {
    const mainStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
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
        textShadow: '2px 2px 2px white',
        fontFamily: 'Raleway',
        textAlign: 'center',
        padding: '10px'
      },
      h2: {
        textShadow: '2px 2px 2px white',
        fontFamily: 'Raleway'
      }
    }

    const selectOptions = [
      {children: '15m', value: 15},
      {children: '30m', value: 30},
      {children: '45m', value: 45},
      {children: '1h', value: 60},
      {children: '1h10m', value: 70},
      {children: '1h 30m', value: 90},
      {children: '2h', value: 120}
    ]

    return <div className='main' style={mainStyle}>
      <h1 style={hStyle.h1}>Ready to Work {this.props.userName}?</h1>
      <br />
      <div className='question' style={questionStyle}>
        <h3>How much</h3>
        <h2 style={hStyle.h2}>TIME</h2>
        <h3>do you have?</h3>
      </div>
      <div className='input-container'>
        <Select
          style={selectStyle}
          label=''
          message=''
          name='duration'
          options={selectOptions}
          rounded
          backgroundColor='white'
        />
        <Box
          flexColumn
          flex
          col={12}
          align='center'
          >
          <Button
            style={{backgroundColor: '#006494'}}
            children='StreamLine My Schedule'
            onClick={this.getTask}
            />
        </Box>
        <ErrorModal
          userName={this.props.userName}
          toggleErrorModal={this.toggleErrorModal}
          error={this.state.error}
          />
      </div>
    </div>
  }
}
export default AskForTask
