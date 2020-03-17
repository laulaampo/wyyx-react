import Category from '../containers/category'
import Home from  '../containers/category'
import GoodBuy from '../containers/category'
import ShopCart from '../containers/category'
import profile from '../containers/category'
import Login from '../containers/category'
const routes = [
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/category',
    component:Category,
    exact:true
  },
  {
    path:'/goodbuy',
    component:GoodBuy,
    exact:true
  },
  {
    path:'/shopcart',
    component:ShopCart,
    exact:true
  },
  {
    path:'/profile',
    component:profile,
    exact:true
  },
  {
    path:'/login',
    component:Login,
    exact:true
  },
  {
    path:'/category/:id',
    component:Category,
    exact:true
  }
]

export default routes