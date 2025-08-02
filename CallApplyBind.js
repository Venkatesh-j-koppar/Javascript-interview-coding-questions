// Call
const obj1 = {
  name:"Venkatesh"
}

function display(city,area){
  console.log(this.name,city,area)
}

display.call(obj1,"Hubli","DeshpandeNagar")

// Venkatesh Hubli DeshpandeNagar

// Apply
display.apply(obj1,["Hubli","DeshpandeNagar"])

// Venkatesh Hubli DeshpandeNagar

// Bind
const displaying = display.bind(obj1,"Hubballi")

displaying("Deshpande")

// Venkatesh Hubballi DeshpandeNagar

// Polyfill for Bind

Function.prototype.myBind = function (thisArgs, ...params) {
  const fn = this; // Save reference to the function that called myBind
  return function (...args) {
    return fn.apply(thisArgs, [...params, ...args]);
  };
};

// Polyfill for Call
Function.prototype.myCall = function(thisArgs,...args){
    const fn = this
    if(thisArgs === undefined || thisArgs === null){
        throw new Error('Please pass object')
    }
    thisArgs.tempfunc = fn
    return result = thisArgs.tempfunc(...args)
}
