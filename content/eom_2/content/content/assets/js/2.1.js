function validate(iframe) {
  const bColor = window.getComputedStyle(iframe.querySelector("body")).backgroundColor
  console.log(bColor)
  if (bColor != "rgb(255, 255, 255)") {
    return true
  }
  else {
    return false
  }
}

document.addEventListener('DOMContentLoaded', () => commonJs(validate), false);