export default function HeroBg() {
    const hero = document.querySelector('.page-hero')

    if (!hero) {
        return
    }

    const background = hero.querySelector('.bg')

    const image = background.querySelector('img')
    
    background.style.backgroundImage = `url('${image.src}')`

}