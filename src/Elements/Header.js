class WebHeader extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    static nav = `<nav>
        <a href="index.html">Home</a>
        <a href="pages/about.html">About</a>
        <a href="pages/blog.html">Blog</a>
        <a href="pages/contact.html">Contact</a>
        <a href="pages/events.html">Events</a>
    </nav>`;

    render() {
        this.innerHTML = `<header>
            ${WebHeader.nav}
        </header>`;
    }
}

customElements.define('web-header', WebHeader, { extends: "header" });