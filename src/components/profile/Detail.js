import React, { Component } from 'react'
import Cover from './Cover'
import ProfileContent from './ProfileContent'

export default class Detail extends Component {
  render() {
    return (
      <div className="profile__detail">
        <Cover />
        <ProfileContent />
      </div>
    )
  }
}
