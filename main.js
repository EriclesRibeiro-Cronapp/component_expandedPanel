var container = document.querySelectorAll('.expanded__container')

container.forEach(expanded__container => {
    expanded__container.addEventListener('click', () => {
        expanded__container.classList.toggle('active')
    })
})