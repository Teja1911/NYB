import React from 'react'
import DestructuringDemo from '../../Learning Concepts/ListRendering_Destructuring_LazyLoading/Destructuring/DestructuringDemo'
import ListRenderingDemo from '../../Learning Concepts/ListRendering_Destructuring_LazyLoading/ListRendering/ListRenderingDemo'
import LazyLoadingDemo from '../../Learning Concepts/ListRendering_Destructuring_LazyLoading/LazyLoading/LazyLoadingDemo'

function ListRendering_Destructuring_LazyLoadingPage() {
  return (
    <div>
        <DestructuringDemo/>
        <hr />
        <ListRenderingDemo/>
        <hr />
        <LazyLoadingDemo/>
    </div>
  )
}

export default ListRendering_Destructuring_LazyLoadingPage