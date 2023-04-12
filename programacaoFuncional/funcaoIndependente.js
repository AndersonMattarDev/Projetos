const random = (number, Math) =>
  Math.floor(Math.random() * number);

  // Recursive
  // Find factorial of a number
  const factorial = x => {
    
    // Se o number é 0
    if(x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
  }
