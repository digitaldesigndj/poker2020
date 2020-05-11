import $ from "jquery"

import $DeckButton from "./deck-button"

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

$body.append($DeckButton($body))

// document.body.appendChild(messageBox("This is the message"))
