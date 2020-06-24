const one = list => {

  if(list.length === 0) { return [] }
  
  // use an object to store list occurences
  let obj = {}

  list.forEach(item => {
    if(item in obj) {
      obj[item] += 1
    }
    else {
      obj[item] = 0
    }
  })

  output_list = Object.entries(obj)

  // for any number > 1, convert into a list
  result = output_list.map(list => {

    num = parseInt(list[0])

    if(list[1] === 0) { return num }
    else {
      count = parseInt(list[1])
      result = [num]
      while(count) {
        result.push(num)
        count--
      }
      return result
    }
  })

  console.log(result)
}

one([1,2,4,591,392,391,2,5,10,2,1,1,1,20,20])

const two = (list, num) => {

  // find all possible two number combinations that make the target num
  list.forEach((item,i) => {
    for(let j = i + 1; j < list.length; j++) {
      if(item + list[j] === num) {
        console.log([item, list[j]])
        return [item, list[j]]
      }
    }
  })
}

two([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14)