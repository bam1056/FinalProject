import React, { Component } from 'react'
import { Button } from 'rebass'
import { Flex } from 'reflexbox'
import FontAwesome from 'react-fontawesome'

class CurrentTask extends Component {
  constructor () {
    super()
    this.state = {
      seconds: '00',
      minutes: '00',
      hours: '00',
      days: 0,
      total: 0,
      clockTime: 0
    }
  }
  static propTypes = {
    currentTask: React.PropTypes.object,
    allTasks: React.PropTypes.array
  }
  componentDidMount () {
    this.initializeTimer()
  }

  initializeTimer = () => {
    let endtime = Date.parse(new Date()) + this.props.currentTask.estimated_duration * 60000
    this.getTimeRemaining(endtime)
    this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
    this.setState({ clockTime: endtime })
  }

  startTimer = (e) => {
    e.target.disabled = true
    let endtime = Date.parse(new Date()) + this.props.currentTask.estimated_duration * 60000
    this.getTimeRemaining(endtime)
    this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
    this.setState({ clockTime: endtime })
  }

  stopTimer = (e) => {
    e.persist()
    e.target.parentElement.childNodes[0].disabled = false
    clearInterval(this.interval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  getTimeRemaining = (endtime) => {
    let t = endtime - Date.parse(new Date())
    let seconds = Math.floor((t / 1000) % 60).toString()
    let minutes = Math.floor((t / 1000 / 60) % 60)
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    let days = Math.floor(t / (1000 * 60 * 60 * 24))
    let newS = ('0' + seconds).slice(-2)
    let newM = ('0' + minutes).slice(-2)
    let newH = ('0' + hours).slice(-2)
    this.setState({
      total: t,
      days: days,
      hours: newH,
      minutes: newM,
      seconds: newS
    })
  }

  render () {
    const { hours, minutes, seconds } = this.state
    const clockStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return <div className='task'>
      <div className='task-heading' style={{textAlign: 'center'}}>
        <h1 style={{'marginTop': '60px', fontFamily: 'Raleway'}}>
          {this.props.currentTask.title}
        </h1>
      </div>
      <h3 style={{textAlign: 'center', fontFamily: 'Roboto'}}>{this.props.currentTask.description}</h3>
      <div style={{textAlign: 'center'}}>{hours}:{minutes}:{seconds}</div>
      <div className='clock' style={clockStyle}>
        <Flex align='center' justify='space-between' wrap style={{width: '200px'}}>
          {/* <Button onClick={this.startTimer} className='test'>Start Timer</Button> */}
          <FontAwesome
            className='fa-play' name='play' size='2x' style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.startTimer}
          />
          <FontAwesome
            className='fa-pause' name='pause' size='2x' style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.pauseTimer}
          />
          <FontAwesome
            className='fa-stop' name='stop' size='2x' style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.stopTimer}
          />
        </Flex>
        {/* <Flex>
          {this.props.allTasks.map(task =>
            <p key={task.id}>{task.title}</p>)}
        </Flex> */}
      </div>
    </div>
  }
}
export default CurrentTask
