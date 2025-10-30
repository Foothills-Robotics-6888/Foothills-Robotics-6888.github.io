class Counter extends HTMLElement {

    static startTime = 0;
    static endTime = 0;

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["start", "end"];
    };

    attributechangedCallback(name, oldValue, newValue) {

        if (name === "start") {
            this.startTime = new Date(newValue).getTime();
        } else if (name === "end") {
            this.endTime = new Date(newValue).getTime();
        }

    }

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `<h1 id="countdown">&nbsp;</h1>
                          <h3>until our next event</h3>`
                          
                          setInterval(() => {
                            const now = new Date().getTime()
                            const distance = this.endTime - now
                            const time = [Math.floor(distance / (1000 * 60 * 60 * 24)),
                                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                                Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                                 Math.floor((distance % (1000 * 60)) / 1000)]
                                 this.querySelector("#countdown").innerHTML = `<b>${time[0]}:${time[1]}:${time[2]}:${time[3]}</b>`
                                 }, 1000);
    }

}

customElements.define('test-counter', Counter);