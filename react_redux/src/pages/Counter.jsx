import React from 'react'
import { connect } from 'react-redux'
import store from '../store/store'
import { counterReducer } from '../store/counterReducer'
function Counter(props) {
    console.log(props)
  return (
    <div>
    <div>Counter : {props.count}</div>
    <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
    <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
    </div>
  )
}

export default connect((store=>{return store.counterReducer}))(Counter)