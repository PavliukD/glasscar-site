export default function Language(){
    const swit = document.querySelector('.header--language-switch')

    let buttons = swit.querySelectorAll('a')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                return
            }
            buttons.forEach(btn => {
                btn.classList.toggle('active')
            })
        })
    })
}