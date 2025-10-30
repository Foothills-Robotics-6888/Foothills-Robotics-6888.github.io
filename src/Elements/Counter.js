class Counter extends HTMLElement {

    static observedAttributes = [];

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="mainPoint">
            <h1>&nbsp;</h1>
            <h3>Until Out Next Event</h3>
        </div>`;
    }

}

customElements.define('test-counter', Counter);