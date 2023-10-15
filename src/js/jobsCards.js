export default function JobsCards() {
    const section = document.querySelector('.jobs')

    if (!section) {
        return
    }

    const list = section.querySelector('ul')
    const items = list.querySelectorAll('li')

    items.forEach(item => {

        const cards = item.querySelectorAll('div')
        const text = item.querySelector('p')
        const btn = item.querySelector('button')

        const txts = btn.querySelectorAll('span')

        const beforeCrd = item.querySelector('.before')
        const afterCrd = item.querySelector('.after')

        let transform = 0

        const width = item.offsetWidth

        btn.addEventListener('click', () => {
            text.classList.toggle('visible')
            txts.forEach(txt => {
                txt.classList.toggle('hidden')
                if (txt.classList.contains('hidden')) {
                    txt.style.width = "0px"
                    return
                }
                txt.style.width = `${txt.scrollWidth}px`
            })

            if (transform === 0) {
                transform = 1
                cards.forEach(card => {
                    card.style.transform = `translateX(-${width * transform}px)`
                })
                return
            }

            transform = 0

            cards.forEach(card => {
                card.style.transform = `translateX(-${width * transform}px)`
            })

        })
    })
}