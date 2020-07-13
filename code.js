let first = document.querySelector(".first")
let second = document.querySelector(".second")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let division = document.querySelector(".division")
let multi = document.querySelector(".multi")

let result = 0

plus.onclick = () =>{
    result = +first.value + +second.value;
    first.value = result
    second.value = ''
}
minus.onclick = () =>{
    result = +first.value - +second.value;
    first.value = result
    second.value = ''
}

division.onclick = () =>{
    result = +first.value / +second.value;
    first.value = result
    second.value = ''
}
multi.onclick = () =>{
    result = +first.value * +second.value;
    first.value = result
    second.value = ''
}




















// let x = 12; // let говорит что переменная потом меняется!
// const e = 2.71 //число эйлера const менять нельзя!
// var y = 12; // тоже можно менять. можно сказать устаревший

// function hello(){
//     alert("привет! это JavaScript! ");
// }
// hello = () => {
//     alert("привет! это JavaScript! ");
// }
// hello();
// const Hulk = {
//     color: "green",
//     size: "big",
//     crush: ()=>{
//         alert(" Hulk CRUSHH!!!")
//     }
// }
// Hulk.crush()
// alert(Hulk.color)

// let Avengers = ['Hulk', 'Iron Man', 'Captaion Amerika']
// Avengers.push('SpiderMan')
// alert(Avengers)