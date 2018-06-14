import React from 'react'
import ReactDOM from 'react-dom'
//same as const

function App() {
  return React.createElement('div', {}, 'Hello World')
}

const result = App()
ReactDOM.render(result, document.getElementById('root'))

// <div>Hello World</div>