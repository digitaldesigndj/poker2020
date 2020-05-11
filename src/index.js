console.log("hello console")

function component() {
    const element = document.createElement("div")
    element.innerHTML = ["Hello", "webpack", " this is a website!"].join(" ")
    return element
}

function button() {
    const element = document.createElement("button")
    element.innerHTML = "get deck"
    // mess
    return element
}

document.body.appendChild(component())

const DeckButton = button()
DeckButton.addEventListener("click", () => {
    console.log("BUTTON")

    window.history.pushState({}, "Get Deck", "/deck")
})

document.body.appendChild(DeckButton)
