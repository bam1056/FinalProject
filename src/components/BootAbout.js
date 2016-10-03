import React, { Component } from 'react'
import { Space, Avatar } from 'rebass'
import staff from './staff.json'

class BootAbout extends Component {
  render () {
    const teamCards = staff.staff.map((person, i) => {
      return <div key={i} className='col-lg-4 col-sm-6 text-center'>
        <Avatar
          circle
          size={150}
          src={person.photoUrl}
          />
        <h3>{person.name}
          <Space x={2} />
          <small>
            {person.title}
          </small>
        </h3>
        <p>{person.quote}</p>
      </div>
    })
    return <div className='boot' style={{overflowY: 'scroll', height: '80vh', padding: '10px'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='page-header'>About Us
              <small><Space x={2} />It's Nice to Meet You!</small>
            </h1>
            <p>Thank you for your interest in StreamLine.We are a young company, interested in improving our customers lives through programming.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <h2 className='page-header'>Our Team</h2>
          </div>
          {teamCards}
        </div>
      </div>
    </div>
  }
}
export default BootAbout
