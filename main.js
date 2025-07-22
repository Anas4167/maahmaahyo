const one = document.querySelector("#one")
const btnPrev = document.querySelector("#btnPrev")
const btnNext = document.querySelector("#btnNext")

const messages = [
  "1.aqoon La,aan waa iftiin La,aan",
  "2.Afdaboolan waa dahab",
  "3.Nin kuu digay kuma dilin",
  "4.dooradaa iga celi bilaaya bilowgeed waaye",
  "5.habar fadhiso lagdan lafudud",
  "6.binaankiis balaayo ma arko",
  "7.ninkii xoog leh xaaja utoostaa",
  "8.labadii walala ninkii lacag leh wyn",
  "9.soomaali somaali baa leh",
  "10.Gacmo la isdhaafsaday gacal ku jiraan"
]

let index = 0

function coloring(){
    one.innerHTML = messages[index]

  if (index === 5) {
    one.style.color = "red"
  } else {
    one.style.color = "black"
  }
}
btnNext.addEventListener("click", () => {
  if (index < messages.length - 1) {
    index++
    one.innerHTML = messages[index]
    coloring()
  }
})
if(index==6){
  index.style.color="red"
}

btnPrev.addEventListener("click", () => {
  if (index > 0) {
    index--
    one.innerHTML = messages[index]
    coloring()
  }
})

coloring()


