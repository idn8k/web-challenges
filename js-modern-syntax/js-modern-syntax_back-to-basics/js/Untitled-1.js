/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountryCOPY = ({ name, country }) => [name, country];

// export const getRelocatedCityCOPY = (
//    city1,
//    city2 = { name: 'Berlin', country: 'Germany' }
// ) => {
//    const [, country] = getNameAndCountry(city2);
//    return {
//       ...city1,
//       country,
//    };
// };

export const getNameAndCountry = (name, country) => [name, country];

export const getRelocatedCity = (
   city1,
   city2 = { name: 'Berlin', country: 'Germany' }
) => {
   const result = getNameAndCountry(city2.name, city2.country);
   const country = result[1];

   return {
      city1,
      country,
   };
};
