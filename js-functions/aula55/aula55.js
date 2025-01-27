// IIFE -> Immediately invoked function expression

(function func(yo, weigth, height) {
    
    const lastName = "Miranda";
    function createName(name) {
        return name + ' ' + lastName;
    }


    function sayName() {
        console.log(createName("Erik"));
    }

    sayName();
    console.log(yo, weigth, height)

})(20, 75, 1.7);

