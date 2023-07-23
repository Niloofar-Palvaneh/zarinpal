let next = document.querySelector(".next")
let preveu = document.querySelector(".preveu")
let imgSlig = document.querySelector(".img-slig")
let inputphoneMail = document.querySelector("#input-mail-phon")
let goLogin = document.querySelector(".go-login")
let alertMessage = document.querySelector(".alert-message")

let regexInputPhone = /09[0-9][0-9]-?[0-9]{3}-?[0-9]{3}/
let regesInputMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})$/


//////////////////////////////////////////Regex Codes/////////////////////////////////////////////////

inputphoneMail.addEventListener("keydown", () => {
    if ((regexInputPhone.test(inputphoneMail.value) && inputphoneMail.value.length < 11) || (regesInputMail.test(inputphoneMail.value))) {
        // alert("welcome")
        alertMessage.style.display = "inline"
        alertMessage.style.color = "green"
        alertMessage.innerHTML = 'معتبر'
        inputphoneMail.style.border = "2px solid green"

    } else {
        // alert("please enter phone number or mail")/
        alertMessage.style.color = "red"
        alertMessage.innerHTML = 'نامعتبر'
        alertMessage.style.display = "inline"
        inputphoneMail.style.border = "2px solid red"
    }
})

goLogin.addEventListener("click", () => {
    if (regexInputPhone.test(inputphoneMail.value) || regesInputMail.test(inputphoneMail.value)) {
        alert("welcome")
    } else {
        alert("please enter phone number or mail")
    }
})

/////////////////////////////////////////////SlideSow Codes////////////////////////////////////////////////////////////

let imagesArry = [
    '/images/slide.jpg',
    '/images/slideShow-img-1.jpg',
]
let indexImg = 0
function prevHandler() {
    indexImg--
    if (indexImg < 0) {
        indexImg = imagesArry.length - 1
    }
    imgSlig.setAttribute('src', imagesArry[indexImg])
}
function nextHandler() {
    indexImg++
    if (indexImg > imagesArry.length - 1) {
        indexImg = 0
    }
    imgSlig.setAttribute('src', imagesArry[indexImg])
}
next.addEventListener("click", nextHandler)
preveu.addEventListener("click", prevHandler)
setInterval(nextHandler, 2000)

