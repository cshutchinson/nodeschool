	import {PI, sqrt, square} from './module.js';

	let arg1 = process.argv[2];
    let arg2 = process.argv[3];
    // let PI = require('./Math').PI;
    // let sqrt = require('./Math').sqrt;
    // let square = require('./Math').square;
    
    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));