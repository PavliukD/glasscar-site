export default function BannerSlider() {
    const sliders = document.querySelectorAll('.block--banner-slider')

    if (!sliders) {
        return
    }

    sliders.forEach(slider => {
        const list = slider.querySelector('.block--banner-list')
        const items = list.querySelectorAll('li')
        
        const pages = slider.querySelector('.slider-pages')
        const inner = pages.innerHTML
        
        pages.innerHTML = `${inner}/${list.children.length}`

        const leftBtn = slider.querySelector('.left')
        const rightBtn = slider.querySelector('.right')

        const page = slider.querySelector('.slider-pages-actual')

        let transform = 0

        leftBtn.addEventListener('click', () => {
            if (transform === 0) {
                return
            }

            transform--

            items.forEach(item => {
                const transformation = transform * list.clientWidth
                item.style.transform = `translateX(-${transformation}px)`

            })

            page.innerText = `${transform + 1}`
        })

        rightBtn.addEventListener('click', () => {
            if (transform === items.length - 1) {
                return
            }

            transform++

            items.forEach(item => {
                const transformation = transform * list.clientWidth
                item.style.transform = `translateX(-${transformation}px)`

            })

            page.innerText = `${transform + 1}`

        })
    })
}
