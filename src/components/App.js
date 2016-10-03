import React, { Component } from 'react'
import Header from './Header'
import { Footer, Breadcrumbs, Text } from 'rebass'

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
    }, () => console.log('getAssignedTask() in app', taskList))
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
        <Breadcrumbs
          links={[
            {children: 'About Us', href: '/about'}, {children: 'Contact Us', href: '/contact'}, {children: 'FAQs', href: '/faqs'}]}
        />
        <Text>&copy;Copyright Kebert/Macy Inc.</Text>
      </Footer>
    </div>
  }
}

export default App
