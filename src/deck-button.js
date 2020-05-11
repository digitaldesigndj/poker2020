import $ from "jquery"

import $one_card from "./card.js"

const $DeckButton = ($body) => {
    const $ButtonElement = $("<button>").text("get deck & 5 cards")
    const onDeckButtonClick = async function () {
        $ButtonElement.attr("disabled", "disabled")
        let deck_response
        try {
            deck_response = await fetch("http://localhost:3000/deck")
        } catch (err) {
            console.error(err)
        }
        if (deck_response && deck_response.redirected === true) {
            //         console.log(deck_response.url)
            const response = await fetch(deck_response.url + "/cards/5")
            //         console.log(response)
            const cards = await response.json()

            //         console.log(cards)
            $ButtonElement.off("click", onDeckButtonClick).remove()
            cards.forEach((card) => {
                $body.append($one_card(card))
            })
        } else {
            $body.append(
                "error<script type='text/javascript'>alert('connect to card server fail, reloading in 5s'); setTimeout( ()=> window.location.reload(), 5000)</script>"
            )
        }
    }
    $ButtonElement.on("click", onDeckButtonClick)
    return $ButtonElement
}

export default $DeckButton
