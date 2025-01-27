function funcGenerator() {
    const name = "Erik";
    return () => {
        return name;
    }
}

let name = funcGenerator();
console.log(name())