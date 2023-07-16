async function fetchData() {
  try {
    const nodeFetch = (await import('node-fetch')).default;
    const response = await nodeFetch(
      'https://jsonplaceholder.typicode.com/posts/6'
    );

    if (response.ok) {
      const data = await response.json();
      console.log('Node Fetch API');
      console.log(data);
    } else {
      throw new Error('HTTP status code: ' + response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();
