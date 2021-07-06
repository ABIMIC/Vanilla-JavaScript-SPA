import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    /* async is used proabably if you want to fectch the html from the server side */

    async getHtml() {
        return `
            <h1>Welcome back, Raymond</h1>
            <p>
                This is where you learn new languages
            </p>
            <p>
                <a href="/posts" data-link>View recent languages</a>.
            </p>
        `;
    }
}