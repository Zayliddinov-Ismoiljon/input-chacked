const elTwo = document.getElementById("two");
const elThree = document.getElementById("three");
const elFour = document.getElementById("four");

elTwo.addEventListener("change", evt=>{
    alert(`selected value ${elTwo.value}`)
})

elThree.addEventListener("change", evt=>{
    alert(`selected value ${elThree.value}`)
})

elFour.addEventListener("change", evt=>{
    alert(`selected value ${elFour.value}`)
})