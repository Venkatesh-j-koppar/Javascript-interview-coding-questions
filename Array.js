// 1. Count how many times each value appears

function countValues(arr, num){
    const resultantObject = {}
    const requiredcount = []
    for(let i=0;i<arr.length;i++){
        if(resultantObject[arr[i]]){
            resultantObject[arr[i]] = resultantObject[arr[i]] +1
            if(resultantObject[arr[i]] == num){
              requiredcount.push(arr[i]) 
            }
        }else{
            resultantObject[arr[i]] = 1
        }
    }
    console.log(requiredcount)
    return resultantObject
}
console.log(countValues(["apple", "banana", "apple", "orange", "banana"],2))

output: 
[ 'apple', 'banana' ]
{ apple: 2, banana: 2, orange: 1 }


// 2. Find Second Largest Element

const arr = [1,2,2,2,34,2,5,6,9,10]

function findSecondLargest(arr){
    let firstLargest = arr[0],secondLargest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>firstLargest){
          firstLargest = arr[i] 
        }
        if(arr[i]>secondLargest && arr[i]<firstLargest){
            secondLargest = arr[i] 
        }
    }
    return secondLargest
}

console.log(findSecondLargest(arr))
output- 10 

// 3. Remove repeating elements from an array
function removeRepetingElements(str){
    const stringArray = str.split('')
    const uniqueArray = []
    for(let i=0;i<stringArray.length;i++){
        if(uniqueArray.includes(stringArray[i])){
            const itemIndex = uniqueArray.indexOf(stringArray[i])
            uniqueArray.splice(itemIndex,1)
        }else{
            uniqueArray.push(stringArray[i])
        }
    }
    return uniqueArray.join('')
}
console.log(removeRepetingElements('Venkateshh'))
output: Vnkats

// 4. unique array
function findUnique(arr){
    const s1 = new Set(arr)
    return [...s1]
}
console.log(findUnique([1,2,2,3,45,5,6,6]))

output: [ 1, 2, 3, 45, 5, 6 ]

// 5 flattenArray
function flattenArray(arr,resultantArray = []){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            flattenArray(arr[i],resultantArray)
        }else{
            resultantArray.push(arr[i])
        }
    }
    return resultantArray
}
console.log(flattenArray([1, [2, 3], [4, 5],[6,[6]]]))
output: [1, 2, 3, 4, 5, 6, 6]

// 6 GroupByArray
function groupBy(arr,key){
    const resultantObject = {}
    for(let i=0;i<arr.length;i++){
        const obj = arr[i]
        const value = obj[key]
        if(resultantObject[value]){
            resultantObject[value].push(obj)
        }else{
            resultantObject[value] = [obj]
        }
    }
    return resultantObject
}
console.log(groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age'))

// output
// {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 } ]
// }

