const modal = document.querySelector(".modal")
const logInBtn = document.querySelector(".login-btn")
const closeBtn = document.querySelector(".closebutton")




const openModal = () => {
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = "none"
    console.log("close")
}

const outsideClickHandler = (e) => {
    if (e.target == modal) {
        closeModal()
    }
}

logInBtn.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
window.addEventListener("click", outsideClickHandler)
