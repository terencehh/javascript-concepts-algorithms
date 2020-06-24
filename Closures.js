// Closures are functions that have access to the outer context of its scope even after the outer function has returned.
// Closure are useful for two big cases
// 1. Data privacy - emulating private methods with closures
// 2. Partial applications or currying
// 3. memoization (caching) - a way for our function to remember (cache) the results of previous function calls by storing them.

const add = x => y => x + y
// console.log(add(5)(4))

const privateCache = () => {

  const cache = {}
  let cacheCounter = 0;

  const getCache = () => cache
  const getCounter = () => cacheCounter
  const addCache = value => {

    if (cache[value]) {
      console.log(`${value} already in cache.`)
    }
    else {
      cache[value] = value
      cacheCounter++
      console.log(`${value} added to cache.`)
    }
    return cache[value]
  }

  return {
    cacheName: "Shopee",
    addToCache: value => {
      addCache(value)
    },
    getCache: () => getCache(),
    getCounter: () => getCounter()
  }
}

// TESTING privateCache
// const myCache = privateCache()
// console.log(myCache.cacheName)
// myCache.addToCache("Phone")
// myCache.addToCache("Laptop")
// myCache.addToCache("Laptop")
// myCache.addToCache("Monitor")
// console.log(myCache.getCache())
// console.log(myCache.getCounter())

// // generic caching function which takes any function and any arguments and memoizes it
const functionCache = fn => {

  // assume we use a unique identifer for cache
  const cache = {}

  return {
    addCache: (id, ...args) => {
      console.log("Args are: ", ...args)
      if (cache[id]) {
        console.log('Fetching from cache');
        return cache[id]
      }
      else {
        console.log('Calculating result and storing in cache')
        let result = fn.apply(this, ...args)
        cache[id] = result
        return result
      }
    },
    getCache: () => cache
  }
}

// TESTING functionCache

const factorial = x => x === 0 ? 1 : (x * factorial(x - 1))
const addTwo = (x, y) => x + y

// const testCache = functionCache(factorial)
// console.log(testCache.addCache(1, [3]))
// console.log(testCache.addCache(2, [5]))
// console.log(testCache.getCache())

// const additionCache = functionCache(addTwo)
// console.log(additionCache.addCache(1, [3, 5]))
// console.log(additionCache.addCache(2, [1, 2]))
// console.log(additionCache.addCache(2, [1, 2]))
// console.log(additionCache.getCache())