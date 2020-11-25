import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/style.css'
import './style/text.css'
import './style/contact.css'


const Index = () => {

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
ReactDOM.render(<Index />, document.getElementById('zone'))