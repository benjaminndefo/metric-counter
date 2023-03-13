
let meter = 3.281   //feet
let liter = 0.264    //gallon
let kilogram = 2.204   //pound

let input = document.getElementById("input")
let convertBtn = document.getElementById("conv-btn")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")




convertBtn.addEventListener("click", function(){
    let working = input.value 

    let feet =  working * 3.281
    let meters = working / 3.281
    let gallons = working * 0.264
    let liters = working / 0.264
    let pounds = working * 2.204
    let kilo = working / 2.204 

    length.textContent = `${working} meters = ${feet.toFixed(3)} feet | ${working} feet = ${meters.toFixed(3)} meters`
    volume.textContent = `${working} litres = ${gallons.toFixed(3)} gallons | ${working} gallons = ${liters.toFixed(3)} liters`
    mass.textContent = `${working} kilos = ${pounds.toFixed(3)} pounds| ${working} pounds = ${kilo.toFixed(3)} kilos`

    input.value = " "

})

