function retornHour(date) {
    if (date && !(date instanceof Date)) 
        throw new TypeError('Waiting Date instance')

    if (!date) [
        date = new Date()
    ]

    return date.toLocaleTimeString('pt-BR', {
        hour12: true
    });
}


try {
    const newDate = new Date('01-01-1970 12:58:12')
    const hour = retornHour(newDate);
    console.log(hour);
} catch(err) {
    console.error(err);
} finally {
    console.log("Estude!")
}
 