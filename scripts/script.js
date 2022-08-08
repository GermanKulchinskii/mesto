const editButton = document.querySelector(".profile__edit-button")
const modalWindowBg = document.querySelector(".edit-from__bg")
const modalWindowCloser = document.querySelector(".modal-window__closer")
const addWindowBg = document.querySelector(".add-form__bg")
const addFormCloser = document.querySelector(".add-form-closer")

const addButton = document.querySelector(".profile__add-button")

const newName = document.querySelector(".profile__name")
const newJob = document.querySelector(".profile__job")

const editFormName = document.querySelector(".modal-window__edited-name")
const editFormJob = document.querySelector(".modal-window__edited-job")

const editFormSubmit = document.querySelector(".edit-form-submit-button")
const addFormSubmit = document.querySelector(".add-form-submit-button")

const cardContainer = document.querySelector(".card-container")

const photoCloser = document.querySelector(".open-card__closer")

editButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    editFormName.value = newName.textContent
    editFormJob.value = newJob.textContent
    modalWindowBg.classList.add("active")
})

modalWindowCloser.addEventListener("click", () => {
    modalWindowBg.classList.remove("active")
    editFormName.value = ''
    editFormJob.value = ''
})

addButton.addEventListener("click", (evt) => {
    evt.preventDefault()
    addWindowBg.classList.add("active")
})

addFormCloser.addEventListener("click", () => {
    addWindowBg.classList.remove("active")
})

editFormSubmit.addEventListener("click", (evt) => {
    evt.preventDefault()
    newName.textContent = editFormName.value
    newJob.textContent = editFormJob.value
    modalWindowBg.classList.remove("active")
})

function addSong(placeValue, imgLink) {
    const cardTemplate = document.querySelector(".card-template").content
    const card = cardTemplate.querySelector(".card").cloneNode(true)

    card.querySelector(".card__name").textContent = placeValue
    card.querySelector(".card__photo").src = imgLink

    card.querySelector(".card__like").addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like_active")
    })

    card.querySelector(".card__delete").addEventListener("click", () => {
        card.remove()
    })

    card.querySelector(".card__photo").addEventListener("click", () => {
        const openCard = document.querySelector(".open-card")

        document.querySelector(".open-card__photo").src = card.querySelector(".card__photo").src
        openCard.style.display = "block"
        document.querySelector(".open-card__name").textContent = card.querySelector(".card__name").textContent
    })

    cardContainer.prepend(card)
}

addFormSubmit.addEventListener("click", (evt) => {
    evt.preventDefault()

    const place = document.querySelector(".place-name")
    const img = document.querySelector(".img-link")

    addSong(place.value, img.value)

    place.value = ''
    img.value = ''

    addWindowBg.classList.remove("active")
})

photoCloser.addEventListener("click", () => {
    document.querySelector(".open-card").style.display = "none"
    document.querySelector(".open-card__name").textContent = ''
})

addSong("Москва", "http://russiantourism.ru/netcat_files/2343_21053.jpg")
addSong("Санкт-Петербург", "https://papik.pro/uploads/posts/2021-09/1631488111_12-papik-pro-p-peizazhi-peterburga-14.jpg")
addSong("Алтай", "https://cdnn21.img.ria.ru/images/152155/85/1521558559_0:228:4368:2685_600x0_80_0_0_7096fe3ad8a519ec93377d5289428862.jpg")
addSong("Карачаево-Черкессия", "https://s16.stc.all.kpcdn.net/russia/wp-content/uploads/2021/08/SHoaninskij_drevnehristianskij_hram__Karachaevo-CHerkesiya_Viki.jpg")
addSong("гора Эльбрус", "https://wikiway.com/upload/iblock/902/Elbrus-na-zakate.jpg")
addSong("Владивосток", "https://img.geliophoto.com/vl2017/00_vl2017.jpg")