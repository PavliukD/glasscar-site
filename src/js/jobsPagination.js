export default function JobsPagination() {
    const section = document.querySelector('.jobs')

    if (!section) {
        return
    }

    const list = section.querySelector('ul')
    const items = list.querySelectorAll('li')

    const width = items[0].clientWidth

    if (!items[1]) {
        return
    }

    const gap = items[1].offsetLeft - items[0].offsetLeft - items[0].clientWidth

    const pagination = section.querySelector('.calculator-pagination')

    const left = pagination.querySelector('.left')
    const right = pagination.querySelector('.right')

    const current = pagination.querySelector('.current')
    const total = pagination.querySelector('.total')

    JobsTotal(total, items.length)

    let counter = 0

    right.addEventListener('click', () => {
        if (counter === items.length - 1) {
            return
        }

        counter++

        items.forEach(item => {
            item.style.transform = `translateX(-${(counter * width) + (counter * gap)}px)`
        })
        const page  = counter + 1
        JobsTotal(current, page)
        left.classList.add('active')
    })

    left.addEventListener('click', () => {
        if (counter === 0) {
            return
        }

        counter--

        items.forEach(item => {
            item.style.transform = `translateX(-${(counter * width) + (counter * gap)}px)`
        })
        const page  = counter + 1
        JobsTotal(current, page)
        if (counter === 0) {
            left.classList.remove('active')
        }
    })

}

function JobsTotal(el, total) {
    if (total < 10) {
        el.innerText = `0${total}`
        return
    }
    el.innerText = `${total}`
}
