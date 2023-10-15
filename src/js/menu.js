export default function Menu() {
    const button = document.querySelector('.header--menu-button')
    const txt = button.querySelectorAll('.header--menu-button-text')
    const icons = button.querySelectorAll('.header--menu-button-icon')
    const menu = document.querySelector('.menu')
    const header = document.querySelector('header')
    const nav = menu.querySelector('nav')
    const items = nav.querySelectorAll('li')

    button.addEventListener("click", () => {
        txt.forEach(text => text.classList.toggle('hidden'))
        icons.forEach(icon => icon.classList.toggle('hidden'))

        menu.classList.toggle('hidden')
        header.classList.toggle('on')

        items.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.add('hidden')
                header.classList.remove('on')
                icons.forEach(icon => icon.classList.toggle('hidden'))
                txt.forEach(text => text.classList.toggle('hidden'))
            })
        })
    })
}