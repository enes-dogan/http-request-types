function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('HTTP status code: ' + response.status);
      }
    })
    .then(function (data) {
      console.log('Fetch API');
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

fetchData();
