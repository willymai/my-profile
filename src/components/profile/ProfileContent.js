import React, { Component } from 'react'
import { connect } from 'react-redux'
import AboutMe from './AboutMe'
import { SidebarMenu } from '../../constants'
import Resume from './Resume';
import Contact from './Contact';

class ProfileContent extends Component {
  render() {
    const {common} = this.props;
    return (
      <>
        <AboutMe active={common.key === SidebarMenu.About}/>
        <Resume active={common.key === SidebarMenu.Resume}/>
        <Contact active={common.key === SidebarMenu.Contact}/>
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
