import React, { Component } from 'react'
import Footer from './components/footer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './containers/home'
import Category from './containers/category'
import GoodBuy from './containers/goodbuy'
import ShopCart from './containers/shopcart'
import Profile from './containers/profile'
// import routes from './config/routes'
export default class App extends Component {
  render() {
    return (
      <div className="App" style={{position:'relative'}}>
        <Router>
        <Switch>
        
          <Route exact  path="/" component={Home}/> 
          <Route exact path="/category" component={Category}/> 
          <Route exact path="/goodbuy" component={GoodBuy}/> 
          <Route exact path="/shopcart" component={ShopCart}/> 
          <Route exact path="/profile" component={Profile}/> 
          <Route exact path="/category/:id" component={Category}/> 
          {/* {
            routes.map((item,index)=>{
              return <Route exact={item.exact} path={item.path} component={item.component} key={index}/>
            })
          } */}
        </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}
