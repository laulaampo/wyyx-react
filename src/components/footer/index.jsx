import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import MyNavLink from '../mynavlink/MyNavLink'
import './css/index.less'
@withRouter
class Footer extends Component {
  state = {
    path : '/'
  };
  setActiveClass(index){
    return ()=>{
      this.setState({
        path:index
      })
    }
  }
  componentDidMount(){
    const {pathname} = this.props.location
    this.setState({
      path:pathname
    })
  }
  render() {
    const {path} = this.state
    return (
      <div className="footerContainer" style={{display:(path === 'login')?'none':'block'}}>
        <div className="tab" >
          <MyNavLink to="/"  className={(path === '/')?'active':''} onClick={this.setActiveClass('/')}>
            <i className="iconfont">&#xe69b;</i>
            <span>首页</span>
          </MyNavLink>
          <MyNavLink to="/category" className={path.includes('/category')?'active':''} onClick={this.setActiveClass('/category')}>
            <i className="iconfont">&#xe6e2;</i>
            <span>分类</span>
          </MyNavLink>
          <MyNavLink to="/goodbuy"  className={path.includes('/goodbuy')?'active':''}  onClick={this.setActiveClass('/goodbuy')}>
            <i className="iconfont">&#xe69d;</i>
            <span>值得买</span>
          </MyNavLink>
          <MyNavLink to="/shopcart" className={path.includes('/shopcart')?'active':''} onClick={this.setActiveClass('/shopcart')}>
            <i className="iconfont">&#xe6e6;</i>
            <span>购物车</span>
          </MyNavLink>
          <MyNavLink to="/profile" className={path.includes('/profile')?'active':''} onClick={this.setActiveClass('/profile')}>
            <i className="iconfont">&#xe6dc;</i>
            <span>个人</span>
          </MyNavLink>
        </div>
      </div>
    )
  }
}
export default Footer