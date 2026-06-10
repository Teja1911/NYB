//Sort the array
let arr=[10,5,9,7,3,4]
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
}
console.log(arr)
//ForEach 
let fruits=["Apple","Banana","Cherry"]
fruits.forEach(function (fruit){
    console.log(fruit)
})
let numbers=[10,20,30]
numbers.forEach(function(num){
    console.log(num*2)
})
let students=["Teja","Surya","Lucky"]
students.forEach((student,index)=>{
    console.log(`${index+1}.${student}`)
})
