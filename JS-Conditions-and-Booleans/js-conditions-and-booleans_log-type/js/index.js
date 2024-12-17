const data = 500;
switch (typeof data) {
   case 'undefined':
      console.log('undefined!');
      break;
   case 'number':
      if (isNaN(data) === true) {
         console.log('NaN!');
      } else {
         console.log('number!');
      }
      break;
   case 'boolean':
      console.log('boolean!');
      break;
   case 'function':
      console.log('function!');
      break;
   case 'object':
      if (Array.isArray(data) === true) {
         console.log('array!');
      } else if (Array.isArray(data) === true) {
         console.log('object');
      } else {
         console.log('null!');
      }
      break;

   default:
      console.log('I have no idea!');
}
