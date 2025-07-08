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
