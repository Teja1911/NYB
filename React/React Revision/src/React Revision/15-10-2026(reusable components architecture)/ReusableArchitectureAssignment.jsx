import { useState,useEffect } from "react";
// 1. API Service Layer
const ticketService={
    async getTickets(){
        const response=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
        if(!response) throw new Error("Could not load tickets")
        return response.json()
    }
}
// 2. Resuable Button
function Button({children,...props}){
    return <button {...props}>{children}</button>
}
// 3. Reusable Controlled Input
function Input({label,value,onChange}){
    return(
        <label>
            {label}
            <input value={value} onChange={onChange} required/>
        </label>
    )
}
// 4. Custom data-fetching hook
function useTickets(){
    const [tickets,setTickets]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")
    useEffect(()=>{
        const controller = new AbortController()
        async function loadTickets(){
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8",{signal:controller.signal})
                if(!response.ok) throw new Error("Could not load tickets")
                const data=await response.json()
                setTickets(data.map((item)=>({
                    id:item.id,
                    title: item.title,
                    status: "open"
                })))
            }
            catch(err){
                if(err.name !== "AbortError") setError(err.message)
            }
            finally{
                if(!controller.signal.aborted) setLoading(false)
            }
        }
        loadTickets()
        return ()=>controller.abort
    },[])
    return {tickets,setTickets,loading,error}
}
// 5. Reusable ticket row
function TicketRow({ticket,onClose}){
    return(
        <article>
            <strong>{ticket.title}</strong>
            <p>Status: {ticket.status}</p>
            {ticket.status === "open" && (
                <button onClick={()=>onClose(ticket.id)}>Close Ticked</button>
            )}
        </article>
    )
}
// 6. Main assignment
function ReusableArchitectureAssignment(){
    const {tickets,setTickets,loading,error}=useTickets()
    const [title,setTitle]=useState("")
    function addTicket(event){
        event.preventDefault()
        if(!title.trim()) return
        setTickets((old)=>[
            {id:Date.now(),title: title.trim(),status:"open"},
            ...old
        ])
        setTitle("")
    }
    function closeTicket(id){
        setTickets((old)=>old.map((ticket)=>ticket.id === id ? {...tickets,status:"Closed"} : ticket))
    }
    return(
        <main>
            <h2>Support Ticket Manager</h2>
            <form onSubmit={addTicket}>
                <Input label="Ticket title :" value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <button type="submit">Add Tickets</button>
            </form>
            {loading && <p>Loading tickets...</p>}
            {error && <p role="alert">{error}</p>}
            {!loading && !error && tickets.map((ticket)=>(
                <TicketRow key={ticket.id} ticket={ticket} onClose={closeTicket}/>
            ))}
            {!loading && !error && tickets.length === 0 && (
                <p>No tickets available</p>
            )}
        </main>
    )
}
export default ReusableArchitectureAssignment