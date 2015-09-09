    const max = process.argv[2];
    var FizzBuzz = {
      [Symbol.iterator]() {
        let pre=0, cur=0;
        return{
          next(){
            [pre, cur] = [cur, cur + 1];
            if (cur%3===0 && cur%5===0) return {done: false, value: 'FizzBuzz'};
            if (cur%3===0) return {done: false, value: 'Fizz'};
            if (cur%5===0) return {done: false, value: 'Buzz'};
            if (cur>max) return {done: true};
            return{done: false, value: cur};
          }
        }
      }
    }
    
    for (var n of FizzBuzz) {
      console.log(n);


    //   var fibonacci = {
    //   // Make a method that has the Symbol.iterator function.
    //   [Symbol.iterator]() {
    //     let pre = 0, cur = 1;
    //     // The resulting iterator object has to have a next method:
    //     return {
    //       next() {
    //         // The result of next has to be an object with the property `done` that states whether or not the iterator is done.
    //         [pre, cur] = [cur, pre + cur];
    //         if (pre < 1000)  return { done: false, value: pre };
    //         return { done: true };
    //       }
    //     }
    //   }
    // }
    
    // // The result's value property will become `n`.
    // for (var n of fibonacci) {
    //   console.log(n);
    }