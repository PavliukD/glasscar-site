export default function SectionCatalog() {
    const catalog = document.querySelector('.catalog')

    if (!catalog) {
        return
    }

    const list = catalog.querySelector('.catalog-cars')

    const items = [...list.children]

        items.forEach(item => {
        item.style.height = `${item.scrollHeight}px`
    })

}