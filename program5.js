	import module from './module.js';

	let arg1 = process.argv[2];
    let arg2 = process.argv[3];
    
    console.log(module.PI);
    console.log(module.sqrt(+arg1));
    console.log(module.square(+arg2));