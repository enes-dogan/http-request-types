const https = require('https');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/5',
  method: 'GET',
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const response = JSON.parse(data);
    console.log('Built-in https module');
    console.log(response);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
