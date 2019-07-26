import { assert } from "chai";

// const protocol = "http"
// const host = process.env.APP_HOST || "localhost";
// const port = "3000";
// const toolUrl = `${protocol}://${host}:${port}`;


describe('local docker test', () => {
   
    it('page should be loaded', () => {
        browser.url('http://frontend');
        let title = $('body > app-root > h1');
        assert.isTrue(title.getText().includes('wdio-frontend'));
    })
});