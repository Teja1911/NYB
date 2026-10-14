import {memo,useCallback,useMemo,useState} from "react"
const products=Array.from({length:100},(_,index)=>({
    id: index+1,
    name: `Product ${index + 1}`,
    price: 100 + index*5,
    stock: (index%20)+1
}))
// Unoptimized row: renders when its parent maps it again
function ProductRow({product,onSelect}){
    console.count(`Product Row ${product.id}`)
    return(
        <p>
            {product.name} - ₹{product.price} - Stock: {product.stock}{" "}
            <button onClick={()=>onSelect(product.id)}>Select</button>
        </p>
    )
}
// Optimized row: can skip rendering when props remain equal
const MemoProductRow=memo(ProductRow)
function ReactPerformanceAssignment(){
    const [search,setSearch]=useState("")
    const [counter,setCounter]=useState(0)
    const [optimized,setOptimized]=useState(false)
    // Stable product data
    const inventory=useMemo(()=>products,[])
    // Expensive calculations should be profiled in real applications
    const filteredProducts=useMemo(
        ()=>inventory.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase())),[inventory,search]
    )
    const inventoryValue=useMemo(
        ()=>filteredProducts.reduce((total,product)=>total+product.price*product.stock,0),[filteredProducts]
    )
    const handleSelect=useCallback((id)=>{
        alert(`Selected products ${id}`)
    },[])
    const Row=optimized ? MemoProductRow : ProductRow
    return(
        <main>
            <h2>Product Inventory Performance Monitor</h2>
            <button onClick={()=>setCounter((value)=>value+1)}>Unrelated render: {counter}</button>
            <p>Row Mode: {optimized ? "Memoized" : "Normal"}</p>
            <button onClick={()=>setOptimized((value)=>!value)}>Toggle memoization</button>
            <input placeholder="Search Products" value={search} onChange={(event)=>setSearch(event.target.value)}  />
            <p>Matching Products: {filteredProducts.length}</p>
            <p>Value of matching stock: ₹{inventoryValue.toLocaleString("en-IN")}</p>
            {filteredProducts.map((product)=>(
                <Row key={product.id} product={product} onSelect={handleSelect}/> 
            ))}
        </main>
    )
}
export default ReactPerformanceAssignment