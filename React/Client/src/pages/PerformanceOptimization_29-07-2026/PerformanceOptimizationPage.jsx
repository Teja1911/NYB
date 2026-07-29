import PureComponentDemo from '../../Learning Concepts/PerformanceOptimization/PureComponents/PureComponentDemo'
import ReactMemoDemo from '../../Learning Concepts/PerformanceOptimization/ReactMemo/ReactMemoDemo'
import UseMemoDemo from '../../Learning Concepts/PerformanceOptimization/UseMemo/UseMemoDemo'
import UseCallbackDemo from '../../Learning Concepts/PerformanceOptimization/UseCallback/UseCallbackDemo'

function PerformanceOptimizationPage() {
  return (
    <div>
        <h2>Pure Component</h2>
        <PureComponentDemo/>
        <hr />
        <h2>React Memo</h2>
        <ReactMemoDemo/>
        <hr />
        <h2>UseMemo</h2>
        <UseMemoDemo/>
        <hr />
        <h2>UseCallback</h2>
        <UseCallbackDemo/>
    </div>
  )
}

export default PerformanceOptimizationPage