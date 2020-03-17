import {GET_NAVLIST,GET_LEFTNAV,GET_RIGHTNAV,GET_KINGKONG} from './action-types'
import axios from 'axios'

const getNavList =  data => ({type:GET_NAVLIST,data})

export const getNavListAsync = () => {
  return dispatch => {
    axios.get('http://localhost:8080/navList')
    .then((res)=>{
      res.data.data.unshift({name:'推荐'})
      dispatch(getNavList(res))
    })
  }
}

const getLeftNav = data => ({type:GET_LEFTNAV,data})

export const getLeftNavAsync = () => {
  return dispatch => {
    axios.get('http://localhost:8080/leftnav')
    .then((res)=>{
      console.log(res)
      dispatch(getLeftNav(res))
    })
  }
}

const getrightNav = data => ({type:GET_RIGHTNAV,data})

export const getRightNavAsync = () => {
  return dispatch => {
    axios.get('http://localhost:8080/rightNav')
    .then((res)=>{
      dispatch(getrightNav(res))
    })
  }
}

const getKingkong = data => ({type:GET_KINGKONG,data})

export const getKingkongAsync = () => {
  return dispatch => {
    axios.get('http://localhost:8080/kingkong')
    .then(res => {
      console.log(res)
      dispatch(getKingkong(res.data.data))
    })
  }
}