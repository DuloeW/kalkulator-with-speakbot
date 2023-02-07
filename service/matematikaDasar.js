function tambah() {
  switch (arguments.length) {
    case 0:
      return "Must input the number"
    case 1:
      return "Input all boxInput below"
    default:
      let result = 0;
      let length = arguments.length;
    
      for (let i = 0; i < length; i++) {  
          result = result + arguments[i];  
      }
      return result;
  }
}

function kurang(a, b) {
  return a - b;
}

function kali() {
  switch (arguments.length) {
    case 0:
      return "Must input the number"
    case 1:
      return "Input all boxInput below"
    default:
      let result = 1;
      let length = arguments.length;
    
      for (let i = 0; i < length; i++) {  
          result = result * arguments[i];  
      }
      return result;
  }
}

function bagi(a ,b) {
  return Number((a / b).toFixed(2))
}

function isGenapInstan(a) {
  if (a % 2 == 0) {
    return true;
  } 
  return false;
}

export { tambah , kurang , kali, bagi, isGenapInstan};