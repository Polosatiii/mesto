export class Section {
    constructor({items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector)
        this._items = items
        this._renderer = renderer
    }
    
    rendderItems() {
        this._items.forEach(data => {
            this._renderer(data, this._container)
    })
}

    addItem(element) {
        this._container.append(element)
    }
}
