var radios = document.querySelector("#gridAutoFlow")
var grid = document.querySelector("#cuadricula")

radios.addEventListener("change", function(e){
    var value = e.target.value
    grid.style.gridAutoFlow = value
})