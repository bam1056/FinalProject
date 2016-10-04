import React, { Component } from 'react'
import Header from './Header'
import NoTaskModal from './NoTaskModal'
import { Footer } from 'rebass'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'
import { Flex } from 'reflexbox'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userName: window.sessionStorage.getItem('userName'),
      currentTask: window.sessionStorage.currentTaskList ? JSON.parse(window.sessionStorage.getItem('currentTaskList'))[0] : {},
      allTasks: []
    }
  }
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }

  setUser = (name) => {
    window.sessionStorage.setItem('userName', name)
    this.setState({
      userName: name
    })
  }

  getAssignedTask = (taskList) => {
    window.sessionStorage.setItem('currentTaskList', JSON.stringify(taskList))
    this.setState({
      currentTask: taskList[0],
      allTasks: taskList
    }, () => { return this.state.currentTask })
  }

  toggleNoTasksModal = (bool) => {
    this.setState({taskModal: bool})
  }

  render () {
    const style = {
      backgroundColor: '#006494',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '0',
      right: '0',
      left: '0',
      minWidth: '100%',
      margin: 0
    }
    return <div>
      <Header />
      {this.props.children && React.cloneElement(this.props.children, {setUser: this.setUser, userName: this.state.userName, userId: this.state.userId, getAssignedTask: this.getAssignedTask, currentTask: this.state.currentTask, allTasks: this.state.allTasks})}
      <Footer
        style={style}
        >
        <Flex
          align='center'
          justify='space-between'
          wrap
          col={10}
          >
          <FontAwesome
            style={{display: 'flex', flexDirection: 'column', margin: '-15px 10px 0 10px', fontSize: '1.35em'}} className='list'
            name='list'
            onClick={() => browserHistory.push('/todolist')}
            >ToDoList
          </FontAwesome>
          <FontAwesome
            style={{display: 'flex', flexDirection: 'column', margin: '-15px 10px 0 10px', fontSize: '1.35em'}} className='train2' name='train'
            onClick={() => browserHistory.push('/get-task')}
            >GetTask
          </FontAwesome>
          <FontAwesome
            style={{display: 'flex', flexDirection: 'column', margin: '-15px 10px 0 10px', fontSize: '1.35em'}} className='clockFoot' name='clock-o'
            onClick={() => {
              if (this.state.currentTask === undefined) {
                this.toggleNoTasksModal(true)
                return 0
              } else browserHistory.push('/currentTask')
            }}
            >MyTask
          </FontAwesome>
        </Flex>
      </Footer>
      <NoTaskModal open={this.state.taskModal} toggle={this.toggleNoTasksModal} />
    </div>
  }
}
export default App
