const { StaticPool } = require('node-worker-threads-pool');

let num = [40, 29, 89, 17, 9];

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})

num.map(number=>{
    pool.exec({ num: number }).then( result => [
        console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
    ]);
})


console.log("Execution in the parent thread complete");
