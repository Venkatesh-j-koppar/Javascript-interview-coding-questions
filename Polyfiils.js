// Polyfills 

// Map
Array.prototype.myMap = function (callback,thisArgs) {
    let result = []
    for(let i=0;i<this.length;i++){
        if(i in this){
            result[i] = callback.call(thisArgs,this[i],i,this)
        }   
    }
    return result
}

const obj1 = {
    radius:5
}

// Note make sure u pass a normal function as a callback when u pass thisArgs as callback functions doesnot have this parameter in it.
console.log(arr1.myMap((function(item){return item*this.radius}),obj1)) // [ 5, 10, 15, 20, 25 ]
console.log(arr1.myMap(((item) => item*2))) // [ 2, 4, 6, 8, 10 ]


// Filter

const arr = [1,2,3,4,5,6,7,8,9]

console.log(arr.filter(
    function(item){
        return item%2==0
    }
    ))
// output [ 2, 4, 6, 8 ]
    
const obj1 = {
    multiplier: 3
}
Array.prototype.myfilter = function (callback,thisArgs){
    let result = []
    for(let i=0;i<this.length;i++){
        if(i in this){
            if(callback.call(thisArgs,this[i],i,this)){
                result.push(this[i])
            }
        }
    }
    return result
}
// Note make sure u pass a normal function as a callback when u pass thisArgs as callback functions doesnot have this parameter in it.
console.log(arr.myfilter(function(item){return item%this.multiplier==0},obj1))

// output [ 3, 6, 9 ]



