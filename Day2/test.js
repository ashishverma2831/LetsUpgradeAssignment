const fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, data) => {
  try {
    console.log(data)
  } catch (error) {
    console.log(error);
  }
});

// fs.readFileSync('input.txt', 'utf8', (err, data) => {
//   try {
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// });