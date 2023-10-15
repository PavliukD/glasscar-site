export default function calculatorLists() {
    const calculator = document.querySelector('.calculator')

    if (!calculator) {
        return
    }

    const wrap = calculator.querySelector('.final')

    const lists = wrap.querySelectorAll('ul')
    const buttons = wrap.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            lists.forEach(list => {
                if (list.dataset.for !== button.dataset.for) {
                    list.classList.add('hidden')
                    return
                }
                list.classList.toggle('hidden')
                if (list.classList.contains('hidden')) {
                    list.style.height = '0px'
                    return
                }
                list.style.height = `${list.scrollHeight}px`
                return
                
            })
        })
    })
}