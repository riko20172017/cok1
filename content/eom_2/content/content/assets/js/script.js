document.addEventListener('DOMContentLoaded', main, false);

function main() {
  const bHtml = document.getElementById("button-html")
  const bCss = document.getElementById("button-css")
  const tabs = document.getElementById("tab-html")


  bHtml.addEventListener("click", () => {
    tabs.classList.add("html")
    tabs.classList.remove("css")
  })

  bCss.addEventListener("click", () => {
    tabs.classList.add("css")
    tabs.classList.remove("html")
  })


  const cssArea = document.getElementById("css-area")
  const inner = document.getElementById("innerHtml-wrapper")
  const style = document.getElementById("styles")
  const button = document.getElementById("button-check")
  const message = document.getElementById("message")
  const body = document.getElementsByTagName("body")[0]
  inner.innerHTML = area.value

  area.addEventListener("input", (e) => {
    inner.innerHTML = e.target.value
    body.classList = ""
  })

  cssArea.addEventListener("input", (e) => {
    style.innerHTML = e.target.value
    body.classList = ""
  })

  button.addEventListener("click", (e) => {
    const list = document.getElementsByClassName("advantages-list")[0]
    if (list.children.length >= 4) {
      body.classList = "message-notok"
    }
    else {
      body.classList = "message-ok"
    }
  })

}