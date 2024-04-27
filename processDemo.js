// argv
console.log(process.argv);
console.log(process.argv[2]);

// process.env
console.log(process.env.COMPUTERNAME);

// pid
console.log(process.pid);

// cwd  current working directory
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage
console.log(process.memoryUsage());

// uptime (process running time in seconds)
console.log(process.uptime());

process.on('exit', (code) => {
    console.log('Process exited with code: ' + code);
});

// exit
process.exit(0);
console.log('This will not be printed beacuse process has exited!');