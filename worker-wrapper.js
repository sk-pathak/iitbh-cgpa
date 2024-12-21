try {
    if('function' === typeof importScripts) {
        importScripts("browser-polyfill.js", "background.js");
    }
} catch (e) {
    console.log(e);
}
