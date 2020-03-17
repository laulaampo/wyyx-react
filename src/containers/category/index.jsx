import React, { Component } from 'react'
import { SearchBar} from 'antd-mobile'
import {connect} from 'react-redux'
import RightShow from '../../components/rightShow'
import './css/index.less'
import {getLeftNavAsync,getRightNavAsync} from '../../redux/actions'
@connect(state=>({
  leftNav:state.leftNav,
  rightNav:state.rightNav
}),{
  getLeftNavAsync,
  getRightNavAsync
})
 class Category extends Component {
   state={
     crrutIndex:0,
     rightShowObj:{}
   }
  componentDidMount(){
    this.props.getLeftNavAsync()
    this.props.getRightNavAsync()
    setTimeout(() => {
      const obj = this.props.rightNav[this.state.crrutIndex]
      this.setState({
        rightShowObj:obj
      })
    }, 200);
  }
  setCrruntIndex(index,navId){
    return ()=>{
      const {rightNav} = this.props
      const rightShowObj = rightNav.find(item => item.id === navId)
      this.setState({
        crrutIndex:index,
        rightShowObj
      })
      this.props.history.push(`/category/${navId}`)
    }
  }
  render() {
    const {leftNav} = this.props
    const {crrutIndex,rightShowObj} = this.state
    return (
      <div className="category_container">
        <header>
        <SearchBar placeholder="Search" maxLength={8} style={{backgroundColor:'#fff' , width:'90%' , margin:'10px auto' , height:'35px'}} />
        </header>
        <section>
          <div className="leftNavWrapper">
            <ul className="leftList">
              {
                leftNav.map((item,index)=><li key={index} className={(index===crrutIndex)?'leftItem active':'leftItem'} onClick={this.setCrruntIndex(index,item.id)}>{item.name}</li>)
              }
            </ul>
          </div>
          <div className="rgihtNavWrapper">
            <RightShow rightShowObj={rightShowObj}/>
          </div>
        </section>
      </div>
    )
  }
}
export default Category
