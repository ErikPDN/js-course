function recFunc(num) {
    console.log(num);
    if (num >= 10199) return
    else recFunc(num+1)
}

recFunc(1);