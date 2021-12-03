const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {

  if (error) {
    console.log('error:', error);
    return;
  }

  // console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body);

    const bytes = body.length;

    fs.writeFile(path, body, (error) => {
     if (error) {
       console.log('error:', error);
     } else {
     console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
     }
    });
});