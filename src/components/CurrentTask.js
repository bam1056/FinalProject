import React, { Component } from 'react'
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
  // componentDidMount () {
  //   this.initializeTimer()
  // }
  //
  // initializeTimer = () => {
  //   let endtime = Date.parse(new Date()) + this.props.currentTask.estimated_duration * 60000
  //   this.getTimeRemaining(endtime)
  //   this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
  // }

  startTimer = (e, time) => {
    if (e.target.disabled) return 0
    e.target.disabled = true
    let endtime = Date.parse(new Date()) + this.props.currentTask.estimated_duration * 60000
    this.getTimeRemaining(endtime)
    this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
  }

  // pauseTimer = (e) => {
  //   e.persist()
  //   if (!this.state.paused) {
  //     let time = Date.parse(new Date())
  //     this.setState({paused: true, clockTime: time})
  //     clearInterval(this.interval)
  //   } else {
  //     this.interval = setInterval(() => { this.getTimeRemaining(this.state.clockTime) }, 1000)
  //     this.setState({paused: false})
  //   }
  // }

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

  changeColor = (e) => {
    e.target.style.color = '#61CEED'
  }

  restoreColor = (e) => {
    e.target.style.color = '#006494'
  }

  render () {
    const { hours, minutes, seconds } = this.state
    const clockStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const outBoxStyle = {
      backgroundColor: '#61CEED',
      height: '75px',
      width: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const inBoxStyle = {
      backgroundColor: '#006494',
      color: '#61CEED',
      height: '65px',
      width: '85%',
      fontSize: '2em',
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
      <div style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '25px auto'}}>
        <Flex align='center' justify='center' col={4}>
          <div style={outBoxStyle}>
            <div style={inBoxStyle}>
              {hours}
            </div>
          </div>:
          <div style={outBoxStyle}>
            <div style={inBoxStyle}>
              {minutes}
            </div>
          </div>:
          <div style={outBoxStyle}>
            <div style={inBoxStyle}>
              {seconds}
            </div>
          </div>
        </Flex>
      </div>
      <div className='clock' style={clockStyle}>
        <Flex
          align='center'
          justify='space-between'
          wrap
          style={{width: '200px', border: '2px solid #006494', padding: '15px'}}
          >
          <FontAwesome
            className='fa-play' name='play' size='2x' style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.startTimer}
            onMouseOver={this.changeColor}
            onMouseLeave={this.restoreColor}
            />
          <FontAwesome
            className='fa-pause'
            name='pause'
            size='2x'
            style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.pauseTimer}
            onMouseOver={this.changeColor}
            onMouseLeave={this.restoreColor}
            />
          <FontAwesome
            className='fa-stop'
            name='stop'
            size='2x'
            style={{backgroundColor: 'white', color: '#006494'}}
            onClick={this.stopTimer}
            onMouseOver={this.changeColor}
            onMouseLeave={this.restoreColor}
            />
        </Flex>
      </div>
    </div>
  }
}
export default CurrentTask
