const button = document.getElementById("button")
let paragraph = document.createElement("p")

button.addEventListener("click", () => {
    paragraph.textContent = "Nothing to press"
    document.body.appendChild(paragraph)
})