import React, { Component } from 'react'
import Header from './Header'
import NoTaskModal from './NoTaskModal'
import { Footer, Space } from 'rebass'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'
import { Flex } from 'reflexbox'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userName: window.sessionStorage.getItem('userName'),
      currentTask: window.sessionStorage.currentTaskList ? JSON.parse(window.sessionStorage.getItem('currentTaskList'))[0] : undefined,
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
      position: 'fixed',
      bottom: '0',
      right: '0',
      left: '0',
      minWidth: '100%',
      margin: 0,
      height: '80px',
      paddingBottom: '16px'
    }

    const fontAwesomeStyle = {
      display: 'flex',
      flexDirection: 'column',
      margin: '-15px 10px 0 10px',
      fontSize: '1.35em',
      fontWeight: 'normal'
    }

    const spanStyle = {
      fontFamily: 'Roboto',
      marginTop: '7px'
    }

    return <div>
      <Header />
      <main style={{paddingBottom: '120px'}}>
        {this.props.children && React.cloneElement(this.props.children, {setUser: this.setUser, userName: this.state.userName, userId: this.state.userId, getAssignedTask: this.getAssignedTask, currentTask: this.state.currentTask, allTasks: this.state.allTasks})}
      </main>
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
            style={fontAwesomeStyle}
            className='list'
            name='list'
            onClick={() => browserHistory.push('/todolist')}
            ><span style={spanStyle}>ToDoList</span>
          </FontAwesome>
          <FontAwesome
            style={fontAwesomeStyle}
            className='train2'
            name='train'
            onClick={() => browserHistory.push('/get-task')}
            ><span style={spanStyle}>GetTask</span>
          </FontAwesome>
          <FontAwesome
            style={fontAwesomeStyle}
            className='clockFoot'
            name='clock-o'
            onClick={() => {
              if (this.state.currentTask === undefined) {
                this.toggleNoTasksModal(true)
                return 0
              } else browserHistory.push('/currentTask')
            }}
            ><span style={spanStyle}>MyTask</span>
          </FontAwesome>
        </Flex>
      </Footer>
      <NoTaskModal open={this.state.taskModal} toggle={this.toggleNoTasksModal} />
    </div>
  }
}
export default App
