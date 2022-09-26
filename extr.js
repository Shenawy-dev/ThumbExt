const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

function YouTubeGetID(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

rl.question("Put Your Youtube Video:", function (answer) {
let id = YouTubeGetID(answer);
console.log(`Youtube Thumbnail Url: https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
console.log("Closing the interface");
rl.close();
});