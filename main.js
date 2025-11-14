var stage = "initial"
var count = 0
var cnt = document.getElementById("BodyContainer")

function end_perform() {
  stage = "finish"
  cnt.innerHTML = "<h1>Finished</h1>" + `<p>${count} ks/min</p>` + `<p>${count / 60} ks/sec</p>` + `<p>Max ${count / 16 * 4} BPM in 16th notes.</p>` + `<p>Max ${count / 8 * 4} BPM in 8th notes.`
}

function start_perform() {
  stage = "perform"
}

function warmup() {
  stage = "warmup"
  setTimeout(start_perform, 10000)
  setTimeout(end_perform, 80000)
}

function setup() {
  cnt.innerHTML = "<p>10sec to warm up.</p><p>60sec to perform.</p>"
  warmup()
}

window.addEventListener("keydown", e => {
  switch (stage) {
    case "perform":
      count++
      break
    case "initial":
      setup()
      break
    default:
      null
  }
})