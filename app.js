import React from 'react'

import Demo1 from './demo/1'
import Demo2 from './demo/2'
import List from './components/list'

const App = props => (
  <div className="pa4">
    <h1>Demos</h1>
    <Demo1 />
    <Demo2 />    
    <List />
  </div>
)

export default App