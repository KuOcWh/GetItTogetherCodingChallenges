//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let sorted = numbers.sort((a, b) => a - b)
    return sorted[0] + sorted[1]
  }


  //Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if(n <= 0 || m <= 0){
      return 0
    }else{
      return n * m
    }
  }
  