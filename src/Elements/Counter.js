class Counter extends HTMLElement {

    static startTime = 0;
    static endTime = 0;

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["start"];
    };

    attributechangedCallback(name, oldValue, newValue) {

        console.log(name)
    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `<div class="mainPoint">
        <h1 id="countdown">&nbsp;</h1>
        <h3>until our next event</h3>
        </div>`
                          
        setInterval(() => {
        const now = new Date().getTime()
        const distance = this.endTime - now
        const time = [Math.floor(distance / (1000 * 60 * 60 * 24)),
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            Math.floor((distance % (1000 * 60)) / 1000)]
            this.querySelector('#countdown').innerHTML = `${this.endTime}`;
        }, 1000);
    }

}

customElements.define('test-counter', Counter);