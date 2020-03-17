import React, { Component } from 'react'
import './css/index.less'
 class RightShow extends Component {
  render() {
    const {rightShowObj} = this.props
    return (
      <div className="RightShowContainer">
        <div className="banner">
          <img src={rightShowObj.bannerUrl} alt="banner"/>
        </div>
      </div>
    )
  }
}
export default RightShow