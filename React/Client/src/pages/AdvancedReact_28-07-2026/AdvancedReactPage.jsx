import React from 'react'
import FragmentDemo from '../../Learning Concepts/AdvancedReact/Fragments/FragmentDemo'
import NormalComponent from '../../Learning Concepts/AdvancedReact/Fragments/NormalComponent'
import TableFragment from '../../Learning Concepts/AdvancedReact/Fragments/TableFragment'
import NestedFragment from '../../Learning Concepts/AdvancedReact/Fragments/NestedFragment'
import HOCDemo from '../../Learning Concepts/AdvancedReact/HOC/HOCDemo'
import WithAuth from '../../Learning Concepts/AdvancedReact/HOC/WithAuth'
import WithLoading from '../../Learning Concepts/AdvancedReact/HOC/WithLoading'
import Dashboard from '../../Learning Concepts/AdvancedReact/HOC/Dashboard'
import Profile from '../../Learning Concepts/AdvancedReact/HOC/Profile'
import ProductList from '../../Learning Concepts/AdvancedReact/HOC/ProductList'
import FetchDemo from '../../Learning Concepts/AdvancedReact/CustomHooks/FetchDemo'
import FormDemo from '../../Learning Concepts/AdvancedReact/CustomHooks/FormDemo'
import ThemeDemo from '../../Learning Concepts/AdvancedReact/CustomHooks/ThemeDemo'
import WindowResizeDemo from '../../Learning Concepts/AdvancedReact/CustomHooks/WindowResizeDemo'

function AdvancedReactPage() {
  return (
    <div>
        <FragmentDemo/>
        <hr />
        <NormalComponent/>
        <hr />
        <TableFragment/>
        <hr />
        <NestedFragment/>
        <hr />
        <h2>HOC</h2>
        <HOCDemo/>
        <Dashboard/>
        <Profile/>
        <ProductList/>
        <WithAuth/>
        <WithLoading/>
        <h2>Custom Hooks</h2>
        <FetchDemo/>
        <FormDemo/>
        <ThemeDemo/>
        <WindowResizeDemo/>
    </div>
  )
}

export default AdvancedReactPage