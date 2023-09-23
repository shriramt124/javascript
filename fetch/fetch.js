fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((Response) => {
    return Response.json();
   })
   .then((data)=>{
    console.log(data);
   }).catch((error)=>{
    console.log(error)
   })

   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData();
  
