import React from 'react'
import { Provider } from 'react-redux'
import Home from './Home'
import { Store } from './redux/store'

const App = () => {
  return (
    <Provider store={Store}  >
      <Home  />
    </Provider>
      
    
  )
}

export default App