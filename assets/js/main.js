document.addEventListener('DOMContentLoaded', function () {

    document.querySelector("#mClose-btn").addEventListener("click", () => {
        document.querySelector("#modal").className = ""
    })
    document.querySelector("#content-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show", "content")
    })
    document.querySelector("#keyword-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show", "keyword")
    })
    Array.from(document.getElementsByClassName("guidance-btn")).forEach((element, i) => {
        element.addEventListener("click", () => {
            document.querySelector("#modal").classList.add("show", `guidance-${i+1}`)
        })
    });


}, false);