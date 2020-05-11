import JQuery from "jquery"

console.log("hello console")

console.log(JQuery)

function component() {
    const element = document.createElement("div")
    element.innerHTML = ["Hello", "webpack", " this is a website!"].join(" ")
    return element
}

function button(id) {
    const element = document.createElement("button")
    element.id = id
    element.innerHTML = "get deck & 5 cards"
    return element
}

const one_card = (cardInfo) => {
    const element = document.createElement("span")
    element.innerHTML = cardInfo
    return element
}

document.body.appendChild(component())

const DeckButton = button("deal-button")
const onDeckButtonClick = async function () {
    console.log("BUTTON")
    const deck_response = await fetch("http://localhost:3000/deck")
    if (deck_response.redirected === true) {
        console.log(deck_response.url)
        const response = await fetch(deck_response.url + "/cards/5")
        console.log(response)
        const cards = await response.json()
        console.log(cards)
        DeckButton.removeEventListener("click", onDeckButtonClick)
        DeckButton.remove()
        cards.forEach((card) => {
            document.body.appendChild(one_card(card))
        })
    } else {
        return "error"
    }
}
DeckButton.addEventListener("click", onDeckButtonClick)

document.body.appendChild(DeckButton)

const messageBox = (message) => {
    const container = document.createElement("div")
    const p = document.createElement("p")
    container.className = "message-box"
    p.innerHTML = message
    container.appendChild(p)
    return container
}

document.body.appendChild(messageBox("This is the message"))
