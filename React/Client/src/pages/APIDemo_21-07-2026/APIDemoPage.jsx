import React from 'react'
import UseEffectNoDependency from '../../Learning Concepts/APIDemo/UseEffectNoDependency'
import UseEffectEmptyDependency from '../../Learning Concepts/APIDemo/UseEffectEmptyDependency'
import UseEffectWithDependency from '../../Learning Concepts/APIDemo/UseEffectWithDependency'
import UseEffectCleanup from '../../Learning Concepts/APIDemo/UseEffectCleanup'

function APIDemoPage() {
  return (
    <div>
        <UseEffectNoDependency/>
        <hr
        style={{
          margin: "50px 0",
          border: "1px solid #ddd",
        }}
      />
      <UseEffectEmptyDependency/>
      <hr
        style={{
          margin: "50px 0",
          border: "1px solid #ddd",
        }}
      />
      <UseEffectWithDependency/>
      <hr
        style={{
          margin: "50px 0",
          border: "1px solid #ddd",
        }}
      />
      <UseEffectCleanup/>
    </div>
  )
}

export default APIDemoPage