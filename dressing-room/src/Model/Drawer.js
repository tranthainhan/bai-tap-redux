export default class Drawer {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.ListItem = [];
    }
    addItem = (item) => {
        this.ListItem = [...this.ListItem, item];
    }
}