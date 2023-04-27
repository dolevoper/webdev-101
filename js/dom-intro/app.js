const helloWorld = document.getElementById("hello-world");
helloWorld.innerHTML = "<h1>hello world</h1>";

refreshTime();

const refreshTimeButton = document.getElementById("refresh-time");
refreshTimeButton.addEventListener("click", refreshTime);

function refreshTime() {
    const currentTime = document.getElementById("current-time");
    currentTime.innerHTML = "<h2>" + new Date().toString() + "</h2>";
}
