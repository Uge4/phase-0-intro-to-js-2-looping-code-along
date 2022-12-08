// Code your solutions in this file

// expect(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")).to.deep.eq([
//     "Thank you, Guadalupe, for the wonderful surprise gift!",
//     "Thank you, Ollie, for the wonderful surprise gift!",
//     "Thank you, Aki, for the wonderful surprise gift!",



const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){

    let cards = [];
    
    for (let index = 0; index < names.length; index++) {
        cards[index] = `Thank you, ${names[index]}, for the wonderful surprise gift!`;       
        console.log(cards[index]);
    }
     
    return cards //array of thank you messages for each name provided to the function
}

writeCards(names, "birthday")

function countDown(fromNumber){

    while (fromNumber >=0) {
        console.log(fromNumber);               
        fromNumber--        
    }
}

countDown(10)