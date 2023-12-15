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
  const iframe = document.getElementById("innerHtml-wrapper").contentWindow.document
  const style = iframe.getElementById("style")
  const button = document.getElementById("button-check")
  const message = document.getElementById("message")
  const body = document.getElementsByTagName("body")[0]
  iframe.open()
  iframe.write(area.value)
  iframe.close()

  area.addEventListener("input", (e) => {
    iframe.open()
    iframe.write(e.target.value)
    iframe.close()
    body.classList = ""
  })

  cssArea.addEventListener("input", (e) => {
    style = e.target.value
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