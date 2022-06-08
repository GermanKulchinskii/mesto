let editForm = document.querySelector(".editForm")
let popUpOpacity = document.querySelector(".popupOpacity")

let closeButton = document.querySelector(".editFormCloser")
let editButton = document.querySelector(".rectangle")

let editName = document.querySelector(".editName")
let userName = document.querySelector(".name")
let currentUserName = userName.textContent

let editJob = document.querySelector(".editJob")
let userJob = document.querySelector(".job")
let currentUserJob = userJob.textContent

let body = document.querySelector("body")
let html = document.querySelector("html")

let submitButton = document.querySelector(".submitButton")

function editFormOpener() {
    editForm.style.display = "block"
    editName.value = currentUserName
    editJob.value = currentUserJob
    popUpOpacity.style.display = "block"
    body.style.overflowY = "hidden"
    body.style.height = "100%"
    body.style.position = "relative"
}

editButton.addEventListener("click", function () {
    editFormOpener()
})

function editFormCloser() {
    editForm.style.display = "none"
    popUpOpacity.style.display = "none"
    body.style.overflowY = "scroll"
    body.style.position = "static"
}

closeButton.addEventListener("click", function () {
    editFormCloser()
    editName.value = ""
    editJob.value = ""
})
/* ???
submitButton.addEventListener('submit', formSubmitHandler)

function formSubmitHandler (evt) {
    evt.preventDefault();

    let newName = editName.value
    let newJob = editJob.value

    currentUserName = newName.textContent
    currentUserJob = newJob.textContent

}
 */