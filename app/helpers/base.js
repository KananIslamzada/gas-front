

class Base {
    constructor() {

    }

    async wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }
}


const base = new Base();

export default base;