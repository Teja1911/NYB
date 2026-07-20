import React from 'react'
import IfElseExample from '../../Learning Concepts/ConditionalRendering/IfElseExample'
import TernaryExample from '../../Learning Concepts/ConditionalRendering/TernaryExample'
import LogicalAndExample from '../../Learning Concepts/ConditionalRendering/LogicalAndExample'
import SwitchExample from '../../Learning Concepts/ConditionalRendering/SwitchExample'
import ToggleComponent from '../../Learning Concepts/ConditionalRendering/ToggleComponent'
import UserRoleDashboard from '../../Learning Concepts/ConditionalRendering/UserRoleDashboard'
import LoadingState from '../../Learning Concepts/ConditionalRendering/LoadingState'
import EmptyState from '../../Learning Concepts/ConditionalRendering/EmptyState'

function ConditionalRenderingExamplePage() {
  return (
    <div>
        <IfElseExample/>
        <hr/>
        <TernaryExample/>
        <hr/>
        <LogicalAndExample/>
        <hr/>
        <SwitchExample/>
        <hr />
        <ToggleComponent/>
        <hr />
        <UserRoleDashboard/>
        <hr />
        <LoadingState/>
        <hr />
        <EmptyState/>
    </div>
  )
}

export default ConditionalRenderingExamplePage