console.clear();

const url = 'https://swapi.py4e.com/api/people';

async function fetchData() {
   try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(response);

      if (!response.ok) {
         console.log('Something went wrong');
      }

      const characters = data.results;
      const [r2d2] = characters.filter(
         (character) => character.name === 'R2-D2'
      );
      console.log('R2-D2 eye color:', r2d2.eye_color);
   } catch (error) {
      console.log('ERROR', error);
   }
}

fetchData();
