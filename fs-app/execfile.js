const { execFile } = require("child_process");
execFile("node", ["-v"], (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Node.js version: ${stdout}`);
});
