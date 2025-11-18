/*class WebHeader extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    static nav = `<nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
        <a href="events.html">Events</a>
    </nav>`;

    render() {
        this.innerHTML = `<header>
            ${WebHeader.nav}
        </header>`;
    }
}

customElements.define('web-header', WebHeader, { extends: "header" });*/
let header = document.createElement("header");
header.innerHTML = `<nav id="darkshade">
        <a href="index.html" class="glassMorph">Home</a>
        <a href="about.html" class="glassMorph">About</a>
        <a href="blog.html" class="glassMorph">Blog</a>
        <a href="contact.html" class="glassMorph">Contact</a>
        <a href="events.html" class="glassMorph">Events</a>
    </nav>`;
header.id = "headpic";
document.body.insertBefore(header, document.getElementById("main"))