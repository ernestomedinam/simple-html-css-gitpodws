window.onload = () => {
    let name = prompt("What's your name?");
    if (name == "") {
        name = "friend"
    }
    document.getElementById("salute").innerHTML = "Hello " + name + "!";
}