import ConditionalRendering from "../../Learning Concepts/Revision-Concepts/ConditionalRendering/ConditionalRendering"
import DynamicForm from "../../Learning Concepts/Revision-Concepts/DynamicForm/DynamicForm"
import HOCExample from "../../Learning Concepts/Revision-Concepts/HigherOrderComponent/HOCExample"
import MapExample from "../../Learning Concepts/Revision-Concepts/MapMethod/MapExample"
import UseEffectAPI from "../../Learning Concepts/Revision-Concepts/UseEffectAPI/UseEffectAPI"
import  "../../Learning Concepts/Revision-Concepts/RevisionConcepts.css"

function RevisionConceptsPage() {
  return (
    <div>
        <ConditionalRendering/>
        <hr />
        <UseEffectAPI/>
        <hr />
        <MapExample/>
        <hr />
        <DynamicForm/>
        <hr />
        <HOCExample/>
    </div>
  )
}

export default RevisionConceptsPage