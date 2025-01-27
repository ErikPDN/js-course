// função geradora 
function* generate1() {
    // some code 
    yield "Value: 1";
    // some code 
    yield "Value: 2";
}

const g1 = generate1();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next().done);

// outro modo é iterar
for (let value of g1) console.log(value);  // parece o iterator do java

function* generator2() {
    yield 0;
    yield 1;
    yield 2;
}

function* generate3() {
    yield* generator2();
    yield 3;
    yield 4;
}

const g3 = generate3();

for (let value of g3) console.log(value);

function* generator4() {
    yield function() {
        console.log('y1');
    };

    yield function() {
        console.log("y2");
    };
}

const g4 = generator4();
const func1 = g4.next().value;
const func2 = g4.next().value;

func1(), func2();