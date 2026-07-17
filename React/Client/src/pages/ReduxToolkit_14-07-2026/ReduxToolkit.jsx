import React from 'react'
import { Provider } from 'react-redux'
import {store} from '../../Learning Concepts/State/GlobalState/ToolKit/app'
import A from '../../Learning Concepts/State/GlobalState/ToolKit/A'

function ReduxToolkit() {
  return (
    <Provider store={store}>
        <A/>
    </Provider>
  )
}

export default ReduxToolkit