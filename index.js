// Code your solutions in this file
function writeCards(names, sup) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${sup} gift!`)
    }
    return thankYouCards
}