const trueCondition = true;

// let tem escopo de bloco
// var tem escopo de função

let name = "Erik";
var name2 = "Erik";

if (trueCondition) {
    let name = "Pedro";
    console.log(name);
}

(() => {
    var name2 = "João";
    console.log(name2);
})();