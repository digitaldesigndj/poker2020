import $ from "jquery"

const $one_card = (cardInfo) => {
    const $element = $("<div>")
    const { style } = $element[0]
    $element.text(cardInfo)
    style.border = "1px solid black"
    style.borderRadius = "1rem"
    style.padding = "2rem 1rem"
    style.margin = "0.25rem"
    style.background = "#FDFDFF"
    style.float = "left"
    style.fontSize = "1rem"
    return $element
}
export default $one_card
