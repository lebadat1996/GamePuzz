let pandaPart1 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg";
let pandaPart2 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg";
let pandaPart3 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg";
let pandaPart4 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg";
let pandaPart5 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg";
let catPart1 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg";
let catPart2 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg";
let catPart3 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg";
let catPart4 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg";
let catPart5 =  "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg";
let monkeyPart1 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg";
let monkeyPart2 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg";
let monkeyPart3 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg";
let monkeyPart4 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg";
let monkeyPart5 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg";
let arrImage = [pandaPart1, catPart1, monkeyPart1, pandaPart2, catPart2, monkeyPart2, pandaPart3,
    catPart3, monkeyPart3, pandaPart4, catPart4, monkeyPart4, pandaPart5, catPart5, monkeyPart5];
function changeImage(id, number) {
    let random = Math.floor(Math.random() * 3) + number;
    document.getElementById(id).src = arrImage[random];
}
let arrId = ["part1", "part2", "part3", "part4", "part5"];
let arrSubPart = [];
function showResult(arrId) {
    for (let i = 0; i < 5; i++) {
        arrSubPart[i] = document.getElementById(arrId[i]).src.substr(0, 46);
    }
    if(arrSubPart[0] === arrSubPart[1] && arrSubPart[0] === arrSubPart[2] && arrSubPart[0] === arrSubPart[3] && arrSubPart[0] === arrSubPart[4]){
        for (let i = 0; i < 5; i++) {
            document.getElementById(arrId[i]).style.boxShadow = "4px 4px 9px red";
        }
    }else {
        for (let i = 0; i < 5; i++) {
            document.getElementById(arrId[i]).style.boxShadow = "4px 4px 9px black";
        }
    }
}