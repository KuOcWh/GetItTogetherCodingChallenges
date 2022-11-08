//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    // Code here
    let total = 0
    for(let i = 1; i <= num; i++){
      total += i
    }
    return total
  }


 // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

 function solution(str, ending){
  // TODO: complete
  if(str.endsWith(ending)){
    return true
  }else{
    return false
  }
}