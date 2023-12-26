import { main } from "./common.js"

function validate(iframe) {
    const styles = window.getComputedStyle(iframe.getElementsByTagName("h1")[0])
    if (
        styles.color != "rgba(158, 158, 158, 0.35)"
    ) {
        return true
    }
    else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => main(validate), false);