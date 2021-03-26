let like = document.querySelectorAll(".like")
let buyBtn = document.querySelectorAll(".buy-btn")

like.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
        el.classList.toggle('animate__animated')
        el.classList.toggle('animate__heartBeat')
})
})
buyBtn.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
        el.classList.toggle('animate__animated')
        el.classList.toggle('animate__rubberBand')
        el.textContent === 'Купить' ? el.textContent = 'Продано' : el.textContent = 'Купить'
    })
})