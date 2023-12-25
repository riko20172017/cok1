import { main } from "./common.js"

function validate(iframe) {
    const fontSize = window.getComputedStyle(iframe.getElementsByTagName("h1")[0]).fontSize
    if (fontSize == "40px") {
        return true
    }
    else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => main(validate), false);