/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

export const getNameAndCountry = (name, country) => [name, country];

export const getRelocatedCity = (
   city1,
   city2 = { name: 'Berlin', country: 'Germany' }
) => {
   console.log(city2);
   const result = getNameAndCountry(city2.name, city2.country);
   // const country = result[1];

   return {
      city1,
      result,
   };
};
