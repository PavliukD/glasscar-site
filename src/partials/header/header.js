export default function Header() {
    const header = document.querySelector('.header')
    const menu = document.querySelector('.menu')

    const catalogBtn = header.querySelector('.salary')
    const catalogMenu = document.querySelector('.menu-catalog')
    const catalogMobileBtn = menu.querySelector('.sell-glass')
    const catalogMenuHeight = catalogMenu.scrollHeight


    const aboutBtn = header.querySelector('.about-btn')
    const aboutMenu = document.querySelector('.menu-about')
    const aboutMobileBtn = menu.querySelector('.about-us')
    const aboutMenuHeight = aboutMenu.scrollHeight

    catalogBtn.addEventListener('click', () => {
        catalogMenu.classList.toggle('open')

        if (!catalogMenu.classList.contains('open')) {
            catalogMenu.style.height = '0px'
            return
        }

        catalogMenu.style.height = `${catalogMenu.scrollHeight}px`
    })
    
    catalogMobileBtn.addEventListener('click', () => {
        catalogMenu.classList.toggle('open')

        if (!catalogMenu.classList.contains('open')) {
            catalogMenu.style.height = '0px'
            return
        }

        catalogMenu.style.height = `fit-content`
        // catalogMenu.style.height = `${window.innerHeight}px`
    })

    aboutBtn.addEventListener('click', () => {
        aboutMenu.classList.toggle('open')

        if (!aboutMenu.classList.contains('open')) {
            aboutMenu.style.height = '0px'
            return
        }

        aboutMenu.style.height = `${aboutMenu.scrollHeight}px`
    })

    aboutMobileBtn.addEventListener('click', () => {
        aboutMenu.classList.toggle('open')
        console.dir(aboutMenu)

        if (!aboutMenu.classList.contains('open')) {
            aboutMenu.style.height = '0px'
            return
        }


        aboutMenu.style.height = `fit-content`

    })
}
