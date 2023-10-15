import Thnx from "./thnx"

export default function Request() {
    const drop = document.querySelector('.request')
    const buttons = document.querySelectorAll('[data-request=""]')
    const closeWrap = drop.querySelector('.popup--title')
    const close = closeWrap.querySelector('button')

    const backdrop = document.querySelector('.backdrop')

    const callButton = drop.querySelector('.call')
    const input = drop.querySelector('.install--name')


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            drop.classList.remove('hidden')
            backdrop.classList.remove('hidden')
            
        })
    })

    close.addEventListener('click', () => {
        drop.classList.add('hidden')
        backdrop.classList.add('hidden')
    })

    callButton.addEventListener('click', () => {
        drop.classList.add('hidden')
        const name = input.value
        Thnx(name, false)
    })
}