import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import FontAwesome from 'react-fontawesome'

class CurrentTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      remainingSeconds: props.currentTask.estimated_duration * 60,
      timer: 'play'
    }
  }
  static propTypes = {
    currentTask: React.PropTypes.object,
    allTasks: React.PropTypes.array
  }

  startTimer = (e) => {
    this.setState({timer: 'pause'})
    this.interval = setInterval(() => {
      const newRemainingSeconds = this.state.remainingSeconds - 1
      this.setState({remainingSeconds: newRemainingSeconds}, () => {
        if (this.state.remainingSeconds <= 0) this.pauseTimer()
      })
    }, 1000)
  }

  pauseTimer = (e) => {
    this.setState({timer: 'play'})
    clearInterval(this.interval)
  }

  stopTimer = (e) => {
    this.setState({remainingSeconds: this.props.currentTask.estimated_duration * 60})
    e.persist()
    e.target.parentElement.childNodes[0].disabled = false
    clearInterval(this.interval)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  get seconds () {
    return ('0' + Math.floor(this.state.remainingSeconds % 60).toString()).slice(-2)
  }

  get minutes () {
    return ('0' + Math.floor((this.state.remainingSeconds / 60) % 60).toString()).slice(-2)
  }

  get hours () {
    return ('0' + Math.floor((this.state.remainingSeconds / (60 * 60)) % 24)).slice(-2)
  }

  changeColor = (e) => {
    e.target.style.color = '#61CEED'
  }

  restoreColor = (e) => {
    e.target.style.color = '#006494'
  }

  render () {
    let actionButton
    switch (this.state.timer) {
      case 'play': actionButton =
        <FontAwesome
          className='fa-play'
          name='play'
          size='2x' style={{backgroundColor: 'white', color: '#006494', marginLeft: '5px'}}
          onClick={this.startTimer}
          onMouseOver={this.changeColor}
          onMouseLeave={this.restoreColor}
          />
        break
      case 'pause' : actionButton = <FontAwesome
        className='fa-pause'
        name='pause'
        size='2x'
        style={{backgroundColor: 'white', color: '#006494'}}
        onClick={this.pauseTimer}
        onMouseOver={this.changeColor}
        onMouseLeave={this.restoreColor}
        />
        break
    }

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
              {this.hours}
            </div>
          </div>:
          <div style={outBoxStyle}>
            <div style={inBoxStyle}>
              {this.minutes}
            </div>
          </div>:
          <div style={outBoxStyle}>
            <div style={inBoxStyle}>
              {this.seconds}
            </div>
          </div>
        </Flex>
      </div>
      <div className='clock' style={clockStyle}>
        <Flex
          align='center'
          justify='center'
          wrap
          style={{width: '60px', height: '60px', border: '2px solid #006494', borderRadius: '50%'}}
          >
          {actionButton}
        </Flex>
      </div>
    </div>
  }
}
export default CurrentTask
