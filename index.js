window.onload = () => {
    let name = prompt("What's your name?");
    if (name == "" || name == null) {
        name = "friend"
    }
    document.getElementById("salute").innerHTML = "Hello " + name + "!";
}