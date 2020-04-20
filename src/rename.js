const fs = require('fs');

const files = fs.readdirSync(__dirname + '/autumn-icons/');

console.log('[');
files.forEach((file, index) => {
  console.log(`{name: ${index + 1}, img: 'autumn-icons/${file}'},`);
  // fs.rename(
  //   __dirname + '/autumn-icons/' + file,
  //   __dirname + '/autumn-icons/' + `${index + 1}.png`,
  //   (err) => {
  //     console.log(err);
  //   }
  // );
});
console.log(']');
