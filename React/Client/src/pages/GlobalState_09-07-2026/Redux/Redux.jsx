import React from 'react'
import A from '../../../Learning Concepts/State/GlobalState/Redux/A'
import {store} from '../../../Learning Concepts/State/GlobalState/Redux/App'
import { Provider } from 'react-redux'

function Redux() {
    
  return (
    <Provider store={store}>
        <A/>
    </Provider>
  )
}

export default Redux