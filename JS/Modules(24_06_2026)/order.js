export function placeOrder(product){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(product.name+"Order Successful")
        },2000)
    })
}