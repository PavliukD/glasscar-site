export default function InfoMobile() {
    const drop = document.querySelector('[data-popup="info-mobile"]')
    const buttons = document.querySelectorAll('[data-info="mobile"]')
    const closeWrap = drop.querySelector('.popup--title')
    const close = closeWrap.querySelector('button')

    const backdrop = document.querySelector('.backdrop')

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
}