const productName="Laptop"
const price=1500
const quantity = 2
const discountRate = 10
const taxRate = 18
function calculateSubtotal(price,quantity){
    return price*quantity
}
function calculateDiscount(subtotal,discountRate){
    return subtotal*discountRate/100
}
function calculateTax(amountAfterDiscount,taxRate){
    return amountAfterDiscount*taxRate/100
}
function calculateFinalTotal(amountAfterDiscount,tax){
    return amountAfterDiscount+tax
}
function generateRecipet(){
    const subtotal = calculateSubtotal(price,quantity)
    const discount = calculateDiscount(subtotal,discountRate)
    const amountAfterDiscount = subtotal - discount
    const tax = calculateTax(amountAfterDiscount,taxRate)
    const finalTotal =calculateFinalTotal(amountAfterDiscount,tax)
    console.log(`
        Product: ${productName}
        Price: ₹${price}
        Quantity: ${quantity}
        Subtotal: ₹${subtotal}
        Discount: ₹${discount}
        Tax: ₹${tax}
        Final Total: ₹${finalTotal}
    `)
}
generateRecipet()