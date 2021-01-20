var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', (err, data) => {
    fs.writeFile('writeMe.txt', data, err => {

    });
});