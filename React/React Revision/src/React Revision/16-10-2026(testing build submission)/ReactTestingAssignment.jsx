import {useState} from "react"
const initialTickets=[
    {id:1,title:"Cannot sign in",status:"Open"},
    {id:2,title:"Email notification issue",status:"Closed"}
]
function TicketForm({onAdd}){
    const [title,setTitle]=useState("")
    const [error,setError]=useState("")
    function submit(event){
        event.preventDefault()
        if(!title.trim()){
            setError("Ticket title is required")
            return
        }
        onAdd(title.trim())
        setTitle("")
        setError("")
    }
    return(
        <form onSubmit={submit}>
            <label>
                Ticket title
                <input value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Enter ticket title" />
            </label>
            {error && <p role="alert">{error}</p>}
            <button type="submit">Create Ticket</button>
        </form>
    )
}
function TicketList({tickets,onToggle}){
    if(tickets.length === 0) return <p>No tickets found.</p>
    return tickets.map((ticket)=>(
        <article key={ticket.id}>
            <h3>{ticket.title}</h3>
            <p>Status: {ticket.status}</p>
            <button onClick={()=>onToggle(ticket.id)}>
                {ticket.status === "open" ? "Close Ticket" : "ReOpen Ticket"}
            </button>
        </article>
    ))
}
function ReactTestingAssignment(){
    const [tickets,setTickets]=useState(initialTickets)
    const [filter,setFilter]=useState("All")
    function addTicket(title){
        setTickets((old)=>[
            ...old,
            {id:Date.now(),title,status:"Open"}
        ])
    }
    function toggleTickets(id){
        setTickets((old)=>old.map((ticket)=>
        ticket.id === id ? {...tickets, status: tickets.status === "Open" ? "Closed" : "Open"} : ticket))
    }
    const visibleTickets=tickets.filter((ticket)=> filter === "All" || ticket.status === filter)
    return(
        <main>
            <h2>Help Desk Ticket Manager</h2>
            <TicketForm onAdd={addTicket}/>
            <label>
                Fliter Tickets
                <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option>All</option>
                    <option>Open</option>
                    <option>Closed</option>
                </select>
            </label>
            <TicketList tickets={visibleTickets} onToggle={toggleTickets}/>
            <p>Total tickets: {tickets.length}</p>
        </main>
    )
}
export default ReactTestingAssignment