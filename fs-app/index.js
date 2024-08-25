const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
    console.log('New chunk received');
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    console.log('Stream ended');
    writableStream.end();
});