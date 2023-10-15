import Thnx from "./thnx"

export default function CalculatorPagination() {
    const wrap = document.querySelector('.calculator')

    if (!wrap) {
        return
    }

    const cont = wrap.querySelector('.container')
    const list = cont.children[0]
    const items = list.children

    const pagination = wrap.querySelector('.calculator-pagination')

    const left = pagination.querySelector('.left')
    const right = pagination.querySelector('.right')

    const current = pagination.querySelector('.current')
    const popup = document.querySelector('[data-thnx=""]')
    

    let counter = 0

    right.addEventListener('click', () => {
        if (counter === 4) {
            const nameInput = document.querySelector('[data-calculator="name"]')
            const name = nameInput.value
            Thnx(name, true)
            counter = 0
            for (let i = 0; i < items.length; i++){
                items[i].style.transform = `translateX(-${list.clientWidth * counter}px)`
            }
            current.innerText = `0${counter + 1}`
            left.classList.remove('active')
            return
        }
        counter++
        for (let i = 0; i < items.length; i++){
            items[i].style.transform = `translateX(-${list.clientWidth * counter}px)`
        }
        current.innerText = `0${counter + 1}`
        left.classList.add('active')
    })

    left.addEventListener('click', () => {
        if (counter === 0) {
            return
        }
        counter--
        for (let i = 0; i < items.length; i++){
            items[i].style.transform = `translateX(-${list.clientWidth * counter}px)`
        }
        current.innerText = `0${counter + 1}`
        if (counter === 0) {
            left.classList.remove('active')
        }
    })
}