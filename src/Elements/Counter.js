class Counter extends HTMLElement {

    static startTime = 0;
    static endTime = 0;

    constructor() {
        super();


        this.startTime = new Date( this.getAttribute("start")).getTime()
        this.endTime = new Date( this.getAttribute("end")).getTime()
    }

    static get observedAttributes() {
        return ["start", "end"];
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
        <h3 id="label"></h3>
        </div>`
                          
        setInterval(() => {
        const now = new Date().getTime()

        const distanceStart = this.startTime - now
        const distanceEnd = this.endTime - now

        const beforeEvent = distanceStart > 0

        const distance = beforeEvent ? distanceStart : distanceEnd

        console.log(beforeEvent)

        const time = [Math.floor(distance / (1000 * 60 * 60 * 24)),
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            Math.floor((distance % (1000 * 60)) / 1000)]
            this.querySelector('#countdown').innerHTML = `<b>${time[0]} Days, ${time[1]} Hours, ${time[2]} Minutes, ${time[3]} Seconds</b>`;
            this.querySelector('#label').innerHTML = beforeEvent ? "Until Our Next Event" : "Until Event Ends"
        }, 1000);
    }

}

customElements.define('test-counter', Counter);