async function getData() {
  let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();

let rawResponse = fetch('https://jsonplaceholder.typicode.com/posts').then(
  (res) => {
    console.log(res);
  }
);
