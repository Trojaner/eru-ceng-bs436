import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import jsdom from 'jsdom';

export function setupDomEnvironment(url) {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html><body></body></html>', { url });
    const { window } = dom;

    (global as any).window = window;
    (global as any).document = window.document;
    (global as any).navigator = { userAgent: 'node.js' };

    copyProps(window, global);
    configure({ adapter: new Adapter() });
}

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter((prop) => typeof target[prop] === 'undefined')
        .reduce((result, prop) => ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        }), {});

    Object.defineProperties(target, props);
}

setupDomEnvironment('http://localhost:80/');