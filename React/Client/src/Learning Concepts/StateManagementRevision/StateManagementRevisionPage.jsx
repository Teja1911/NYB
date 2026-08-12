import { Provider } from "react-redux"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import ThemeProvider from "./components/ThemeProvider"
import "./css/style.css"
import ThemeDemo from "./components/ThemeDemo"
import ReducerDemo from "./components/ReducerDemo"
import store from "./app/store.js"

function StateManagementRevisionPage() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="state-management-page">
          <h1>State Management Revision</h1>
          <p className="page-description">
            Context API, useContext, useReducer and Redux Toolkit
          </p>
          <ThemeDemo/>
          <ReducerDemo/>
          <div className="shopping-container">
            <ProductList/>
            <Cart/>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default StateManagementRevisionPage