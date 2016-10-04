import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Input,
  Textarea,
  Select,
  Button
} from 'rebass'

class AddEditTaskModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.task ? props.task.title : '',
      description: props.task ? props.task.description : '',
      estimated_duration: props.task ? props.task.estimated_duration : 0,
      deadline: props.task ? props.task.deadline : ''
    }
  }

  static propTypes = {
    toggleOverlay: React.PropTypes.func,
    mode: React.PropTypes.string,
    task: React.PropTypes.object,
    overlay: React.PropTypes.bool,
    sendTask: React.PropTypes.func,
    userId: React.PropTypes.number,
    userName: React.PropTypes.string
  }

  getTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  getDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  closeTaskModal = () => {
    this.props.toggleOverlay(false)
  }

  handleClick = () => {
    let duration = document.querySelector("select[name='duration']")
    console.log('SELECT', duration.value)
    this.setState({
      estimated_duration: duration.value
    }, () => this.props.mode === 'add' ? this.addTask() : this.editTask())
    this.props.toggleOverlay(false)
  }

  addTask = () => {
    const { title, description, estimated_duration } = this.state
    console.log('ADD TASK', title, description, estimated_duration)
    window.fetch(' https://sleepy-mountain-24094.herokuapp.com/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        title: title,
        description: description,
        estimated_duration: estimated_duration
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        title: '',
        description: '',
        estimated_duration: 0,
        deadline: ''
      }, () => this.props.sendTask(data))
    })
  }

  editTask = () => {
    const { title, description, user_id, estimated_duration } = this.state
    console.log('EDIT TASK', title, description, user_id, estimated_duration)
    window.fetch(`https://sleepy-mountain-24094.herokuapp.com/tasks/${this.props.task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({
        title: title,
        description: description,
        user_id: this.props.userId,
        estimated_duration: estimated_duration
      })
    })
    .then(res => res.json())
    .then(data => {
      this.props.sendTask(data)
      this.setState({
        title: '',
        description: '',
        estimated_duration: 0,
        deadline: ''
      })
    })
  }

  render () {
    let modal
    console.log('NEW TEST', this.props, this.state)
    const selectOptions = [
      {children: '5m', value: 5},
      {children: '10m', value: 10},
      {children: '15m', value: 15},
      {children: '20m', value: 20},
      {children: '25m', value: 25},
      {children: '30m', value: 30},
      {children: '45m', value: 45},
      {children: '1h', value: 60},
      {children: '1h15m', value: 75},
      {children: '1h 30m', value: 90},
      {children: '1h 45m', value: 105},
      {children: '2h', value: 120}
    ]
    switch (this.props.mode) {
      case 'add': modal = (
        <div className='task-modal add'>
          <Overlay
            open={this.props.overlay}
            dark
            >
            <Panel theme='secondary'>
              <PanelHeader>
                <Flex
                  align='center'
                  justify='space-between'
                  col={12}
                  >
                  ADD TASK
                  <Close onClick={this.closeTaskModal} />
                </Flex>
              </PanelHeader>
              <Input
                key='Title'
                placeholder='Title'
                label='Title'
                name='Title'
                value={this.state.title}
                onChange={this.getTitle}
                />
              <Textarea
                placeholder='Description'
                label='Description'
                name='Description'
                value={this.state.description}
                onChange={this.getDescription}
                />
              <Select
                label='Estimated Time for Task'
                message='Estimated Time for Task'
                name='duration'
                defaultValue='5'
                options={selectOptions}
                rounded
              />
              <Button onClick={this.handleClick}>
                ENTER TASK
              </Button>
            </Panel>
          </Overlay>
        </div>
      )
        break
      case 'edit': modal = (
        <div className='task-modal edit'>
          <Overlay
            open={this.props.overlay}
            dark
            >
            <Panel theme='primary'>
              <PanelHeader>
                <Flex
                  align='center'
                  justify='space-between'
                  col={12}
                  >
                  EDIT TASK
                  <Close onClick={this.closeTaskModal} />
                </Flex>
              </PanelHeader>
              <Input
                key='Title'
                placeholder={this.props.task.title}
                label='Title'
                name='Title'
                value={this.state.title}
                onChange={this.getTitle}
                />
              <Textarea
                placeholder={this.props.task.description}
                label='Description'
                name='Description'
                value={this.state.description}
                onChange={this.getDescription}
                />
              <Select
                label='Estimated Time for Task2'
                message='Estimated Time for Task'
                name='duration'
                defaultValue={this.props.task.estimated_duration}
                options={selectOptions}
                rounded
              />
              <Button onClick={this.handleClick}>
                EDIT TASK
              </Button>
            </Panel>
          </Overlay>
        </div>
      )
        break
      default: modal = null
    }
    return <div>{modal}</div>
  }
}
export default AddEditTaskModal
