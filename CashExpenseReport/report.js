var fullName = document.getElementById("fullNameInputBox")
fullName.addEventListener("blur", myFunction)


function myFunction()
{   var icon_left = document.getElementById("exclamation-icon")
    var check_icon = document.getElementsByClassName("icon is-small is-right")[0]
    console.log(check_icon.firstElementChild)
    var input_content = document.getElementById("fullNameInputBox").value
    if (/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(input_content)){
        icon_left.classList.remove("has-text-danegr")
        icon_left.classList.add("has-text-success")
        check_icon.firstElementChild.classList.remove("has-text-danger")
        check_icon.firstElementChild.classList.add("has-text-danger")
    }
}

var fullName = document.getElementById("email")
fullName.addEventListener("blur", myEmailFunction)


function myEmailFunction()
{   var icon_left = document.getElementById("exclamation-icon")
    var check_icon = document.getElementsByClassName("icon is-small is-right")[0]
    var input_content = document.getElementById("email").value
    console.log("Here in 2nd"+input_content)
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(input_content).toLocaleLowerCase())){
        icon_left.classList.remove("has-text-danger")
        console.log("I am here")
        icon_left.classList.add("has-text-success")
        
        check_icon.firstElementChild.classList.remove("has-text-danger")
        check_icon.firstElementChild.classList.add("has-text-success")
    }
}