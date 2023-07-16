async function fetchDataAsync() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/2'
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Fetch API W/async/await syntax');
      console.log(data);
    } else {
      throw new Error('HTTP status code: ' + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchDataAsync();
