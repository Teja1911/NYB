const orders = [
    {
        id: 101,
        customer: "Tej",
        restaurant: "Spice Hub",
        amount: 450,
        status: "delivered",
        items: ["Biryani", "Coke"]
    },

    {
        id: 102,
        customer: "Maya",
        restaurant: "Pizza Point",
        amount: 700,
        status: "pending",
        items: ["Pizza"]
    },

    {
        id: 103,
        customer: "Arun",
        restaurant: "Spice Hub",
        amount: 550,
        status: "delivered",
        items: ["Biryani", "Lassi"]
    },

    {
        id: 104,
        customer: "Tej",
        restaurant: "Burger House",
        amount: 300,
        status: "cancelled",
        items: ["Burger"]
    },

    {
        id: 105,
        customer: "Maya",
        restaurant: "Spice Hub",
        amount: 600,
        status: "delivered",
        items: ["Biryani", "Lassi"]
    }
]

console.log("Delivered Orders:")
function getDeliveredOrders(orders){
    return orders.filter((order)=>order.status==="delivered"? order.id:"")
}
console.log(getDeliveredOrders(orders))

console.log("Customers:")
function getOrderNames(){
    return orders.map((order)=>order.customer)
}
console.log(getOrderNames())

console.log("Total Revenue:")
function getTotalRevenue(){
    return orders.filter((order)=>order.status==="delivered")
    .reduce((sum,order)=>sum+order.amount,0)
}
console.log(getTotalRevenue())

console.log("Order 103:")
function findOrder(id){
    return orders.find((order)=>order.id===id)
}
console.log(findOrder(103))

console.log("Order 103 Index:")
function findOrderIndex(id){
    return orders.findIndex((order)=>order.id===id)
}
console.log(findOrderIndex(103))

console.log("Has Pending Orders:")
function pendingOrders(){
    return orders.some((order)=>order.status==="pending")
}
console.log(pendingOrders())

console.log("All Orders Valid:")
function allOrdersValid(){
    return orders.every((order)=>"id" in order&& "customer" in order && "amount" in order && "status" in order)
}
console.log(allOrdersValid())

console.log("Orders By Amount:")
function sortOrdersByAmount(){
    return [...orders].sort((a,b)=>b.amount-a.amount)
}
console.log(sortOrdersByAmount())

console.log("Unique Restaurants:")
function getUniqueRestaurants(){
    const unique=orders.map((order)=>order.restaurant)
    const uniqueRestaurants=[...new Set(unique)]
    return uniqueRestaurants
}
console.log(getUniqueRestaurants())

