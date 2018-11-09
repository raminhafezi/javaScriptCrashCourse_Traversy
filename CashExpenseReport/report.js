var fullName = document.getElementById("fullNameInputBox")
fullName.addEventListener("blur", myFunction)


function myFunction(){   
    var check_icon = document.getElementById("check-icon")
    // console.log(check_icon)
    var input_content = document.getElementById("fullNameInputBox").value
    fullNameString = String(input_content.trim())
    // console.log(input_content)
    if (/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(fullNameString)){
        check_icon.classList.remove("has-text-danger")
        check_icon.classList.remove("fa-spinner")
        check_icon.classList.remove("fa-pulse")
        check_icon.classList.add("fa-check")
        check_icon.classList.add("has-text-success")
        // console.log(check_icon.classList)
    }
    else {
        check_icon.classList.add("has-text-danger")
        check_icon.classList.add("fa-spinner")
        check_icon.classList.add("fa-pulse")
        check_icon.classList.remove("fa-check")
        check_icon.classList.remove("has-text-success")
    }
}

var Email = document.getElementById("emailBox")
Email.addEventListener("blur", myEmailFunction)


function myEmailFunction(){   
    var email_icon = document.getElementById("email-icon")
    console.log(email_icon)
    var input_content = document.getElementById("emailBox").value
    input_content = String(input_content.trim().toLowerCase())
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input_content)){
        email_icon.firstElementChild.classList.remove("fa-envelope")
        email_icon.firstElementChild.classList.remove("has-text-danger")
        email_icon.firstElementChild.classList.add("fa-check")
        email_icon.firstElementChild.classList.add("has-text-success")
    }
    else{
        email_icon.firstElementChild.classList.remove("fa-check")
        email_icon.firstElementChild.classList.remove("has-text-success")
        email_icon.firstElementChild.classList.add("fa-envelope")
        email_icon.firstElementChild.classList.add("has-text-danger")
        

    }
}



// fa fa-spinner fa-pulse
// fa-check