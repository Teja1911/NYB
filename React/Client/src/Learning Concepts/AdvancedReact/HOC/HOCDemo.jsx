import React from 'react'
import withAuth from '../../HigherOrderComponents/hoc/withAuth'
import Dashboard from './Dashboard'
import Profile from './Profile'
import WithLoading from './WithLoading'
import ProductList from './ProductList'

function HOCDemo() {
    const ProtectedDashboard=withAuth(Dashboard)
    const ProtectedProfile=withAuth(Profile)
    const ProductLoading=WithLoading(ProductList)
  return (
    <div>
        <ProtectedDashboard/>
        <hr />
        <ProtectedProfile/>
        <hr />
        <ProductList/>
    </div>
  )
}

export default HOCDemo