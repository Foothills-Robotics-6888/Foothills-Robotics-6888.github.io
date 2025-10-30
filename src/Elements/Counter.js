class Counter extends HTMLElement {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["start", "end"];
    };

    attributechangedCallback(name, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        setInterval(this.render, 1000);
        this.render();
    }

    render() {

        const countdowndates = [new Date(this.getAttribute("start")).getTime(), new Date(this.getAttribute("end")).getTime()];



        this.innerHTML = `<div class="mainPoint">
            <h1>&nbsp;</h1>
            <h3>Until Out Next Event</h3>
        </div>`;
    }

}

customElements.define('test-counter', Counter);