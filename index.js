// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ];
const b = "suprise"
 
function writeCards(names, b) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${b} gift!`);
  }
 
  return console.log
}
 
writeCards(names, b);