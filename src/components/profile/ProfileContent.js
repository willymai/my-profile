import React, { Component } from 'react'
import { connect } from 'react-redux'
import AboutMe from './AboutMe'
import { SidebarMenu } from '../../constants'

class ProfileContent extends Component {
  render() {
    const {common} = this.props;
    return (
      <>
        <AboutMe active={common.key === SidebarMenu.About}/>
      </>
    )
  }
}

const mapStateToProps = ({common}) => ({
  common
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent)
