 // modules/utilities.js //
const formatNumber = number => {
   const newArr = number.toString().split('');

   for(let i = newArr.length - 3; i > 0; i -= 3) {
     if(newArr[i] !== '.') {
        newArr.splice([i], 0, ',');
      }
    }
   return newArr.join('');
}

export {formatNumber};