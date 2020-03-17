import React, { Component } from 'react'
import './css/index.less'
import {getNavListAsync,getLeftNavAsync,getRightNavAsync,getKingkongAsync} from '../../redux/actions'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import img1 from './images/swiper (1).jpg'
import img2 from './images/swiper (2).png'
import img3 from './images/swiper (3).jpg'
import img4 from './images/swiper (4).jpg'
import img5 from './images/swiper (5).jpg'
import img6 from './images/swiper (6).jpg'
import img7 from './images/swiper (7).jpg'

import { Carousel, WingBlank } from 'antd-mobile';
@connect(state => ({
  navList: state.navList,
  kingkong: state.kingkong
}), {
  getNavListAsync,getLeftNavAsync,getRightNavAsync,getKingkongAsync
  })
 class Home extends Component {
  state={
    navList:[],
    imgs:[img1,img2,img3,img4,img5,img6,img7]
  };
_initBScroll(){
  this.navScroll = new BScroll('.list_wrapper',{
    click:true,
    probeType:1,
    screenX:true,
    scrollY:false,
    eventPassthrough: 'vertical'
  })
}
async componentDidMount(){
    await this.props.getNavListAsync()
    await this.props.getKingkongAsync()

    setTimeout(() => {
      this._initBScroll()
    }, 20);
  }
  render() {
    const {navList,kingkong} = this.props
    const {imgs} = this.state
    return (
      <div className="HomeContainer">
        <header>
          <div className="header_top">
            <span>网易严选</span>
            <div className="fake_search">
              <i className="iconfont" style={{fontSize:'16px'}}>&#xe6e1;</i>
              <span>搜索商品, 共24267款好物</span>
            </div>
            <div className="login_btn">登录</div>
          </div>
          <div className="header_bottom">
            <div className="list_wrapper">
              <ul className="list">
                <li className="list_item on" key="0">推荐</li>
                {
                  navList.map((nav,index)=>{
                    return <li className="list_item" key={index}>{nav.name}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </header>
        <div className="swiper">
          <img src="./images/swiper (1).jpg" alt="" style={{ width: '100%', verticalAlign: 'top' }}/>
        <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >     
        {
          imgs.map((img,index)=>{
            return <img
            src={img}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            className="swiperImg"
            key={index}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
          })
        }
        </Carousel>
      </WingBlank>
        </div>
        <ul className="kingkonglist">
          {
          kingkong.map((item,index)=>{
            return <li className="kingkong_item" key={index}>
                    <img  src={item.picUrl} alt="kingkong"/>
                    <span>{item.text}</span>
                  </li>
          })
          }
        </ul>
      </div>
    )
  }
}
export default Home