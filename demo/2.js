import React from 'react'

import { connect } from "react-redux"

const Demo2 = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input value={props.color} onChange={props.handleChange} placeholder="enter name" />
      <button>Add Color</button>
    </form>
  </div>
)

const connector = connect(state => state, mapActionsToProps)

export default connector(Demo2)

function mapActionsToProps (dispatch) {
  return {
    handleChange: e => {
      dispatch({type: 'SET_COLOR', payload: e.target.value})
    },
    handleSubmit: e => {
      e.preventDefault()
      dispatch(addColor)
    }
  }
}
function addColor (dispatch, getState) {
  setTimeout(() => {
    dispatch({type: 'ADD_COLOR', payload: getState().color })
    dispatch({type: 'SET_COLOR', payload: ''})
  }, 500)
}