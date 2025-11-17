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
header.innerHTML = `<nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="blog.html">Blog</a>
        <a href="contact.html">Contact</a>
        <a href="events.html">Events</a>
    </nav>`;
header.id = "headpic";
document.body.insertBefore(header, document.getElementById("main"))