export default function Options() {
    const options = document.querySelectorAll('.option')
    options.forEach(option => {
        const button = option.querySelector('.option-button')
        const icons = button.querySelectorAll('svg')
        option.addEventListener('click', () => {
            option.classList.toggle('on')
            icons.forEach(icon => icon.classList.toggle('hidden'))
        })
    })
}