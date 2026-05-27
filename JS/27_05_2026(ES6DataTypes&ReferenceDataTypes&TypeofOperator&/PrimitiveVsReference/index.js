//Primitive Data Type
let a=10
let b=a
b=20
console.log("Value of a:",a)
console.log("Value of b:",b)
//In these above primitive data types value of a has been copy to b then the value of b has been changed to the 20 if we print the both the a and b values we will get the output has 10 and 20 Because here a and b will created in separate memory address and they actually shares the value not the memory address so the output will be different

//Non-Primitive Data Types
let Employee_1={
    name:"Teja"
}
let Employee_2=Employee_1
Employee_2.name="Surya"
console.log(Employee_2)
console.log(Employee_1)
//Here in the non-primitive data type when we observe the output we can see the two variables outputs are same because they share the same memory address so the value of the Empolyee_1 will be changed when the Employee_2 value is changed because they share same memory address here reference/address will be copied not actual object  