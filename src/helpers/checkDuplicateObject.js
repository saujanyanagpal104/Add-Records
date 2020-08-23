// This is to check, Is the object already available in the array. 

export const isDuplicateAvailable = (arr, property, checkValue) => {
    let isDuplicate = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][property] === checkValue) {
            isDuplicate = true;
            break;
        }
    }
    return isDuplicate;
}