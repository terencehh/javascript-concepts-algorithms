// Solve the below problems:

// #1) Convert the below promise into async await
async function fetchUsers() {
  const response = await fetch("https://swapi.co/api/starships/9/");
  const data = await response.json();
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function getData() {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  // "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

async function getData() {
  try {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
      const data = await request.json();
      console.log(data);
    }
  } catch (error) {
    console.log("oppppps", error);
  }
}
