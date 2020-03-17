import {combineReducers} from 'redux'
import { GET_NAVLIST ,GET_LEFTNAV,GET_RIGHTNAV,GET_KINGKONG} from './action-types'


function navList(preState = [] , action){
  switch(action.type){
    case GET_NAVLIST:
      return action.data.data.data
    default:
      return preState
  }
}

function leftNav(preState=[],action){
  switch(action.type){
    case GET_LEFTNAV:
      return action.data.data.data
    default:
      return preState
  }
}

function rightNav(preState=[],action){
  switch(action.type){
    case GET_RIGHTNAV:
      return action.data.data.data
    default:
      return preState
  }
}

function kingkong(preState=[],action){
  switch(action.type){
    case GET_KINGKONG:
      return action.data
    default:
      return preState
  }
}
export default combineReducers({
  navList,
  leftNav,
  rightNav,
  kingkong
})