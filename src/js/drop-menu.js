export default function DropMenu() {
    const wraps = document.querySelectorAll('.calculator--drop-menu-wrap')

    wraps.forEach(wrap => {
        const input = wrap.querySelector('input')
        const menu = wrap.querySelector('.calculator-drop-menu')
        const items = menu.querySelectorAll('li')
        const inputWrap = wrap.querySelector('.calculator--input-wrap')
        const notification = inputWrap.querySelector('.results')
        const initText = notification.innerText
        const error = inputWrap.querySelector('.error')

        input.addEventListener('input', () => {
            
            items.forEach(item => {
                const txt = item.querySelector('span')
                const text = txt.innerText
                const checkText = text.substring(0, input.value.length)
                const outerText = text.substring(input.value.length, text.length)
                
                if (input.value.toLowerCase() === checkText.toLowerCase()) {
                    item.classList.remove('hidden')
                    item.classList.add('count')
                    txt.innerHTML = `<mark>${checkText}</mark>${outerText}`
                    if (input.value.length === 0) {
                        item.classList.remove('count')
                        return
                    }
                    item.classList.add('count')
                    return
                }
                item.classList.add('hidden')
                item.classList.remove('count')
            })

            const counterList = menu.querySelectorAll('.count')

            SearchNotification(counterList.length, notification, initText)
        })

        input.addEventListener('click', () => {
            items.forEach(item => item.classList.toggle('hidden'))
        })

        items.forEach(item => {
            item.addEventListener('click', () => {
                const txt = item.querySelector('span')
                const text = txt.innerText

                input.value = text

                items.forEach(itm => itm.classList.add('hidden'))
            })
        })
    })
}

function SearchNotification(length, notification, init) {
    if (length === 0) {
        notification.classList.add('hidden')
        return
    }
    notification.classList.remove('hidden')
    notification.innerText = `${length} ${init}`
}