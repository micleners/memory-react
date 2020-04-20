const fs = require('fs');

const files = fs.readdirSync(__dirname + '/images/');

files.forEach((file, index) => {
  console.log(`import { ReactComponent as ${file} } from './images/${file}';`);
  // fs.rename(
  //   __dirname + '/autumn-icons/' + file,
  //   __dirname + '/autumn-icons/' + `${index + 1}.png`,
  //   (err) => {
  //     console.log(err);
  //   }
  // );
});
