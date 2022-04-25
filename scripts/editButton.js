let editForm = document.querySelector(".editForm")

let closeButton = document.querySelector(".editFormCloser")
let editButton = document.querySelector(".rectangle")

let editName = document.querySelector(".editName")
let userName = document.querySelector(".name")
let currentUserName = userName.textContent

let editJob = document.querySelector(".editJob")
let userJob = document.querySelector(".job")
let currentUserJob = userJob.textContent

let submitButton = document.querySelector(".submitButton")

function editFormOpener() {
    editForm.style.display = "block"
    editName.value = currentUserName
    editJob.value = currentUserJob
}

editButton.addEventListener("click", function () {
    editFormOpener()
})

function editFormCloser() {
    editForm.style.display = "none"
}

closeButton.addEventListener("click", function () {
    editFormCloser()
    editName.value = ""
    editJob.value = ""
})
