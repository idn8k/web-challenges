console.clear();

const url = 'https://swapi.py4e.com/api/people';

async function fetchData() {
   const response = await fetch(url);
   console.log(response);
}

fetchData();
