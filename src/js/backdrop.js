export default function Backdrop() {
    const popups = document.querySelectorAll('.popup')
    const backdrop = document.querySelector('.backdrop')
    const thnx = document.querySelectorAll('.thnx-popup')

    backdrop.addEventListener('click', (e) => {
        popups.forEach(popup => popup.classList.add('hidden'))
        thnx.forEach(thx => thx.classList.add('hidden'))
        backdrop.classList.add('hidden')
    })

}