export default function Manufacturer() {
    const list = document.querySelector('.calculator--manufacturer-list')

    if (!list) {
        return
    }

    const items = list.querySelectorAll('li')

    items.forEach(item => {
        const button = item.querySelector('.add')
        const text = item.querySelector('p')

        const txts = button.querySelectorAll('span')

        const icons = button.querySelectorAll('.cross')
        const arrow = button.querySelector('.arrow')

        button.addEventListener('click', () => {
            text.classList.toggle('active')
            button.classList.toggle('active')
            arrow.classList.toggle('hidden')
            icons.forEach(icon => icon.classList.toggle('hidden'))
            txts.forEach(txt => txt.classList.toggle('hidden'))
        })
    })
}