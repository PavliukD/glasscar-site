export default function CalculatorSlider() {
    const control = document.querySelector('.calculator-slider')

    if (!control) {
        return
    }

    const buttons = control.querySelectorAll('button')

    const list = document.querySelector('[data-slider="calculator-slider"]')
    const items = list.querySelectorAll('.option')
    const totalWidth = list.scrollWidth
    const visibleWidth = list.clientWidth

    const nuEto = (totalWidth - visibleWidth) / items.length

    list.addEventListener('scroll', () => {
        const visibleEl = list.scrollLeft / nuEto

        if (!buttons[Math.trunc(visibleEl)]) {
            return
        }
        buttons.forEach(button => button.classList.remove('active'))
        buttons[Math.trunc(visibleEl)].classList.add('active')
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const mass = [...buttons]
            list.scrollLeft = nuEto * (mass.indexOf(button) + 1)

            buttons.forEach(btn => btn.classList.remove('active'))
            button.classList.add('active')
        })
    })
}