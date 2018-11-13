var fullName = document.getElementById("fullNameInputBox")
fullName.addEventListener("blur", myFunction)


function myFunction(){   
    var check_icon = document.getElementById("check-icon")
    var userIcon = document.getElementById("userIcon")
    console.log(userIcon)
    var input_content = document.getElementById("fullNameInputBox").value
    fullNameString = String(input_content.trim())
    // console.log(input_content)
    if (/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(fullNameString)){
        check_icon.classList.remove("has-text-danger")
        check_icon.classList.remove("fa-spinner")
        check_icon.classList.remove("fa-pulse")
        check_icon.classList.add("fa-check")
        check_icon.classList.add("has-text-success")
        userIcon.classList.remove("has-text-grey-light")
        userIcon.classList.add("has-text-info")
        // console.log(check_icon.classList)
    }
    else {
        check_icon.classList.add("has-text-danger")
        check_icon.classList.add("fa-spinner")
        check_icon.classList.add("fa-pulse")
        check_icon.classList.remove("fa-check")
        check_icon.classList.remove("has-text-success")
        userIcon.classList.add("has-text-grey-light")
        userIcon.classList.remove("has-text-info")
    }
}

var Email = document.getElementById("emailBox")
Email.addEventListener("blur", myEmailFunction)
console.log(Email)


function myEmailFunction(){   
    var check_icon = document.getElementById("check-icon-email")
    var envelopeIcon = document.getElementById("envelopeIcon")
    console.log(envelopeIcon)
    var input_content = document.getElementById("emailBox").value
    input_content = String(input_content.trim().toLowerCase())
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input_content)){
        check_icon.classList.remove("has-text-danger")
        check_icon.classList.remove("fa-spinner")
        check_icon.classList.remove("fa-pulse")
        check_icon.classList.add("fa-check")
        check_icon.classList.add("has-text-success")
        envelopeIcon.classList.remove("has-text-grey-light")
        envelopeIcon.classList.add("has-text-info")
    }
    else {
        check_icon.classList.add("has-text-danger")
        check_icon.classList.add("fa-spinner")
        check_icon.classList.add("fa-pulse")
        check_icon.classList.remove("fa-check")
        check_icon.classList.remove("has-text-success")
        envelopeIcon.classList.add("has-text-grey-light")
        envelopeIcon.classList.remove("has-text-info")
    }
}



// fa fa-spinner fa-pulse
// fa-check