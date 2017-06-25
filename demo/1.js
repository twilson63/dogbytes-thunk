import React from 'react'
import { connect } from 'react-redux'

const Demo1 = props => (
  <button onClick={props.handleClick}>List Colors</button>
)

const connector = connect(state => state, mapActionsToProps)
export default connector(Demo1)

function mapActionsToProps (dispatch) {
  return {
    handleClick: e => dispatch(getColors)
  }

}

function getColors (dispatch, getState) {
  setTimeout(() => {
    dispatch({type: 'SET_COLORS', payload: ['red', 'green', 'blue']})
  }, 500)
}