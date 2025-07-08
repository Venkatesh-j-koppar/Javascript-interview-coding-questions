1. Count how many times each value appears

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


2. Find Second Largest Element

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
