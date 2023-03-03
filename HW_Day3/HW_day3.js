function printMessage() {
    if (printMessage.counter < 5) {
      console.log("Congrats you earn the chance!");
    } else {
      console.log("Sorry you missed the chance");
    }
    printMessage.counter++;
  }
  
  printMessage.counter = 0; 
  
  printMessage(); // "Congrats you earn the chance!"
  printMessage(); // "Congrats you earn the chance!"
  printMessage(); // "Congrats you earn the chance!"
  printMessage(); // "Congrats you earn the chance!"
  printMessage(); // "Congrats you earn the chance!"
  printMessage(); // "Sorry you missed the chance"
  printMessage(); // "Sorry you missed the chance"


const cb1 = (a,x) => a + x
const cb2 = (b,y) => b * y
const cb3 = (c,z) => c - z

function runAll(cb1,cb2,cb3){
    return function(a){
        return function(b){
            return function(c){
                return function(d){
                    return cb3(cb2(cb1(d,c),b),a)
                }
            }
        }
    }

}


console.log(runAll(cb1,cb2,cb3)(2)(2)(2)(3)) //8
