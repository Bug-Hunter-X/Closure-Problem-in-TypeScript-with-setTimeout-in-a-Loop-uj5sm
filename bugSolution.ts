function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Using IIFE to create a new scope for i
    (function(j: number) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5); // Prints 1 through 5 with delay

//Alternative solution using let in loop
function printNumbers3(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
}
printNumbers3(5); //Prints 1 through 5 with delay