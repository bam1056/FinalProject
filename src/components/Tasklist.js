import React, { Component } from 'react'
import { Panel, PanelHeader, PanelFooter, Text, ButtonCircle } from 'rebass'
import { Flex, Box } from 'reflexbox'
import Icon from 'react-geomicons'
import AddEditTaskModal from './AddEditTaskModal'
import FontAwesome from 'react-fontawesome'

class Tasklist extends Component {
  constructor () {
    super()
    this.state = {
      tasks: [],
      overlay: false
    }
  }

  static propTypes = {
    userName: React.PropTypes.string,
    userId: React.PropTypes.number
  }

  componentDidMount () {
    window.fetch(`https://sleepy-mountain-24094.herokuapp.com/tasks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }, () => console.log('Tasks', this.state.tasks))
  )
  }

  deleteTask (id) {
    window.fetch(`https://sleepy-mountain-24094.herokuapp.com/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window.sessionStorage.getItem('token')
      }
    })
    let copyOfTaskList = this.state.tasks.slice()
    let newTaskList = copyOfTaskList.filter(task => task.id !== id)
    this.setState({ tasks: newTaskList })
  }

  toggleOverlay = (bool) => {
    this.setState({overlay: bool})
  }

  editTask = (task) => {
    this.setState({
      mode: 'edit',
      currentlyEditedTask: task
    }, () => this.toggleOverlay(true))
  }

  addTask = () => {
    this.setState({
      overlay: true,
      mode: 'add'
    })
  }

  receiveTask = (task) => {
    console.log('RECEIVING NEW TASK', task)
    let copyOfTaskList = this.state.tasks.slice()
    copyOfTaskList.push(task)
    this.setState({ tasks: copyOfTaskList })
  }

  render () {
    const { tasks, currentlyEditedTask } = this.state
    let item
    const taskListStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95vw',
      margin: '0 auto'
    }

    const taskPanelStyle = {
      overflowY: 'auto',
      height: '60vh',
      margin: '0 auto',
      width: '300px'
    }

    item = tasks.map((task, i) => {
      return <Panel
        theme='primary'
        key={i}
        >
        <PanelHeader
          style={{backgroundColor: '#006494'}}
          >
          <Flex
            align='center'
            justify='space-between'
            col={12}
            >
            {task.title}
            <Box
              col={3}
              flex
              justify='space-between'
              >
              <ButtonCircle
                style={{marginRight: '3px'}}
                color='white'
                backgroundColor='#006494'
                onClick={() => this.editTask(task)}
                >
                <Icon name='compose' />
              </ButtonCircle>
              <ButtonCircle
                color='white'
                backgroundColor='#006494'
                onClick={() => this.deleteTask(task.id)}
                >
                <Icon name='trash' />
              </ButtonCircle>
            </Box>
          </Flex>
        </PanelHeader>
        <Text>{task.description}</Text>
        <PanelFooter>
          Estimated Time: {task.estimated_duration}min
        </PanelFooter>
      </Panel>
    })
    return <div className='tasklist' style={taskListStyle}>
      <Box
        flex
        align='center'
        justify='space-between'
        style={{width: '300px'}}
        col={10}
        >
        <h1 style={{fontFamily: 'Raleway'}}> TASKS </h1>
        <FontAwesome
          className='fa-plus-circle' name='plus-circle' size='2x' style={{backgroundColor: 'white', color: '#006494'}}
          onClick={() => this.addTask()}
        />
      </Box>
      <div className='task-panels' style={taskPanelStyle}>
        {item}
      </div>
      <AddEditTaskModal
        userName={this.props.userName}
        userId={this.props.userId}
        task={this.state.currentlyEditedTask}
        overlay={this.state.overlay}
        toggleOverlay={this.toggleOverlay}
        mode={this.state.mode}
        sendTask={this.receiveTask}
        key={currentlyEditedTask ? currentlyEditedTask.id : null}
        />
    </div>
  }
}
export default Tasklist
