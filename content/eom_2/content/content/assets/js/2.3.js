function validate(iframe) {
    const styles = window.getComputedStyle(iframe.getElementsByTagName("h1")[0])
    if (
        styles.marginTop != "0px" ||
        styles.marginRight != "0px" ||
        styles.marginBottom != "0px" ||
        styles.marginLeft != "0px" ||
        styles.paddingTop != "0px" ||
        styles.paddingRight != "0px" ||
        styles.paddingBottom != "0px" ||
        styles.paddingLeft != "0px"
    ) {
        return true
    }
    else {
        return false
    }
}

document.addEventListener('DOMContentLoaded', () => commonJs(validate), false);