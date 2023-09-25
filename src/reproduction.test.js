import { importFromString } from "module-from-string";

test('error reproduction', async () => {
    const javascript = `
const attributes = {"some":"thing"};
let html = "markdown parser result";

export {attributes, html};
`;

    const module = await importFromString(javascript, {filename: 'dynamicFile.ignore.js'});

    expect(module).toEqual({
        html: 'markdown parser result',
        attributes: {some: 'thing'}
    });
});
