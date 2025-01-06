function reverseAndNegate(arr) {
    const newArr = arr.map(num => -num);
    return newArr.reverse();
  }
  
console.log(reverseAndNegate([2, 3, 4, -5]));