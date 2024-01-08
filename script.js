let displayT = document.getElementById("display")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count = count + 1
    displayT.innerText = count
}
 function save() {
saveEl.textContent +=  count + "-"
 }