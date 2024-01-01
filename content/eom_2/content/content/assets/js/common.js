commonJs = (validateFunc) => {
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

  const htmlArea = document.getElementById("area")
  const cssArea = document.getElementById("css-area")
  const iframe = document.getElementById("innerHtml-wrapper").contentWindow.document

  const button = document.getElementById("button-check")
  const body = document.getElementsByTagName("body")[0]

  changeIframe()

  htmlArea.addEventListener("input", () => {
    changeIframe()
    body.classList = ""
  })

  cssArea.addEventListener("input", (e) => {
    changeIframe()
    body.classList = ""
  })

  button.addEventListener("click", () => {
    if (validateFunc(iframe)) {
      body.classList = "message-ok"
    }
    else {
      body.classList = "message-notok"
    }
  })

  function changeIframe() {
    const html = htmlArea.value.replace("<style></style>", `<style>${cssArea.value}</style>`)
    iframe.open()
    iframe.write(html)
    iframe.close()
  }
}