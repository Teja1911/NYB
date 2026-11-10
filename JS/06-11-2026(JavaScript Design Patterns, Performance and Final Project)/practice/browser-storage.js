// Local Storage: remains after browser restart
localStorage.setItem("username","Teja")
console.log(localStorage.getItem("username"))
// Session Storage: current tab session
sessionStorage.setItem("role","Developer")
console.log(sessionStorage.getItem("role"))
// Cookie: sent with matching HTTP requests
document.cookie="theme=dark; max-age=3600; path=/; SameSite=Lax"
console.log(document.cookie)
// Removed Stored Values
localStorage.removeItem("username")
sessionStorage.removeItem("role")