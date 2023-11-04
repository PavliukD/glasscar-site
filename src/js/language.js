export default function Language(){
    const swit = document.querySelector('.header--language-switch')

    let buttons = swit.querySelectorAll('a')

    let activeBtn = swit.querySelector('.active')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active')) {
                return
            }
            buttons.forEach(btn => {
                btn.classList.toggle('active')
            })
            activeBtn = button
        })
        button.addEventListener('mouseover', () => {
            if (button.classList.contains('active')) {
                return
            }
            buttons.forEach(btn => btn.classList.toggle('disabled'))
            // if (button.classList.contains('active')) {
            //     button.classList.toggle('active')
            //     return
            // }
            // button.classList.toggle('disabled')
        })
        button.addEventListener('mouseout', () => {
            if (button.classList.contains('active')) {
                // button.classList.toggle('active')
                return
            }
            buttons.forEach(btn => btn.classList.toggle('disabled'))

            // button.classList.toggle('disabled')
        })
    })
}