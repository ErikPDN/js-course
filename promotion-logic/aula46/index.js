function getCurrentTime() {
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {

    });
}

const timer = setInterval(() => {
    console.log(getCurrentTime())
}, 1000)

setTimeout(() => {
    clearInterval(timer);
}, 10000)

setTimeout(() => {
    console.log("Remember me")
}, 11000)   

