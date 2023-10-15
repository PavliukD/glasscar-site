export default function Brands() {
    const base = document.querySelector('.segment--content-list')

    if (!base) {
        return
    }

    const cathegoriesList = document.querySelector('.segment--cathegories-list')
    const cathegories = cathegoriesList.querySelectorAll('li')
    const massive = [...cathegories]

    const bannersLists = base.querySelectorAll('.segment--brands-list')
    const topLists = base.querySelectorAll('.segment--top-four-list')
    

    const banner = document.querySelector('.segment--brand')

    let counter = 0
    let cathNumber = 0
    let imagesList = []

    const active = cathegoriesList.querySelector('.active')

    bannersLists.forEach(bannerList => {
                if (bannerList.dataset.class !== active.dataset.class) {
                    return
                }
                const data = [...bannerList.children]
                const imgs = data.map(item => item.firstElementChild.src)
                imagesList = [...imgs]
                banner.style.backgroundImage = `url('${imagesList[0]}')`
            })
    
    let intervalID = setInterval(ChangeImg, 3000)
    
    cathegories.forEach(cathegory => {
        cathegory.addEventListener('click', () => {
            cathegories.forEach(cath => {
                cath.classList.remove('active')
            })
            clearInterval(intervalID)
            cathegory.classList.add('active')
            cathNumber = massive.indexOf(cathegory)
            bannersLists.forEach(bannerList => {
                if (bannerList.dataset.class !== cathegory.dataset.class) {
                    return
                }
                const data = [...bannerList.children]
                const imgs = data.map(item => item.firstElementChild.src)
                imagesList = [...imgs]
                banner.style.backgroundImage = `url('${imagesList[0]}')`
                counter = 0
            })
            topLists.forEach(list => {
                if (list.dataset.class !== cathegory.dataset.class) {
                    list.classList.remove('active')
                    return
                }
                list.classList.add('active')
            })
            intervalID = setInterval(ChangeImg, 3000)
        })
    })

    

    

    function ChangeImg() {
        if (counter === imagesList.length - 1) {
            counter = 0
            banner.style.backgroundImage = `url('${imagesList[counter]}')`
            return
        }
        counter++
        banner.style.backgroundImage = `url('${imagesList[counter]}')`
    }
}