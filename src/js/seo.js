export default function Seo() {
    const base = document.querySelector('.seo')

    if (!base) {
        return
    }

    const list = base.querySelector('.seo-list')
    const button = base.querySelector('.seo-button')
    const height = 240


    button.addEventListener('click', () => {
        const inserts = button.querySelectorAll('div')
        

        inserts.forEach(ins => {
            ins.classList.toggle('active')
        })

        list.classList.toggle('active')

        if (!list.classList.contains('active')) {
            list.style.height = `${height}px`
            return
        }
        list.style.height = `${list.scrollHeight}px`
    })
}