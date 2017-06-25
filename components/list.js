import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'

const li = color => (
  <li key={color}>{color}</li>
)

const List = props => (
  <ul>
    {R.map(li, props.colors)}
  </ul>
)
     
const connector = connect(state => state)

export default connector(List)