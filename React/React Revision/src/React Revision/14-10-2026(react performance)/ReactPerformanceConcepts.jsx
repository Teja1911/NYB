import {memo,useCallback,useMemo,useState,lazy, Suspense} from "react"
// 1. Lazy Loading: loads the page module when needed
const HelpPage=lazy(()=>import("./PerformanceHelpPage"))
// 2. React.memo: Skips a child render when its props are unchanged
const EmployeeRow=memo(function EmployeeRow({employee,onSelect}){
    console.log("EmployeeRow rendered:",employee.name)
    return(
        <p>
            {employee.name} - {employee.role}{" "}
            <button onClick={()=>onSelect(employee.id)}>Select</button>
        </p>
    )
})
// 3. Main component: state updates trigger rendering
function ReactPerformanceConcepts(){
    const [count,setCount]=useState(0)
    const [search,setSearch]=useState("")
    const [showHelp,setShowHelp]=useState(false)
    const employees=useMemo(()=>[
        {id:1,name:"Ananya",role:"Developer"},
        {id:2,name:"Rahul",role:"Tester"},
        {id:3,name:"Priya",role:"Designer"}
    ],[]
    )
// 4. useMemo: caches the filtered result until dependencies change
    const filteredEmployees=useMemo(
        ()=>employees.filter((employee)=>employee.name.toLowerCase().includes(search.toLowerCase())),[employees,search]
    )
// 5. useCallback: keeps the callback references stable
    const handleSelect=useCallback((id)=>{
        console.log("Selected Employee:",id)
    },[])
// 6. Referential equality: Objects created during render are new references
    const stableSettings=useMemo(()=>({theme:"light"}),[])
    return(
        <main>
            <h2>React Performance Concepts</h2>
            <button onClick={()=>setCount((value)=>value+1)}>Unrelated counter: {count}</button>
            <p>Stable setting: {stableSettings.theme}</p>
            <input value={search} placeholder="Search employees" onChange={(event)=>setSearch(event.target.value)} />
            {/* 7. Memoized children recieve stable employee and callback props */}
            {filteredEmployees.map((employee)=>(
                <EmployeeRow key={employee.id} employee={employee} onSelect={handleSelect}/>
            ))}
            {/* 8. Suspense provides fallback UI for lazy-loaded content */}
            <button onClick={()=>setShowHelp((value)=>!value)}>{showHelp ? "Hide help" : "Load help page" }</button>
            {showHelp && (
                <Suspense fallback={<p>Loading Help Page...</p>}>
                    <HelpPage/>
                </Suspense>
            )}
            <p>Open React Developer Tools Profiler to inspect component renders.</p>
        </main>
    )
}
export default ReactPerformanceConcepts
    
 