const { fork } = require("child_process");
const child = fork("spawn.js");

child.on("message", (message) => {
    console.log(`Received message from child: ${message}`);
});

child.send("Hello from parent");
