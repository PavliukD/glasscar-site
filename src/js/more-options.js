export default function MoreOptions() {
    const wind = document.querySelector('.install')
    const form = wind.querySelector('form')
    const formHeight = form.clientHeight

    const button = wind.querySelector('.more-options')
    const list = wind.querySelector('.popup-otions-list')

    const txt = button.querySelectorAll('span')
    const icons = button.querySelectorAll('svg')

    button.addEventListener('click', () => {
        button.classList.toggle('on')
        txt.forEach(text => text.classList.toggle('hidden'))
        icons.forEach(icon => icon.classList.toggle('hidden'))

        hideElement(list)
        hideElement(form)
    })
}

function hideElement(element) {

    element.classList.toggle('hidden')

    if (element.classList.contains('hidden')) {
        element.style.height = '0px'
        return
    }

    element.style.height = `${element.scrollHeight}px`
}