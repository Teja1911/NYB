const passenger={
    name:"Teja",
    train:"Chennai Express",
    seat:"B12"
}
const bookingId="TRV101"

function createBooking(passenger){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(passenger)
        },500)
    })  
}

function processPayment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Payment Successful...")
            reject("Payment Failed...")
        },1000)
    })
}


function confirmTicket(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Ticket Confrimed")
        },2000)
    })
}

function sendNotification(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Notification Sent")
        },3000)
    })
}

async function bookTicket(passenger,bookingId){
    console.log("Starting Booking...")
    const booking=await createBooking(passenger)
    console.log(booking)
    const payment=await processPayment()
    console.log(payment)
    const ticket=await confirmTicket()
    console.log(ticket)
    const notification=await sendNotification()
    console.log(notification)
    console.log("Booking Compeleted...")
    return {
        BookingId:bookingId,
        Train:passenger.train,
        Seat:passenger.seat
    }
}
bookTicket(passenger,bookingId).then((reciept)=>{
    console.log(reciept)
})