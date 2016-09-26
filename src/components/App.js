import React, { Component } from 'react'
import Header from './Header'
import { Footer, Breadcrumbs } from 'rebass'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  }
  render () {
    const style = {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
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
      {this.props.children}
      <Footer
        style={style}
        >
        <Breadcrumbs
          links={[
            {children: 'Add Task', href: '/todolist'}, {children: 'Calendar', href: '/calendar'}, {children: 'Sign Out', href: '#!'}]}
        />
      </Footer>
    </div>
  }
}

export default App
