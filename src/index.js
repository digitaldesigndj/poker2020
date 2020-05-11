console.log("hello console");

function component() {
    const element = document.createElement("div");
    element.innerHTML = ["Hello", "webpack", " this is a website!"].join(" ");
    return element;
}
document.body.appendChild(component());
