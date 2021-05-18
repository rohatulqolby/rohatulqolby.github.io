const tempat_hasil = document.getElementById("hasil")
const input_text = document.getElementById("content-text")
const error_msg = document.getElementById("error-message")
let list_tulisan = []

// CREATE
function addInput() {
    // mau simpan yang sudah diketik di input ke dalam tempat_hasil sebagai <li> yang baru
    let tulisan = input_text.value
    if (tulisan === "") {
        error_msg.innerText = "tulisan masih kosong"
    } else {
        list_tulisan.push(tulisan)
        tempat_hasil.innerHTML += `<li>${tulisan}</li>`
        input_text.value = ""
    }

    // bentuk ternary *jgn dipakai kecuali sudah nyaman dengan if else
    // tulisan === "" ? error_msg.innerText = "tulisan masih kosong" : tempat_hasil.innerHTML += `<li>${tulisan}</li>`

    // localstorage
    // simpan barang ke localstorage
    localStorage.setItem("list_tulisan", JSON.stringify(list_tulisan))
}

    
// READ
readInput()
function readInput() {
    list_tulisan = JSON.parse(localStorage.getItem("list_tulisan"))
    if (list_tulisan) { // kalau list_tulisan bukan null
        tempat_hasil.innerHTML = ""
        for (let i = 0; i < list_tulisan.length; i++) {
            let tulisan = list_tulisan[i]
            tempat_hasil.innerHTML += `<li>${tulisan}</li>`
        }
    } else { // kalau list_tulisan masih null
        list_tulisan = []
    }
}