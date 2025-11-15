var count = 0
var m = document.getElementById("Measure")
var es = document.getElementById("Estimate")

function update() {
  const lastcount = count
  count = 0
  m.value = lastcount
  es.value = lastcount * 20
}

window.addEventListener("keydown", e => {
  count++
})

setInterval(update, interval * 1000)