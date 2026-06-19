const { exec } = require("child_process");

// Consume stdin to avoid blocking / hanging on parent input
process.stdin.setEncoding("utf8");
let input = "";
process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    // Execute tsc --noEmit in the current working directory.
    // We use "npx --yes" to automatically run without prompting for install.
    exec("npx --yes tsc --noEmit", (error, stdout, stderr) => {
        if (error) {
            // tsc outputs type checking errors to stdout. 
            // We write the error output to stderr as requested, then exit with the compiler's code.
            const output = stdout.trim() || stderr.trim() || error.message;
            process.stderr.write(output + "\n");
            process.exit(error.code || 1);
        } else {
            // Success - no type checking errors
            process.exit(0);
        }
    });
});
