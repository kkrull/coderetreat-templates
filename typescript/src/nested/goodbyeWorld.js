export default class GoodbyeWorld {
    constructor(name) {
        this.name = name
    }

    message() {
        return `Goodbye ${this.name.orElse("world")}`
    }
}