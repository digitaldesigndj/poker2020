import $ from "jquery"

console.log("hello console")

console.log($)

import one_card from "./card.js"

const component = () =>
    $("<div>").html(["Hello", "webpack", " this is a website!"].join(" "))

const $body = $("body")
$body.append(component)

// const messageBox = (message) => {
//     const container = document.createElement("div")
//     const p = document.createElement("p")
//     container.className = "message-box"
//     p.innerHTML = message
//     container.appendChild(p)
//     return container
// }

const button = (id) => $("<button>").attr("id", id).text("get deck & 5 cards")
const DeckButton = button("deal-button")
const onDeckButtonClick = async function () {
    const deck_response = await fetch("http://localhost:3000/deck")
    if (deck_response.redirected === true) {
        //         console.log(deck_response.url)
        const response = await fetch(deck_response.url + "/cards/5")
        //         console.log(response)
        const cards = await response.json()
        //         console.log(cards)
        DeckButton.off("click", onDeckButtonClick)
        DeckButton.remove()
        cards.forEach((card) => {
            $body.append(one_card(card))
        })
    } else {
        return "error"
    }
}
DeckButton.on("click", onDeckButtonClick)

$body.append(DeckButton)

// document.body.appendChild(messageBox("This is the message"))
