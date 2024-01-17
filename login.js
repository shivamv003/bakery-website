const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "bakerslogin.html"
    }else{
        alert("Enter correct details")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "yash" && password === "baked"){
        return true
    }
    else if(username === "shivam" && password === "baked"){
        return true
    }
    else if(username === "ishaan" && password === "baked"){
        return true
    }
    else{
        return false
    }
}