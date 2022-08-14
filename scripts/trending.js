let container = document.getElementById("container")
let video = JSON.parse(localStorage.getItem("trend"));
console.log(video)
let div = document.createElement("div")
let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${video.id}`
iframe.style.width="1350px"
iframe.style.height="600px"
// iframe.style.marginLeft="200px"
// iframe.style.marginTop="100px"
iframe.allow="fullscreen"

div.append(iframe)
container.append(div)


