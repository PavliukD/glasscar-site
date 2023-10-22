export default function Header() {
    const header = document.querySelector('.header')

    const catalogBtn = header.querySelector('.salary')
    const catalogMenu = document.querySelector('.menu-catalog')

    console.dir(catalogMenu)

    const aboutBtn = header.querySelector('.about-btn')
    const aboutMenu = document.querySelector('.menu-about')

    catalogBtn.addEventListener('click', () => {
        catalogMenu.classList.toggle('open')

        if (!catalogMenu.classList.contains('open')) {
            catalogMenu.style.height = '0px'
            return
        }

        catalogMenu.style.height = `${catalogMenu.scrollHeight}px`
    })

    aboutBtn.addEventListener('click', () => {
        aboutMenu.classList.toggle('open')

        if (!aboutMenu.classList.contains('open')) {
            aboutMenu.style.height = '0px'
            return
        }

        aboutMenu.style.height = `${aboutMenu.scrollHeight}px`
    })
}
