// Deepclone an object
function deepClone(obj) {
    const jsonObj = JSON.stringify(obj)
    return JSON.parse(jsonObj)
}
