  // var evenOrOdd = +process.argv[2];
  // var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
  // var sum = +process.argv[3] + evenOrOdd;
  // var obj = {};
  // obj[evenOrOddKey] = evenOrOdd;
  // obj[sum] = sum;
  // console.log(obj);

  let obj = {};
  obj[+process.argv[2] % 2 === 0 ? "even" : "odd"] = +process.argv[2];
  obj[+process.argv[3] + +process.argv[2]] = +process.argv[3] + +process.argv[2];
  console.log(obj);


  // can now be written like this in ES6:

  //   var prop = "foo";
  //   var obj = {
  //     [prop]: "bar"
  //   };

  // The content of [] can also be a function:

  //   var obj = {
  //     // using an inline function
  //     [(()=>"bar" + "baz")()]: "foo"
  //   };