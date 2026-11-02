const company="NYB Infotech"
function outer(){
    const development="Developement"
    function inner(){
        const role= "Frontend Developer"
        console.log(company,development,role)
    }
    inner()
}
outer()