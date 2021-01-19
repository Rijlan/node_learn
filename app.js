var fs = require('fs');

// fs.unlink('writeMe.txt', err => {

// });

// fs.mkdir('stuff', () => {
//     fs.readFile('readMe.txt', 'utf8', (err, data) => {
//         fs.writeFile('./stuff/writeMe.txt', data, err => {

//         });
//     });
// });

fs.unlink('./stuff/writeMe.txt', () => {
    fs.rmdir('stuff', err => {
        
    });
});