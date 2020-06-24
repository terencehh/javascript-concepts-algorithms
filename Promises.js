// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked')
  } else {
    reject('Error, it broke')
  }
})
  .then(result => result + '!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error!!'))
  .then(result3 => {
    throw Error;
    console.log(result3 + '!')
  })

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'ONE!')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'TWO!')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'THREE!')
})

Promise.all([promise2, promise3, promise4]).then(values => {
  console.log(values)
})


// #2) Run the above promise and make it console.log "success"

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// #4) Catch this error and console log 'Ooops something went wrong'

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.

// const urls = [
//   "https://swapi.co/api/people/1321321asss",
//   "https://swapi.co/api/people/2",
//   "https://swapi.co/api/people/3",
//   "https://swapi.co/api/people/4"
// ];

// Promise.all(urls.map(url => fetch(url).then(response => response.json())))
//   .then(results => console.log(results))
//   .catch(() => console.log("Something went wrong"));

// // #6) Change one of your urls above to make it incorrect and fail the promise
// // does your catch block handle it?
// // yes!
