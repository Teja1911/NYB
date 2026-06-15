//DOM
//Document Object Model
//When the browser loads the html page, it converts the html into a tree-like structure called DOM.
//Document
// │
// └── html
//      │
//      └── body
//           │
//           ├── h1
//           │
//           └── button 
//JavaScript uses the DOM to:
//Access HTML Elements
//Change Content
//Change Styles
//Add new Elements
//Remove Elements
//Handle user actions 
//Purpose of DOM:
//Update page content dynamically
//change styles dynamically
//Build interactive Websites
//Create Responsive applications

//DOM Element Selection Methods 
//1.getElementById()
//2.getElementByClassName()
//3.querySelector()
//4.querySelectorAll()

//1.getElementById()
//Selects a single element using by id.
let heading=document.getElementById("title")
//2.getElementByClassName()
//Selects Multiple elements with same class.
let products=document.getElementsByClassName("product")
//3.querySelector()
//Selects first matching element.
let btn=document.querySelector(".buyBtn")
//4.querySelectorAll()
//Selects all matching elements.
let items=document.querySelectorAll(".products")


