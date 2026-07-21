import React from 'react'
import AxiosUsers from '../../Learning Concepts/APIDemo/AxiosUsers'
import AxiosPosts from '../../Learning Concepts/APIDemo/AxiosPosts'

function APIDemoAxiosPage() {
  return (
    <div>
        <AxiosUsers/>
        <hr
        style={{
          margin: "50px 0",
          border: "1px solid #ddd",
        }}
        />
        <AxiosPosts/>
    </div>
  )
}

export default APIDemoAxiosPage